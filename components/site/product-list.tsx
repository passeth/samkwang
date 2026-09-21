import type { Product } from "@/lib/products";
import { ProductActions } from "./product-actions";
import { ArrowUpRight } from "lucide-react";

export function ProductList({
	products,
}: {
	readonly products: readonly Product[];
}) {
	return (
		<table className="product-list" role="table">
			<caption className="sr-only">제품 검색 결과</caption>
			<thead role="rowgroup">
				<tr role="row">
					<th scope="col">제품명 / INCI</th>
					<th scope="col">제조사</th>
					<th scope="col">분류</th>
					<th scope="col">포장 단위</th>
					<th scope="col">관심 / 비교</th>
				</tr>
			</thead>
			<tbody role="rowgroup">
				{products.map((p) => (
					<tr key={p.id} role="row">
						<th scope="row" role="rowheader">
							<a href={`/products/${p.id}`}>
								{p.name}
								<ArrowUpRight size={18} aria-hidden="true" />
							</a>
							<p className="inci"><span className="product-inci-label">INCI</span>{p.inci}</p>
						</th>
						<td role="cell" data-label="제조사"><span>{p.manufacturer}</span></td>
						<td role="cell" data-label="분류"><span>{p.category}{p.subcategory && <span className="product-subcategory">{p.subcategory}</span>}</span></td>
						<td role="cell" data-label="포장 단위"><span>
							{p.packing_unit && p.packing_unit !== "-"
								? p.packing_unit
								: "문의"}</span>
						</td>
						<td role="cell">
							<ProductActions id={p.id} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
