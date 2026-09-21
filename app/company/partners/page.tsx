import { CompanyFrame } from "@/components/site/company-frame";
import { suppliers, customers } from "@/data/company";
export const metadata = { title: "공급사·고객사" };
function Partners({items}:{items:readonly (readonly [string,string])[]}) {
 return <ul className="co-partner-grid">{items.map(([name,file])=><li key={name}><img src={`/media/partners/${file}`} alt={`${name} 로고`} width={240} height={96} loading="lazy"/><span>{name}</span></li>)}</ul>;
}
export default function CompanyPartnersPage() {
 return <CompanyFrame current="/company/partners" number="04" eyebrow="BETTER, TOGETHER" title={<>신뢰로 연결된<br/><span>우리의 파트너.</span></>} intro="원료의 가능성을 나누는 공급사에서 제품의 가치를 만드는 고객사까지. 삼광켐은 함께하는 관계를 소중히 생각합니다.">
  <div className="co-wrap co-partner-jump"><a href="#suppliers">공급사 <span>13</span> ↓</a><a href="#customers">고객사 <span>12</span> ↓</a></div>
  <section id="suppliers" className="co-wrap co-partners"><div className="co-partner-heading"><div><p className="co-kicker">01 / OUR SUPPLIERS</p><h2>원료의 가능성을<br/>함께 넓힙니다.</h2></div><p>공급사 <span>13</span></p></div><Partners items={suppliers}/></section>
  <section id="customers" className="co-wrap co-partners"><div className="co-partner-heading"><div><p className="co-kicker">02 / OUR CUSTOMERS</p><h2>좋은 제품을 향한<br/>질문을 나눕니다.</h2></div><p>고객사 <span>12</span></p></div><Partners items={customers}/></section>

 </CompanyFrame>;
}
