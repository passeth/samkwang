import { CompanyHistory, CompanyNav } from "@/components/site/company-story";

export const metadata = { title: "회사 연혁" };

export default function CompanyHistoryPage() {
	return (
		<main id="main" className="wrap page-main company-subpage">
			<div className="page-heading">
				<p className="eyebrow">OUR JOURNEY</p>
				<h1>원료에서 연구로,<br />이어온 발자취.</h1>
				<p className="lead">1988년 삼광실업의 시작부터 소재·제형 연구까지.</p>
			</div>
			<CompanyNav />
			<CompanyHistory />
		</main>
	);
}
