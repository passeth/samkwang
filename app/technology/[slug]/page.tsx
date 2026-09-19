import { notFound } from "next/navigation";
import { technologies } from "@/lib/technology";
import { ImageBanner } from "@/components/site/rich-sections";
type Props = { readonly params: Promise<{ slug: string }> };
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
			<section className="editorial-section">
				<h2>기술의 접근</h2>
				<div>
					<p className="lead">{t.body}</p>
					<p>{t.detail}</p>
				</div>
			</section>
			{t.diagrams.map((diagram) => (
				<figure className="tech-diagram" key={diagram.src}>
					<img src={diagram.src} alt={diagram.alt} />
					<figcaption>{diagram.caption}</figcaption>
				</figure>
			))}
			{t.products.length > 0 ? (
				<section className="editorial-section">
					<h2>관련 제품</h2>
					<div className="tech-products">
						{t.products.map((product) => (
							<a key={product.id} href={`/products/${product.id}`}>
								{product.name}
								<span>제품 보기</span>
							</a>
						))}
						{t.query ? (
							<a href={`/products?q=${encodeURIComponent(t.query)}`}>
								관련 제품 찾기
								<span>카탈로그</span>
							</a>
						) : null}
					</div>
				</section>
			) : null}
			<ImageBanner
				src="/media/hero.jpg"
				alt="유리 용기와 액체 소재"
				eyebrow="APPLY TOGETHER"
				title="적용을 함께 검토합니다."
				body="목표 제형과 원료, 검토 중인 조건을 알려주세요."
				href="/contact"
				cta="기술 상담"
			/>
		</main>
	);
}
