"use client";
import { useEffect, useState } from "react";

export function MediaLoop({
	src = "/media/brand-film.mp4",
	poster = "/media/hero-poster.jpg",
	alt,
}: {
	readonly src?: string;
	readonly poster?: string;
	readonly alt: string;
}) {
	const [reduce, setReduce] = useState(false);
	useEffect(() => {
		const mq = matchMedia("(prefers-reduced-motion: reduce)");
		const onChange = () => setReduce(mq.matches);
		onChange();
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	if (reduce) {
		return <img src={poster} alt={alt} />;
	}
	return (
		<video
			src={src}
			poster={poster}
			muted
			playsInline
			loop
			autoPlay
			preload="metadata"
			aria-label={alt}
		/>
	);
}
