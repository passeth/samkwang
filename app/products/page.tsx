import { Suspense } from "react";
import { Catalog } from "@/components/site/catalog";
import "../products-editorial.css";

export const metadata = {
	title: "제품 소개",
	description: "삼광켐의 원료 라이브러리. 분류, 기능, 제조사로 원료를 탐색하고 제품명과 INCI로 검색하세요.",
};

export default function Products() {
	return (
		<main id="main" className="products-editorial">
			<div className="wrap products-editorial-inner">
				<Suspense fallback={<div className="ingredient-loading" role="status"><h1>다음 제형을 위한 원료.</h1><p>원료 라이브러리를 불러오고 있습니다.</p></div>}>
					<Catalog />
				</Suspense>
			</div>
		</main>
	);
}
