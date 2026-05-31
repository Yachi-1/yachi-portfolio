import { useEffect, useRef } from "react";

// A muted, looping video that does NOT download or play until it is scrolled
// into view (preload="none" + IntersectionObserver). Pauses when off-screen so
// it never burns CPU/bandwidth in the background. Respects prefers-reduced-motion.
export default function LazyVideo({ sources, poster, style, className, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // leave it paused on the poster

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Begin fetching + playing only once it's near the viewport.
          el.preload = "auto";
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className={className}
      style={style}
      {...rest}
    >
      {sources.map((s) => (
        <source key={s.type} src={s.src} type={s.type} />
      ))}
    </video>
  );
}
