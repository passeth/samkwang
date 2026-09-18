"use client";
import { useSyncExternalStore, useState } from "react";
import { Heart, Plus, Check } from "lucide-react";
import { z } from "zod";
export type ListName = "favorites" | "compare";
const listSchema = z.array(z.number().int());
function subscribe(callback: () => void) {
	window.addEventListener("storage", callback);
	window.addEventListener("product-list", callback);
	return () => {
		window.removeEventListener("storage", callback);
		window.removeEventListener("product-list", callback);
	};
}
function read(key: ListName) {
	try {
		return localStorage.getItem(`samkwang-${key}`) ?? "[]";
	} catch (e) {
		if (e instanceof DOMException) return "[]";
		throw e;
	}
}
export function useProductList(key: ListName) {
	const raw = useSyncExternalStore(
		subscribe,
		() => read(key),
		() => "[]",
	);
	try {
		const data: unknown = JSON.parse(raw);
		return listSchema.parse(data);
	} catch (e) {
		if (e instanceof SyntaxError || e instanceof z.ZodError) return [];
		throw e;
	}
}
export function saveList(key: ListName, ids: readonly number[]) {
	try {
		localStorage.setItem(`samkwang-${key}`, JSON.stringify(ids));
		window.dispatchEvent(new Event("product-list"));
		return true;
	} catch (e) {
		if (e instanceof DOMException) return false;
		throw e;
	}
}
export function ProductActions({ id }: { readonly id: number }) {
	const favorites = useProductList("favorites"),
		compare = useProductList("compare"),
		[message, setMessage] = useState("");
	const toggle = (key: ListName) => {
		const current = key === "favorites" ? favorites : compare;
		if (key === "compare" && !current.includes(id) && current.length >= 4) {
			setMessage("비교는 최대 4개까지 가능합니다.");
			return;
		}
		setMessage(
			saveList(
				key,
				current.includes(id)
					? current.filter((x) => x !== id)
					: [...current, id],
			)
				? ""
				: "브라우저 저장이 차단되어 있습니다.",
		);
	};
	return (
		<div className="product-actions">
			<button
				onClick={() => toggle("favorites")}
				aria-label={
					favorites.includes(id) ? "관심품목에서 제거" : "관심품목에 담기"
				}
				aria-pressed={favorites.includes(id)}
			>
				<Heart
					size={17}
					fill={favorites.includes(id) ? "currentColor" : "none"}
				/>
			</button>
			<button
				onClick={() => toggle("compare")}
				aria-pressed={compare.includes(id)}
			>
				{compare.includes(id) ? <Check size={17} /> : <Plus size={17} />} 비교
			</button>
			{message && <p role="status">{message}</p>}
		</div>
	);
}
export function CompareBar() {
	const ids = useProductList("compare");
	return ids.length > 0 ? (
		<div className="compare-bar">
			<span>
				비교할 제품 <strong>{ids.length} / 4</strong>
			</span>
			<a href="/compare">품목 비교하기 →</a>
			<button onClick={() => saveList("compare", [])}>비우기</button>
		</div>
	) : null;
}
