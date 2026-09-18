"use client";
import { usePathname } from "next/navigation";
import { Locations } from "@/components/site/locations";
import { Menu, ArrowUpRight, Heart, Search, X } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
const links = [
	["회사소개", "/company"],
	["제품 소개", "/products"],
	["연구·기술", "/technology"],
	["컨텐츠 게시판", "/board"],
] as const;
export function SiteHeader() {
	const path = usePathname();
	return (
		<header className={`site-header ${path === "/" ? "over-hero" : ""}`}>
			<a className="brand-logo" href="/" aria-label="삼광켐 홈">
				<img
					src="/media/samkwang-logo.png"
					width="307"
					height="34"
					alt="SAMKWANG-CHEM CORP."
				/>
			</a>
			<nav className="desktop-nav" aria-label="주 메뉴">
				{links.map(([label, href]) => (
					<a
						key={href}
						href={href}
						aria-current={path.startsWith(href) ? "page" : undefined}
					>
						{label}
					</a>
				))}
			</nav>
			<div className="header-actions">
				<a className="icon-button" href="/products" aria-label="제품 검색">
					<Search size={19} />
				</a>
				<a className="icon-button" href="/favorites" aria-label="관심품목">
					<Heart size={19} />
				</a>
				<a className="header-contact" href="/contact">
					문의하기 <ArrowUpRight size={17} />
				</a>
				<Sheet>
					<SheetTrigger
						className="icon-button mobile-menu"
						aria-label="메뉴 열기"
					>
						<Menu size={24} />
					</SheetTrigger>
					<SheetContent
						className="mobile-sheet"
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
						<nav className="mobile-nav">
							{[
								...links,
								["관심품목", "/favorites"],
								["품목 비교", "/compare"],
								["문의하기", "/contact"],
							].map(([label, href]) => (
								<SheetClose key={href} asChild>
									<a href={href}>{label}</a>
								</SheetClose>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="wrap footer-top">
				<a className="brand-logo" href="/" aria-label="삼광켐 홈">
					<img
						src="/media/samkwang-logo.png"
						width="307"
						height="34"
						alt="SAMKWANG-CHEM CORP."
					/>
				</a>
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
