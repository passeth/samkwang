import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CompanyFrame } from "@/components/site/company-frame";
import { CompanyFilm } from "@/components/site/company-film";
import { history } from "@/data/company";
import "./history-journey.css";

export const metadata = { title: "회사 연혁" };

const chapters = [
  { year: "1988", label: "THE BEGINNING", title: <>삼광실업,<br />첫 장을 열다.</>, description: "1988년 1월, 삼광실업이 창립했습니다. 1993년 삼광화학약품㈜로 법인을 전환하며 회사의 기반을 다졌습니다.", detail: "1988.01 삼광실업 창립 / 1993.06 법인 전환", image: "/media/company/mineral-study.jpg", alt: "광물의 층과 투명한 유리로 표현한 소재 탐구 콘셉트", caption: "MATERIAL STUDY · 소재 탐구를 표현한 콘셉트 이미지" },
  { year: "2012", label: "A NEW CHAPTER", title: <>삼광켐이라는 이름으로,<br />새로운 출발.</>, description: "2012년 12월, ㈜삼광켐으로 상호를 변경하고 경기도 안성으로 사옥을 이전했습니다. 새로운 이름과 터전에서 다음 단계를 준비했습니다.", detail: "2012.12 상호 변경 · 안성 사옥 이전", image: "/media/company/location-original-1.jpg", alt: "삼광켐 공식 회사 소개에 수록된 사업장 사진", caption: "COMPANY ARCHIVE · 공식 사업장 사진 (촬영 시점 미상)" },
  { year: "2015", label: "INTO RESEARCH", title: <>공급의 경험에,<br />연구의 깊이를 더하다.</>, description: "2015년 6월 기업부설연구소를 설립하고, 같은 해 11월 Gceraplex 원료를 출시했습니다. 이듬해 Epidermics 출시와 국내외 In-Cosmetics 참가로 이어졌습니다.", detail: "2015.06 기업부설연구소 설립 / 2015.11 Gceraplex 출시", image: "/media/editorial/lab-editorial.jpg", alt: "소재와 제형 연구를 표현하는 실험실 콘셉트 이미지", caption: "RESEARCH STUDY · 연구개발을 표현한 콘셉트 이미지" },
];

export default function CompanyHistoryPage() {
  return (
    <CompanyFrame current="/company/history" number="02" eyebrow="OUR JOURNEY" title={<>1988년의 시작,<br/><span>오늘로 이어진 여정.</span></>} intro="원료 공급의 기반을 다지고 연구개발로 영역을 넓혀온 삼광켐의 주요 발자취를 소개합니다.">
      <div className="history-journey">
        <CompanyFilm src="/media/clip4.mp4" poster="/media/clip4-poster.jpg" title={<>작은 시작에서,<br/>소재의 더 큰 가능성으로.</>} description="삼광실업의 창립부터 삼광켐의 연구개발까지. 한 걸음씩 쌓아온 우리의 여정입니다." href="#journey-chapters" linkLabel="여정 살펴보기"/>

        <nav className="co-wrap hj-chapter-nav" aria-label="주요 연혁 바로가기">{chapters.map((chapter, i) => <a key={chapter.year} href={`#chapter-${chapter.year}`}><span>0{i + 1}</span><strong>{chapter.year}</strong><span>{["창립", "삼광켐의 출발", "기업부설연구소 설립"][i]}</span><ArrowDown size={16} aria-hidden="true" /></a>)}</nav>

        <section className="co-wrap hj-chapters" id="journey-chapters" aria-label="삼광켐의 세 가지 전환점">
          {chapters.map((chapter, i) => <article className={`hj-chapter hj-chapter-${chapter.year}`} id={`chapter-${chapter.year}`} key={chapter.year}>
            <div className="hj-chapter-copy"><p className="hj-eyebrow">0{i + 1} / {chapter.label}</p><div className="hj-year" aria-hidden="true">{chapter.year}</div><h2><span className="hj-sr-only">{chapter.year}년, </span>{chapter.title}</h2><p className="hj-description">{chapter.description}</p><p className="hj-detail">{chapter.detail}</p></div>
            <figure className="hj-chapter-image"><img src={chapter.image} alt={chapter.alt} width={1536} height={1024} loading="lazy" /></figure>
          </article>)}
        </section>

        <section className="hj-archive" aria-labelledby="history-archive-title"><div className="co-wrap hj-archive-grid">
          <div className="hj-archive-intro"><p className="hj-eyebrow">THE RECORD · 1988—2019</p><h2 id="history-archive-title">변화의 순간을,<br />하나의 기록으로.</h2><p>창립, 이전, 연구소 설립, 원료 출시.<br />삼광켐이 걸어온 발자취를 소개합니다.</p><div className="hj-record-count"><strong>{history.reduce((sum, item) => sum + item.events.length, 0)}</strong><span>주요 연혁<br />공식 수록 기록 기준</span></div><Link href="/research" className="hj-research-link">지금의 연구개발 살펴보기 <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
          <ol className="hj-timeline">{history.map(({ year, events }) => <li id={`history-${year}`} key={year}><h3>{year}</h3><ul>{events.map(([month, event]) => <li key={`${month}-${event}`}><time dateTime={`${year}-${month}`}><span className="hj-sr-only">{year}년 </span>{month}<span className="hj-sr-only">월</span></time><span>{event}</span></li>)}</ul></li>)}</ol>
        </div></section>
      </div>
    </CompanyFrame>
  );
}
