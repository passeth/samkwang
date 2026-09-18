import { ArrowUpRight } from "lucide-react";
import { Locations } from "@/components/site/locations";
import {
	CompanyNav,
	CompanyHistory,
	CompanyOrganization,
	CompanyPartners,
} from "@/components/site/company-story";
export const metadata = { title: "회사소개" };
export default function Company() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">ABOUT SAMKWANG CHEM</p>
				<h1>
					원료를 찾는 일은,
					<br />
					제품을 생각하는 일.
				</h1>
				<p className="lead">
					어떤 원료를 사용할지, 제형에는 어떻게 적용할지.
					<br />
					제품 개발에는 원료 이름만으로 답하기 어려운 질문이 있습니다.
				</p>
			</div>
			<CompanyNav />
			<figure className="editorial-cover">
				<img
					src="/media/hero.jpg"
					width="1600"
					height="900"
					alt="성분과 제형을 살펴보는 과정을 표현한 브랜드 콘셉트"
				/>
			</figure>
			<section id="business" className="editorial-section">
				<p className="eyebrow">OUR BUSINESS</p>
				<div>
					<h2>
						원료와 기술,
						<br />
						그리고 다음 제품을 연결합니다.
					</h2>
					<p className="lead">
						삼광켐은 화장품 원료 공급과 기능성 소재·제형 연구개발, 초고압유화
						임가공을 함께 다룹니다. 캡슐화·가용화·안정화·정제 기술을 바탕으로
						소재의 특성과 적용을 이야기합니다.
					</p>
				</div>
			</section>
			<div className="business-lines">
				{[
					[
						"01",
						"원료 공급",
						"분류·제조사·INCI를 바탕으로 필요한 원료를 살펴보세요.",
						"/products",
					],
					[
						"02",
						"소재·제형 연구개발",
						"성분을 담는 구조와 제형에 적용하는 방법을 연구합니다.",
						"/research",
					],
					[
						"03",
						"초고압유화 임가공",
						"Microfluidizer를 활용한 초고압유화 공정을 상담합니다.",
						"/services/microfluidization",
					],
				].map(([n, title, body, href]) => (
					<div key={n}>
						<p className="eyebrow">{n}</p>
						<h3>{title}</h3>
						<p>{body}</p>
						<a className="text-link" href={href}>
							자세히 보기 <ArrowUpRight size={18} />
						</a>
					</div>
				))}
			</div>
			<CompanyHistory />
			<CompanyOrganization />
			<CompanyPartners />
			<section id="locations" className="company-locations">
				<p className="eyebrow">OUR LOCATIONS</p>
				<h2>삼광켐을 만나는 곳</h2>
				<Locations />
			</section>
			<section className="editorial-section">
				<p className="eyebrow">LET’S WORK TOGETHER</p>
				<div>
					<h2>
						다음 제품의 질문을,
						<br />
						삼광켐과 나눠보세요.
					</h2>
					<p className="lead">
						찾고 있는 원료와 목표로 하는 제형을 알려주세요.
					</p>
					<a className="action" href="/contact">
						개발·기술 상담 <ArrowUpRight size={18} />
					</a>
				</div>
			</section>
		</main>
	);
}
