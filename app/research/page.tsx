export const metadata = { title: "기업부설 연구소" };
export default function Page() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">RESEARCH & DEVELOPMENT</p>
				<h1>
					원료의 이름에서,
					<br />
					제형의 질문으로.
				</h1>
				<p className="lead">
					성분을 어떤 구조로 담을지, 제형에 어떻게 적용할지.
					<br />
					삼광켐 기업부설 연구소는 기능성 소재와 제형을 개발하며 이러한 질문을
					연구합니다.
				</p>
			</div>
			<section className="editorial-section">
				<h2>연구를 제품으로.</h2>
				<div>
					<p className="lead">
						캡슐화·가용화·안정화·정제를 연구 주제로 다루고, Gceraplex와
						Epidermics의 개발·출시로 연구를 제품에 연결해 왔습니다.
					</p>
					<dl className="spec-list">
						<div>
							<dt>2015.11.11</dt>
							<dd>Gceraplex 출시</dd>
						</div>
						<div>
							<dt>2016.05.11</dt>
							<dd>Epidermics 출시</dd>
						</div>
					</dl>
					<a className="text-link" href="/technology">
						연구 기술 살펴보기 ↗
					</a>
				</div>
			</section>
		</main>
	);
}
