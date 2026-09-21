import { CompanyFrame } from "@/components/site/company-frame";
import { CompanyFilm } from "@/components/site/company-film";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "인사말·경영이념", description: "1988년부터 이어온 신뢰. 삼광켐의 인사말과 신뢰·인재·고객·가격에 대한 네 가지 경영이념을 소개합니다." };
const values = [
 ["01", "신뢰와 정직", "TRUST & INTEGRITY", "정직하고 바른 비즈니스를 추구합니다."],
 ["02", "인재중시", "PEOPLE & POTENTIAL", "소통경영을 위한 창조적 논쟁을 즐기는 열정을 갖춘 인재를 배출합니다."],
 ["03", "고객만족", "CUSTOMER VALUE", "최고의 품질과 가치를 제공하는 고객의 든든한 파트너가 됩니다."],
 ["04", "합리적가격", "FAIR VALUE", "자사 창고와 직배송 시스템으로 경쟁력 있는 가격을 제공합니다."],
];
export default function Company() {
 return <CompanyFrame current="/company" number="01" eyebrow="A FOUNDATION OF TRUST" title={<>신뢰를 바탕으로,<br/><span>가능성을 함께.</span></>} intro="원료를 고르는 기준에서 제품을 향한 도전까지. 삼광켐은 정직한 관계와 전문성으로 고객의 다음을 함께합니다.">
  <CompanyFilm src="/media/brand-film.mp4" poster="/media/hero-poster.jpg" title={<>좋은 원료를 향한 기준.<br/>변하지 않는 신뢰.</>} description="원료의 선택에서 제품의 가능성까지. 1988년부터 쌓아온 전문성으로 고객의 다음을 함께합니다." href="#greeting" linkLabel="인사말 읽기"/>
  <section id="greeting" className="co-wrap co-editorial">
   <div className="co-section-label"><p className="co-kicker">01 / GREETINGS</p><h2>신뢰가 바탕인 기업,<br/>㈜삼광켐.</h2><img className="co-greeting-image" src="/media/company/mineral-study.jpg" alt="광물의 층과 투명한 유리 소재" width={800} height={600} loading="lazy"/></div>
   <div className="co-prose">
    <p className="co-lead">함께해 주신 여러분의<br/>관심과 격려에 감사드립니다.</p>
    <p>1988년 1월 5일, 삼광실업으로 시작한 삼광켐은 화장품 원료 공급사로서 경험과 전문성을 쌓아왔습니다. 고객 여러분의 믿음과 신용을 바탕으로, 높은 품질의 원료를 엄선해 제공하겠습니다.</p>
    <p>자사 창고와 운송시스템을 통해 원료를 안전하고 신속하게 공급하고, 기업부설연구소에서는 고객의 필요에 맞는 신제품 개발을 이어갑니다.</p>
    <p>소통경영으로 창조적 열정을 갖춘 인재를 육성하며, 변화하는 화장품 산업에 <strong>품질제일주의와 개척자정신</strong>으로 응답하겠습니다.</p>
    <p>축적된 경험을 디딤돌 삼아 고객과 함께 성장하고, 화장품 산업의 리더가 되기 위해 언제나 최선을 다하겠습니다.</p>
    <div className="co-signature"><span>㈜삼광켐 대표이사</span><strong>이석주</strong></div>
   </div>
  </section>
  <section className="co-values">
   <div className="co-wrap"><div className="co-section-top"><p className="co-kicker">02 / OUR PHILOSOPHY</p><h2>우리가 지키는 기준이<br/>고객의 가치가 됩니다.</h2><p>고객의 가치창조에 이바지하고 사회에 공헌하며,<br/>보다 나은 미래를 만들어갑니다.</p></div>
   <div className="co-value-grid">{values.map(([n,title,en,body])=><article key={n}><img className="co-value-image" src={`/media/editorial/value-${n === "01" ? "trust" : n === "02" ? "people" : n === "03" ? "customer" : "supply"}.jpg`} alt={`${title}을 표현한 이미지`} width={600} height={450} loading="lazy"/><span className="co-index">{n}</span><p className="co-kicker">{en}</p><h3>{title}</h3><p>{body}</p></article>)}</div></div>
  </section>
  <section className="co-wrap co-editorial co-business"><div><p className="co-kicker">03 / WHAT WE DO</p><h2>원료의 선택에서<br/>제형의 가능성까지.</h2></div><div className="co-link-rows">{[["원료 공급","분류·제조사·INCI로 필요한 원료를 찾습니다.","/products"],["소재·제형 연구개발","캡슐화·가용화·안정화·정제 기술로 적용을 연구합니다.","/research"],["초고압유화 임가공","Microfluidizer를 활용한 공정 조건을 상담합니다.","/services/microfluidization"]].map(([name,desc,href])=><Link href={href} key={href}><div><h3>{name}</h3><p>{desc}</p></div><ArrowUpRight size={24}/></Link>)}</div></section>
 </CompanyFrame>;
}
