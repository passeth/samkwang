import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MediaLoop } from "@/components/site/media-loop";
import { MediaSplit } from "@/components/site/rich-sections";
import { CompanyNav } from "@/components/site/company-story";
export const metadata = { title: "회사소개" };
export default function Company() {
	return (
		<main id="main" className="page-main company-page">
			<section className="company-hero" aria-labelledby="company-hero-title">
				<div className="company-hero-media">
					<MediaLoop
						src="/media/clip2.mp4"
						poster="/media/clip2-poster.jpg"
						alt="빛을 머금은 원료 샘플과 연구 장면"
					/>
				</div>
				<div className="company-hero-shade" aria-hidden="true" />
				<div className="company-hero-content">
					<p className="eyebrow">ABOUT SAMKWANG CHEM</p>
					<h1 id="company-hero-title">
						원료를 이해하는 일,
						<br />
						<span>제품의 가능성을 여는 일.</span>
					</h1>
					<p className="company-hero-lead">
						우리는 원료의 이름보다 그 다음을 봅니다.
						<br />
						제형에 닿는 순간, 제품이 되는 과정까지.
					</p>
				</div>
				<div className="company-hero-footer">
					<span>1988 — 2026</span>
					<a href="#business">
						<span>SCROLL TO EXPLORE</span>
						<ArrowDown size={17} aria-hidden="true" />
					</a>
				</div>
			</section>
			<div className="wrap company-body">
				<CompanyNav />
			<MediaSplit
				eyebrow="FROM INGREDIENT TO FORMULA"
				title={
					<>
						원료와 기술,
						그리고 다음 제품.
					</>
				}
				body="화장품 원료 공급과 기능성 소재·제형 연구개발, 초고압유화 임가공을 함께 다룹니다."
				href="/research"
				cta="연구소 보기"
				video
				videoSrc="/media/clip4.mp4"
				image="/media/clip4-poster.jpg"
				alt="시료를 랙에 담는 연구 작업"
			/>
			<section id="business" className="editorial-section">
				<p className="eyebrow">OUR BUSINESS</p>
				<div>
					<h2>
						원료와 기술,
						<br />
						그리고 다음 제품을 연결합니다.
					</h2>
					<p className="lead">
						삼광켐은 화장품 원료 공급과 기능성 소재·제형 연구개발, 초고압유화
						임가공을 함께 다룹니다. 캡슐화·가용화·안정화·정제 기술을 바탕으로
						소재의 특성과 적용을 이야기합니다.
					</p>
				</div>
			</section>
			<div className="business-lines">
				{[
					[
						"01",
						"원료 공급",
						"분류·제조사·INCI를 바탕으로 필요한 원료를 살펴보세요.",
						"/products",
					],
					[
						"02",
						"소재·제형 연구개발",
						"성분을 담는 구조와 제형에 적용하는 방법을 연구합니다.",
						"/research",
					],
					[
						"03",
						"초고압유화 임가공",
						"Microfluidizer를 활용한 초고압유화 공정을 상담합니다.",
						"/services/microfluidization",
					],
				].map(([n, title, body, href]) => (
					<div key={n}>
						<p className="eyebrow">{n}</p>
						<h3>{title}</h3>
						<p>{body}</p>
						<a className="text-link" href={href}>
							자세히 보기 <ArrowUpRight size={18} />
						</a>
					</div>
				))}
			</div>
			</div>
		</main>
	);
}
