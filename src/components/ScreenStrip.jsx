import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const THUMB_H = 220;

// Tall pages show their top as a portrait crop; wide shots show whole.
const thumbWidth = (s) => Math.round(Math.max(168, Math.min(360, (THUMB_H * s.w) / s.h)));

/*
  Every UI screen of a case study as one sideways-scrolling row of thumbnails.
  Clicking a thumbnail opens a full-size viewer (scrollable for long pages)
  with previous / next, keyboard arrows and Esc.
*/
export default function ScreenStrip({ screens, theme, mode, project }) {
  const rowRef = useRef(null);
  const thumbRefs = useRef([]);
  const [index, setIndex] = useState(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const isDark = mode === "dark";

  const updateEdges = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const page = (dir) => {
    const el = rowRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrow = (dir, disabled) => {
    const Icon = dir < 0 ? ChevronLeft : ChevronRight;
    return (
      <button type="button" onClick={() => page(dir)} disabled={disabled} aria-label={dir < 0 ? "Scroll screens left" : "Scroll screens right"} data-cursor="hover"
        style={{ width: 38, height: 38, borderRadius: 99, border: `1px solid ${theme.line}`, background: theme.card, color: theme.ink, display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.35 : 1 }}>
        <Icon size={18} aria-hidden="true" />
      </button>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
        <span style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft }}>Scroll sideways · click any screen to open it full size</span>
        <span style={{ display: "inline-flex", gap: 8, flexShrink: 0 }}>{arrow(-1, edges.start)}{arrow(1, edges.end)}</span>
      </div>
      <ul ref={rowRef} onScroll={updateEdges} data-lenis-prevent aria-label={`${project} screens`}
        style={{ listStyle: "none", margin: 0, padding: "2px 2px 14px", display: "flex", gap: 14, overflowX: "auto", scrollSnapType: "x proximity", overscrollBehaviorX: "contain" }}>
        {screens.map((s, i) => (
          <li key={s.label + i} style={{ flex: "0 0 auto", width: thumbWidth(s), scrollSnapAlign: "start" }}>
            <button type="button" ref={(el) => { thumbRefs.current[i] = el; }} onClick={() => setIndex(i)} data-cursor="hover"
              aria-label={`Open ${s.label} full size (${i + 1} of ${screens.length})`}
              style={{ display: "block", width: "100%", padding: 0, border: "none", background: "transparent", cursor: "pointer", textAlign: "left" }}>
              <span style={{ position: "relative", display: "block", height: THUMB_H, borderRadius: 12, overflow: "hidden", border: `1px solid ${theme.line}`, background: theme.card, boxShadow: isDark ? "0 6px 20px rgba(0,0,0,0.35)" : "0 6px 20px rgba(0,0,0,0.06)" }}>
                <img src={s.src} alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                <span aria-hidden="true" style={{ position: "absolute", right: 8, bottom: 8, width: 28, height: 28, borderRadius: 99, background: "rgba(0,0,0,0.55)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Maximize2 size={14} /></span>
              </span>
              <span style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", fontFamily: "Inter", fontSize: 13.5, fontWeight: 500, color: theme.ink, marginTop: 8, lineHeight: 1.35 }}>{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
      {index !== null && (
        <Viewer screens={screens} index={index} setIndex={setIndex} project={project}
          onClose={() => { const i = index; setIndex(null); requestAnimationFrame(() => thumbRefs.current[i]?.focus()); }} />
      )}
    </div>
  );
}

function Viewer({ screens, index, setIndex, onClose, project }) {
  const s = screens[index];
  const closeRef = useRef(null);
  const scrollRef = useRef(null);
  const tall = s.h / s.w > 1.25;
  const go = useCallback((d) => setIndex((i) => (i + d + screens.length) % screens.length), [setIndex, screens.length]);

  useEffect(() => {
    closeRef.current?.focus();
    window.lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.lenis?.start(); document.body.style.overflow = prevOverflow; };
  }, []);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "Tab") {
        // Keep focus inside the dialog.
        const f = [...document.querySelectorAll("[data-screen-viewer] button, [data-screen-viewer] [tabindex='0']")];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [go, onClose]);

  const btn = { width: 42, height: 42, borderRadius: 99, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 };

  return createPortal(
    <div data-screen-viewer data-lenis-prevent role="dialog" aria-modal="true" aria-label={`${project}: ${s.label}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: "fixed", inset: 0, zIndex: 9000, background: "rgba(10,10,12,0.97)", display: "flex", flexDirection: "column", fontFamily: "Inter" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px clamp(14px, 3vw, 28px)", color: "#fff" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.label}</div>
          <div aria-live="polite" style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{index + 1} of {screens.length}{tall ? " · scroll to see the whole page" : ""}</div>
        </div>
        <button type="button" onClick={() => go(-1)} aria-label="Previous screen" data-cursor="hover" style={btn}><ChevronLeft size={20} aria-hidden="true" /></button>
        <button type="button" onClick={() => go(1)} aria-label="Next screen" data-cursor="hover" style={btn}><ChevronRight size={20} aria-hidden="true" /></button>
        <button type="button" ref={closeRef} onClick={onClose} aria-label="Close" data-cursor="hover" style={btn}><X size={20} aria-hidden="true" /></button>
      </div>
      <div ref={scrollRef} tabIndex={0} aria-label="Screen image (scrollable)" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{ flex: 1, overflow: "auto", overscrollBehavior: "contain", padding: "0 clamp(14px, 3vw, 28px) 28px", display: "flex", justifyContent: "center", alignItems: tall ? "flex-start" : "center", outline: "none" }}>
        <img key={s.src} src={s.src} width={s.w} height={s.h} alt={`Full design of the ${project} ${s.label} screen.`} decoding="async"
          style={tall
            ? { width: "min(1100px, 100%)", height: "auto", display: "block", borderRadius: 10 }
            : { maxWidth: "min(1400px, 100%)", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain", display: "block", borderRadius: 10 }} />
      </div>
    </div>,
    document.body
  );
}
