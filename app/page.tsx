import { Hero } from "@/components/site/hero";
import { ArrowUpRight, ArrowRight } from "lucide-react";
export default function Home() {
	return (
		<main id="main">
			<Hero />
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
			<section className="section wrap science-feature">
				<div className="science-image">
					<img
						src="/media/hero.jpg"
						width="1600"
						height="900"
						loading="lazy"
						alt="유리 용기에 담긴 액체 소재의 브랜드 콘셉트 이미지"
					/>
				</div>
				<div>
					<p className="eyebrow">MATERIAL SCIENCE</p>
					<h2>
						공급하는 원료에서,
						<br />
						연구하는 소재로.
					</h2>
					<p className="lead">
						성분을 어떻게 담을지, 제형에 어떻게 적용할지.
						<br />
						캡슐화·가용화·안정화·정제 기술로
						<br />
						원료 다음의 질문을 이어갑니다.
					</p>
					<a className="text-link" href="/technology">
						삼광켐의 기술 <ArrowUpRight size={20} />
					</a>
				</div>
			</section>
			<section className="contact-band">
				<div className="wrap">
					<p className="eyebrow">LET’S TALK ABOUT YOUR NEXT PRODUCT</p>
					<h2>
						다음 제품의 질문을,
						<br />
						삼광켐과 나눠보세요.
					</h2>
					<a className="action light" href="/contact">
						개발·기술 상담 <ArrowUpRight size={20} />
					</a>
				</div>
			</section>
		</main>
	);
}
