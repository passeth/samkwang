import Link from "next/link";
import { products } from "@/lib/products";
import { InquiryForm } from "@/components/site/inquiry-form";
import { MediaLoop } from "@/components/site/media-loop";
import "./contact-editorial.css";
export const metadata = { title: "문의하기" };
export default async function Page({searchParams}:{readonly searchParams: Promise<{product?:string}>}) {
 const {product}=await searchParams;
 const p=products.find(x=>x.id===Number(product));
 return <main id="main" className="contact-editorial">
  <div className="contact-film" aria-hidden="true"><MediaLoop src="/media/clip3.mp4" poster="/media/clip3-poster.jpg" alt="원료 시료를 다루는 연구 작업"/></div>
  <div className="contact-film-shade" aria-hidden="true"/>
  <div className="contact-stage">
   <header className="contact-introduction">
    <Link className="contact-back" href={p ? `/products/${p.id}` : "/products"}>← {p ? "제품 정보로 돌아가기" : "원료 둘러보기"}</Link>
    <p className="contact-eyebrow">CONTACT SAMKWANG</p>
    <h1>제품에 대한 질문,<br/>여기서 시작하세요.</h1>
    <p className="contact-lead">원료 정보부터 샘플·견적, 기술자료와<br/>초고압유화 임가공까지 문의하실 수 있습니다.</p>
    <div className="contact-direct"><span>담당자와 직접 이야기하려면</span><a href="tel:03180573050">031-8057-3050</a><a href="mailto:sk@samkwang-chem.com">sk@samkwang-chem.com</a></div>
   </header>
   <section className="contact-form-card" aria-labelledby="inquiry-title">
    <div className="contact-card-heading"><p className="contact-eyebrow">INQUIRY</p><h2 id="inquiry-title">{p ? "제품 문의" : "비즈니스 문의"}</h2><p>문의 내용을 남겨주시면 담당자가 회신드리겠습니다.</p></div>
    {p && <div className="contact-selected-product"><span>선택한 제품</span><strong>{p.name}</strong><span>{p.manufacturer}</span></div>}
    <InquiryForm key={p?.id ?? "general"} product={p ? `${p.name} / ${p.manufacturer}` : ""}/>
   </section>
  </div>
 </main>;
}
