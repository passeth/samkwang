import { products } from "@/lib/products";
import { InquiryForm } from "@/components/site/inquiry-form";
export const metadata = { title: "문의하기" };
export default async function Page({
	searchParams,
}: {
	readonly searchParams: Promise<{ product?: string }>;
}) {
	const { product } = await searchParams,
		p = products.find((x) => x.id === Number(product));
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">LET’S TALK</p>
				<h1>
					다음 제품의 질문을
					<br />
					들려주세요.
				</h1>
				<p className="lead">
					원료, 기술자료, 샘플·견적 또는 임가공에 대한 문의.
				</p>
			</div>
			<section className="contact-panel">
				<h2>{p ? `${p.name} 문의` : "비즈니스 문의"}</h2>
				<p>궁금한 내용을 남겨주시면 담당자가 회신드리겠습니다.</p>
				<InquiryForm product={p ? `${p.name} / ${p.manufacturer}` : ""} />
			</section>
		</main>
	);
}
