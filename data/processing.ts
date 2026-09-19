export const features = [
	"일반 High Pressure Homogenizer에 비해 수십 배 강력한 분산·유화 능력",
	"분당 용액 처리율 100 mL/min 이상으로 단기간에 고용량 분산액 처리 가능",
	"최대 50 nm 크기 입자로 가공 가능하며 안정성 개선",
	"초기 물질의 형상 및 특징이 유지되면서 사용하기 쉽게 가공",
	"파우더 재료도 요청하는 나노 사이즈의 액상 형태로 가공 가능",
] as const;

export const examples = [
	[
		"Oil-in-Water emulsions: 100% Mineral Oil, 1% HLB 12 in water",
		"10,000 psi",
		"1 pass",
		"Small, uniform particle distribution (175 nm ± 37%) resulting in long-term stability",
	],
	[
		"Cellulose Fibers",
		"20,000 psi",
		"3 passes",
		"Formed a thick, creamy emulsion",
	],
	[
		"Dispersion of steroids / water",
		"22,000 psi",
		"6 passes",
		"Starting size 100 microns, achieved average particle size under 2 microns",
	],
	[
		"Cosmetic Color Dispersion",
		"19,500 psi",
		"1 pass",
		"Reduced particle size, increased uniformity and enhanced color intensity",
	],
	[
		"Phthalocyanine pigment (blue in polymer and solvent)",
		"15,000 psi",
		"3 passes",
		"Deagglomerated and dispersed polymer / pigment uniformly in solvent",
	],
] as const;

export const equipment = [
	["모델", "M-7250-20"],
	["압력 범위", "최대 20,000 psi"],
	["유량 @ 10,000 psi", "15.6 L/min (25 strokes/min)"],
	["유량 @ 20,000 psi", "7.97 L/min (25 strokes/min)"],
	["최대 투입 온도", "75°C"],
	["전원", "3상, 208/230/380/460/575 V, 50 HP (37 kW)"],
	[
		"유틸리티",
		"유압유·공정 유체 열교환용 냉각수, 압축공기 50~150 psi (28.3 L @ 50 psi, 노점 0~1.67°C)",
	],
	["치수", "75 × 180 × 145 cm (L × W × H)"],
	["무게", "900 kg"],
] as const;
