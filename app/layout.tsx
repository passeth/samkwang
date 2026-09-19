import type { Metadata } from "next";
import "./globals.css";
import "./catalog.css";
import "./company.css";
import "./sections.css";
import { SiteHeader, SiteFooter } from "@/components/site/header";
import { DevTools } from "@/components/site/dev-tools";

export const metadata: Metadata = {
	title: {
		default: "삼광켐 | 원료의 가능성, 제품의 내일로",
		template: "%s | 삼광켐",
	},
	description:
		"화장품 원료 공급, 소재·제형 연구개발, 초고압유화 임가공을 연결하는 삼광켐.",
	other: {
		"codex-preview": "development",
	},
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<a className="skip-link" href="#main">
					본문 바로가기
				</a>
				<SiteHeader />
				{children}
				<SiteFooter />
				{process.env.NODE_ENV === "development" && <DevTools />}
			</body>
		</html>
	);
}
