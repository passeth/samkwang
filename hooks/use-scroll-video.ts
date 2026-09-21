"use client";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { mediaDiagnostic } from "@/lib/media-diagnostics";
import { STATIC_SCROLL_VIDEO_QUERY } from "@/lib/video-motion-policy";

/** Preference disables the owner; user pause stays inside it so resume can play in the click. */
export function useScrollVideo(ref: RefObject<HTMLVideoElement | null>, disabled: boolean, start = 0) {
 const [needsActivation, setNeedsActivation] = useState(false);
 const [failed, setFailed] = useState(false);
 const target = useRef(0);
 const userPaused = useRef(false);
 const apply = useRef<() => void>(() => {});
 const activate = useRef<() => void>(() => {});
 const pauseAction = useRef<() => void>(() => {});
 const seek = useCallback((progress: number) => { target.current = progress; apply.current(); }, []);
 const retry = useCallback(() => activate.current(), []);
 const pause = useCallback(() => pauseAction.current(), []);
 useEffect(() => {
  const video = ref.current;
  if (!video) return;
  let disposed = false, priming = false, suspended = false, sequence = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const preference = matchMedia(STATIC_SCROLL_VIDEO_QUERY);
  const allowed = () => !disposed && !disabled && !preference.matches && !userPaused.current && !suspended && !document.hidden;
  const log = (event: string, error?: unknown) => mediaDiagnostic(video, event, sequence, error);
  const cancel = () => { sequence++; clearTimeout(timer); priming = false; video.pause(); };
  video.muted = video.defaultMuted = true; video.playsInline = true;
  const flush = () => {
   if (!allowed() || priming || video.seeking || video.readyState < 1 || !Number.isFinite(video.duration)) return;
   const end = Math.max(0, video.duration - .05), beginning = Math.min(start, end);
   const time = beginning + Math.max(0, Math.min(1, target.current)) * (end - beginning);
   if (Math.abs(video.currentTime - time) <= .025) return;
   try { video.currentTime = time; log("seek"); } catch (error) { log("seek-error", error); setNeedsActivation(true); }
  };
  const prime = () => {
   if (!allowed() || priming) return;
   const token = ++sequence;
   priming = true;
   if (video.error) video.load();
   video.muted = video.defaultMuted = true;
   const reject = (error: unknown) => {
    if (disposed || token !== sequence) return;
    log("play-rejected", error); cancel(); setNeedsActivation(true);
   };
   timer = setTimeout(() => reject(new DOMException("Playback timed out", "TimeoutError")), 8000);
   log("play-attempt");
   try {
    // Must remain synchronous inside the explicit click, before React state changes.
    void video.play().then(() => {
     if (disposed || token !== sequence) return;
     clearTimeout(timer); video.pause(); priming = false;
     setFailed(false); setNeedsActivation(false); log("primed"); flush();
    }, reject);
   } catch (error) { reject(error); }
  };
  const error = () => { log("media-error"); cancel(); setFailed(true); setNeedsActivation(true); };
  const hide = () => { suspended = true; const pending = priming; cancel(); if (pending) setNeedsActivation(true); log("suspend"); };
  const show = () => { suspended = false; log("restore"); flush(); };
  const visibility = () => document.hidden ? hide() : show();
  const motion = () => { if (preference.matches) hide(); else show(); };
  apply.current = flush;
  activate.current = () => { userPaused.current = false; prime(); };
  pauseAction.current = () => { userPaused.current = true; cancel(); log("user-pause"); };
  for (const event of ["loadedmetadata", "loadeddata", "canplay", "seeked"]) video.addEventListener(event, flush);
  video.addEventListener("error", error);
  document.addEventListener("visibilitychange", visibility);
  window.addEventListener("pagehide", hide); window.addEventListener("pageshow", show);
  preference.addEventListener("change", motion);
  if (!disabled) prime(); else video.pause();
  return () => {
   disposed = true; cancel(); log("cleanup"); apply.current = () => {}; activate.current = () => {}; pauseAction.current = () => {};
   for (const event of ["loadedmetadata", "loadeddata", "canplay", "seeked"]) video.removeEventListener(event, flush);
   video.removeEventListener("error", error); document.removeEventListener("visibilitychange", visibility);
   window.removeEventListener("pagehide", hide); window.removeEventListener("pageshow", show); preference.removeEventListener("change", motion);
  };
 }, [ref, disabled, start]);
 return { seek, retry, pause, needsActivation, failed };
}
