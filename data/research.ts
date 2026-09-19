export const profile = [
	["명칭", "㈜ 삼광켐 기업부설 연구소"],
	["업종", "화장품 원료"],
	["주요 사업", "기능성 소재 및 제형 개발"],
] as const;

export const milestones = [
	{
		name: "Gceraplex",
		productId: 332,
		developed: "2015.08 ~ 2015.10",
		launched: "2015.11.11",
		techHref: "/technology/encapsulation",
	},
	{
		name: "Epidermics",
		productId: 331,
		developed: "2015.07 ~ 2016.04",
		launched: "2016.05.11",
		techHref: "/technology/stabilization",
	},
] as const;

export const patent = {
	filed: "2015.10.12",
	title:
		"이중층을 갖는 사이즈-가변성 비쥬얼 캡슐의 제조방법과 이로부터 제조된 비쥬얼 캡슐을 포함하는 화장료 조성물",
} as const;

export const organization = ["기업부설 연구소", "소장", "연구원"] as const;

export const photos = [
	{
		src: "/media/research/lab-01.jpg",
		alt: "시약병과 교반 설비가 놓인 연구소 실험대. 방호복을 입은 연구원이 작업 중이다.",
	},
	{
		src: "/media/research/lab-02.jpg",
		alt: "항온수조와 분석 장비가 있는 연구소 작업 공간",
	},
	{
		src: "/media/research/lab-03.jpg",
		alt: "시약 선반, 전자저울, 교반기가 있는 실험대",
	},
	{
		src: "/media/research/lab-04.jpg",
		alt: "D.I. Water 용기와 실험대가 이어진 연구소 내부",
	},
] as const;
