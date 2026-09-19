"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locations } from "@/components/site/locations";
import { Menu, ArrowUpRight, X } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
const links = [
	["제품 소개", "/products"],
	["연구·기술", "/technology"],
	["컨텐츠 게시판", "/board"],
] as const;
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
export function SiteHeader() {
	const path = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header
			className={`site-header ${path === "/" || path === "/company" ? "over-hero" : ""}`}
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
				<Link className="header-contact" href="/contact">
					문의하기 <ArrowUpRight size={15} />
				</Link>
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
						<div className="mobile-nav-group">
							<a
								href="/company"
								onClick={() => setMenuOpen(false)}
								aria-current={isNavCurrent(path, "/company") ? "page" : undefined}
							>
								회사소개
							</a>
							<div className="mobile-subnav" aria-label="회사소개 하위 메뉴">
								{[
									["사업 소개", "/company"],
									["회사 연혁", "/company/history"],
									["조직 구성", "/company/organization"],
									["공급사·고객사", "/company/partners"],
									["사업장 안내", "/company/locations"],
								].map(([label, href]) => (
									<a key={href} href={href} onClick={() => setMenuOpen(false)}>
										{label}
									</a>
								))}
							</div>
						</div>
						{[
							...links,
							["제품 검색", "/products"],
							["관심품목", "/favorites"],
							["품목 비교", "/compare"],
							["문의하기", "/contact"],
						].map(([label, href]) => (
							<a
								key={href}
								href={href}
								onClick={() => setMenuOpen(false)}
								aria-current={isNavCurrent(path, href) ? "page" : undefined}
							>
								{label}
							</a>
						))}
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
