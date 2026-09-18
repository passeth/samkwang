export default function NotFound() {
	return (
		<main id="main" className="wrap page-main">
			<div className="empty-state">
				<p className="eyebrow">404</p>
				<h1>페이지를 찾을 수 없습니다.</h1>
				<p>주소를 확인하거나 제품 목록에서 다시 찾아주세요.</p>
				<a className="action" href="/products">
					제품 찾기
				</a>
			</div>
		</main>
	);
}
