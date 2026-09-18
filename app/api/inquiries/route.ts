import nodemailer from "nodemailer";
import { z } from "zod";
import { inquirySchema } from "@/lib/inquiry";

export const runtime = "nodejs";
const settings = z.object({
	SMTP_HOST: z.string().min(1),
	SMTP_PORT: z.coerce.number().refine((port) => port === 465 || port === 587),
	SMTP_USER: z.string().min(1),
	SMTP_PASSWORD: z.string().min(1),
	SMTP_FROM: z.string().email(),
});
const reply = (message: string, status: number) =>
	Response.json({ message }, { status });
export async function POST(request: Request) {
	if (request.headers.get("origin") !== new URL(request.url).origin)
		return reply("요청 경로를 확인해 주세요.", 403);
	if (!request.headers.get("content-type")?.startsWith("application/json"))
		return reply("요청 형식이 올바르지 않습니다.", 415);
	const body = await request.text();
	if (new TextEncoder().encode(body).length > 24000)
		return reply("문의 내용이 너무 깁니다.", 413);
	let json: unknown;
	try {
		json = JSON.parse(body);
	} catch {
		return reply("요청 형식이 올바르지 않습니다.", 400);
	}
	const parsed = inquirySchema.safeParse(json);
	if (!parsed.success)
		return reply("필수 항목과 문의 내용을 확인해 주세요.", 400);
	const config = settings.safeParse(process.env);
	if (!config.success)
		return reply(
			"현재 온라인 발송을 이용할 수 없습니다. sk@samkwang-chem.com으로 이메일을 보내주세요.",
			503,
		);
	const s = config.data,
		q = parsed.data;
	const transport = nodemailer.createTransport({
		host: s.SMTP_HOST,
		port: s.SMTP_PORT,
		secure: s.SMTP_PORT === 465,
		requireTLS: true,
		auth: { user: s.SMTP_USER, pass: s.SMTP_PASSWORD },
		connectionTimeout: 10000,
		greetingTimeout: 10000,
		socketTimeout: 15000,
		disableFileAccess: true,
		disableUrlAccess: true,
	});
	try {
		const info = await transport.sendMail({
			from: s.SMTP_FROM,
			to: "sk@samkwang-chem.com",
			replyTo: q.email,
			subject: `[삼광켐 홈페이지] ${q.type} · ${q.company}`,
			text: [
				`문의 유형: ${q.type}`,
				`회사명: ${q.company}`,
				`담당자: ${q.name}`,
				`이메일: ${q.email}`,
				`연락처: ${q.phone || "미입력"}`,
				`관심 제품: ${q.product || "미입력"}`,
				"",
				q.message,
				"",
				"문의 응대 목적 개인정보 제공 동의: 동의",
			].join("\n"),
		});
		if (!info.accepted.length)
			return reply("발송을 완료하지 못했습니다. 이메일로 문의해 주세요.", 502);
		return reply("문의가 발송되었습니다.", 200);
	} catch {
		return reply("발송을 완료하지 못했습니다. 이메일로 문의해 주세요.", 502);
	} finally {
		transport.close();
	}
}
