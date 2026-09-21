import Link from "next/link";
import type { ReactNode } from "react";
import "@/app/technology-editorial.css";

export function TechnologyFrame({ active, children }: { active: "technology" | "research" | "processing"; children: ReactNode }) {
 return <main id="main" className="technology-editorial"><nav className="te-nav" aria-label="연구·기술 메뉴"><Link className="te-brand" href="/technology">RESEARCH & TECHNOLOGY</Link><div>{[["technology", "/technology", "기술 개요"], ["research", "/research", "기업부설 연구소"], ["processing", "/services/microfluidization", "초고압유화 임가공"]].map(([key, href, label]) => <Link key={key} href={href} aria-current={active === key ? "page" : undefined}>{label}</Link>)}</div></nav>{children}</main>;
}
export function TechnologyHero({ label, title, description, image, caption }: { label: string; title: ReactNode; description: string; image?: string; caption?: string }) {
 return <header className={`te-hero ${image ? "te-hero-split" : ""}`}><div><p className="te-kicker">{label}</p><h1>{title}</h1><p className="te-intro">{description}</p></div>{image && <figure><img src={image} alt={caption ?? ""} />{caption && <figcaption>{caption}</figcaption>}</figure>}</header>;
}
export function TechnologyInquiry({ title = "적용하려는 원료와 조건을 알려주세요.", items }: { title?: string; items?: readonly string[] }) {
 return <section className="te-inquiry"><div><p className="te-kicker">TECHNICAL INQUIRY</p><h2>{title}</h2><p>적용 가능성, 필요한 자료와 검토 범위는 상담 후 안내합니다. 아래 정보가 아직 정해지지 않았다면 현재 검토 중인 조건을 보내주세요.</p><Link className="te-button" href="/contact">기술 상담 문의 <span aria-hidden="true">↗</span></Link></div><ol>{(items ?? ["원료명·조성 및 목표 제형", "목표 물성·현재 겪는 문제", "검토 수량·일정 및 필요한 기술 자료"]).map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ol></section>;
}
