"use client";

import type { PointerEvent } from "react";

const departments = [
  { number: "01", name: "영업", english: "SALES TEAM", image: "/media/editorial/dept-sales.jpg", alt: "원료와 제품의 연결을 표현한 유리 용기와 식물 소재", line: "고객과 원료를 잇는 접점", description: "제품에 필요한 원료를 함께 이야기합니다.", position: "60% center" },
  { number: "02", name: "연구", english: "RESEARCH TEAM", image: "/media/editorial/dept-research.jpg", alt: "정돈된 실험대에서 진행하는 연구 작업", line: "소재의 가능성을 살피는 시선", description: "원료를 이해하고 적용 방향을 살펴봅니다.", position: "center 52%" },
  { number: "03", name: "구매", english: "PURCHASING", image: "/media/editorial/dept-purchasing.jpg", alt: "원료의 질감과 구성을 표현한 소재 이미지", line: "공급의 시작을 연결하는 역할", description: "필요한 원료와 공급의 기반을 연결합니다.", position: "center center" },
  { number: "04", name: "경영", english: "MANAGEMENT", image: "/media/editorial/dept-management.jpg", alt: "팀 운영을 논의하는 회의 장면", line: "조직을 뒷받침하는 기반", description: "각 기능이 함께 움직일 수 있도록 운영을 뒷받침합니다.", position: "65% center" },
  { number: "05", name: "물류", english: "LOGISTICS TEAM", image: "/media/editorial/dept-logistics.jpg", alt: "정돈된 원료 보관 및 출고 공간", line: "원료가 고객에게 닿는 과정", description: "원료의 보관부터 전달까지 공급의 흐름을 이어갑니다.", position: "center center" },
] as const;

function moveImage(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--department-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}px`);
  event.currentTarget.style.setProperty("--department-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 10}px`);
}

function resetImage(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty("--department-x");
  event.currentTarget.style.removeProperty("--department-y");
}

export function DepartmentCards() {
  return <ul className="org-departments">
    {departments.map((department) => <li key={department.number}>
      <article className="org-department" tabIndex={0} aria-labelledby={`department-${department.number}`} onPointerMove={moveImage} onPointerLeave={resetImage} onPointerCancel={resetImage}>
        <div className="org-department-image">
          <img src={department.image} alt={department.alt} width={960} height={720} loading="lazy" style={{ objectPosition: department.position }} />
          <span className="org-department-number" aria-hidden="true">{department.number}</span>
        </div>
        <div className="org-department-copy">
          <p className="org-department-en">{department.english}</p>
          <h3 id={`department-${department.number}`}>{department.name}</h3>
          <p className="org-department-line">{department.line}</p>
          <p className="org-department-description">{department.description}</p>
        </div>
      </article>
    </li>)}
  </ul>;
}
