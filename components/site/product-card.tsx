import type { Product } from "@/lib/products";
import { ProductActions } from "./product-actions";
import { ArrowUpRight } from "lucide-react";
export function ProductCard({ product: p }: { readonly product: Product }) {
	return (
		<article className="product-card">
			<div className="product-meta">
				<span>
					{p.category} / {p.subcategory}
				</span>
				<span>{p.manufacturer}</span>
			</div>
			<a className="product-title" href={`/products/${p.id}`}>
				<h3>{p.name}</h3>
				<ArrowUpRight size={20} />
			</a>
			<p className="inci">{p.inci}</p>
			<p className="product-feature">
				{p.features || "상세 적용 정보는 문의해 주세요."}
			</p>
			<div className="product-card-bottom">
				<span>
					{p.packing_unit && p.packing_unit !== "-"
						? p.packing_unit
						: "포장 단위 문의"}
				</span>
				<ProductActions id={p.id} />
			</div>
		</article>
	);
}
