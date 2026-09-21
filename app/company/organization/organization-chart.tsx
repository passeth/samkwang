"use client";

import { useRef } from "react";
import { useAmbientVideo } from "@/hooks/use-ambient-video";

export function OrganizationChart() {
  const video = useRef<HTMLVideoElement>(null);
  const { playing, hasFrame, failed, blocked, reduced, toggle } = useAmbientVideo(video);
  return <div className="org-chart-experience">
    {<div className="org-film" style={reduced ? { display: "none" } : undefined}>
      <div style={{ position: "relative" }}>
      <video style={failed ? { opacity: 0 } : undefined} ref={video} width={1440} height={810} muted playsInline loop preload={reduced ? "none" : "metadata"} poster="/media/company/organization-poster.jpg" aria-label="CO-CEO에서 두 조직과 다섯 기능으로 이어지는 조직도. ">
        <source src="/media/company/organization.mp4" type="video/mp4" />
      </video>
      {failed && <img src="/media/company/organization-poster.jpg" alt="삼광켐 조직도" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />}
      </div>
      <div className="org-film-toolbar"><button type="button" onClick={toggle}>{blocked ? "조직도 다시 재생" : playing ? "일시정지" : "조직도 재생"}</button></div>
    </div>}
    <div className={`org-text-tree ${hasFrame && !failed && !blocked && !reduced ? "org-tree-accessible-only" : ""}`}>
      <p className="co-kicker">ORGANIZATION AT A GLANCE</p>
      <ul className="org-tree-root" aria-label="조직 구성">
        <li><div className="org-tree-leader"><span>LEADERSHIP</span><strong>CO-CEO</strong></div>
          <ul className="org-tree-branches">
            <li><div className="org-tree-center"><h3>연구소 &amp; 영업</h3><p>R&amp;D Center &amp; Sales</p></div><ul className="org-tree-teams"><li>영업<span>Sales</span></li><li>연구<span>Research</span></li><li>구매<span>Purchasing</span></li><li>경영<span>Management</span></li></ul></li>
            <li><div className="org-tree-center"><h3>본사</h3><p>H.Q · Management Center</p></div><ul className="org-tree-teams org-tree-single"><li>물류<span>Logistics</span></li></ul></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="org-explanations">
      <div className="org-explanation-intro"><p className="co-kicker">CONNECTED EXPERTISE</p><h3>역할은 명료하게,<br />연결은 긴밀하게.</h3><p>조직도는 업무의 소속을, 다섯 기능은 각자의 역할을 보여줍니다.</p></div>
      <div className="org-explanation-body"><article><span>01 / R&amp;D CENTER &amp; SALES</span><h4>고객의 질문에서 원료의 검토까지</h4><p>연구소 &amp; 영업에는 영업·연구·구매·경영이 속합니다. 고객과 원료를 잇는 영업, 소재와 적용 방향을 살피는 연구, 공급의 기반을 연결하는 구매, 조직 운영을 뒷받침하는 경영이 함께합니다.</p></article><article><span>02 / H.Q · MANAGEMENT CENTER</span><h4>원료가 고객에게 닿는 과정</h4><p>본사에는 물류 기능이 속합니다. 원료를 보관하고 전달하는 역할을 통해 공급의 흐름을 이어갑니다. 연구소 &amp; 영업과 본사는 CO-CEO 아래에 연결되어 있습니다.</p></article></div>
    </div>
  </div>;
}
