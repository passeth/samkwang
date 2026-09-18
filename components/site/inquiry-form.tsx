"use client";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { inquirySchema, inquiryTypes } from "@/lib/inquiry";

export function InquiryForm({ product }: { readonly product: string }) {
	const [pending, setPending] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState("");
	async function submit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (pending) return;
		const form = new FormData(event.currentTarget);
		const parsed = inquirySchema.safeParse({
			...Object.fromEntries(form),
			consent: form.get("consent") === "on",
		});
		if (!parsed.success) {
			setError("필수 항목과 이메일, 문의 내용(10자 이상)을 확인해 주세요.");
			return;
		}
		setPending(true);
		setError("");
		try {
			const response = await fetch("/api/inquiries", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(parsed.data),
			});
			const result = z
				.object({ message: z.string() })
				.safeParse(await response.json());
			if (!response.ok) {
				setError(
					result.success
						? result.data.message
						: "전송하지 못했습니다. 잠시 후 다시 시도해 주세요.",
				);
				return;
			}
			setSent(true);
		} catch {
			setError(
				"전송 결과를 확인할 수 없습니다. 중복 접수를 피하려면 이메일로 문의해 주세요.",
			);
		} finally {
			setPending(false);
		}
	}
	if (sent)
		return (
			<div className="notice" role="status">
				<h3>문의가 발송되었습니다.</h3>
				<p>남겨주신 이메일로 회신드리겠습니다.</p>
				<button className="action" onClick={() => setSent(false)}>
					새 문의 작성
				</button>
			</div>
		);
	return (
		<form className="inquiry-form" onSubmit={submit}>
			<p className="note">* 필수 항목</p>
			<fieldset disabled={pending}>
				<div className="inquiry-grid">
					<label>
						회사명 *
						<input
							name="company"
							autoComplete="organization"
							required
							maxLength={120}
						/>
					</label>
					<label>
						담당자명 *
						<input name="name" autoComplete="name" required maxLength={80} />
					</label>
					<label>
						이메일 *
						<input
							name="email"
							type="email"
							autoComplete="email"
							required
							maxLength={254}
						/>
					</label>
					<label>
						연락처
						<input name="phone" type="tel" autoComplete="tel" maxLength={40} />
					</label>
					<label>
						문의 유형 *
						<select name="type">
							{inquiryTypes.map((type) => (
								<option key={type}>{type}</option>
							))}
						</select>
					</label>
					<label>
						관심 제품
						<input
							name="product"
							defaultValue={product}
							maxLength={300}
							placeholder="제품명 / 제조사"
						/>
					</label>
				</div>
				<label>
					문의 내용 *
					<textarea
						name="message"
						required
						minLength={10}
						maxLength={5000}
						rows={7}
						placeholder="목표 제형, 적용 목적, 필요한 자료나 샘플·견적 수량, 희망 일정 등을 알려주세요."
					/>
				</label>
				<div className="inquiry-trap" aria-hidden="true">
					<label>
						Website
						<input name="website" tabIndex={-1} autoComplete="off" />
					</label>
				</div>
				<label className="inquiry-consent">
					<input name="consent" type="checkbox" required />
					<span>
						문의 응대에 필요한 회사명, 담당자명, 이메일 및 입력한 연락처를
						삼광켐에 제공하는 데 동의합니다. *
					</span>
				</label>
				{error && (
					<p className="inquiry-error" role="alert">
						{error}
					</p>
				)}
				<div className="inquiry-actions">
					<button className="action" type="submit">
						{pending ? "발송 중…" : "문의 보내기 ↗"}
					</button>
					<a className="text-link" href="mailto:sk@samkwang-chem.com">
						sk@samkwang-chem.com
					</a>
				</div>
			</fieldset>
		</form>
	);
}
