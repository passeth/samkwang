import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const companyPages = [
 ["인사말·경영이념", "/company"],
 ["회사 연혁", "/company/history"],
 ["조직현황", "/company/organization"],
 ["공급사·고객사", "/company/partners"],
 ["오시는길", "/company/locations"],
] as const;

export function CompanyFrame({ current, number, eyebrow, title, intro, children }: {
 current: string; number: string; eyebrow: string; title: ReactNode; intro: string; children: ReactNode;
}) {
 return <main id="main" className="co-page">
  <div className="co-wrap co-breadcrumb"><Link href="/">HOME</Link><span>/</span><span>COMPANY</span><span className="co-page-number">{number} / 05</span></div>
  <header className="co-wrap co-heading">
   <p className="co-kicker">{eyebrow}</p>
   <h1>{title}</h1>
   <p className="co-intro">{intro}</p>
  </header>
  <nav className="co-tabs" aria-label="회사소개 메뉴"><div className="co-wrap">{companyPages.map(([label,href])=><Link key={href} href={href} aria-current={current===href ? "page":undefined}>{label}</Link>)}</div></nav>
  {children}
  <section className="co-wrap co-next"><div><p className="co-kicker">LET’S BUILD WHAT’S NEXT</p><h2>다음 제품의 시작,<br/>함께 이야기하겠습니다.</h2></div><Link className="co-button" href="/contact">개발·기술 상담 <ArrowUpRight size={20}/></Link></section>
 </main>;
}
export function ConceptImage({src,alt,className=""}:{src:string;alt:string;className?:string}) {
 return <figure className={`co-concept ${className}`}><img src={src} alt={alt} width={1536} height={1024} loading="lazy"/></figure>;
}
