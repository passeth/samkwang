"use client";
import { useState } from "react";
import { ProductCategoryRail } from "./product-category-rail";
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
function FilterChips({ label, name, values, current, onChange }: {
 readonly label: string; readonly name: string; readonly values: readonly string[];
 readonly current: string; readonly onChange: (value: string) => void;
}) {
 const [expanded, setExpanded] = useState(false);
 const visible = expanded ? values : values.filter((value, index) => index < 8 || value === current);
 return <fieldset className="ingredient-filter-group">
  <legend>{label}</legend>
  <div className="ingredient-filter-options" id={`options-${name}`}>
   <button type="button" className="ingredient-chip" aria-pressed={!current} onClick={() => onChange("")}>전체</button>
   {visible.map(value => <button type="button" className="ingredient-chip" key={value} aria-pressed={current === value} onClick={() => onChange(current === value ? "" : value)}>{value}</button>)}
   {current && !values.includes(current) && <button type="button" className="ingredient-chip" aria-pressed="true" onClick={() => onChange("")}>{current} · 해제</button>}
  </div>
  {values.length > 8 && <button type="button" className="ingredient-filter-expand" aria-expanded={expanded} aria-controls={`options-${name}`} onClick={() => setExpanded(!expanded)}>{expanded ? "접기 −" : `모두 보기 (${values.length}) +`}</button>}
 </fieldset>;
}

export function Catalog() {
	const params = useSearchParams(),
		router = useRouter(),
		path = usePathname();
	const q = params.get("q") ?? "",
		category = params.get("category") ?? "",
		sub = params.get("sub") ?? "",
		manufacturer = params.get("manufacturer") ?? "",
		sort = params.get("sort") ?? "name";
	const listView = params.get("view") !== "grid";
	const resetHref = listView ? "/products" : "/products?view=grid";
	const changeView = (view: string) => {
		const next = new URLSearchParams(params.toString());
		next.set("view", view);
		router.push(`${path}?${next}`, { scroll: false });
	};
	const update = (key: string, value: string) => {
		const next = new URLSearchParams(params.toString());
		if (value) next.set(key, value);
		else next.delete(key);
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
		page = Math.max(1, Math.min(Math.floor(Number(params.get("page"))) || 1, pages || 1));
	const subs = [
		...new Set(products.filter((p) => !category || p.category === category).map((p) => p.subcategory)),
	].filter(Boolean).sort();
	return (
		<>
			<ProductCategoryRail selected={category} onSelect={(value) => update("category", value)} />
			<section className="ingredient-catalog" aria-labelledby="catalog-heading">
			<div className="ingredient-catalog-heading"><div><p className="eyebrow">FIND YOUR INGREDIENT</p><h2 id="catalog-heading">원료 찾아보기</h2></div><p>분류를 선택하고, 기능과 제조사로 좁혀보세요.</p></div>
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
					{/* The same URL-backed category selection is also available without scrolling the rail. */}
					<FilterChips label="분류" name="category" values={categories} current={category} onChange={(value) => update("category", value)} />
					<FilterChips key={category} label="기능 · 소분류" name="sub" values={subs} current={sub} onChange={(value) => update("sub", value)} />
					<FilterChips label="제조사" name="manufacturer" values={manufacturers} current={manufacturer} onChange={(value) => update("manufacturer", value)} />
					<button
						type="button"
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
			</section>
			<CompareBar />
		</>
	);
}
