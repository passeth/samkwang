"use client";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { mediaDiagnostic } from "@/lib/media-diagnostics";
import { REDUCED_VIDEO_QUERY } from "@/lib/video-motion-policy";

/** One automatic attempt; recovery is an explicit local button, never a global gesture. */
export function useAmbientVideo(ref: RefObject<HTMLVideoElement | null>, disabled = false) {
 const [playing, setPlaying] = useState(false);
 const [hasFrame, setHasFrame] = useState(false);
 const [failed, setFailed] = useState(false);
 const [blocked, setBlocked] = useState(false);
 const [reduced, setReduced] = useState(true);
 const userPaused = useRef(false);
 const action = useRef<() => void>(() => {});
 const toggle = useCallback(() => action.current(), []);
 useEffect(() => {
  const video = ref.current;
  if (!video) return;
  const preference = matchMedia(REDUCED_VIDEO_QUERY);
  let visible = false, disposed = false, pending = false, started = false, suspended = false, attempted = false, sequence = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let frame: number | undefined;
  let attemptTime = 0;
  video.muted = video.defaultMuted = true; video.playsInline = true;
  const allowed = () => !disposed && !disabled && !preference.matches && visible && !document.hidden && !userPaused.current && !suspended;
  const log = (event: string, error?: unknown) => mediaDiagnostic(video, event, sequence, error);
  const cancel = () => {
   sequence++; clearTimeout(timer); pending = false;
   if (frame !== undefined) video.cancelVideoFrameCallback?.(frame);
   frame = undefined; video.pause(); setPlaying(false);
  };
  const play = (manual = false) => {
   if (!allowed() || pending || (!manual && attempted)) return;
   attempted = true; pending = true; started = false;
   const token = ++sequence;
   if (manual && video.error) { setHasFrame(false); video.load(); }
   video.muted = video.defaultMuted = true;
   attemptTime = video.currentTime;
   const reject = (error: unknown) => {
    if (disposed || token !== sequence) return;
    log("play-rejected", error); cancel(); setBlocked(true);
   };
   timer = setTimeout(() => reject(new DOMException("Playback timed out", "TimeoutError")), 8000);
   if (video.requestVideoFrameCallback) frame = video.requestVideoFrameCallback(() => {
    frame = undefined;
    if (disposed || token !== sequence || !allowed()) return;
    setHasFrame(true); log("decoded-frame");
   });
   log("play-attempt");
   try {
    void video.play().then(() => {
     if (disposed || token !== sequence) return;
     clearTimeout(timer); pending = false;
     if (!allowed()) { cancel(); return; }
     started = true; setBlocked(false); setFailed(false); log("play-resolved");
    }, reject);
   } catch (error) { reject(error); }
  };
  const sync = () => {
   setReduced(preference.matches);
   if (!allowed()) {
    const interrupted = pending || !video.paused;
    // A previously successful stream may resume on re-entry. Failed/pending attempts never auto-retry.
    if (interrupted && started && !pending && !userPaused.current) attempted = false;
    cancel(); if (interrupted && !userPaused.current) setBlocked(true);
   }
   else play();
  };
  const error = () => { log("media-error"); attempted = true; cancel(); setHasFrame(false); setFailed(true); setBlocked(true); };
  const onPlaying = () => { if (!allowed()) cancel(); else { setPlaying(true); log("playing"); } };
  const onPause = () => setPlaying(false);
  const onTime = () => {
   // Without rVFC require actual time advancement plus a decoded current frame.
   if (!video.requestVideoFrameCallback && allowed() && !video.paused && video.readyState >= 2 && Math.abs(video.currentTime - attemptTime) > .01) { setHasFrame(true); }
  };
  const empty = () => setHasFrame(false);
  const hide = () => { suspended = true; sync(); log("suspend"); };
  const show = () => { suspended = false; sync(); log("restore"); };
  action.current = () => {
   if (preference.matches || disabled) return;
   if (pending || !video.paused) { userPaused.current = true; cancel(); log("user-pause"); }
   else { userPaused.current = false; play(true); }
  };
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .01 });
  observer.observe(video);
  video.addEventListener("canplay", sync); video.addEventListener("error", error);
  video.addEventListener("playing", onPlaying); video.addEventListener("pause", onPause);
  video.addEventListener("timeupdate", onTime); video.addEventListener("emptied", empty);
  document.addEventListener("visibilitychange", sync); preference.addEventListener("change", sync);
  window.addEventListener("pagehide", hide); window.addEventListener("pageshow", show);
  sync();
  return () => {
   disposed = true; cancel(); log("cleanup"); action.current = () => {}; observer.disconnect();
   video.removeEventListener("canplay", sync); video.removeEventListener("error", error);
   video.removeEventListener("playing", onPlaying); video.removeEventListener("pause", onPause);
   video.removeEventListener("timeupdate", onTime); video.removeEventListener("emptied", empty);
   document.removeEventListener("visibilitychange", sync); preference.removeEventListener("change", sync);
   window.removeEventListener("pagehide", hide); window.removeEventListener("pageshow", show);
  };
 }, [ref, disabled]);
 return { playing, hasFrame, failed, blocked, reduced, toggle };
}
