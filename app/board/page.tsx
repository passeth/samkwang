import { ImageBanner, PhotoMosaic } from "@/components/site/rich-sections";
import { photos } from "@/data/research";
export const metadata = { title: "컨텐츠 게시판" };

const contentTypes = [
	["COMPANY NEWS", "삼광켐의 소식과 새로운 소식", "회사 소식, 주요 일정, 파트너와 함께 만든 변화를 전합니다."],
	["TECH INSIGHT", "원료와 제형을 이해하는 기술 이야기", "성분의 특성과 제형 적용을 연결하는 연구·기술 콘텐츠를 모읍니다."],
	["RESOURCE UPDATE", "제품 자료와 안내 업데이트", "제품 자료와 적용 정보, 상담에 도움이 되는 안내를 확인할 수 있습니다."],
] as const;

export default function Board() {
	return (
		<main id="main">
			<ImageBanner
				src="/media/hero.jpg"
				alt="유리 용기와 액체 소재"
				eyebrow="CONTENT BOARD"
				title="삼광켐의 이야기와 자료를 한곳에."
				body="회사 소식, 기술 인사이트, 제품 자료 업데이트."
				href="/contact"
				cta="자료 문의"
			/>
			<div className="wrap page-main">
				<section className="editorial-section" aria-label="게시판 콘텐츠 영역">
					{contentTypes.map(([label, title, body], index) => (
						<article className="tech-row" key={label}>
							<span className="index">0{index + 1}</span>
							<div>
								<p className="eyebrow">{label}</p>
								<h2>{title}</h2>
							</div>
							<p>{body}</p>
						</article>
					))}
				</section>
				<section className="editorial-section">
					<p className="eyebrow">NEED MORE INFORMATION?</p>
					<div>
						<h2>필요한 자료를 직접 문의해 보세요.</h2>
						<a className="action" href="/contact">
							개발·기술 상담
						</a>
					</div>
				</section>
				<PhotoMosaic photos={photos} />
			</div>
		</main>
	);
}
