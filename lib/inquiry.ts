import { z } from "zod";

export const inquiryTypes = [
	"원료 문의",
	"기술자료 요청",
	"샘플·견적",
	"임가공 상담",
	"기타",
] as const;
const line = (max: number) =>
	z
		.string()
		.trim()
		.max(max)
		.refine((s) => !/[\r\n]/.test(s));
export const inquirySchema = z.object({
	company: line(120).pipe(z.string().min(1)),
	name: line(80).pipe(z.string().min(1)),
	email: z.string().trim().email().max(254),
	phone: line(40),
	type: z.enum(inquiryTypes),
	product: line(300),
	message: z.string().trim().min(10).max(5000),
	consent: z.literal(true),
	website: z.string().max(0),
});
