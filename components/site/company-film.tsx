import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { MediaLoop } from "@/components/site/media-loop";
import "./company-film.css";

export function CompanyFilm({src,poster,title,description,href,linkLabel}:{src:string;poster:string;title:ReactNode;description:ReactNode;href:string;linkLabel:string}) {
 return <section className="co-film" aria-label="삼광켐 소개 영상">
  <div className="co-film-media"><MediaLoop src={src} poster={poster} alt="삼광켐 브랜드 배경 영상"/></div>
  <div className="co-wrap co-film-content">
   <div className="co-film-year"><span>SINCE</span><strong>1988</strong></div>
   <div className="co-film-bottom"><div><h2>{title}</h2><p>{description}</p></div><a href={href}>{linkLabel}<ArrowDown size={20} aria-hidden="true"/></a></div>
  </div>
 </section>;
}
