export const technologies = [
	{
		slug: "encapsulation",
		name: "캡슐화",
		en: "ENCAPSULATION TECHNIQUE",
		headline: "성분을 어떤 구조로 담을 것인가.",
		body: "용매추출 및 증발 방법과 유화중합 방법을 통해 만들어진 캡슐은 구형의 나노입자 형태로 화장품 활성 성분의 안정성을 높입니다.",
		detail:
			"Gceraplex는 피부에서의 효과를 극대화하기 위해 Ceramide를 Phospholipid와 Glucosylceramide로 캡슐화한 나노입자입니다.",
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
		headline: "제형에 담고 싶은 성분, 어떻게 접근할까.",
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
		headline: "성분을 담은 다음, 구조를 살펴봅니다.",
		body: "대부분의 활성물질은 불안정하고 침전되기 쉽습니다. Liquid crystalline system을 통해 지질의 다중 층이 외부 환경으로부터 활성 물질을 보호하고 안정화가 이루어집니다.",
		detail:
			"Epidermics는 레시틴으로 액정을 형성해 친수성 NMF와 소수성 ceramide를 캡슐화하고, 보수력(water holding capacity)이 HA보다 10% 뛰어난 흰목이버섯 추출물로 하이드로겔화하여 다중 안정화한 기술입니다. 수치는 삼광켐 기술 자료 기준입니다.",
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
		headline: "원료의 적용을 위해, 순도·취·색상을 살펴봅니다.",
		body: "순도 높은 제품을 위하여 합성 화합물의 정제는 화장품 탐색 과정에서 가장 해결하기 어려운 bottleneck 중 하나로 인식됩니다. 질량분석(MS) 시스템과 기체 크로마토그래피 솔루션, QA/QC 분석법으로 무취·무색의 제품을 공급합니다.",
		detail:
			"Hexanediol-6는 2년여 개발 끝에 무취·무색, 99.8% 이상 품질의 1,2-Hexanediol을 정제합니다. 일본에서 전량 수입하던 원료를 자체 기술로 재생산합니다. MPO(P)는 메칠프로판디올의 취를 줄여 적용을 쉽게 한 정제 제품이며, 메칠프로판디올의 EWG 등급은 1입니다.",
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
