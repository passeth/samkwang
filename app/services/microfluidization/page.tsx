export const metadata = { title: "초고압유화 임가공" };
export default function Page() {
	return (
		<main id="main" className="wrap page-main">
			<div className="page-heading">
				<p className="eyebrow">MICROFLUIDIZATION</p>
				<h1>
					소재를 다루는 기술,
					<br />
					공정으로 이어집니다.
				</h1>
				<p className="lead">Microfluidizer를 활용한 초고압유화 임가공.</p>
			</div>
			<section className="editorial-section">
				<h2>설비와 처리 조건</h2>
				<div>
					<dl className="spec-list">
						<div>
							<dt>설비</dt>
							<dd>M-7250-20</dd>
						</div>
						<div>
							<dt>최대 압력</dt>
							<dd>20,000 psi</dd>
						</div>
						<div>
							<dt>유량</dt>
							<dd>
								15.6 L/min @ 10,000 psi
								<br />
								7.97 L/min @ 20,000 psi
							</dd>
						</div>
						<div>
							<dt>최대 투입 온도</dt>
							<dd>75°C</dd>
						</div>
					</dl>
					<p className="note">
						실제 처리 조건은 원료와 공정 상담 후
						확인합니다.
					</p>
				</div>
			</section>
			<section className="editorial-section">
				<h2>상담 전에 준비할 내용</h2>
				<div>
					<p className="lead">
						원료의 조성·특성, 목표 입도, 처리량, 온도 제한과 일정을 알려주세요.
						적용 가능성과 처리 조건을 검토하는 데 도움이 됩니다.
					</p>
					<a className="action" href="/contact">
						임가공 상담 ↗
					</a>
				</div>
			</section>
		</main>
	);
}
