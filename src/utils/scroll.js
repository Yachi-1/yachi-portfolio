// Single entry point for programmatic scrolling. `window.lenis` is set by App
// unless reduced motion is on, in which case scrolling should not animate.

/** Glide back to the top of the current page. */
export function scrollToTop() {
  if (window.lenis) window.lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "auto" });
}

/** Jump to the top without animating, for when a new page replaces the old one. */
export function resetScroll() {
  if (window.lenis) window.lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}
