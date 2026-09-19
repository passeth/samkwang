import { products } from "@/lib/products";
import { InquiryForm } from "@/components/site/inquiry-form";
import { MediaLoop } from "@/components/site/media-loop";
export const metadata = { title: "문의하기" };
export default async function Page({
	searchParams,
}: {
	readonly searchParams: Promise<{ product?: string }>;
}) {
	const { product } = await searchParams,
		p = products.find((x) => x.id === Number(product));
	return (
		<main id="main">
			<div className="wrap page-main" style={{ paddingBottom: 24 }}>
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
			</div>
			<div className="contact-split">
				<section className="contact-panel">
					<h2>{p ? `${p.name} 문의` : "비즈니스 문의"}</h2>
					<p>궁금한 내용을 남겨주시면 담당자가 회신드리겠습니다.</p>
					<InquiryForm product={p ? `${p.name} / ${p.manufacturer}` : ""} />
				</section>
				<div className="contact-split-media">
					<MediaLoop
						src="/media/clip3.mp4"
						poster="/media/clip3-poster.jpg"
						alt="시험관을 배열하는 연구소 작업"
					/>
				</div>
			</div>
		</main>
	);
}
