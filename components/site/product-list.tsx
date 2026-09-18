import type { Product } from "@/lib/products";
import { ProductActions } from "./product-actions";
import { ArrowUpRight } from "lucide-react";

export function ProductList({
	products,
}: {
	readonly products: readonly Product[];
}) {
	return (
		<table className="product-list">
			<caption className="sr-only">제품 검색 결과</caption>
			<thead>
				<tr>
					<th scope="col">제품명 / INCI</th>
					<th scope="col">제조사</th>
					<th scope="col">분류</th>
					<th scope="col">포장 단위</th>
					<th scope="col">관심 / 비교</th>
				</tr>
			</thead>
			<tbody>
				{products.map((p) => (
					<tr key={p.id}>
						<th scope="row">
							<a href={`/products/${p.id}`}>
								{p.name}
								<ArrowUpRight size={18} aria-hidden="true" />
							</a>
							<p className="inci">{p.inci}</p>
						</th>
						<td data-label="제조사">{p.manufacturer}</td>
						<td data-label="분류">
							{p.category}
							<br />
							{p.subcategory}
						</td>
						<td data-label="포장 단위">
							{p.packing_unit && p.packing_unit !== "-"
								? p.packing_unit
								: "문의"}
						</td>
						<td>
							<ProductActions id={p.id} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
