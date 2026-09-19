import { CompanyNav } from "@/components/site/company-story";
import { Locations } from "@/components/site/locations";

export const metadata = { title: "사업장 안내" };

export default function CompanyLocationsPage() {
	return (
		<main id="main" className="wrap page-main company-subpage">
			<div className="page-heading">
				<p className="eyebrow">OUR LOCATIONS</p>
				<h1>삼광켐을<br />만나는 곳.</h1>
				<p className="lead">본사·창고와 연구소·영업 거점에서 만나보세요.</p>
			</div>
			<CompanyNav />
			<section className="company-locations company-subpage-section">
				<h2>사업장 안내</h2>
				<Locations />
			</section>
		</main>
	);
}
