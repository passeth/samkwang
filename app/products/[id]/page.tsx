import { notFound } from "next/navigation";
import { products, description } from "@/lib/products";
import { ProductActions, CompareBar } from "@/components/site/product-actions";
import { ProductCard } from "@/components/site/product-card";
type Props = { readonly params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props) {
	const { id } = await params;
	return {
		title: products.find((p) => p.id === Number(id))?.name ?? "제품 없음",
	};
}
export default async function Detail({ params }: Props) {
	const { id } = await params,
		p = products.find((item) => item.id === Number(id));
	if (!p) notFound();
	return (
		<main id="main" className="wrap page-main">
			<a className="back-link" href="/products">
				← 제품 목록
			</a>
			<div className="detail-head">
				<div>
					<p className="eyebrow">
						{p.manufacturer} / {p.category} / {p.subcategory}
					</p>
					<h1>{p.name}</h1>
					<p className="lead">{p.features}</p>
				</div>
				<ProductActions id={p.id} />
			</div>
			<div className="detail-layout">
				<div>
					<h2>원료 정보</h2>
					<dl className="spec-list">
						{[
							["INCI", p.inci],
							["제조사", p.manufacturer],
							["분류", `${p.category} / ${p.subcategory}`],
							[
								"포장 단위",
								p.packing_unit && p.packing_unit !== "-"
									? p.packing_unit
									: "문의",
							],
							["제품 식별번호", String(p.id)],
						].map(([k, v]) => (
							<div key={k}>
								<dt>{k}</dt>
								<dd>{v}</dd>
							</div>
						))}
					</dl>
					{description(p) && (
						<section className="description-block">
							<h2>제품 소개</h2>
							<p>{description(p)}</p>
						</section>
					)}
				</div>
				<aside className="detail-aside">
					<p className="eyebrow">DOCUMENTS & SUPPORT</p>
					<h3>필요한 자료가 있으신가요?</h3>
					<p>
						SDS/MSDS 및 기술자료를 요청하시면 담당자가 요청 사항을 확인한 후
						신속히 답변드리겠습니다.
					</p>
					<a className="action" href={`/contact?product=${p.id}`}>
						이 제품 문의하기 ↗
					</a>
				</aside>
			</div>
			<section className="related-products">
				<h2>같은 분류의 제품</h2>
				<div className="product-grid">
					{products
						.filter((x) => x.id !== p.id && x.category === p.category)
						.slice(0, 3)
						.map((item) => (
							<ProductCard key={item.id} product={item} />
						))}
				</div>
			</section>
			<CompareBar />
		</main>
	);
}
