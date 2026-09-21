"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { technologies } from "@/lib/technology";
import "./technology-journey.css";
import { useScrollVideo } from "@/hooks/use-scroll-video";
import { STATIC_SCROLL_VIDEO_QUERY } from "@/lib/video-motion-policy";

// Retain the overview's original editorial copy; detail routes come from the source data.
const stories = [
 { phrase: <>성분을 담는<br />구조의 설계.</>, text: "활성 성분을 입자 구조에 담는 캡슐화. Ceramide를 Phospholipid와 Glucosylceramide로 감싼 Gceraplex의 구조를 살펴봅니다.", tag: "STRUCTURE / GCERAPLEX" },
 { phrase: <>서로 다른 성분이<br />하나의 제형으로.</>, text: "물에 잘 녹지 않는 성분을 수계 제형에 적용하는 가용화. 성분과 계면활성제의 관계, 목표 제형의 조건에서 출발합니다.", tag: "FORMULATION / SOLUBILIZATION" },
 { phrase: <>성분의 조합에서<br />안정화의 해답을.</>, text: "액정 구조와 하이드로겔을 활용한 다중 안정화. 친수성 NMF와 소수성 Ceramide를 함께 다루는 Epidermics의 접근을 소개합니다.", tag: "BALANCE / EPIDERMICS" },
 { phrase: <>원료의 본질을<br />더 정교하게.</>, text: "순도, 취, 색상. 원료의 품질을 다루는 정제 기술과 Hexanediol-6, MPO(P)의 적용 사례를 살펴봅니다.", tag: "REFINEMENT / MATERIAL QUALITY" },
];
const stops = [0, .25, .45, .65, .85];
const clamp = (n: number) => Math.max(0, Math.min(1, n));

export function TechnologyJourney() {
 const track = useRef<HTMLElement>(null);
 const film = useRef<HTMLVideoElement>(null);
 const progress = useRef<HTMLSpanElement>(null);
 const controls = useRef<HTMLDivElement>(null);
 const layers = useRef<HTMLDivElement>(null);
 // Normal-flow content is also the server/no-JS fallback.
 const [cinematic, setCinematic] = useState(false);
 const [active, setActive] = useState(0);
 const [paused, setPaused] = useState(false);
 const { seek: seekVideo, retry, pause: pauseVideo, needsActivation, failed } = useScrollVideo(film, !cinematic, 1);
 useEffect(() => {
  // Short landscape/zoomed viewports use the same readable, complete fallback.
  const media = matchMedia(STATIC_SCROLL_VIDEO_QUERY);
  const change = () => setCinematic(!media.matches);
  change();
  media.addEventListener("change", change);
  return () => media.removeEventListener("change", change);
 }, []);
 useEffect(() => {
  if (!cinematic) return;
  const root = track.current, video = film.current;
  if (!root || !video) return;
  let frame = 0, target = 0, smooth = 0, last = 0, current = -1;
  const tick = (now: number) => {
   frame = 0;
   const dt = Math.min((now - last) / 1000, .1);
   last = now;
   smooth += (target - smooth) * (1 - Math.exp(-10 * dt));
   if (Math.abs(target - smooth) < .001) smooth = target;
   root.style.setProperty("--tj-shade-opacity", String(.4 + .6 * clamp((smooth - .12) / .12)));
   const index = Math.min(4, Math.floor(smooth * 5));
   if (index !== current) {
    // Never leave keyboard focus inside a newly inert layer.
    if (layers.current?.contains(document.activeElement)) {
     controls.current?.querySelectorAll<HTMLButtonElement>("button")[index]?.focus({ preventScroll: true });
    }
    current = index;
    setActive(index);
   }
   if (progress.current) progress.current.style.transform = `scaleX(${smooth})`;
   if (!paused) seekVideo(smooth);
   if (Math.abs(target - smooth) > .001) frame = requestAnimationFrame(tick);
  };
  const schedule = () => { if (!frame) { last = performance.now(); frame = requestAnimationFrame(tick); } };
  const update = () => {
   target = clamp(-root.getBoundingClientRect().top / Math.max(1, root.offsetHeight - innerHeight));
   schedule();
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  video.addEventListener("loadedmetadata", update);
  video.addEventListener("seeked", schedule);
  update();
  return () => {
   cancelAnimationFrame(frame);
   window.removeEventListener("scroll", update);
   window.removeEventListener("resize", update);
   video.removeEventListener("loadedmetadata", update);
   video.removeEventListener("seeked", schedule);
  };
 }, [cinematic, paused, seekVideo]);
 const select = (index: number) => {
  const root = track.current;
  if (!root) return;
  const y = root.getBoundingClientRect().top + scrollY + stops[index] * (root.offsetHeight - innerHeight);
  window.scrollTo({ top: y, behavior: "instant" });
 };
 return <section ref={track} className={`tj-journey ${cinematic ? "tj-cinematic" : "tj-static"}`} aria-label="삼광켐 네 가지 기술 접근">
  <div className="tj-viewport">
   <div className="tj-backdrop" aria-hidden="true">
    <video style={failed ? { visibility: "hidden" } : undefined} ref={film} muted playsInline preload={cinematic ? "auto" : "none"} src={cinematic ? "/media/clip6.mp4" : undefined} poster="/media/clip6-start-1s.jpg" />
    {failed && <img src="/media/clip6-start-1s.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />}
   </div>
   {cinematic && <div style={{ position: "absolute", right: "6%", top: 142, zIndex: 4, display: "flex", gap: 8 }}><button type="button" className="icon-button" aria-label={paused ? "스크롤 영상 재생" : "스크롤 영상 일시정지"} onClick={() => { if (paused) retry(); else pauseVideo(); setPaused(!paused); }}>{paused ? "재생" : "일시정지"}</button>{needsActivation && !paused && <button type="button" className="action light" onClick={retry}>영상 활성화 · 다시 시도</button>}</div>}
   <div className="tj-top"><span>SAMKWANG CHEM</span><span>MATERIAL SCIENCE</span></div>
   {cinematic && <div ref={controls} className="tj-controls" role="group" aria-label="기술 장면 선택">
    {["소개", ...technologies.map(t => t.name)].map((name, i) => <button type="button" key={name} aria-pressed={active === i} aria-controls={`tj-scene-${i}`} onClick={() => select(i)}><span className="tj-control-number" aria-hidden="true">{String(i).padStart(2, "0")}</span>{name}</button>)}
   </div>}
   <div ref={layers} className="tj-layers">
    <div id="tj-scene-0" className={`tj-scene tj-opening ${active === 0 ? "tj-active" : ""}`} inert={cinematic && active !== 0} aria-hidden={cinematic && active !== 0}>
     <p className="tj-eyebrow">RESEARCH & TECHNOLOGY</p>
     <h1>작은 성분에서,<br />새로운 가능성으로.</h1>
     <p className="tj-description">원료의 특성을 이해하고, 제형의 다음을 생각합니다.<br />삼광켐의 네 가지 기술 접근.</p>
     <p className="tj-scroll-hint">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></p>
    </div>
    {technologies.map((t, i) => <section id={`tj-scene-${i + 1}`} key={t.slug} className={`tj-scene ${active === i + 1 ? "tj-active" : ""}`} inert={cinematic && active !== i + 1} aria-hidden={cinematic && active !== i + 1} aria-labelledby={`tj-title-${t.slug}`}>
     <p className="tj-eyebrow">0{i + 1} / 04 <span>{t.en}</span></p>
     <h2 id={`tj-title-${t.slug}`}><span className="tj-tech-name">{t.name}</span>{stories[i].phrase}</h2>
     <p className="tj-description">{stories[i].text}</p>
     <Link className="tj-detail" href={`/technology/${t.slug}`}>{t.name} 기술 자세히 보기 <span aria-hidden="true">↗</span></Link>
     <p className="tj-tag">{stories[i].tag}</p>
    </section>)}
   </div>
   <div className="tj-progress" aria-hidden="true"><span ref={progress} /></div>
  </div>
 </section>;
}
