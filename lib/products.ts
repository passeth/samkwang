import raw from "@/data/products.json";
import { z } from "zod";
const schema = z.object({
	id: z.number().int(),
	name: z.string(),
	manufacturer: z.string(),
	category: z.string(),
	subcategory: z.string(),
	inci: z.string(),
	features: z.string(),
	packing_unit: z.string(),
	description_text: z.string(),
	source_url: z.string(),
});
export type Product = Readonly<z.infer<typeof schema>>;
export const products: readonly Product[] = z.array(schema).parse(raw);
export const categories = [...new Set(products.map((p) => p.category))].sort();
export const manufacturers = [
	...new Set(products.map((p) => p.manufacturer)),
].sort();
export function description(p: Product) {
	const s = p.description_text.trim();
	return p.id === 547 ||
		s === p.name ||
		s === p.manufacturer ||
		/^[.\s]*$/.test(s)
		? p.features
		: s;
}
