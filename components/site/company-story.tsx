import { history, suppliers, customers } from "@/data/company";
import { FlaskConical, Building2 } from "lucide-react";

export function CompanyNav() {
	return (
		<nav className="company-nav" aria-label="회사소개 바로가기">
			{[
				["사업 소개", "/company"],
				["회사 연혁", "/company/history"],
				["조직 구성", "/company/organization"],
				["공급사·고객사", "/company/partners"],
				["사업장 안내", "/company/locations"],
			].map(([label, id]) => (
				<a key={id} href={id}>
					{label}
				</a>
			))}
		</nav>
	);
}

export function CompanyHistory() {
	return (
		<section id="history" className="company-section">
			<div className="company-section-heading">
				<p className="eyebrow">OUR JOURNEY</p>
				<h2>
					원료에서 연구로,
					<br />
					이어온 발자취.
				</h2>
			</div>
			<div className="history-landmarks">
				<div className="history-landmarks-media">
					<img
						src="/media/hero.jpg"
						alt="유리 용기와 소재 연구를 표현한 브랜드 이미지"
						width="1600"
						height="900"
						loading="lazy"
					/>
				</div>
				<div className="history-landmarks-facts">
					{[
						["1988", "삼광실업 창립"],
						["2012", "㈜삼광켐으로 상호 변경"],
						["2015", "기업부설연구소 설립"],
						["2019", "대표이사 변경 · 대표이사 이석주"],
					].map(([year, title]) => (
						<p key={year}>
							<strong>{year}</strong>
							<span>{title}</span>
						</p>
					))}
				</div>
			</div>
			<div className="history-timeline-heading">
				<p className="eyebrow">FULL TIMELINE</p>
				<p>변화의 순간을 연도별로 확인하세요.</p>
			</div>
			<ol className="history-timeline">
				{history.map((item) => (
					<li key={item.year}>
						<h3>{item.year}</h3>
						<ul>
							{item.events.map(([month, event]) => (
								<li key={`${month}-${event}`}>
									<time dateTime={`${item.year}-${month}`}>{month}월</time>
									<span>{event}</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ol>
		</section>
	);
}

export function CompanyOrganization() {
	return (
		<section id="organization" className="company-section">
			<div className="company-section-heading">
				<p className="eyebrow">PEOPLE & ORGANIZATION</p>
				<h2>연구와 공급을 잇는 사람들.</h2>
				<p>연구소·영업과 본사·창고, 서로 다른 질문을 하나의 제품으로 연결합니다.</p>
			</div>
			<div className="organization-intro">
				<p>TEAM</p>
				<h3>각자의 전문성이 모여<br />다음 제품의 조건을 찾습니다.</h3>
			</div>
			<ul className="organization-people">
				{[
					["01", "연구소장", "R&D CENTER", "연구의 방향과 개발 조건"],
					["02", "연구원", "FORMULATION", "소재와 제형의 적용 검토"],
					["03", "영업·기술", "TECHNICAL SALES", "고객의 질문과 샘플 상담"],
					["04", "구매·물류", "SUPPLY & LOGISTICS", "원료 조달과 납품의 연결"],
				].map(([index, role, en, body]) => (
					<li key={index}>
						<div className={`person-concept person-concept-${index}`} aria-label={`${role} 콘셉트 이미지`}>
							<span>{index}</span>
							<FlaskConical size={28} aria-hidden="true" />
						</div>
						<div className="organization-person-copy">
							<strong>{role}</strong>
							<span>{en}</span>
							<p>{body}</p>
						</div>
					</li>
				))}
			</ul>
			<div className="organization-branches">
				<div>
					<FlaskConical size={24} aria-hidden="true" />
					<p className="eyebrow">R&D CENTER & SALES</p>
					<h3>연구소 & 영업</h3>
					<p>용인 · 흥덕IT밸리</p>
				</div>
				<div>
					<Building2 size={24} aria-hidden="true" />
					<p className="eyebrow">HEADQUARTERS</p>
					<h3>본사 & 창고</h3>
					<p>안성 · 양성로</p>
				</div>
			</div>
		</section>
	);
}

function PartnerGrid({
	items,
}: {
	readonly items: readonly (readonly [string, string])[];
}) {
	return (
		<ul className="partner-grid">
			{items.map(([name, file]) => (
				<li key={name}>
					<img
						src={`/media/partners/${file}`}
						alt={`${name} 로고`}
						loading="lazy"
						width="240"
						height="96"
					/>
					<span>{name}</span>
				</li>
			))}
		</ul>
	);
}

export function CompanyPartners() {
	return (
		<section id="partners" className="company-section">
			<div className="company-section-heading">
				<p className="eyebrow">OUR PARTNERS</p>
				<h2>함께 이어가는 가치.</h2>
				<p>원료를 공급하는 파트너에서 제품을 만드는 고객사까지.</p>
			</div>
			<div className="partner-section-heading">
				<h3>공급사</h3>
				<span lang="en">SUPPLIERS</span>
			</div>
			<PartnerGrid items={suppliers} />
			<div className="partner-section-heading">
				<h3>고객사</h3>
				<span lang="en">CUSTOMERS</span>
			</div>
			<PartnerGrid items={customers} />
		</section>
	);
}
