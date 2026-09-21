import { TechnologyFrame, TechnologyHero, TechnologyInquiry } from "@/components/site/technology-frame";
import { equipment, examples, features } from "@/data/processing";

export const metadata = { title: "초고압유화 임가공" };

export default function Page() {
	return (
		<TechnologyFrame active="processing"><TechnologyHero label="MICROFLUIDIZATION / 03" title={<>초고압으로 다루는<br />분산과 유화.</>} description="Microfluidizer를 활용한 초고압유화 임가공. 원료의 조성과 목표 입도, 처리량을 기준으로 적용 조건을 상담합니다." image="/media/company/material-study.jpg" /><div className="te-body"><nav className="te-siblings" aria-label="임가공 내용"><a href="#principle">작동 원리</a><a href="#examples">처리 예시</a><a href="#equipment">설비 조건</a></nav><section id="principle" className="editorial-section">
				<h2>작동 원리</h2>
				<div>
					<p className="lead">
						Intensifier pump로 유체를 2,000~20,000 psi로 가압해 100 μm 이하
						Slot으로 주입합니다. Chamber에서 발생하는 Shear, Impact, Cavitation
						세 가지 힘으로 입자를 탈응집시켜 나노 에멀젼과 fine dispersion을
						만듭니다.
					</p>
					<p>
						기존 기술 자료에서는 나노 에멀젼의 분산 안정성과 미세 입자의 가벼운
						펴발림·사용감에 대해 설명합니다. 결과는 원료와 제형 조건에 따라 달라집니다. 입자가 가시광선 파장보다 작은 100 nm
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
			<section className="te-force-grid" aria-label="공정에 작용하는 세 가지 힘">{[["01", "Shear · 전단", "좁은 유로를 통과할 때 발생하는 전단력."], ["02", "Impact · 충돌", "Chamber 내부 유체의 충돌."], ["03", "Cavitation · 공동", "압력 변화에 따라 발생하는 공동 현상."]].map(([n,title,body]) => <div key={n}><p className="te-kicker">{n}</p><h3>{title}</h3><p>{body}</p></div>)}</section><figure className="tech-diagram"><img src="/media/processing/flow.png" alt="Microfluidizer의 작동 원리와 유체 흐름 도해" /><figcaption>Microfluidizer 작동 원리. 삼광켐 기존 기술 자료.</figcaption></figure>
<section className="process-features">
				<div className="wrap">
					<p className="eyebrow">CAPABILITIES</p>
					<h2>기술 자료에 소개된 공정 특성</h2>
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
			<section id="examples" className="te-section">
				<h2>제형에 따른 임가공 예시</h2>
				<p className="lead">
					원본 기술 자료의 처리 압력, 통과 횟수, 결과입니다. 실제 조건은 원료와
					상담 후 확인합니다.
				</p><p className="te-note">아래 예시 중 22,000 psi 조건은 본 페이지의 설비 최대 압력 20,000 psi를 초과합니다. 일반 기술 사례로 구분하며, 해당 조건의 임가공 가능 여부는 보장하지 않습니다.</p>
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
			<figure className="tech-diagram te-equipment"><img src="/media/processing/equipment.png" alt="기존 기술 자료의 Microfluidizer 외형 이미지. M-700 표기." /><figcaption>원본 이미지 표기: M-700. 아래 사양표의 모델 M-7250-20과 구분해 확인하세요.</figcaption></figure>
<section id="equipment" className="editorial-section">
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
			</div><TechnologyInquiry title="목표 입도와 처리 조건을 알려주세요." items={["원료 조성·고형분·점도와 목표 입도", "처리량·허용 온도·현재 분산 상태", "희망 일정·필요 시험 및 평가 기준"]} /></TechnologyFrame>
	);
}
