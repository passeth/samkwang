/** Local, opt-in diagnostics. Never collect URL queries, fragments or network telemetry. */
export type MediaDiagnostic = {
 timestamp: number; event: string; route: string; source: string; attempt: number;
 currentTime: number; paused: boolean; readyState: number; networkState: number;
 motion: boolean; visibility: DocumentVisibilityState; videoError: number | null;
 errorName?: string; errorMessage?: string;
};
declare global { interface Window { __samkwangMediaDiagnostics?: MediaDiagnostic[] } }
export function mediaDiagnostic(video: HTMLVideoElement, event: string, attempt: number, error?: unknown) {
 if (typeof window === "undefined" || new URLSearchParams(location.search).get("mediaDebug") !== "1") return;
 const pathname = (value: string) => { if (!value) return ""; try { return new URL(value, location.origin).pathname; } catch { return ""; } };
 // Browser errors may embed URLs or tokens; retain only known, safe error summaries.
 const name = error instanceof Error ? error.name : "";
 const safeNames = ["NotAllowedError", "AbortError", "NotSupportedError", "TimeoutError", "InvalidStateError"];
 const errorName = safeNames.includes(name) ? name : error ? "MediaError" : undefined;
 const messages: Record<string, string> = { NotAllowedError: "Playback permission denied", AbortError: "Playback interrupted", NotSupportedError: "Media unsupported", TimeoutError: "Playback attempt timed out", InvalidStateError: "Media state unavailable", MediaError: "Media operation failed" };
 const events = window.__samkwangMediaDiagnostics ??= [];
 events.push({ timestamp: Date.now(), event, route: location.pathname, source: pathname(video.currentSrc || video.getAttribute("src") || video.querySelector("source")?.getAttribute("src") || ""), attempt, currentTime: video.currentTime, paused: video.paused, readyState: video.readyState, networkState: video.networkState, motion: matchMedia("(prefers-reduced-motion: reduce)").matches, visibility: document.visibilityState, videoError: video.error?.code ?? null, errorName, errorMessage: errorName ? messages[errorName] : undefined });
 if (events.length > 100) events.splice(0, events.length - 100);
}
