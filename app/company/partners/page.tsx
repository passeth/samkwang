import { CompanyNav, CompanyPartners } from "@/components/site/company-story";

export const metadata = { title: "공급사·고객사" };

export default function CompanyPartnersPage() {
	return (
		<main id="main" className="wrap page-main company-subpage">
			<div className="page-heading">
				<p className="eyebrow">OUR PARTNERS</p>
				<h1>함께 이어가는<br />가치.</h1>
				<p className="lead">원료를 공급하는 파트너에서 제품을 만드는 고객사까지.</p>
			</div>
			<CompanyNav />
			<CompanyPartners />
		</main>
	);
}
