import { SavedProducts } from "@/components/site/saved-products";
export const metadata = { title: "관심품목" };
export default function Page() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">YOUR INGREDIENT SHORTLIST</p>
				<h1>관심품목</h1>
				<p className="lead">
					현재 브라우저에 저장됩니다. 계정 간 동기화는 회원 기능 연동 후
					제공됩니다.
				</p>
			</div>
			<SavedProducts />
		</main>
	);
}
