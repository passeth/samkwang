import {
	milestones,
	organization,
	patent,
	photos,
	profile,
} from "@/data/research";
import Link from "next/link";
import { ImageBanner, MediaSplit } from "@/components/site/rich-sections";

export const metadata = { title: "기업부설 연구소" };

export default function Page() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading research-page-heading">
				<div className="research-heading-meta">
					<span>01.</span>
					<span>R&amp;D CENTER · 2015—2026</span>
				</div>
				<p className="eyebrow">RESEARCH & DEVELOPMENT</p>
				<h1>
					원료의 이름에서,
					<br />
					제형의 질문으로.
				</h1>
				<p className="lead">
					성분을 어떤 구조로 담을지, 제형에 어떻게 적용할지.
					<br />
					삼광켐 기업부설 연구소는 기능성 소재와 제형을 개발하며 이러한 질문을
					연구합니다.
				</p>
			</div>
			<MediaSplit
				eyebrow="LABORATORY"
				title={
					<>
						기능성 소재와 제형을
						<br />
						연구하는 자리.
					</>
				}
				body="2015년 설립된 기업부설 연구소에서 캡슐화·가용화·안정화·정제를 다룹니다."
				href="/technology"
				cta="연구 기술 살펴보기"
				video
				videoSrc="/media/clip3.mp4"
				image="/media/clip3-poster.jpg"
				alt="시험관을 배열하는 연구소 작업"
				reverse
			/>
			<nav className="company-nav" aria-label="연구소 소개 바로가기">
				{[
					["개요", "profile"],
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
						<h2>연구를 제품으로.</h2>
					</div>
					<span className="research-editorial-mark" aria-hidden="true">↗</span>
				</div>
				<div>
					<p className="lead">
						원료를 관찰하는 데서 멈추지 않고, 제형에 적용되고 제품으로
						이어지는 조건까지 확인합니다.
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
			<section id="history" className="editorial-section research-editorial">
				<div className="research-editorial-heading">
					<div>
						<p className="eyebrow">02 · PRODUCT APPLICATION</p>
						<h2>제품으로 확인하는 연구.</h2>
					</div>
					<span className="research-editorial-mark" aria-hidden="true">↗</span>
				</div>
				<div>
					<p className="lead">
						Gceraplex와 Epidermics. 연구소의 질문이 실제 소재와 제형으로
						이어진 기록입니다.
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
						<h2>질문을 특허로 남깁니다.</h2>
					</div>
					<span className="research-editorial-mark" aria-hidden="true">↗</span>
				</div>
				<div>
					<p className="lead">
						연구소 설립 해에 비주얼 캡슐 제조 방법을 특허 출원했습니다.
						등록 여부가 아닌 출원 사실과 발명의 명칭을 기준으로 소개합니다.
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
					<p>소장과 연구원으로 구성된 연구소 조직입니다.</p>
				</div>
				<div className="lab-org" aria-label="연구소 조직도">
					{organization.map((role, index) => (
						<div
							key={role}
							className={index === 0 ? "lab-org-root" : "lab-org-node"}
						>
							{index === 0 ? <strong>{role}</strong> : role}
						</div>
					))}
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
			<ImageBanner
				src="/media/technology/epidermics-hydrogel.jpg"
				alt="Epidermics 다중 안정화 도해"
				eyebrow="TECHNOLOGY"
				title="연구를 기술과 제품으로 이어갑니다."
				body="Gceraplex, Epidermics, Hexanediol-6, MPO(P)."
				href="/technology"
				cta="기술 살펴보기"
			/>
		</main>
	);
}
