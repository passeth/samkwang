"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

/** Only new route navigations start at the top. The router/browser owns hashes,
 * query-only updates, and history restoration (including duplicate URLs).
 */
export function RouteScroll() {
 const pathname = usePathname();
 const router = useRouter();
 const previousPath = useRef(pathname);
 const historyDestination = useRef<string | null>(null);
 const cancelPending = useRef<() => void>(() => {});

 useLayoutEffect(() => {
  const onPopState = () => {
   cancelPending.current();
   // A same-path traversal must not accidentally exempt the next route change.
   historyDestination.current = location.pathname !== previousPath.current
    ? location.pathname : null;
  };
  const onClick = (event: MouseEvent) => {
   if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
   const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
   if (!(anchor instanceof HTMLAnchorElement) || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;
   const destination = new URL(anchor.href, location.href);
   if (destination.origin === location.origin) {
    historyDestination.current = null;
    cancelPending.current();
    // Plain pagination anchors otherwise reload the document and lose scroll.
    // Treat query-only links like the catalog's scroll:false filter updates.
    if (!event.defaultPrevented && destination.pathname === location.pathname &&
        destination.search !== location.search && !destination.hash) {
     event.preventDefault();
     router.push(destination.pathname + destination.search, { scroll: false });
    }
   }
  };
  const onInput = () => cancelPending.current();
  window.addEventListener("popstate", onPopState);
  document.addEventListener("click", onClick, true);
  window.addEventListener("wheel", onInput, { passive: true });
  window.addEventListener("touchstart", onInput, { passive: true });
  window.addEventListener("pointerdown", onInput, { passive: true });
  window.addEventListener("keydown", onInput);
  return () => {
   cancelPending.current();
   window.removeEventListener("popstate", onPopState);
   document.removeEventListener("click", onClick, true);
   window.removeEventListener("wheel", onInput);
   window.removeEventListener("touchstart", onInput);
   window.removeEventListener("pointerdown", onInput);
   window.removeEventListener("keydown", onInput);
  };
 }, [router]);

 useLayoutEffect(() => {
  if (previousPath.current === pathname) return;
  previousPath.current = pathname;
  const restoring = historyDestination.current === pathname;
  historyDestination.current = null;
  // Initial load, same-page anchors and search/filter changes never reset.
  // Cross-page hashes also retain the router's anchor behavior.
  if (restoring || location.hash) return;

  let first = 0;
  let second = 0;
  let cancelled = false;
  const cancel = () => {
   cancelled = true;
   cancelAnimationFrame(first);
   cancelAnimationFrame(second);
  };
  cancelPending.current = cancel;
  // Run after the committed route and the router's own focus/scroll effects.
  // Two frames, not a polling loop: never keep pulling the reader back up.
  first = requestAnimationFrame(() => {
   second = requestAnimationFrame(() => {
    if (!cancelled && location.pathname === pathname && !location.hash) {
     window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
   });
  });
  return cancel;
 }, [pathname]);

 return null;
}
