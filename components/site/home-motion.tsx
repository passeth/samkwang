"use client";
import { useEffect } from "react";

export function HomeMotion() {
 useEffect(() => {
  const root = document.querySelector(".home-page");
  if (!root) return;
  const mq = matchMedia("(prefers-reduced-motion: reduce)");
  let observer: IntersectionObserver | undefined;
  const elements = Array.from(root.querySelectorAll<HTMLElement>(".intro > *, .section-heading, .home-search, .category-links > *, .stat-strip > *, .media-split-copy > *, .step-media .eyebrow, .step-media h2, .step-media li, .photo-mosaic li, .image-banner-copy > *"));
  const reset = () => {
   observer?.disconnect();
   elements.forEach(el => { el.classList.remove("reveal-pending"); el.style.removeProperty("--reveal-delay"); });
  };
  const setup = () => {
   reset();
   if (mq.matches) return;
   observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     if (!entry.isIntersecting) return;
     entry.target.classList.remove("reveal-pending");
     observer?.unobserve(entry.target);
    });
   }, { threshold: 0.08 });
   elements.forEach((el, index) => {
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.style.setProperty("--reveal-delay", `${index % 3 * 65}ms`);
    el.classList.add("reveal-pending");
    observer!.observe(el);
   });
  };
  setup();
  mq.addEventListener("change", setup);
  return () => { reset(); mq.removeEventListener("change", setup); };
 }, []);
 return null;
}
