"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { products, categories, manufacturers } from "@/lib/products";
import { ProductCard } from "./product-card";
import { ProductList } from "./product-list";
import { CompareBar } from "./product-actions";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import { Search, X, LayoutGrid, List } from "lucide-react";
export function Catalog() {
	const params = useSearchParams(),
		router = useRouter(),
		path = usePathname();
	const q = params.get("q") ?? "",
		category = params.get("category") ?? "",
		sub = params.get("sub") ?? "",
		manufacturer = params.get("manufacturer") ?? "",
		sort = params.get("sort") ?? "name";
	const listView = params.get("view") === "list";
	const resetHref = listView ? "/products?view=list" : "/products";
	const changeView = (view: string) => {
		const next = new URLSearchParams(params.toString());
		next.set("view", view);
		router.push(`${path}?${next}`, { scroll: false });
	};
	const update = (key: string, value: string) => {
		const next = new URLSearchParams(params.toString());
		value ? next.set(key, value) : next.delete(key);
		next.delete("page");
		if (key === "category") next.delete("sub");
		router.push(`${path}?${next}`, { scroll: false });
	};
	const normalized = q.trim().toLowerCase().replace(/\s+/g, " ");
	const result = products
		.filter(
			(p) =>
				(!category || p.category === category) &&
				(!sub || p.subcategory === sub) &&
				(!manufacturer || p.manufacturer === manufacturer) &&
				`${p.name} ${p.inci}`
					.toLowerCase()
					.replace(/\s+/g, " ")
					.includes(normalized),
		)
		.sort((a, b) =>
			sort === "manufacturer"
				? a.manufacturer.localeCompare(b.manufacturer) ||
					a.name.localeCompare(b.name)
				: a.name.localeCompare(b.name),
		);
	const pages = Math.ceil(result.length / 18),
		page = Math.max(1, Math.min(Number(params.get("page")) || 1, pages || 1));
	const subs = [
		...new Set(
			products.filter((p) => p.category === category).map((p) => p.subcategory),
		),
	].sort();
	const filter = (
		label: string,
		key: string,
		values: readonly string[],
		current: string,
	) => (
		<div className="filter-field">
			<label id={`label-${key}`} htmlFor={`filter-${key}`}>
				{label}
			</label>
			<Select
				value={current || "all"}
				onValueChange={(v) => update(key, v === "all" ? "" : v)}
			>
				<SelectTrigger
					id={`filter-${key}`}
					className="filter-select"
					aria-labelledby={`label-${key}`}
				>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">전체 {label}</SelectItem>
					{values.map((v) => (
						<SelectItem key={v} value={v}>
							{v}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
	return (
		<>
			<div className="catalog-controls">
				<form
					className="catalog-search"
					key={q}
					onSubmit={(e) => {
						e.preventDefault();
						const data = new FormData(e.currentTarget);
						update("q", String(data.get("q") ?? ""));
					}}
				>
					<Search size={22} />
					<label className="sr-only" htmlFor="q">
						제품명 또는 INCI 검색
					</label>
					<input
						id="q"
						name="q"
						defaultValue={q}
						placeholder="제품명 또는 INCI로 검색"
					/>
					<button type="submit">검색</button>
				</form>
				<div className="filters">
					{filter("대분류", "category", categories, category)}
					{filter("소분류", "sub", subs, sub)}
					{filter("제조사", "manufacturer", manufacturers, manufacturer)}
					<button
						className="reset"
						onClick={() => router.push(resetHref, { scroll: false })}
					>
						<X size={16} /> 조건 초기화
					</button>
				</div>
			</div>
			<div className="result-toolbar">
				<p aria-live="polite">
					총 <strong>{result.length}</strong>개 제품{q && ` · “${q}”`}
				</p>
				<Select value={sort} onValueChange={(v) => update("sort", v)}>
					<SelectTrigger aria-label="정렬" className="sort-select">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="name">제품명순</SelectItem>
						<SelectItem value="manufacturer">제조사순</SelectItem>
					</SelectContent>
				</Select>
				<div className="view-switch" role="group" aria-label="제품 보기 방식">
					<button
						type="button"
						aria-pressed={!listView}
						onClick={() => changeView("grid")}
					>
						<LayoutGrid size={18} />
						카드
					</button>
					<button
						type="button"
						aria-pressed={listView}
						onClick={() => changeView("list")}
					>
						<List size={18} />
						리스트
					</button>
				</div>
			</div>
			{listView && result.length > 0 ? (
				<ProductList products={result.slice((page - 1) * 18, page * 18)} />
			) : (
				<div className="product-grid">
					{result.slice((page - 1) * 18, page * 18).map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			)}
			{result.length === 0 && (
				<div className="empty-state">
					<h2>조건에 맞는 제품이 없습니다.</h2>
					<p>검색어를 줄이거나 분류·제조사 조건을 해제해 보세요.</p>
					<button className="action" onClick={() => router.push(resetHref)}>
						전체 제품 보기
					</button>
				</div>
			)}
			{pages > 1 && (
				<Pagination
					className="catalog-pagination"
					aria-label="제품 결과 페이지"
				>
					<PaginationContent>
						{Array.from({ length: pages }, (_, i) => i + 1).map((n) => {
							const next = new URLSearchParams(params.toString());
							next.set("page", String(n));
							return (
								<PaginationItem key={n}>
									<PaginationLink
										className="page-number"
										isActive={n === page}
										href={`/products?${next}`}
										aria-label={`${n}페이지`}
									>
										{n}
									</PaginationLink>
								</PaginationItem>
							);
						})}
					</PaginationContent>
				</Pagination>
			)}
			<CompareBar />
		</>
	);
}
