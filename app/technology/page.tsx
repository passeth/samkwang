import { technologies } from "@/lib/technology";
export const metadata = { title: "연구·기술" };
export default function Technology() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">MATERIAL SCIENCE</p>
				<h1>
					성분에서 구조로,
					<br />
					구조에서 가능성으로.
				</h1>
				<p className="lead">
					원료의 특성과 제형의 질문을 연결하는 삼광켐의 기술.
				</p>
				<a className="text-link" href="/research">
					기업부설 연구소 소개 ↗
				</a>
			</div>
			<figure className="technology-cover">
				<img
					src="/media/hero-poster.jpg"
					alt="식물성 원료가 담긴 유리 용기와 실험용 바이알이 놓인 소재 연구 콘셉트 이미지"
				/>
				<figcaption>
					<span>01 / MATERIAL LIBRARY</span>
					<strong>Observe the material before you define the formula.</strong>
				</figcaption>
			</figure>
			{technologies.map((t, i) => (
				<section className="tech-row" key={t.slug}>
					<span className="index">0{i + 1}</span>
					<div>
						<p className="eyebrow">{t.en}</p>
						<h2>{t.name}</h2>
						<a className="text-link" href={`/technology/${t.slug}`}>
							기술 살펴보기 ↗
						</a>
					</div>
					<p>{t.body}</p>
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
						임가공 알아보기 ↗
					</a>
				</div>
			</section>
		</main>
	);
}
