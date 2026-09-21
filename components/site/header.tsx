"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locations } from "@/components/site/locations";
import { Menu, ArrowUpRight, X, ChevronDown, Search } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
function isNavCurrent(path: string, href: string) {
	if (href === "/technology") {
		return (
			path.startsWith("/technology") ||
			path.startsWith("/research") ||
			path.startsWith("/services")
		);
	}
	return path.startsWith(href);
}
const navGroups = [
 { label: "회사소개", href: "/company", description: "원료에서 시작되는 가능성", items: [["인사말·경영이념", "/company"], ["회사 연혁", "/company/history"], ["조직현황", "/company/organization"], ["공급사·고객사", "/company/partners"], ["오시는길", "/company/locations"]] },
 { label: "원료 탐색", href: "/products", description: "다음 제형에 필요한 원료를 찾으세요", items: [["전체 원료", "/products"], ["제조사별 탐색", "/manufacturers"], ["관심품목", "/favorites"], ["품목 비교", "/compare"]] },
 { label: "연구·기술", href: "/technology", description: "원료의 가능성을 제품의 가치로", items: [["핵심 기술", "/technology"], ["연구개발", "/research"], ["초고압유화 임가공", "/services/microfluidization"]] },
] as const;
export function SiteHeader() {
	const path = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, [path]);
 const [activeNav, setActiveNav] = useState<string | null>(null);
	return (
		<header
			className={`site-header editorial-header ${path === "/" ? "home-header" : ""} ${path === "/" && !scrolled && !activeNav && !menuOpen ? "is-transparent" : "is-solid"}`}
 onKeyDown={event => { if (event.key === "Escape") { setActiveNav(null); const trigger = event.currentTarget.querySelector<HTMLButtonElement>('[aria-expanded="true"]'); trigger?.focus(); } }}
 onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setActiveNav(null); }}
		>
			<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
				<SheetTrigger className="menu-trigger" aria-label="메뉴 열기">
					<Menu size={16} />
					<span>MENU</span>
				</SheetTrigger>
				<Link className="brand-logo" href="/" aria-label="삼광켐 홈">
					<Image
						src="/media/samkwang-logo.png"
						width="307"
						height="34"
						alt="SAMKWANG-CHEM CORP."
					/>
				</Link>
				<nav className="primary-navigation" aria-label="주요 메뉴" onMouseLeave={() => setActiveNav(null)}>
 {navGroups.map((group, index) => <div className="nav-group" key={group.href}>
  <Link className="nav-group-link" href={group.href} aria-current={isNavCurrent(path, group.href) ? "page" : undefined} onClick={() => setActiveNav(null)}>{group.label}</Link><button className="nav-group-trigger" aria-label={`${group.label} 하위 메뉴`} aria-expanded={activeNav === group.href} aria-controls={`nav-panel-${index}`} onClick={() => setActiveNav(activeNav === group.href ? null : group.href)}><ChevronDown size={14} /></button>
  <div id={`nav-panel-${index}`} className="nav-panel" hidden={activeNav !== group.href}>
   <div className="nav-panel-intro"><span>SAMKWANG / EXPLORE</span><strong>{group.label}</strong><p>{group.description}</p><Link href={group.href} onClick={() => setActiveNav(null)}>전체 살펴보기 <ArrowUpRight size={18}/></Link></div>
   <div className="nav-panel-links">{group.items.map(([label, href]) => <Link key={href} href={href} onClick={() => setActiveNav(null)} aria-current={path === href ? "page" : undefined}>{label}<ArrowUpRight size={16}/></Link>)}</div>
  </div>
 </div>)}
 <Link className="nav-direct" href="/board" onMouseEnter={() => setActiveNav(null)} aria-current={path.startsWith("/board") ? "page" : undefined}>자료·소식</Link>
 </nav>
 <div className="nav-utilities"><Link href="/products" className="nav-search" aria-label="원료 검색"><Search size={18}/><span>원료 검색</span></Link>
 <Link className="header-contact" href="/contact">
					개발 상담 <ArrowUpRight size={15} />
				</Link>
 </div>
				<SheetContent
					className="mobile-sheet"
					side="left"
					showCloseButton={false}
					aria-describedby={undefined}
				>
					<SheetClose
						className="menu-close icon-button"
						aria-label="메뉴 닫기"
					>
						<X size={22} />
					</SheetClose>
					<SheetTitle className="menu-title">삼광켐</SheetTitle>
<nav className="mobile-nav" aria-label="전체 메뉴">
 {navGroups.map(group => <div className="mobile-nav-group" key={group.href}>
  <Link href={group.href} onClick={() => setMenuOpen(false)} aria-current={isNavCurrent(path,group.href) ? "page" : undefined}>{group.label}</Link>
  <div className="mobile-subnav" aria-label={group.label + " 하위 메뉴"}>{group.items.map(([label,href]) => <Link key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</Link>)}</div>
 </div>)}
 <Link href="/board" onClick={()=>setMenuOpen(false)}>자료·소식</Link>
 <Link href="/contact" onClick={()=>setMenuOpen(false)}>개발 상담</Link>
 </nav>
				</SheetContent>
			</Sheet>
		</header>
	);
}
export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="wrap footer-top">
			<Link className="brand-logo" href="/" aria-label="삼광켐 홈">
					<Image
						src="/media/samkwang-logo.png"
						width="307"
						height="34"
						alt="SAMKWANG-CHEM CORP."
					/>
			</Link>
				<p>원료 공급 · 소재·제형 연구개발 · 초고압유화 임가공</p>
			</div>
			<div className="wrap footer-locations">
				<Locations />
			</div>
			<div className="wrap footer-bottom">
				<span>Copyright ⓒ 2017 SAMKWANG Co.Ltd All Rights Reserved.</span>
			</div>
		</footer>
	);
}
