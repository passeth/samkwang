import { notFound } from "next/navigation";
import { technologies } from "@/lib/technology";
type Props = { readonly params: Promise<{ slug: string }> };
const visuals = {
	encapsulation: {
		image: "/media/hero.jpg",
		alt: "투명한 유리 용기 안에서 식물성 소재와 액체가 층을 이루는 콘셉트 이미지",
		caption: "A structure that carries the ingredient.",
		steps: ["ACTIVE", "CARRIER", "DELIVERY"],
	},
	solubilization: {
		image: "/media/hero-poster.jpg",
		alt: "서로 다른 색과 점도의 식물성 액체가 담긴 바이알 콘셉트 이미지",
		caption: "Make room for the ingredient in the formula.",
		steps: ["INGREDIENT", "INTERFACE", "FORMULA"],
	},
	stabilization: {
		image: "/media/hero.jpg",
		alt: "투명한 액체와 유리의 경계가 겹쳐 보이는 안정화 콘셉트 이미지",
		caption: "Hold the structure as the formula moves.",
		steps: ["LAYER", "BALANCE", "STABILITY"],
	},
	purification: {
		image: "/media/hero-poster.jpg",
		alt: "식물성 원료의 색과 상태를 관찰하는 바이알 콘셉트 이미지",
		caption: "Refine what the material is ready to become.",
		steps: ["SOURCE", "ANALYSIS", "QUALITY"],
	},
} as const;
export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	return { title: technologies.find((t) => t.slug === slug)?.name ?? "기술" };
}
export default async function Page({ params }: Props) {
	const { slug } = await params,
		t = technologies.find((x) => x.slug === slug);
	if (!t) notFound();
	return (
		<main id="main" className="wrap page-main">
			<a className="back-link" href="/technology">
				← 연구·기술
			</a>
			<div className="page-heading section">
				<p className="eyebrow">{t.en}</p>
				<h1>{t.name}</h1>
				<p className="lead">{t.headline}</p>
			</div>
			{(() => {
				const visual = visuals[t.slug as keyof typeof visuals];
				return (
					<section className="technology-visual" aria-label={`${t.name} 시각 자료`}>
						<figure>
							<img src={visual.image} alt={visual.alt} />
							<figcaption>{visual.caption}</figcaption>
						</figure>
						<div className="technology-steps" aria-label={`${t.name} 개념 흐름`}>
							<p className="eyebrow">CONCEPTUAL FLOW</p>
							<div>
								{visual.steps.map((step, index) => (
									<span key={step}>
										<b>0{index + 1}</b>
										{step}
									</span>
								))}
							</div>
							<p className="note">기술 설명을 이해하기 위한 개념 시각화입니다. 실제 구조와 조건은 제품 자료 및 상담을 통해 확인합니다.</p>
						</div>
					</section>
				);
			})()}
			<section className="editorial-section">
				<h2>기술의 접근</h2>
				<div>
					<p className="lead">{t.body}</p>
					<p>{t.detail}</p>
					{t.query && (
						<a
							className="text-link"
							href={`/products?q=${encodeURIComponent(t.query)}`}
						>
							관련 제품 찾기 ↗
						</a>
					)}
				</div>
			</section>
			<section className="editorial-section">
				<h2>적용을 함께 검토합니다.</h2>
				<div>
					<p className="lead">목표 제형과 원료, 검토 중인 조건을 알려주세요.</p>
					<a className="action" href="/contact">
						기술 상담 ↗
					</a>
				</div>
			</section>
		</main>
	);
}
