import { history, suppliers, customers } from "@/data/company";
import { FlaskConical, Building2, ArrowDown } from "lucide-react";

export function CompanyNav() {
	return (
		<nav className="company-nav" aria-label="회사소개 바로가기">
			{[
				["사업 소개", "business"],
				["회사 연혁", "history"],
				["조직 구성", "organization"],
				["공급사·고객사", "partners"],
				["사업장 안내", "locations"],
			].map(([label, id]) => (
				<a key={id} href={`#${id}`}>
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
				<p>1988년 삼광실업의 시작부터 소재·제형 연구까지.</p>
			</div>
			<div className="history-landmarks">
				<img
					src="/media/hero.jpg"
					alt="유리 용기와 소재 연구를 표현한 브랜드 이미지"
					width="1600"
					height="900"
					loading="lazy"
				/>
				<div>
					{[
						["1988", "삼광실업 창립"],
						["2012", "㈜삼광켐으로 상호 변경"],
						["2015", "기업부설연구소 설립"],
					].map(([year, title]) => (
						<p key={year}>
							<strong>{year}</strong>
							<span>{title}</span>
						</p>
					))}
				</div>
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
				<h2>연구와 공급을 잇는 조직.</h2>
				<p>연구소·영업과 본사·창고, 두 거점을 중심으로 함께합니다.</p>
			</div>
			<div className="organization-chart">
				<div className="organization-root">
					<span>경영진</span>
					<strong>CO-CEO</strong>
				</div>
				<ArrowDown className="organization-arrow" aria-hidden="true" />
				<ul className="organization-branches">
					<li>
						<div className="organization-office">
							<FlaskConical size={32} aria-hidden="true" />
							<p className="eyebrow">R&D CENTER & SALES</p>
							<h3>연구소 & 영업</h3>
							<p>용인 · 흥덕IT밸리</p>
						</div>
						<ul className="organization-teams">
							{[
								["영업", "Sales Team"],
								["연구", "Research Team"],
								["구매", "Purchasing"],
								["경영", "Management"],
							].map(([ko, en]) => (
								<li key={ko}>
									<strong>{ko}</strong>
									<span lang="en">{en}</span>
								</li>
							))}
						</ul>
					</li>
					<li>
						<div className="organization-office">
							<Building2 size={32} aria-hidden="true" />
							<p className="eyebrow">HEADQUARTERS</p>
							<h3>본사 & 창고</h3>
							<p>안성 · 양성로</p>
						</div>
						<ul className="organization-teams">
							<li>
								<strong>물류</strong>
								<span lang="en">Logistics Team</span>
							</li>
						</ul>
					</li>
				</ul>
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
