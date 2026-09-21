"use client";
import { STATIC_SCROLL_VIDEO_QUERY } from "@/lib/video-motion-policy";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useScrollVideo } from "@/hooks/use-scroll-video";
const scenes = [
	{
		label: "WHERE POSSIBILITY BEGINS",
		layout: "opening",
		language: "ko",
		title: (
			<>
				원료의 가능성,
				<br />
				제품의 내일로.
			</>
		),
		body: "원료 공급에서 소재·제형 연구까지, 삼광켐",
		href: "/products",
		cta: "원료 탐색하기",
	},
	{
		label: "FROM MATERIAL TO MEANING",
		layout: "statement",
		language: "en",
		title: (
			<>
				<span className="hero-word">INGREDIENTS.</span>{" "}
				<span className="hero-word">INSIGHT.</span>{" "}
				<span className="hero-word">POSSIBILITIES.</span>
			</>
		),
		body: "원료를 깊이 이해하고, 제형의 가능성을 넓힙니다.",
		href: "/technology",
		cta: "기술 살펴보기",
	},
	{
		label: "YOUR NEXT, OUR FOCUS.",
		layout: "closing",
		language: "ko",
		title: (
			<>
				다음 제품의 시작을,
				<br />
				함께 생각합니다.
			</>
		),
		body: "원료와 제형에 대한 질문, 삼광켐과 나눠보세요.",
		href: "/contact",
		cta: "개발·기술 상담",
	},
] as const;
export function Hero() {
	const track = useRef<HTMLElement>(null),
		video = useRef<HTMLVideoElement>(null),
		layers = useRef<HTMLDivElement>(null),
		bar = useRef<HTMLSpanElement>(null);
	const [paused, setPaused] = useState(false),
		[reduce, setReduce] = useState(true);
	const { seek: seekVideo, retry, pause: pauseVideo, needsActivation, failed } = useScrollVideo(video, reduce);
	useEffect(() => {
		const mq = matchMedia(STATIC_SCROLL_VIDEO_QUERY);
		const change = () => setReduce(mq.matches);
		change();
		mq.addEventListener("change", change);
		return () => mq.removeEventListener("change", change);
	}, []);
	useEffect(() => {
		const root = track.current,
			film = video.current,
			container = layers.current;
		if (!root || !film || !container) return;
		let raf = 0,
			target = 0,
			smooth = 0,
			last = 0;
		const clamp = (n: number) => Math.max(0, Math.min(1, n));
		const draw = (p: number) => {
			const values = [
				1 - clamp((p - 0.2) / 0.08),
				clamp((p - 0.32) / 0.08) * (1 - clamp((p - 0.55) / 0.08)),
				clamp((p - 0.67) / 0.08),
			];
			Array.from(container.children).forEach((el, i) => {
				if (el instanceof HTMLElement) {
					const a = values[i] ?? 0;
					el.style.opacity = String(a);
					el.style.transform = `translateY(${(1 - a) * 24}px)`;
					el.inert = a < 0.3;
					el.setAttribute("aria-hidden", String(a < 0.3));
					el.querySelectorAll<HTMLElement>(".hero-word").forEach(
						(word, index) => {
							const reveal = clamp((p - 0.34 - index * 0.035) / 0.065);
							word.style.opacity = String(0.38 + reveal * 0.62);
							word.style.transform = `translateY(${(1 - reveal) * 18}px)`;
						},
					);
				}
			});
			if (bar.current) bar.current.style.transform = `scaleX(${p})`;
		};
		const tick = (now: number) => {
			raf = 0;
			const dt = Math.min((now - last) / 1000, 0.1);
			last = now;
			smooth += (target - smooth) * (1 - Math.exp(-8 * dt));
			if (Math.abs(target - smooth) < 0.002) smooth = target;
			draw(smooth);
			seekVideo(smooth);
			if (Math.abs(target - smooth) > 0.001) raf = requestAnimationFrame(tick);
		};
		const update = () => {
			target =
				paused || reduce
					? 0
					: clamp(
							-root.getBoundingClientRect().top /
								(root.offsetHeight - innerHeight),
						);
			if (!raf) {
				last = performance.now();
				raf = requestAnimationFrame(tick);
			}
		};
		const seek = () => {
			if (!raf) {
				last = performance.now();
				raf = requestAnimationFrame(tick);
			}
		};
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		film.addEventListener("loadedmetadata", update);
		film.addEventListener("seeked", seek);
		update();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
			film.removeEventListener("loadedmetadata", update);
			film.removeEventListener("seeked", seek);
		};
	}, [paused, reduce, seekVideo]);
	return (
		<section
			ref={track}
			className={`hero-track ${paused || reduce ? "static-hero" : ""}`}
			aria-label="삼광켐 브랜드 이야기"
		>
			<div className="hero-sticky">
				<video
					ref={video}
					className="hero-film"
                    style={failed ? { visibility: "hidden" } : undefined}
					muted
					playsInline
					preload={reduce ? "none" : "auto"}
					poster="/media/clip5-poster.jpg"
					src={reduce ? undefined : "/media/clip5.mp4"}
					aria-hidden="true"
				/>
				{failed && <img className="hero-film" src="/media/clip5-poster.jpg" alt="" />}
                <div className="hero-shade" />
				<div ref={layers} className="hero-layers wrap">
					{scenes.map((s, i) => (
						<div
							key={s.label}
							className={`hero-copy hero-copy--${s.layout}`}
							style={{ opacity: i === 0 ? 1 : 0 }}
							inert={i !== 0}
							aria-hidden={i !== 0}
						>
							<p className="eyebrow" lang="en">
								{s.label}
							</p>
							{i === 0 ? (
								<h1 lang={s.language}>{s.title}</h1>
							) : (
								<h2 lang={s.language}>{s.title}</h2>
							)}
							<p className="hero-description">{s.body}</p>
							<a className="action light" href={s.href}>
								{s.cta}
								<ArrowUpRight size={20} />
							</a>
						</div>
					))}
				</div>
				<div className="hero-bottom wrap">

					<div className="film-meta">
                        {!reduce && !paused && needsActivation && <button className="action light" type="button" onClick={retry}>영상 활성화 · 다시 시도</button>}
						<button
							className="icon-button"
							aria-label={
								reduce
									? "정적 보기 적용 중"
									: paused
										? "스크롤 모션 켜기"
										: "스크롤 모션 끄기"
							}
							disabled={reduce}
							onClick={() => { if (paused) retry(); else pauseVideo(); setPaused(!paused); }}
						>
							{paused ? <Play size={17} /> : <Pause size={17} />}
						</button>
					</div>
				</div>
				<div className="hero-progress">
					<span ref={bar} />
				</div>
			</div>
			{(paused || reduce) && (
				<div className="wrap hero-static-summary">
					{scenes.slice(1).map((scene) => (
						<section key={scene.label}>
							<p className="eyebrow" lang="en">
								{scene.label}
							</p>
							<h2 lang={scene.language}>{scene.title}</h2>
							<p>{scene.body}</p>
							<a className="action light" href={scene.href}>
								{scene.cta}
								<ArrowUpRight size={20} />
							</a>
						</section>
					))}
				</div>
			)}
		</section>
	);
}
