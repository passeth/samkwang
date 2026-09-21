import Link from "next/link";
import { notFound } from "next/navigation";
import { technologies, technologyGuides } from "@/lib/technology";
import { technologyDetailContent } from "@/lib/technology-detail-content";
import { TechnologyFrame, TechnologyInquiry } from "@/components/site/technology-frame";
import { TechnologyMechanism } from "@/components/site/technology-mechanism";
import "@/app/technology-detail-enhanced.css";

type Props = { readonly params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
 const { slug } = await params;
 return { title: technologies.find(t => t.slug === slug)?.name ?? "기술" };
}
export default async function Page({ params }: Props) {
 const { slug } = await params;
 const t = technologies.find(x => x.slug === slug);
 if (!t) notFound();
 const guide = technologyGuides[t.slug];
 const content = technologyDetailContent[t.slug];
 return <TechnologyFrame active="technology"><div className={`td-detail td-${t.slug}`}>
  <div className="te-back"><Link href="/technology">← 기술 개요</Link><span>TECHNOLOGY / 0{technologies.findIndex(x => x.slug === slug) + 1}</span></div>
  <header className="te-hero te-hero-split td-hero">
   <div><p className="te-kicker">{t.en}</p><h1>{t.name}</h1><p className="te-intro">{t.headline}</p><p className="td-focus">{content.focus}</p><a className="td-jump" href="#case-reading">구조와 적용 살펴보기 <span aria-hidden="true">↓</span></a></div>
   <figure><img src={`/media/editorial/tech-${t.slug}.jpg`} alt={content.imageAlt} fetchPriority="high" /></figure>
  </header>
  <nav className="te-siblings" aria-label="세부 기술">{technologies.map(x => <Link href={`/technology/${x.slug}`} key={x.slug} aria-current={x.slug === slug ? "page" : undefined}>{x.name}</Link>)}</nav>
  <section className="te-section te-two-col"><div><p className="te-kicker">01 / METHOD</p><h2>기술의 원리</h2></div><div className="te-prose"><p className="te-intro">{t.body}</p><p>{t.detail}</p></div></section>
  <TechnologyMechanism slug={t.slug} />
  <section className="te-section td-case" id="case-reading">
   <div className="td-case-heading"><div><p className="te-kicker">02 / {content.caseLabel}</p><h2>{content.caseTitle}</h2></div><p>{content.caseIntro}</p></div>
   <div className="td-reading">{content.reading.map((item, i) => <article key={item.title}><span className="td-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
   {t.diagrams.length > 0 && <div className={`td-evidence td-evidence-${t.slug}`}><h3 className="td-evidence-label">구조와 분석 자료</h3><div className="te-diagrams">{t.diagrams.map(d => <figure key={d.src}><a href={d.src} target="_blank" rel="noopener noreferrer" aria-label={`${d.alt} 크게 보기 (새 탭)`}><img src={d.src} alt={d.alt} loading="lazy" /></a><figcaption>{d.caption}<a href={d.src} target="_blank" rel="noopener noreferrer">크게 보기 ↗</a></figcaption></figure>)}</div></div>}
  </section>
  <section className="te-section td-application"><div className="te-two-col"><div><p className="te-kicker">03 / FORMULATION REVIEW</p><h2>처방으로 연결하기</h2></div><div className="te-prose"><p>{t.slug === "solubilization" ? "난용성 성분을 수계 제형에 적용하려는 경우 검토하는 접근입니다. 사용할 성분과 계면활성제 조합, 목표 외관을 기준으로 상담합니다." : guide.application}</p></div></div>
   <div className="td-review-grid">{content.reviews.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
   <aside className="td-constraints" aria-labelledby="review-boundaries"><h3 id="review-boundaries">적용 전에 확인할 사항</h3><ul>{guide.constraints.map(item => <li key={item}>{item}</li>)}</ul></aside>
  </section>
  <section className="te-section te-two-col td-faq"><div><p className="te-kicker">04 / QUESTIONS</p><h2>자주 묻는 질문</h2></div><div>{content.faqs.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
  {t.products.length > 0 && <section className="te-section te-two-col"><div><p className="te-kicker">05 / RELATED MATERIALS</p><h2>관련 제품</h2></div><div className="te-product-links">{t.products.map(p => <Link key={p.id} href={`/products/${p.id}`}><span>{p.name}</span><span>제품 정보 ↗</span></Link>)}</div></section>}
  <TechnologyInquiry items={guide.checklist} />
 </div></TechnologyFrame>;
}
