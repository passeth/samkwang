import { CompanyNav, CompanyOrganization } from "@/components/site/company-story";

export const metadata = { title: "조직 구성" };

export default function CompanyOrganizationPage() {
	return (
		<main id="main" className="wrap page-main company-subpage">
			<div className="page-heading">
				<p className="eyebrow">PEOPLE &amp; ORGANIZATION</p>
				<h1>연구와 공급을<br />잇는 사람들.</h1>
				<p className="lead">각자의 전문성이 모여 다음 제품의 조건을 찾습니다.</p>
			</div>
			<CompanyNav />
			<CompanyOrganization />
		</main>
	);
}
