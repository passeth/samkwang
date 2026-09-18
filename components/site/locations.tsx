const locations = [
	{
		name: "본사 & 창고",
		address: "17501 경기도 안성시 양성면 양성로 390",
		fax: "031-8057-3055",
	},
	{
		name: "연구소 & 영업",
		address: "16954 경기도 용인시 기흥구 흥덕1로 13, 흥덕IT밸리 B동 1006호",
		fax: "070-7589-1018",
	},
] as const;

export function Locations() {
	return (
		<div className="locations">
			{locations.map((location) => (
				<address key={location.name}>
					<strong>{location.name}</strong>
					<p>{location.address}</p>
					<p className="location-contact">
						<a href="tel:03180573050">Tel : 031-8057-3050</a>
						<span>Fax : {location.fax}</span>
					</p>
				</address>
			))}
		</div>
	);
}
