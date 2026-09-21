import { CompanyFrame } from "@/components/site/company-frame";
import { DepartmentCards } from "@/components/site/department-cards";
import "./organization-motion.css";
import { OrganizationChart } from "./organization-chart";

export const metadata = { title: "조직현황" };

export default function CompanyOrganizationPage() {
  return <CompanyFrame current="/company/organization" number="03" eyebrow="EXPERTISE IN CONNECTION" title={<>원료의 가능성을,<br /><span>고객의 제품으로.</span></>} intro="고객의 요구를 듣고, 소재를 연구하고, 공급을 이어갑니다. 영업·연구·구매·경영·물류, 다섯 기능이 삼광켐의 일을 완성합니다.">
    <section className="co-wrap org-functions" aria-labelledby="org-functions-title">
      <div className="org-section-heading">
        <div><p className="co-kicker">FIVE FUNCTIONS</p><h2 id="org-functions-title">하나의 원료가 닿기까지,<br />다섯 전문성이 함께합니다.</h2></div>
        <p>서로의 역할을 연결하며<br />원료에서 제품으로 이어지는 길을 만듭니다.</p>
      </div>
      <DepartmentCards />
    </section>
    <section className="org-structure" aria-labelledby="org-structure-title">
      <div className="co-wrap">
        <div className="org-section-heading"><div><p className="co-kicker">ORGANIZATION</p><h2 id="org-structure-title">전문성을 연결하는 조직.</h2></div><p>연구소·영업과 본사,<br />각 거점을 중심으로 함께 움직입니다.</p></div>
        <OrganizationChart />
      </div>
    </section>
  </CompanyFrame>;
}
