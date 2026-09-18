"use client";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";
import { useProductList, saveList, CompareBar } from "./product-actions";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
export function SavedProducts({
	compare = false,
}: {
	readonly compare?: boolean;
}) {
	const key = compare ? "compare" : "favorites",
		ids = useProductList(key),
		items = ids
			.map((id) => products.find((p) => p.id === id))
			.filter((p) => p !== undefined);
	return (
		<>
			{items.length === 0 ? (
				<div className="empty-state">
					<h2>
						{compare
							? "비교할 제품을 선택해 주세요."
							: "관심품목을 담아보세요."}
					</h2>
					<p>
						제품 목록이나 상세 화면에서 {compare ? "비교" : "하트"} 버튼을 눌러
						추가할 수 있습니다.
					</p>
					<a className="action" href="/products">
						제품 찾기 →
					</a>
				</div>
			) : compare ? (
				<div className="comparison">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>비교 항목</TableHead>
								{items.map((p) => (
									<TableHead key={p.id}>
										<a href={`/products/${p.id}`}>{p.name}</a>
										<button
											className="remove-product"
											onClick={() =>
												saveList(
													key,
													ids.filter((x) => x !== p.id),
												)
											}
											aria-label={`${p.name} 비교에서 제거`}
										>
											제거
										</button>
									</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{(
								[
									"manufacturer",
									"category",
									"subcategory",
									"inci",
									"features",
									"packing_unit",
								] as const
							).map((field, i) => (
								<TableRow key={field}>
									<TableHead>
										{
											[
												"제조사",
												"대분류",
												"소분류",
												"INCI",
												"특징",
												"포장 단위",
											][i]
										}
									</TableHead>
									{items.map((p) => (
										<TableCell
											className={
												new Set(items.map((x) => x[field])).size > 1
													? "different"
													: ""
											}
											key={p.id}
										>
											{p[field] && p[field] !== "-" ? p[field] : "문의"}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
					<p className="note">
						배경색은 서로 다른 값을 나타냅니다. 원료의 비교이며 완제품 성능을
						의미하지 않습니다.
					</p>
				</div>
			) : (
				<div className="product-grid">
					{items.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			)}
			{!compare && <CompareBar />}
		</>
	);
}
