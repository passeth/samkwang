import { technologies } from "@/lib/technology";
import { ImageBanner, MediaSplit } from "@/components/site/rich-sections";
export const metadata = { title: "연구·기술" };
export default function Technology() {
	return (
		<main id="main">
			<div className="wrap page-main" style={{ paddingBottom: 0 }}>
				<div className="page-heading">
					<p className="eyebrow">MATERIAL SCIENCE</p>
					<h1>
						성분에서 구조로,
						<br />
						구조에서 가능성으로.
					</h1>
					<p className="lead">원료의 특성과 제형의 질문을 연결하는 삼광켐의 기술.</p>
					<a className="text-link" href="/research">
						기업부설 연구소 소개
					</a>
				</div>
			</div>
			<MediaSplit
				eyebrow="OBSERVE THE MATERIAL"
				title={
					<>
						성분을 담는 구조부터
						<br />
						순도를 다듬는 과정까지.
					</>
				}
				body="캡슐화·가용화·안정화·정제. 원문의 기술 설명과 도해를 바탕으로 살펴봅니다."
				href="/research"
				cta="연구소 소개"
				video
				videoSrc="/media/clip2.mp4"
				image="/media/clip2-poster.jpg"
				alt="시험관에 담긴 오일 소재"
			/>
			<div className="wrap page-main" style={{ paddingTop: 0 }}>
				{technologies.map((t, i) => (
					<section className="tech-row" key={t.slug}>
						<span className="index">0{i + 1}</span>
						<div>
							<p className="eyebrow">{t.en}</p>
							<h2>{t.name}</h2>
							<a className="text-link" href={`/technology/${t.slug}`}>
								기술 살펴보기
							</a>
						</div>
						<p>{t.body}</p>
						{t.diagrams[0] ? (
							<img
								className="tech-row-media"
								src={t.diagrams[0].src}
								alt={t.diagrams[0].alt}
							/>
						) : null}
					</section>
				))}
				<section className="editorial-section">
					<p className="eyebrow">PROCESSING SERVICE</p>
					<div>
						<h2>초고압유화 임가공</h2>
						<p className="lead">
							목표 입도, 원료 특성, 처리 조건을 바탕으로 Microfluidizer 공정을
							상담합니다.
						</p>
						<a className="action" href="/services/microfluidization">
							임가공 알아보기
						</a>
					</div>
				</section>
			</div>
			<ImageBanner
				src="/media/technology/capsules-microscopy.jpg"
				alt="캡슐화 입자 현미경 이미지"
				eyebrow="TALK TO RESEARCH"
				title="적용 조건은 상담으로 이어갑니다."
				body="목표 제형과 원료, 검토 중인 조건을 알려주세요."
				href="/contact"
				cta="기술 상담"
			/>
		</main>
	);
}
