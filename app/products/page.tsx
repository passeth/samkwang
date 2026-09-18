import { Suspense } from "react";
import { Catalog } from "@/components/site/catalog";
export const metadata = { title: "제품 소개" };
export default function Products() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">INGREDIENT LIBRARY</p>
				<h1>다음 제형을 위한 원료.</h1>
				<p className="lead">
					삼광켐이 소개하는 원료를 분류·기능·제조사별로 살펴보고,
					필요한 제품을 바로 찾아보세요.
				</p>
			</div>
			<Suspense fallback={<p>제품을 불러오고 있습니다.</p>}>
				<Catalog />
			</Suspense>
		</main>
	);
}
