import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";
import contrarianImg from "../assets/Contrarian_Thinking_Cover.png";

/* ─── Shared section-header style ─── */
const SectionLabel = ({ children, theme }) => (
  <div style={{
    fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.accent, marginBottom: 8,
  }}>{children}</div>
);

/* ─── Problem/Solution block (used 3×) ─── */
function ProblemBlock({ num, problemHeading, problemBody, solutionName, solutionBody, decisions, cap1, cap2, closing, theme, mode, isMobile }) {
  const isAlt = num % 2 !== 0; // Alternates: Problem 1 alt (bgAlt), Problem 2 standard (bg), Problem 3 alt (bgAlt)
  return (
    <section style={{
      padding: isMobile ? "60px 4vw" : "100px 6vw",
      background: isAlt ? theme.bgAlt : theme.bg,
      borderTop: `1px solid ${theme.line}`,
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Reveal>
          <div style={{ maxWidth: 900 }}>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
              Problem {String(num).padStart(2, "0")}
            </div>
            <h2 style={{ fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: "0 0 24px", lineHeight: 1.1 }}>
              {problemHeading}
            </h2>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
              {problemBody}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 900 }}>
            <div style={{ margin: isMobile ? "40px 0 12px" : "56px 0 12px", height: 1, background: theme.line }} />
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 12 }}>
              Solution
            </div>
            <h3 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: theme.ink, margin: "0 0 16px" }}>
              {solutionName}
            </h3>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
              {solutionBody}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: 48, maxWidth: 900 }}>
            <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 20 }}>
              Key Design Decisions
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {decisions.map((d, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "28px 1fr", gap: isMobile ? 6 : 16, alignItems: "start" }}>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent, lineHeight: 1.4 }}>{i + 1}</div>
                  <p style={{ fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                    <strong style={{ color: theme.ink, fontWeight: 600 }}>{d.lead} </strong>{d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Screenshots */}
        <Reveal delay={0.2}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 18 : 32, marginTop: isMobile ? 32 : 56,
            width: "100%",
          }}>
            {[{ label: cap1 }, { label: cap2 }].map((s, i) => (
              <div key={i}>
                <div style={{
                  borderRadius: 14, overflow: "hidden",
                  background: theme.bgAlt,
                  border: `1px solid ${theme.line}`,
                  aspectRatio: "16/10",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <img
                    src={contrarianImg}
                    alt={s.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ fontFamily: "Inter", fontSize: 12.5, color: theme.inkMute, marginTop: 10, letterSpacing: "0.01em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div style={{ maxWidth: 900 }}>
            <p style={{ fontFamily: "Inter", fontSize: 15, color: theme.inkSoft, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${theme.line}` }}>
              <strong style={{ color: theme.ink }}>What it demonstrates: </strong>{closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Main export ─── */
export default function ContrarianCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const project = projects.find(p => p.id === "contrarian");
  const idx = projects.findIndex(p => p.id === "contrarian");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  const links = [
    { label: "Marketing Design Hub", href: "#" },
    { label: "Deal Pipeline Dashboard", href: "#" },
    { label: "AI Acquisition Matcher", href: "#" },
  ];

  const meta = [
    { k: "Role", v: "Research, Design, Build, Deploy" },
    { k: "Stack", v: "Next.js · Vercel · Claude API · Tailwind" },
    { k: "Timeline", v: "One Weekend Sprint" },
    { k: "Year", v: "2026" },
  ];

  const approachItems = [
    "Read both of their newsletters and listened to recent podcast episodes",
    "Studied the public structure of their two programs and event calendar",
    "Mapped the acquisition journey their members are actively going through",
    "Identified their stated AI direction from a recent newsletter",
    "Picked three problems, one per layer of the business",
  ];

  const learned = [
    {
      lead: "Domain depth changes everything.",
      body: "The most important hours I spent on this project were not designing. They were reading newsletters, listening to episodes, and mapping the member journey. Every meaningful decision in all three products came from that research. Without it, I would have shipped three handsome but generic tools.",
    },
    {
      lead: "Speed is a design constraint, not a corner cut.",
      body: "Building three products in one weekend forced ruthless prioritization. Every feature had to earn its place. The Matcher quiz losing three steps, the dashboard losing two columns, the hub losing a notifications panel. Those cuts made the work sharper, not weaker.",
    },
    {
      lead: "The Deal Pipeline Dashboard is the project I would push hardest on next.",
      body: "It is the one with the most product surface to develop. Collaboration between buyer and broker, document handling for LOIs and diligence, financial modeling. If this were a real engagement, that is where I would want to go deeper.",
    },
    {
      lead: "AI tools live or die on the reasoning layer.",
      body: "The Matcher's quiz is fine. The recommendations are fine. The thing that makes it actually useful is whether the reasoning paragraph genuinely connects the user's profile to the suggested business. That is a prompt design problem as much as a UX problem, and it is where most AI products under invest.",
    },
  ];

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 0" : "0 6vw 0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", flex: 1, display: "flex", flexDirection: "column" }}>

          {/* Back button */}
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "none",
                fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft,
                cursor: "pointer", marginBottom: 40,
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = theme.accent; e.currentTarget.style.transform = "translateX(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = theme.inkSoft; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>

          {/* Text zone — 40% */}
          <div style={{ flex: "0 0 auto", paddingBottom: 40 }}>
            <Reveal delay={0.05}>
              <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 20 }}>
                Case Study · 2026
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1, maxWidth: 900 }}>
                Designing for an <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Acquisition Entrepreneur</span> Community
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 24px", maxWidth: 720 }}>
                Three products built for the members of Contrarian Thinking. A marketing operations hub, a deal pipeline dashboard, and an AI matchmaker.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Product Design", "AI Integration", "Self Initiated"].map(tag => (
                  <span key={tag} style={{
                    padding: "5px 14px", borderRadius: 999,
                    background: theme.bgAlt, border: `1px solid ${theme.line}`,
                    fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: theme.ink,
                  }}>{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image zone — 60% */}
          <Reveal delay={0.25}>
            <div style={{
              flex: 1, borderRadius: "20px 20px 0 0",
              overflow: "hidden", border: `1px solid ${theme.line}`,
              borderBottom: "none",
              background: theme.bgAlt,
              minHeight: isMobile ? 240 : 420,
            }}>
              <img
                src={contrarianImg}
                alt="Three app screenshots side by side"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Overview</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ maxWidth: 900 }}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                Contrarian Thinking is an education and community business that teaches over a million weekly readers how to buy small businesses — laundromats, HVAC companies, car washes, and plumbing shops — as a path to wealth. They run two flagship programs, a publishing arm, live events, and have publicly committed to becoming an AI-first company.
              </p>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                I spent a focused weekend studying their business and identifying three operational problems. One inside the company, two inside their member base. Then I designed and shipped a working product for each.
              </p>
            </div>
          </Reveal>

          {/* Live links */}
          <Reveal delay={0.1}>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 12, maxWidth: 900 }}>
              {links.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
                  padding: "16px 20px", borderRadius: 14,
                  background: theme.card, border: `1px solid ${theme.line}`,
                  fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink,
                  textDecoration: "none", transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = theme.accent; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = theme.line; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {l.label} <ExternalLink size={13} color={theme.inkMute} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Metadata strip */}
          <Reveal delay={0.15}>
            <div style={{
              marginTop: 48, paddingTop: 32, borderTop: `1px solid ${theme.line}`,
              display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 24 : 32,
              width: "100%",
            }}>
              {meta.map((m, i) => (
                <div key={m.k} style={{
                  borderLeft: isMobile && i % 2 === 0 ? "none" : `1px solid ${theme.line}`,
                  paddingLeft: isMobile && i % 2 === 0 ? 0 : 16,
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>How I Approached It</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ maxWidth: 900 }}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 16px" }}>
                Most spec work picks a company and redesigns their landing page. I wanted to go deeper. The brief I set for myself was simple. Don't redesign their marketing. Design tools their team and their members would actually use.
              </p>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 36px" }}>
                That meant three weeks of input compressed into one weekend of output.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
              {approachItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.accent, flexShrink: 0, lineHeight: 1.3 }}>{i + 1}</div>
                  <p style={{ fontFamily: "Inter", fontSize: 16.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ maxWidth: 900 }}>
              <p style={{ fontFamily: "Inter", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.025em", color: theme.ink, marginTop: 52, marginBottom: 0 }}>
                Then I built.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEM 01 ── */}
      <ProblemBlock
        num={1} theme={theme} mode={mode} isMobile={isMobile}
        problemHeading="The marketing team is running a multi-channel pipeline without operational infrastructure."
        problemBody="A Marketing Designer at a company like Contrarian Thinking ships across Webflow landing pages, HubSpot emails, paid ad creative, sales decks, event graphics, and social posts. Most teams manage this in a mix of Notion, Asana, Slack threads, and shared drives. Context switching eats the day. Throughput suffers."
        solutionName="Marketing Design Hub"
        solutionBody="A single workspace built around how a designer at this kind of company actually works. Kanban for sprint execution, calendar for content scheduling, AI assisted task intake."
        decisions={[
          { lead: "Channel-first filtering.", body: "The filter bar maps directly to the team's real channels — Webflow, HubSpot, Ad Creative, Decks. Filtering becomes a batching tool. A designer can spend a morning in HubSpot mode and an afternoon in Webflow mode, drastically reducing context switching cost." },
          { lead: "Calendar tied to real publishing cadence.", body: "Main Street Minute on Tuesdays. Contrarian Thinking newsletter on Thursdays. Workshop dates. The calendar isn't generic. It is anchored to the company's actual content rhythm." },
          { lead: "AI-assisted task intake.", body: "Typing a new task auto routes it to the right category, priority, and column. Small saving per task. Significant saving per sprint." },
          { lead: "Sprint stats as a feedback loop.", body: "Throughput, review backlog, and shipped count are surfaced in the header. Not for vanity, but to catch bottlenecks before they stall the pipeline." },
        ]}
        cap1="Kanban board view with sprint stats in the header."
        cap2="Calendar view with color coded content types."
        closing="designing for how work flows, not just what gets produced."
      />

      {/* ── PROBLEM 02 ── */}
      <ProblemBlock
        num={2} theme={theme} mode={mode} isMobile={isMobile}
        problemHeading="Members are buying businesses with spreadsheet workflows."
        problemBody="Contrarian Thinking's members are actively pursuing acquisitions — sourcing leads, sending Letters of Intent, doing due diligence, securing financing, closing deals. The company teaches a structured methodology, but the tooling members use to apply it is whatever they cobble together: Google Sheets, Notion, sticky notes. The methodology deserves a system."
        solutionName="Deal Pipeline Dashboard"
        solutionBody="A purpose-built tracker for the acquisition journey, designed in the language of the people doing it. Six stages, financial metrics on every card, a detail panel for deep diving into each deal."
        decisions={[
          { lead: "Six stages, mirroring the real workflow.", body: "Sourcing → Screening → LOI Sent → Due Diligence → Financing → Closed. Not generic Kanban. The stages are the methodology made visible." },
          { lead: "Financial literacy baked into the UI.", body: "Every deal card surfaces SDE and SDE multiple — the two numbers acquisition entrepreneurs are taught to live and die by. A generic CRM would surface deal size. This surfaces the metrics that decide whether a deal is good." },
          { lead: "Days-in-stage counter on every card.", body: "Deals don't fail because they are bad. They fail because they stall. The counter surfaces stalling early." },
          { lead: "Realistic sample deals.", body: "Laundromats in Austin, HVAC in Phoenix, plumbing in Charlotte. The actual industries, geographies, and price ranges this community pursues. Domain accuracy is a design choice." },
        ]}
        cap1="Kanban board with industry tagged deal cards across six stages."
        cap2="Detail panel with stage progress and financials grid."
        closing="designing fluently in the customer's language. Vocabulary, workflows, and mental models all match."
      />

      {/* ── PROBLEM 03 ── */}
      <ProblemBlock
        num={3} theme={theme} mode={mode} isMobile={isMobile}
        problemHeading="New members face a paradox of choice."
        problemBody="The company covers over 130 industries. A new member sitting down on day one has to pick one, and picking wrong wastes months of effort. The 'where do I even start' question is the highest stakes question a member ever asks, and there is no good tool for it."
        solutionName="AI Acquisition Matcher"
        solutionBody="A working AI tool that turns the member's profile into four personalized business type recommendations, each with a match score, reasoning, financial ranges, and tags."
        decisions={[
          { lead: "Five steps, no more.", body: "Budget, industry preferences, risk tolerance, experience and involvement, location. I cut three other dimensions during prototyping because they didn't change the recommendation quality. The quiz finishes in under two minutes." },
          { lead: "Reasoning is the product.", body: "Match scores are easy. The actual value is the reasoning paragraph that connects this specific person's profile to this specific business type. Designed and prompted for specificity, not generic platitudes." },
          { lead: "Real API calls, not mockups.", body: "The tool sends the profile to the Claude API and returns live recommendations. Designing an AI product means committing to its variability, not faking deterministic outputs." },
          { lead: "Color-coded match confidence.", body: "Strong fits, solid fits, and weaker matches are visually distinguished. The user can calibrate quickly without reading every card in depth." },
        ]}
        cap1="A quiz step with the multi-select industry options."
        cap2="Results page showing four ranked match cards with reasoning."
        closing="designing AI-native experiences from the capability outward, not bolting AI onto a finished product."
      />

      {/* ── WHAT I LEARNED ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>What I Learned</SectionLabel></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 56, marginTop: 16, maxWidth: 900 }}>
            {learned.map((l, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  <strong style={{ color: theme.ink, fontWeight: 600, display: "block", fontSize: isMobile ? 18 : 20, marginBottom: 8, letterSpacing: "-0.01em" }}>{l.lead}</strong>
                  {l.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 17 : 21, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 28px" }}>
                This was a self-initiated project. I picked Contrarian Thinking because they are an interesting business with a specific underserved member base and a clear strategic direction. The work is not affiliated with the company.
              </p>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                If you are building tools for a niche community, or thinking about how AI fits into a product you already have,{" "}
                <span style={{ color: theme.accent, fontFamily: "'Caveat', cursive", fontSize: isMobile ? 18 : 22 }}>I would love to talk.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEXT CASE ── */}
      <section style={{ padding: isMobile ? "0 4vw 60px" : "0 6vw 100px", background: theme.bgAlt }}>
        <div
          onClick={() => { setRoute(`project:${next.id}`); window.lenis?.scrollTo(0); }}
          data-cursor="view" data-cursor-label="Next"
          style={{
            maxWidth: 1300, margin: "0 auto",
            padding: isMobile ? "32px 24px" : "60px 50px",
            borderRadius: isMobile ? 18 : 24,
            background: `linear-gradient(135deg, ${theme[next.color1]}, ${theme[next.color2]})`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap", cursor: "pointer",
            transition: "box-shadow 0.25s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = mode === "dark" ? "0 24px 60px rgba(0,0,0,0.3)" : "0 24px 60px rgba(0,0,0,0.08)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
        >
          <div>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginBottom: 8 }}>Next case</div>
            <div style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.035em", color: "rgba(0,0,0,0.9)", lineHeight: 1 }}>{next.title}</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "rgba(0,0,0,0.6)", marginTop: 6 }}>{next.subtitle}</div>
          </div>
          <div style={{
            width: isMobile ? 56 : 70, height: isMobile ? 56 : 70, borderRadius: 999,
            background: "rgba(0,0,0,0.85)", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <ArrowRight size={isMobile ? 22 : 26} />
          </div>
        </div>
      </section>

    </div>
  );
}
