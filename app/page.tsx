import { Hero } from "@/components/site/hero";
import {
	ImageBanner,
	LogoRail,
	MediaSplit,
	PhotoMosaic,
	StatStrip,
	StepMedia,
} from "@/components/site/rich-sections";
import { customers } from "@/data/company";
import { photos } from "@/data/research";
import { ArrowUpRight, ArrowRight } from "lucide-react";
export default function Home() {
	return (
		<main id="main">
			<Hero />
			<LogoRail title="원료와 제품을 함께 만드는 파트너" items={customers.slice(0, 7)} />
			<section className="section wrap intro" id="discover">
				<p className="eyebrow">FROM INGREDIENT TO POSSIBILITY</p>
				<div>
					<h2>
						좋은 제품의 시작에는,
						<br />
						좋은 원료의 선택이 있습니다.
					</h2>
					<p className="lead">
						화장품 원료 공급부터 소재·제형 연구개발,
						<br />
						초고압유화 임가공까지. 다음 제품의 가능성을 함께 살펴봅니다.
					</p>
					<a className="text-link" href="/company">
						삼광켐 알아보기 <ArrowUpRight size={20} />
					</a>
				</div>
			</section>
			<section className="catalog-teaser section">
				<div className="wrap">
					<div className="section-heading">
						<div>
							<p className="eyebrow">INGREDIENT LIBRARY</p>
							<h2>
								찾는 원료에,
								<br />더 가까이.
							</h2>
						</div>
						<a className="text-link" href="/products">
							전체 제품 탐색 <ArrowUpRight size={20} />
						</a>
					</div>
					<form className="home-search" action="/products">
						<label className="sr-only" htmlFor="home-q">
							제품명 또는 INCI 검색
						</label>
						<input
							id="home-q"
							name="q"
							placeholder="제품명 또는 INCI를 입력하세요"
						/>
						<button aria-label="원료 검색">
							<ArrowRight />
						</button>
					</form>
					<div className="category-links">
						{[
							"기능성",
							"나노에멀젼",
							"컨디셔닝",
							"실리콘",
							"분체",
							"계면활성제",
							"점증제",
							"유화보조제",
							"방부제",
						].map((name, i) => (
							<a
								key={name}
								href={`/products?category=${encodeURIComponent(name)}`}
							>
								<span className="index">0{i + 1}</span>
								<span>{name}</span>
								<ArrowUpRight size={18} />
							</a>
						))}
					</div>
				</div>
			</section>
			<StatStrip
				items={[
					["1988", "삼광실업 창립"],
					["2015", "기업부설연구소 설립"],
					["4", "캡슐화·가용화·안정화·정제"],
					["282", "원료 카탈로그"],
				]}
			/>
			<MediaSplit
				eyebrow="MATERIAL SCIENCE"
				title={
					<>
						공급하는 원료에서,
						<br />
						연구하는 소재로.
					</>
				}
				body="성분을 어떻게 담을지, 제형에 어떻게 적용할지. 캡슐화·가용화·안정화·정제 기술로 원료 다음의 질문을 이어갑니다."
				href="/technology"
				cta="삼광켐의 기술"
				video
				videoSrc="/media/clip2.mp4"
				image="/media/clip2-poster.jpg"
				alt="시험관에 담긴 오일 소재"
			/>
			<StepMedia
				eyebrow="HOW WE WORK"
				title={
					<>
						원료를 찾고,
						기술을 보고,
						다음 제품을 나눕니다.
					</>
				}
				steps={[
					{
						index: "01",
						name: "원료 탐색",
						body: "분류·제조사·INCI로 필요한 원료를 찾습니다.",
						image: "/media/technology/gceraplex-pack.jpg",
						alt: "Gceraplex 제품 용기",
					},
					{
						index: "02",
						name: "기술 검토",
						body: "캡슐화·가용화·안정화·정제와 제형 적용을 살펴봅니다.",
						image: "/media/technology/gceraplex-structure.jpg",
						alt: "Gceraplex 구조 도해",
					},
					{
						index: "03",
						name: "개발 상담",
						body: "샘플·견적·임가공 조건을 담당자와 확인합니다.",
						image: "/media/research/lab-02.jpg",
						alt: "연구소 분석 공간",
					},
				]}
			/>
			<PhotoMosaic photos={photos} />
			<ImageBanner
				src="/media/hero.jpg"
				alt="유리 용기와 액체 소재"
				eyebrow="NEXT FORMULA"
				title={
					<>
						다음 제품의 질문을,
						삼광켐과 나눠보세요.
					</>
				}
				body="원료, 기술자료, 샘플·견적, 초고압유화 임가공."
				href="/contact"
				cta="개발·기술 상담"
			/>
		</main>
	);
}
