import { Search, Lightbulb, Palette, Code2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

const ITEMS = [
  { icon: Search, title: "Research", text: "Defining user and business requirements through qualitative and quantitative research.", color: "pastel2" },
  { icon: Lightbulb, title: "Synthesize", text: "Translating research findings into clear, actionable insights.", color: "pastel3" },
  { icon: Palette, title: "Design", text: "Prototyping solutions based on identified needs.", color: "pastel1" },
  { icon: Code2, title: "Test", text: "Validating concepts with real users to confirm usability and meet business goals.", color: "pastel4" },
];

export default function ApproachSection({ theme }) {
  return (
    <section style={{ padding: "120px 6vw", background: theme.bgAlt, position: "relative" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 60, maxWidth: 1000 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: theme.accent, marginBottom: 4 }}>
              how I work ✦
            </div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
              margin: 0, lineHeight: 1,
            }}>
              A loop, not a line.
            </h2>
            <p style={{ fontFamily: "Inter", fontSize: 17, color: theme.inkSoft, lineHeight: 1.55, marginTop: 18 }}>
              Every project comes back to the same four moves - but the order, the depth, and the tools change every time.
            </p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div style={{
                  padding: 28, borderRadius: 20,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                  height: "100%",
                  position: "relative", overflow: "hidden",
                }} >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: theme[it.color],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                  }}>
                    <Icon size={22} color={theme.ink} />
                  </div>
                  <div style={{
                    fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.inkMute,
                    marginBottom: 4,
                  }}>0{i + 1}</div>
                  <h3 style={{
                    fontFamily: "Inter", fontSize: 22, fontWeight: 600,
                    letterSpacing: "-0.02em", color: theme.ink, margin: 0, marginBottom: 8,
                  }}>{it.title}</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.5, margin: 0 }}>
                    {it.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
