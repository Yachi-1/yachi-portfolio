import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import { projects } from "../data/projects.js";

const STORY = [
  { h: "The challenge", t: "Users were dropping off mid-funnel. The data said one thing, but qualitative interviews surfaced a different story - one we couldn't have caught with analytics alone." },
  { h: "Research & synthesis", t: "I led a mixed-methods study: 24 user interviews, 3 usability rounds, and behavioral analytics over 6 weeks. The core insight reframed our entire roadmap." },
  { h: "The design", t: "Iterated through 4 concepts before landing on a flow that felt obvious in hindsight. Built a component system that engineering could ship in sprints, not quarters." },
  { h: "Outcome", t: "Shipped to 100% of users in Q4. The KPI we cared about moved 38% in our direction; secondary metrics held steady or improved. Most importantly, support tickets in the relevant flow dropped by half." },
];

const META = (year, domain) => ([
  { k: "Role", v: "Lead UI/UX Designer" },
  { k: "Timeline", v: year },
  { k: "Domain", v: domain },
  { k: "Tools", v: "Figma · Framer · FigJam" },
]);

const STATS = [
  { k: "+38%", v: "Faster bid conversion" },
  { k: "24", v: "User interviews" },
  { k: "12wk", v: "Sprint to ship" },
];

export default function ProjectDetail({ id, theme, setRoute }) {
  const project = projects.find(p => p.id === id);
  if (!project) {
    return (
      <div style={{ paddingTop: 200, textAlign: "center", color: theme.ink, fontFamily: "Inter" }}>
        Project not found.
      </div>
    );
  }
  const idx = projects.findIndex(p => p.id === id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div style={{ paddingTop: 130 }}>
      <section style={{ padding: "0 6vw 60px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              data-magnet="0.3"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "none",
                fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft,
                cursor: "pointer", marginBottom: 30,
              }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
              <span style={{ padding: "5px 12px", borderRadius: 999, background: theme[project.color1], fontFamily: "Inter", fontSize: 12, fontWeight: 600 }}>{project.tag}</span>
              <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>{project.domain}</span>
              <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>· {project.year}</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(48px, 7vw, 110px)",
              fontWeight: 500, letterSpacing: "-0.045em", color: theme.ink,
              margin: 0, lineHeight: 0.95,
            }}>
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 32, color: theme.accent, marginTop: 12 }}>
              {project.subtitle}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal delay={0.3}>
        <section style={{ padding: "0 6vw 60px" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div style={{
              height: 540, borderRadius: 24, overflow: "hidden",
              background: `linear-gradient(135deg, ${theme[project.color1]}, ${theme[project.color2]})`,
              position: "relative",
            }}>
              <ProjectVisual project={project} theme={theme} hover={true} />
            </div>
          </div>
        </section>
      </Reveal>

      <section style={{ padding: "60px 6vw" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(220px, 280px) 1fr", gap: 60 }}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {META(project.year, project.domain).map(d => (
                <div key={d.k}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 4 }}>{d.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, color: theme.ink }}>{d.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{
              fontFamily: "Inter", fontSize: "clamp(20px, 1.8vw, 26px)",
              lineHeight: 1.5, color: theme.ink, fontWeight: 400, margin: 0,
              letterSpacing: "-0.015em",
            }}>
              {project.description}
            </p>
            <div style={{ marginTop: 30, display: "flex", gap: 24, flexWrap: "wrap" }}>
              {STATS.map(s => (
                <div key={s.k}>
                  <div style={{
                    fontFamily: "Inter", fontSize: 44, fontWeight: 500,
                    letterSpacing: "-0.04em", color: theme.ink, lineHeight: 1,
                  }}>{s.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft, marginTop: 4 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "60px 6vw 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {STORY.map((s, i) => (
            <Reveal key={i} delay={0.05}>
              <div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>0{i + 1}</div>
                <h2 style={{
                  fontFamily: "Inter", fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
                  margin: 0, marginBottom: 16, lineHeight: 1.1,
                }}>{s.h}</h2>
                <p style={{ fontFamily: "Inter", fontSize: 17.5, lineHeight: 1.65, color: theme.inkSoft, margin: 0, letterSpacing: "-0.005em" }}>{s.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 6vw 100px" }}>
        <div
          onClick={() => setRoute(`project:${next.id}`)}
          data-magnet="0.05"
          data-cursor="view"
          data-cursor-label="Next"
          style={{
            maxWidth: 1300, margin: "0 auto",
            padding: "60px 50px", borderRadius: 24,
            background: `linear-gradient(135deg, ${theme[next.color1]}, ${theme[next.color2]})`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 30, flexWrap: "wrap", cursor: "pointer",
          }}
        >
          <div>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginBottom: 8 }}>Next case</div>
            <div style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.035em", color: "rgba(0,0,0,0.9)", lineHeight: 1 }}>
              {next.title}
            </div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "rgba(0,0,0,0.6)", marginTop: 6 }}>{next.subtitle}</div>
          </div>
          <div style={{
            width: 70, height: 70, borderRadius: 999,
            background: "rgba(0,0,0,0.85)", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ArrowRight size={26} />
          </div>
        </div>
      </section>
    </div>
  );
}
