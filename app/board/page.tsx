import { notices } from "@/data/notices";
import "../board-editorial.css";

export const metadata = {
	title: "자료·소식",
	description: "삼광켐의 연구·기술 자료와 전시회·세미나 소식를 만나보세요.",
};


export default function Board() {
	return (
		<main id="main" className="board-editorial">
			<div className="board-shell">
				<header className="board-intro">
					<div className="board-kicker"><span>SAMKWANG CHEM</span><span>KNOWLEDGE &amp; NEWS</span></div>
					<div className="board-intro-grid">
						<h1>원료를 읽고,<br />가능성을 나누다<span>.</span></h1>
						<div className="board-intro-aside"><p>자료·소식</p><p>원료와 제형을 이해하는 기술 자료부터<br />삼광켐이 함께해 온 소식까지.</p><a href="#board-resources">자료 둘러보기 <span aria-hidden="true">↓</span></a></div>
					</div>
				</header>

				<section id="board-resources" className="board-resources" aria-labelledby="board-resource-title">
					<div className="board-section-heading"><h2 id="board-resource-title">원료를 보는 두 가지 시선</h2><span>EXPLORE OUR RESOURCES</span></div>
					<div className="board-card-grid">
						<a className="board-card" href="/technology/encapsulation">
							<div className="board-card-image board-card-science"><img src="/media/editorial/tech-encapsulation.jpg" alt="활성 성분을 감싸는 캡슐 구조 일러스트레이션" width="800" height="520" /><span className="board-image-label">01 / MATERIAL SCIENCE</span></div>
							<div className="board-card-copy"><p className="board-label">TECH INSIGHT · 캡슐화</p><div className="board-card-title"><h3>성분을 어떤 구조로<br />담을 것인가.</h3><span aria-hidden="true">↗</span></div><p>캡슐화의 원리와 Gceraplex의 구조를 기술 자료로 살펴봅니다.</p></div>
						</a>
						<a className="board-card" href="/research">
							<div className="board-card-image"><img src="/media/editorial/lab-editorial.jpg" alt="정돈된 연구 공간" width="800" height="520" loading="lazy" /><span className="board-image-label">02 / RESEARCH &amp; DEVELOPMENT</span></div>
							<div className="board-card-copy"><p className="board-label">RESEARCH · 기업부설 연구소</p><div className="board-card-title"><h3>원료의 이름에서,<br />제형의 질문으로.</h3><span aria-hidden="true">↗</span></div><p>연구소의 개발 이력과 특허 출원, 연구 시설을 소개합니다.</p></div>
						</a>
					</div>
					<a className="board-catalog-link" href="/products"><span className="board-label">PRODUCT LIBRARY</span><span>찾고 있는 원료가 있나요? <strong>제품 자료 살펴보기</strong></span><span aria-hidden="true">↗</span></a>
				</section>

				<section id="archive" className="board-archive" aria-labelledby="board-archive-title">
					<div className="board-archive-intro"><div><p className="board-label">FROM THE ARCHIVE</p><h2 id="board-archive-title">함께해 온 소식.</h2></div><div><p>전시회와 세미나, 삼광켐의 새로운 소식을 전합니다.</p></div></div>
					<ol className="board-notices">
						{notices.map((notice, index) => <li key={notice.id}><a href={`/board/${notice.id}`}><span className="board-notice-category">{index === 0 ? "고정 안내" : notice.category}</span><h3>{notice.title}</h3><time dateTime={notice.date}>{notice.date.replaceAll("-", ".")}</time><span className="board-notice-arrow" aria-hidden="true">↗</span></a></li>)}
					</ol>
				</section>

				<section className="board-contact" aria-labelledby="board-contact-title"><p className="board-label">LET’S FIND THE NEXT POSSIBILITY</p><div><h2 id="board-contact-title">다음 질문을<br />함께 살펴볼까요?</h2><div><p>필요한 제품 자료나 적용 조건이 있다면<br />삼광켐에 직접 문의해 주세요.</p><a href="/contact">개발·기술 상담 <span aria-hidden="true">↗</span></a></div></div></section>
			</div>
		</main>
	);
}
