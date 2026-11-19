import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

/*
  The hero of every case study (back link, title, lede, meta, hero image),
  followed directly by the full process passed as children.
*/
export default function CaseSummary({
  theme, mode, setRoute,
  eyebrow, title, accent, lede, meta, hero, children, oneLineTitle = false,
}) {
  const { isMobile } = useBreakpoint();
  const isDark = mode === "dark";
  const shadow = isDark ? "0 12px 40px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.07)";
  const pad = isMobile ? "0 4vw" : "0 6vw";
  const body = { fontFamily: "Inter", fontSize: isMobile ? 15 : 15.5, lineHeight: 1.6, color: theme.inkSoft };
  const kicker = { fontFamily: "Inter", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 10 };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: pad }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <button onClick={() => setRoute("projects")} data-cursor="hover"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, cursor: "pointer", padding: "8px 6px", marginLeft: -6, marginBottom: 18, transition: "color 0.2s ease, transform 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; e.currentTarget.style.transform = "translateX(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.inkSoft; e.currentTarget.style.transform = "translateX(0)"; }}>
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>
          <Reveal delay={0.05}><div style={kicker}>{eyebrow}</div></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Inter", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 14px", lineHeight: 1.1,
              ...(oneLineTitle && !isMobile
                ? { fontSize: "min(44px, 3.3vw)", whiteSpace: "nowrap" }
                : { fontSize: "clamp(30px, 4.4vw, 56px)", maxWidth: 1000 }) }}>
              {title}{" "}<span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "1.08em" }}>{accent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}><p style={{ ...body, fontSize: isMobile ? 16 : 18, margin: 0, maxWidth: oneLineTitle ? "none" : 860 }}>{lede}</p></Reveal>
          <Reveal delay={0.2}>
            <dl style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : `repeat(${meta.length}, 1fr)`, gap: isMobile ? 16 : 28, margin: isMobile ? "26px 0 0" : "34px 0 0", paddingTop: isMobile ? 18 : 22, borderTop: `1px solid ${theme.line}` }}>
              {meta.map((m) => (
                <div key={m.k}>
                  <dt style={{ ...kicker, fontSize: 11, marginBottom: 4 }}>{m.k}</dt>
                  <dd style={{ margin: 0, fontFamily: "Inter", fontSize: isMobile ? 14 : 15, fontWeight: 500, color: theme.ink, lineHeight: 1.4 }}>{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.25}>
            <div style={{ marginTop: isMobile ? 26 : 34, borderRadius: 20, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow, background: hero.bg || theme.card }}>
              <img src={hero.src} width={hero.w} height={hero.h} alt={hero.alt} fetchpriority="high" decoding="async"
                style={{ width: "100%", height: isMobile ? "auto" : "clamp(240px, 30vw, 420px)", objectFit: "cover", objectPosition: hero.position || "top center", display: "block" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {children}
    </>
  );
}
