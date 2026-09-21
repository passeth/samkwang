import "../research-enhanced.css";
import {
	developmentDirections,
	milestones,
	organization,
	patent,
	photos,
	profile,
} from "@/data/research";
import Link from "next/link";
import { TechnologyFrame, TechnologyHero, TechnologyInquiry } from "@/components/site/technology-frame";

export const metadata = { title: "기업부설 연구소" };

export default function Page() {
	return (
		<TechnologyFrame active="research"><TechnologyHero label="R&D CENTER / 02" title={<>기능성 소재와 제형을<br />연구합니다.</>} description="2015년 설립된 삼광켐 기업부설 연구소. 개발 제품과 특허 출원 기록, 조직과 시설을 소개합니다." image="/media/editorial/lab-editorial.jpg" /><div className="te-body"><nav className="company-nav" aria-label="연구소 소개 바로가기">
				{[
					["개요", "profile"],
					["개발 방향", "direction"],
					["개발 이력", "history"],
					["특허", "patent"],
					["조직", "organization"],
					["시설", "facility"],
				].map(([label, id]) => (
					<a key={id} href={`#${id}`}>
						{label}
					</a>
				))}
			</nav>
			<section id="profile" className="editorial-section research-editorial">
				<div className="research-editorial-heading">
					<div>
						<p className="eyebrow">01 · R&amp;D CENTER</p>
						<h2>연구소 개요</h2>
					</div>
					<span className="research-editorial-mark" aria-hidden="true">↗</span>
				</div>
				<div>
					<p className="lead">
						기능성 소재 및 제형 개발을 주요 사업으로 하는 기업부설 연구소입니다.
					</p>
					<p className="research-editorial-note">
						2015년 설립된 기업부설 연구소에서 기능성 소재와 제형 개발을
						이어왔습니다. 캡슐화·가용화·안정화·정제를 연구 주제로 다룹니다.
					</p>
					<dl className="spec-list">
						{profile.map(([label, value]) => (
							<div key={label}>
								<dt>{label}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>
			<section id="direction" className="company-section rd-direction">
 <div className="company-section-heading"><p className="eyebrow">RESEARCH DIRECTION</p><h2>연구가 향하는 방향</h2><p>기능성 소재와 제형 개발을 위한 연구 모델과 개발 방향입니다.</p></div>
 <div className="rd-model"><p className="rd-model-label">DEVELOPMENT FOCUS</p><h3>기능성소재 및 제형개발</h3><span className="rd-model-bridge">연구모델</span></div>
 <ol className="rd-pillars">{developmentDirections.map((direction, index) => <li key={direction.title}><span className="rd-index">0{index + 1}</span><h3>{direction.title}</h3><ul>{direction.items.map(item => <li key={item}>{item}</li>)}</ul></li>)}</ol>
 </section>
 <section id="history" className="editorial-section research-editorial">
				<div className="research-editorial-heading">
					<div>
						<p className="eyebrow">02 · PRODUCT APPLICATION</p>
						<h2>개발 제품과 일정</h2>
					</div>
					<span className="research-editorial-mark" aria-hidden="true">↗</span>
				</div>
				<div>
					<p className="lead">
						Gceraplex와 Epidermics의 개발부터 출시까지.
					</p>
					<ul className="research-milestones">
						{milestones.map((item) => (
							<li key={item.name}>
								<p className="eyebrow">{item.name}</p>
								<dl className="spec-list">
									<div>
										<dt>개발 기간</dt>
										<dd>{item.developed}</dd>
									</div>
									<div>
										<dt>출시</dt>
										<dd>
											<time dateTime={item.launched.replaceAll(".", "-")}>
												{item.launched}
											</time>
										</dd>
									</div>
								</dl>
								<p className="research-milestone-links">
									<a className="text-link" href={`/products/${item.productId}`}>
										제품 보기
									</a>
									<a className="text-link" href={item.techHref}>
										관련 기술
									</a>
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section id="patent" className="editorial-section research-editorial research-editorial-dark">
				<div className="research-editorial-heading">
					<div>
						<p className="eyebrow">03 · INTELLECTUAL PROPERTY</p>
						<h2>특허 출원 기록</h2>
					</div>
					<span className="research-editorial-mark" aria-hidden="true">↗</span>
				</div>
				<div>
					<p className="lead">
						연구소 설립 해에 비주얼 캡슐 제조 방법을 특허 출원했습니다.

					</p>
					<dl className="spec-list">
						<div>
							<dt>출원일</dt>
							<dd>
								<time dateTime="2015-10-12">{patent.filed}</time>
							</dd>
						</div>
						<div>
							<dt>발명의 명칭</dt>
							<dd>{patent.title}</dd>
						</div>
					</dl>
					<Link className="text-link" href="/technology">
						연구 기술 살펴보기
					</Link>
				</div>
			</section>
			<section id="organization" className="company-section">
				<div className="company-section-heading">
					<p className="eyebrow">LAB ORGANIZATION</p>
					<h2>연구소 조직</h2>
<p>기술연구소를 중심으로 연결되는 네 가지 연구 분야입니다.</p>
 </div>
 <div className="rd-organization" aria-label="기술연구소의 네 가지 병렬 연구 분야">
 <div className="rd-org-root"><span>R&amp;D CENTER</span><h3>기술연구소</h3></div>
 <ul className="rd-org-branches">{organization.map((role, index) => <li key={role.title}><span className="rd-index">0{index + 1}</span><h3>{role.title}</h3><p>{role.description}</p></li>)}</ul>
 </div>
			</section>
			<section id="facility" className="company-section">
				<div className="company-section-heading">
					<p className="eyebrow">LABORATORY</p>
					<h2>연구소 시설</h2>
					<p>실험·분석이 이루어지는 연구소 작업 공간입니다.</p>
				</div>
				<ul className="lab-photos">
					{photos.map((photo) => (
						<li key={photo.src}>
							<figure>
								<img
									src={photo.src}
									alt={photo.alt}
									width="690"
									height="690"
									loading="lazy"
								/>
							</figure>
						</li>
					))}
				</ul>
			</section>
			</div><TechnologyInquiry /></TechnologyFrame>
	);
}
