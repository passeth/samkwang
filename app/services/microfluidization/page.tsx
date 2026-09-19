import {
	ImageBanner,
	MediaSplit,
	StatStrip,
	StepMedia,
} from "@/components/site/rich-sections";
import { equipment, examples, features } from "@/data/processing";

export const metadata = { title: "초고압유화 임가공" };

export default function Page() {
	return (
		<main id="main">
			<div className="wrap page-main" style={{ paddingBottom: 0 }}>
				<div className="page-heading">
					<p className="eyebrow">MICROFLUIDIZATION</p>
					<h1>
						소재를 다루는 기술,
						<br />
						공정으로 이어집니다.
					</h1>
					<p className="lead">
						Microfluidizer를 활용한 초고압유화 임가공. 고압으로 유체를 노즐에
						통과시켜 응집 입자를 분쇄하고 균질 분산액을 만듭니다.
					</p>
				</div>
			</div>
			<MediaSplit
				eyebrow="M-7250-20"
				title={
					<>
						고압 유화로
						<br />
						입도를 다룹니다.
					</>
				}
				body="Homogenizer나 첨가제 분산에 비해 분산성과 안정성을 개선하는 공정입니다. 목표 입도, 원료 특성, 처리 조건을 상담합니다."
				href="/contact"
				cta="임가공 상담"
				video
				videoSrc="/media/clip4.mp4"
				image="/media/clip4-poster.jpg"
				alt="시료를 랙에 담는 연구 작업"
			/>
			<StatStrip
				items={[
					["20,000 psi", "최대 압력"],
					["50 nm", "가공 가능 입도"],
					["15.6 L/min", "유량 @ 10,000 psi"],
					["75°C", "최대 투입 온도"],
				]}
			/>
			<section className="wrap editorial-section">
				<h2>작동 원리</h2>
				<div>
					<p className="lead">
						Intensifier pump로 유체를 2,000~20,000 psi로 가압해 100 μm 이하
						Slot으로 주입합니다. Chamber에서 발생하는 Shear, Impact, Cavitation
						세 가지 힘으로 입자를 탈응집시켜 나노 에멀젼과 fine dispersion을
						만듭니다.
					</p>
					<p>
						균일한 나노 에멀젼은 분산 안정성을 높이고, 미세 입자는 가벼운
						펴발림과 사용감을 만듭니다. 입자가 가시광선 파장보다 작은 100 nm
						이하로 분산되면 투명 유화 제형도 가능합니다. 레시틴을 이용한
						DDS(Drug Delivery System), 비이온 계면활성제 니오좀(Niosome) 형태로도
						활용할 수 있습니다.
					</p>
				</div>
			</section>
			<figure className="tech-diagram">
				<img
					src="/media/processing/flow-liposome.png"
					alt="Microfluidizer 고압 유화 흐름과 리포좀 형성 도해"
				/>
				<figcaption>
					고압 유화 흐름과 리포좀 형성. 삼광켐 기술 자료.
				</figcaption>
			</figure>
			<StepMedia
				eyebrow="THREE FORCES"
				title={
					<>
						Shear, Impact, Cavitation으로
						<br />
						입자를 나눕니다.
					</>
				}
				steps={[
					{
						index: "01",
						name: "Shear",
						body: "좁은 Slot을 지나며 생기는 전단력으로 응집을 풀어 줍니다.",
						image: "/media/processing/flow.png",
						alt: "Microfluidizer 작동 원리 도해",
					},
					{
						index: "02",
						name: "Impact",
						body: "Chamber 안에서 충돌하며 입도 분포를 고르게 만듭니다.",
						image: "/media/research/lab-02.jpg",
						alt: "연구소 분석 공간",
					},
					{
						index: "03",
						name: "Cavitation",
						body: "공동 현상으로 나노 에멀젼과 fine dispersion을 형성합니다.",
						image: "/media/technology/capsules-microscopy.jpg",
						alt: "캡슐화 입자 현미경 이미지",
					},
				]}
			/>
			<section className="process-features">
				<div className="wrap">
					<p className="eyebrow">CAPABILITIES</p>
					<h2>공정의 특징</h2>
					<ol>
						{features.map((item, index) => (
							<li key={item}>
								<span>0{index + 1}</span>
								<p>{item}</p>
							</li>
						))}
					</ol>
				</div>
			</section>
			<figure className="process-passes">
				<img
					src="/media/processing/passes.png"
					alt="Microfluidizer 통과 횟수에 따른 색상 변화. 0회부터 3회까지."
				/>
				<figcaption>Microfluidizer 통과 횟수에 따른 색상 변화</figcaption>
			</figure>
			<section className="wrap page-main" style={{ paddingTop: 64 }}>
				<h2>제형에 따른 임가공 예시</h2>
				<p className="lead">
					원본 기술 자료의 처리 압력, 통과 횟수, 결과입니다. 실제 조건은 원료와
					상담 후 확인합니다.
				</p>
				<div className="process-table-wrap">
					<table className="process-table">
						<thead>
							<tr>
								<th>Sample</th>
								<th>Pressure</th>
								<th>Passes</th>
								<th>Results</th>
							</tr>
						</thead>
						<tbody>
							{examples.map(([sample, pressure, passes, result]) => (
								<tr key={sample}>
									<td>{sample}</td>
									<td>{pressure}</td>
									<td>{passes}</td>
									<td>{result}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
			<MediaSplit
				eyebrow="EQUIPMENT"
				title={
					<>
						M-7250-20
						<br />
						설비 조건
					</>
				}
				body="최대 20,000 psi, 10,000 psi에서 15.6 L/min. 실제 처리 조건은 원료와 공정 상담 후 확인합니다."
				href="/contact"
				cta="임가공 상담"
				reverse
				image="/media/processing/equipment.png"
				alt="Microfluidizer 외형. 원본 수록 이미지 표시는 M-700."
			/>
			<section className="wrap editorial-section">
				<h2>기기 정보</h2>
				<div>
					<dl className="spec-list">
						{equipment.map(([label, value]) => (
							<div key={label}>
								<dt>{label}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>
					<p className="note">
						원본 페이지의 외형 사진은 M-700으로 표시되어 있습니다. 상담 기준
						모델은 M-7250-20입니다.
					</p>
				</div>
			</section>
			<ImageBanner
				src="/media/research/lab-01.jpg"
				alt="연구소 실험대"
				eyebrow="PROCESS CONSULT"
				title="목표 입도와 원료 특성을 알려주세요."
				body="조성, 처리량, 온도 제한, 일정. 적용 가능성과 처리 조건을 검토합니다."
				href="/contact"
				cta="임가공 상담"
			/>
		</main>
	);
}
