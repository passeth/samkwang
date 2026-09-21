import Link from "next/link";
import { TechnologyJourney } from "@/components/site/technology-journey";
import "@/app/technology-immersive.css";

export const metadata = { title: "연구·기술", description: "캡슐화, 가용화, 안정화, 정제. 원료의 특성에서 출발하는 삼광켐의 네 가지 기술 접근을 만나보세요." };

export default function Technology() {
 return <main id="main" className="ti-page">
  <nav className="ti-nav" aria-label="연구·기술 메뉴">
   <Link href="/technology" className="ti-nav-label">RESEARCH & TECHNOLOGY</Link>
   <div><Link href="/technology" aria-current="page">기술 개요</Link><Link href="/research">기업부설 연구소</Link><Link href="/services/microfluidization">초고압유화 임가공</Link></div>
  </nav>
  <TechnologyJourney />
  <section className="ti-next" aria-labelledby="ti-next-title"><div className="ti-next-heading"><p className="ti-eyebrow">BEYOND THE MATERIAL</p><h2 id="ti-next-title">연구에서 공정까지.<br />가능성을 이어갑니다.</h2></div><div className="ti-next-grid">
   <Link href="/research" className="ti-next-card"><img src="/media/editorial/lab-editorial.jpg" alt="연구 장비와 실험 공간" loading="lazy" /><div><p className="ti-eyebrow">R&D CENTER</p><h3>기업부설 연구소</h3><p>연구소 소개와 개발 이력, 연구 시설을 만나보세요.</p><span className="ti-next-action">연구소 살펴보기 <span aria-hidden="true">↗</span></span></div></Link>
   <Link href="/services/microfluidization" className="ti-next-card"><img src="/media/clip4-poster.jpg" alt="" loading="lazy" /><div><p className="ti-eyebrow">MICROFLUIDIZATION</p><h3>초고압유화 임가공</h3><p>Microfluidizer의 작동 원리와 공정·설비를 확인하세요.</p><span className="ti-next-action">공정·설비 살펴보기 <span aria-hidden="true">↗</span></span></div></Link>
  </div></section>
  <section className="ti-contact"><p className="ti-eyebrow">LET’S FIND YOUR APPROACH</p><h2>지금 고민하는 원료,<br />함께 살펴볼까요?</h2><Link href="/contact" className="ti-link ti-link-light">기술 상담 문의 <span aria-hidden="true">↗</span></Link></section>
 </main>;
}
