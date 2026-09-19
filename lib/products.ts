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
const researchCopy: Record<number, string> = {
	331: "레시틴으로 액정을 형성해 친수성 NMF와 소수성 ceramide를 캡슐화하고, 보수력(water holding capacity)이 HA보다 10% 뛰어난 흰목이버섯 추출물로 하이드로겔화하여 다중 안정화한 기술입니다. 수치는 삼광켐 기술 자료 기준입니다.",
	332: "피부에서의 효과를 극대화하기 위해 Ceramide를 Phospholipid와 Glucosylceramide로 캡슐화한 나노입자입니다.",
	333: "2년여 개발 끝에 무취·무색, 99.8% 이상 품질의 1,2-Hexanediol을 정제합니다. 일본에서 전량 수입하던 원료를 자체 기술로 재생산합니다.",
	334: "메칠프로판디올은 용매·용제·보습제로 쓰이는 글리콜입니다. 정제로 취를 줄여 적용을 쉽게 했으며, 메칠프로판디올의 EWG 등급은 1입니다.",
};
export function description(p: Product) {
	if (researchCopy[p.id]) return researchCopy[p.id];
	const s = p.description_text.trim();
	return p.id === 547 ||
		s === p.name ||
		s === p.manufacturer ||
		/^[.\s]*$/.test(s)
		? p.features
		: s;
}
