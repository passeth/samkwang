import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { MediaLoop } from "@/components/site/media-loop";

export function LogoRail({
	title,
	items,
}: {
	readonly title: string;
	readonly items: readonly (readonly [string, string])[];
}) {
	return (
		<section className="logo-rail" aria-label={title}>
			<p>{title}</p>
			<ul>
				{items.map(([name, file]) => (
					<li key={name}>
						<img
							src={`/media/partners/${file}`}
							alt={`${name} 로고`}
							width="160"
							height="48"
							loading="lazy"
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

export function MediaSplit({
	eyebrow,
	title,
	body,
	href,
	cta,
	reverse = false,
	video = false,
	videoSrc,
	image,
	alt,
}: {
	readonly eyebrow: string;
	readonly title: ReactNode;
	readonly body: string;
	readonly href: string;
	readonly cta: string;
	readonly reverse?: boolean;
	readonly video?: boolean;
	readonly videoSrc?: string;
	readonly image: string;
	readonly alt: string;
}) {
	return (
		<section className={`media-split${reverse ? " reverse" : ""}`}>
			<div className="media-split-copy">
				<p className="eyebrow">{eyebrow}</p>
				<h2>{title}</h2>
				<p className="lead">{body}</p>
				<a className="text-link" href={href}>
					{cta} <ArrowUpRight size={18} />
				</a>
			</div>
			<div className="media-split-frame">
				{video ? (
					<MediaLoop src={videoSrc} poster={image} alt={alt} />
				) : (
					<img src={image} alt={alt} />
				)}
			</div>
		</section>
	);
}

export function ImageBanner({
	src,
	alt,
	eyebrow,
	title,
	body,
	href,
	cta,
}: {
	readonly src: string;
	readonly alt: string;
	readonly eyebrow: string;
	readonly title: ReactNode;
	readonly body: string;
	readonly href: string;
	readonly cta: string;
}) {
	return (
		<section className="image-banner">
			<img src={src} alt={alt} />
			<div className="image-banner-copy">
				<p className="eyebrow">{eyebrow}</p>
				<h2>{title}</h2>
				<p>{body}</p>
				<a className="action light" href={href}>
					{cta} <ArrowUpRight size={18} />
				</a>
			</div>
		</section>
	);
}

export function StatStrip({
	items,
}: {
	readonly items: readonly (readonly [string, string])[];
}) {
	return (
		<section className="stat-strip" aria-label="주요 수치">
			{items.map(([value, label]) => (
				<p key={label}>
					<strong>{value}</strong>
					<span>{label}</span>
				</p>
			))}
		</section>
	);
}

export function PhotoMosaic({
	photos,
}: {
	readonly photos: readonly { src: string; alt: string }[];
}) {
	return (
		<ul className="photo-mosaic">
			{photos.map((photo) => (
				<li key={photo.src}>
					<img src={photo.src} alt={photo.alt} loading="lazy" />
				</li>
			))}
		</ul>
	);
}

export function ResearchVisit({
	photos,
	href,
}: {
	readonly photos: readonly { src: string; alt: string }[];
	readonly href: string;
}) {
	return (
		<section className="research-visit" aria-labelledby="research-visit-title">
			<div className="research-visit-copy">
				<div>
					<p className="eyebrow">INSIDE THE LAB</p>
					<h2 id="research-visit-title">
						질문은 연구소에서
						<br />
						다음 제품으로 이어집니다.
					</h2>
					<p>
						원료의 특성을 확인하고, 적용 가능성을 함께 좁혀갑니다.
						삼광켐의 연구 공간은 다음 개발 대화를 위한 출발점입니다.
					</p>
				</div>
				<div>
					<div className="research-visit-meta">
						<strong>VISIT &amp; TALK</strong>
						<span>원료 · 기술자료 · 샘플 · 견적 · 임가공</span>
					</div>
					<a className="action light" href={href}>
						개발·기술 상담 <ArrowUpRight size={18} />
					</a>
				</div>
			</div>
			<div className="research-visit-gallery" aria-label="삼광켐 연구소 사진">
				{photos.map((photo) => (
					<figure key={photo.src}>
						<img src={photo.src} alt={photo.alt} loading="lazy" />
					</figure>
				))}
			</div>
		</section>
	);
}

export function StepMedia({
	eyebrow,
	title,
	steps,
}: {
	readonly eyebrow: string;
	readonly title: ReactNode;
	readonly steps: readonly {
		index: string;
		name: string;
		body: string;
		image: string;
		alt: string;
	}[];
}) {
	return (
		<section className="step-media">
			<div className="wrap">
				<p className="eyebrow">{eyebrow}</p>
				<h2>{title}</h2>
				<ol>
					{steps.map((step) => (
						<li key={step.index}>
							<img src={step.image} alt={step.alt} loading="lazy" />
							<span>{step.index}</span>
							<h3>{step.name}</h3>
							<p>{step.body}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
