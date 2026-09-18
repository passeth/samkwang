import { SavedProducts } from "@/components/site/saved-products";
export const metadata = { title: "품목 비교" };
export default function Page() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">SIDE BY SIDE</p>
				<h1>품목 비교</h1>
				<p className="lead">
					최대 4개 원료의 성분·특징·포장 단위를 나란히 확인하세요.
				</p>
			</div>
			<SavedProducts compare />
		</main>
	);
}
