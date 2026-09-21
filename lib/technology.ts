export const technologies = [
	{
		slug: "encapsulation",
		name: "캡슐화",
		en: "ENCAPSULATION TECHNIQUE",
		headline: "활성 성분을 입자 구조에 담는 방법.",
		body: "용매추출 및 증발 방법과 유화중합 방법을 통해 만들어진 캡슐은 구형의 나노입자 형태로 화장품 활성 성분을 담는 구조로 활용됩니다.",
		detail:
			"Gceraplex는 Ceramide를 Phospholipid와 Glucosylceramide로 캡슐화한 나노입자입니다.",
		query: "Gceraplex",
		diagrams: [
			{
				src: "/media/technology/capsules-microscopy.jpg",
				alt: "캡슐화 입자를 촬영한 현미경 이미지",
				caption: "캡슐화 입자 현미경 이미지",
			},
			{
				src: "/media/technology/gceraplex-structure.jpg",
				alt: "Gceraplex의 phospholipid, glucosylceramide, ceramide 구조 도해",
				caption:
					"Gceraplex 구조. Ceramide를 phospholipid와 glucosylceramide로 캡슐화한 나노입자.",
			},
			{
				src: "/media/technology/gceraplex-pack.jpg",
				alt: "Gceraplex 제품 용기",
				caption: "Gceraplex",
			},
		],
		products: [{ id: 332, name: "Gceraplex" }],
	},
	{
		slug: "solubilization",
		name: "가용화",
		en: "SOLUBILIZATION TECHNIQUE",
		headline: "물에 잘 녹지 않는 성분의 수계 제형 적용.",
		body: "물에 계면활성제를 첨가하여 난용성 물질을 열역학적으로 안정한 등방성 용액으로 만들고, 가역적 상호작용에 의해 자연 용해시키는 물리 가용화 프로세스를 적용합니다.",
		detail:
			"사용하려는 성분, 목표 제형, 적용 조건을 함께 검토합니다. 원료별 특성과 계면활성제의 관계를 가용화 상담의 출발점으로 둡니다.",
		query: "",
		diagrams: [] as const,
		products: [] as const,
	},
	{
		slug: "stabilization",
		name: "안정화",
		en: "STABILIZATION TECHNIQUE",
		headline: "액정 구조와 하이드로겔을 활용한 다중 안정화.",
		body: "활성물질은 조성과 보관 환경에 따라 침전되거나 안정성이 달라질 수 있습니다. Liquid crystalline system을 통해 지질의 다중 층이 외부 환경으로부터 활성 물질을 보호하고 안정화가 이루어집니다.",
		detail:
			"Epidermics는 레시틴으로 액정을 형성해 친수성 NMF와 소수성 ceramide를 캡슐화하고, 보수력(water holding capacity)이 HA보다 10% 뛰어난 흰목이버섯 추출물로 하이드로겔화하여 다중 안정화한 기술입니다. 이는 기존 삼광켐 자료의 설명이며, 보수력 비교의 시험 조건은 본 자료에 명시되어 있지 않습니다. 완제품의 효능을 의미하지 않습니다.",
		query: "Epidermics",
		diagrams: [
			{
				src: "/media/technology/epidermics-hydrogel.jpg",
				alt: "Epidermics의 liquid crystalline in hydrogel 다중 안정화 도해",
				caption: "Liquid crystalline in hydrogel. Epidermics 다중 안정화 구조.",
			},
		],
		products: [{ id: 331, name: "Epidermics" }],
	},
	{
		slug: "purification",
		name: "정제",
		en: "REFINE",
		headline: "원료의 순도, 취와 색상을 다루는 정제 접근.",
		body: "순도 높은 제품을 위하여 합성 화합물의 정제는 화장품 원료의 품질을 검토하는 주요 과정입니다. 질량분석(MS) 시스템과 기체 크로마토그래피 솔루션, QA/QC 분석법을 활용한 정제 접근이 기존 기술 자료에 소개되어 있습니다.",
		detail:
			"Hexanediol-6는 2년여 개발 끝에 무취·무색, 99.8% 이상 품질의 1,2-Hexanediol을 정제합니다. 일본에서 전량 수입하던 원료를 자체 기술로 재생산합니다. MPO(P)는 메칠프로판디올의 취를 줄여 적용을 쉽게 한 정제 제품이며, 기존 자료에는 메칠프로판디올의 EWG 등급 1이 기재되어 있으나, 현재 등급과 적용 조건은 별도 확인이 필요합니다.",
		query: "Hexanediol",
		diagrams: [
			{
				src: "/media/technology/hexanediol-gc.jpg",
				alt: "1,2-Hexanediol 정제 전후 GC area% 비교표",
				caption: "1,2-Hexanediol 정제 전후 GC area% 비교. 삼광켐 기술 자료.",
			},
		],
		products: [
			{ id: 333, name: "Hexanediol-6" },
			{ id: 334, name: "MPO (P)" },
		],
	},
] as const;

/** Application discussion prompts, not guaranteed process specifications. */
export const technologyGuides = {
 encapsulation: {
  application: "Gceraplex는 Ceramide를 Phospholipid와 Glucosylceramide로 캡슐화한 제품입니다. 활성 성분을 제형에 도입할 때 구조와 배합 조건을 함께 검토하는 사례로 소개합니다.",
  constraints: ["캡슐 구조만으로 피부 전달이나 완제품의 효능을 판단할 수 없습니다.", "제형의 pH, 온도, 투입 순서와 다른 원료의 영향을 확인해야 합니다.", "입도·함량·보관 조건은 제품별 최신 자료를 기준으로 확인해야 합니다."],
  checklist: ["캡슐화하려는 성분과 목표 함량", "제형 유형·pH·가열 및 교반 조건", "필요한 안정성 자료와 검토 일정"],
 },
 solubilization: {
  application: "난용성 성분을 수계 제형에 적용하려는 경우 검토하는 접근입니다. 사용할 성분과 계면활성제 조합, 목표 외관을 기준으로 상담합니다. 이 페이지에는 별도의 제품이나 실험 도해가 제시되어 있지 않습니다.",
  constraints: ["투명한 외관만으로 장기 안정성이나 완전한 용해를 판단하지 않습니다.", "성분 농도와 계면활성제 종류·비율에 따라 적용 범위가 달라집니다.", "pH·전해질·온도 변화와 향후 제형 내 혼합 조건을 확인해야 합니다."],
  checklist: ["난용성 성분명·배합량과 용매 조건", "허용 가능한 계면활성제와 목표 외관", "목표 pH·보관 온도·변화가 나타난 조건"],
 },
 stabilization: {
  application: "Epidermics는 레시틴 액정 구조와 하이드로겔을 조합한 다중 안정화 사례입니다. 친수성 NMF와 소수성 Ceramide를 함께 다루는 구조를 살펴볼 수 있습니다.",
  constraints: ["원료의 보수력 비교를 완제품의 보습 효과로 해석할 수 없습니다.", "액정·겔 구조의 유지 여부는 배합 조성과 제조 조건에 따라 확인이 필요합니다.", "장기 보관, 온도 변화, 침전 여부에 관한 시험 조건과 자료 제공 범위를 상담해야 합니다."],
  checklist: ["안정화하려는 성분과 현재 제형 조성", "침전·분리 등 문제의 발생 시점과 조건", "목표 점도·pH·보관 조건 및 필요한 자료"],
 },
 purification: {
  application: "Hexanediol-6와 MPO(P)는 순도 및 취·색상과 관련된 정제 제품 사례입니다. 원료를 제형에 적용하기 전에 필요한 품질 기준과 분석 자료를 확인합니다.",
  constraints: ["기존 자료의 순도 수치와 크로마토그램은 모든 로트의 규격을 대신하지 않습니다.", "취·색상은 평가 방법과 기준을 함께 정해야 합니다.", "EWG 등급은 이 페이지에서 안전성이나 인증의 근거로 사용하지 않습니다. 최신 규격서와 로트별 자료는 별도 확인이 필요합니다."],
  checklist: ["원료명·용도와 목표 순도", "허용 가능한 취·색상 및 불순물 기준", "필요한 규격서·분석 자료와 예상 사용량"],
 },
} as const;
