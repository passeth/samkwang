import { CompanyFrame } from "@/components/site/company-frame";
import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "오시는길" };
const places = [
 {id:"anseong",en:"HEADQUARTERS & WAREHOUSE", name:"본사 & 창고",city:"안성", zip:"17501",address:"경기도 안성시 양성면 양성로 390", query:"경기도 안성시 양성면 양성로 390", fax:"031-8057-3055",image:1},
 {id:"yongin",en:"R&D CENTER & SALES",name:"연구소 & 영업",city:"용인",zip:"16954",address:"경기도 용인시 기흥구 흥덕1로 13, 흥덕IT밸리 B동",query:"경기도 용인시 기흥구 흥덕1로 13 흥덕IT밸리",fax:"070-7589-1018",image:4},
];
export default function CompanyLocationsPage() {
 return <CompanyFrame current="/company/locations" number="05" eyebrow="LET’S MEET" title={<>가까이에서,<br/><span>더 깊이 이야기하다.</span></>} intro="본사·창고가 있는 안성과 연구소·영업 거점인 용인. 방문 전 담당자에게 연락 주시면 안내해 드리겠습니다.">
  <nav className="co-wrap co-partner-jump" aria-label="사업장 선택">{places.map(p=><a key={p.id} href={`#${p.id}`}>{p.city} · {p.name} ↓</a>)}</nav>
  {places.map((p,i)=><section className="co-wrap co-place" id={p.id} key={p.id}>
   <div className="co-place-layout"><figure className="co-place-photo"><img src={`/media/company/location-original-${p.image}.jpg`} alt={`${p.name} 사업장`} width={640} height={480} loading="lazy"/></figure>
   <div className="co-place-info"><p className="co-kicker">0{i+1} / {p.en}</p><h2>{p.name}</h2><address><span className="co-postcode">{p.zip}</span><p>{p.address}</p></address>
   {p.id==="yongin" && <div className="co-address-note"><strong>방문 안내</strong><p>방문하실 사무실과 담당자를 전화로 먼저 확인해 주세요.</p></div>}
   <dl className="co-contact-list"><div><dt>TEL</dt><dd><a href="tel:03180573050">031-8057-3050</a></dd></div><div><dt>FAX</dt><dd>{p.fax}</dd></div><div><dt>EMAIL</dt><dd><a href="mailto:sk@samkwang-chem.com">sk@samkwang-chem.com</a></dd></div></dl>
   <a className="co-text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`} target="_blank" rel="noopener noreferrer">지도에서 길찾기 <ArrowUpRight size={18}/></a></div></div>
   <div className="co-map"><iframe title={`${p.city} ${p.name} 위치 지도`} src={`https://maps.google.com/maps?q=${encodeURIComponent(p.query)}&output=embed&hl=ko&z=16`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><p>지도가 표시되지 않으면 위 ‘지도에서 길찾기’를 이용해 주세요.</p></div>
  </section>)}
  <section className="co-wrap" aria-label="사업장 둘러보기"><div className="co-original-photos">{[2,3,5].map(n=><figure key={n}><img src={`/media/company/location-${n === 3 ? "original" : "refined"}-${n}.jpg`} alt={`${n<4?"본사":"연구소·영업"} 공간`} loading="lazy" width={640} height={480}/><figcaption>{n<4?"본사 & 창고":"연구소 & 영업"}</figcaption></figure>)}</div></section>
 </CompanyFrame>;
}
