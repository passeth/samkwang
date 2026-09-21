"use client";
import { MediaLoop } from "@/components/site/media-loop";
export function ProductCategoryRail({selected}:{readonly selected:string;readonly onSelect:(category:string)=>void}) {
 return <section className="ingredient-discovery ingredient-discovery-simple" aria-labelledby="ingredient-heading">
  <div className="ingredient-backdrop" aria-hidden="true"><MediaLoop src="/media/clip3.mp4" poster="/media/clip3-poster.jpg" alt=""/></div>
  <div className="ingredient-intro"><p className="eyebrow">INGREDIENT LIBRARY</p><h1 id="ingredient-heading">원료 탐색</h1><p className="ingredient-summary">{selected ? `${selected} 원료를 살펴보세요.` : "제품명·INCI·제조사로 필요한 원료를 찾으세요."}</p></div>
 </section>;
}
