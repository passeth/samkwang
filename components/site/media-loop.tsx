"use client";
import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAmbientVideo } from "@/hooks/use-ambient-video";

export function MediaLoop({ src = "/media/brand-film.mp4", poster = "/media/hero-poster.jpg", alt }: {
 readonly src?: string; readonly poster?: string; readonly alt: string;
}) {
 const video = useRef<HTMLVideoElement>(null);
 const [controlHost, setControlHost] = useState<HTMLElement | null>(null);
 // Background wrappers may be aria-hidden or behind a shade. Portal ONLY the control
 // into the semantic container so it stays visible and keyboard/screen-reader usable.
 const mount = useCallback((node: HTMLVideoElement | null) => {
  video.current = node;
  setControlHost(node?.closest<HTMLElement>(".media-split-frame, section, main") ?? node?.parentElement ?? null);
 }, []);
 const { playing, failed, blocked, reduced, toggle } = useAmbientVideo(video);
 return <>
  <video ref={mount} src={src} poster={poster} muted playsInline loop preload={reduced ? "none" : "metadata"} aria-label={alt || undefined} style={failed ? { opacity: 0 } : undefined} />
  {failed && <img src={poster} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
  {!reduced && controlHost && createPortal(<button className="ambient-video-control" type="button" onClick={toggle} aria-label={blocked ? "배경 영상 다시 재생" : playing ? "배경 영상 일시정지" : "배경 영상 재생"} style={{ position: "absolute", right: 16, bottom: 16, zIndex: 5, minHeight: 44, padding: "8px 14px", borderRadius: 24, background: "#132b38e6", color: "white", border: "1px solid #ffffff80", pointerEvents: "auto" }}>{blocked ? "영상 다시 재생" : playing ? "일시정지" : "재생"}</button>, controlHost)}
 </>;
}
