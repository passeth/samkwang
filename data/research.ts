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

export const developmentDirections = [
 { title: "고부가 가치 창출을 위한 기술력", items: ["난용성 소재 수용화 및 안정화를 통한 소재 개발", "천연 신소재 개발"] },
 { title: "자체 데이터 확립", items: ["자체 분석 기술력 확보", "자체 간이 효능평가 시스템 구축"] },
 { title: "기술 및 업무 경쟁력에 따른 부가효과", items: ["제형 응용 및 개발에 의한 차별화", "지적 재산권 확보"] },
] as const;

export const organization = [
 { title: "신 원료 개발", description: "가용화 및 안정화 기술을 이용한 신 원료 및 천연소재 원료의 개발" },
 { title: "제형화 연구", description: "신 원료의 화장품 제형으로의 적용 및 응용" },
 { title: "연구 기획/학술 연구", description: "연구기획 및 연구 활동에 필요한 각종 자료 수집 및 활용" },
 { title: "정제기술연구", description: "유효성 높은 탈취, 탈색 등의 정제과정을 통한 순도 높은 제품 개발" },
] as const;

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
