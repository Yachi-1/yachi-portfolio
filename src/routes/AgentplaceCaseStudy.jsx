import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import p1Before from "../assets/agentplace/p1-before.webp";
import p1After from "../assets/agentplace/p1-after.webp";
import p2Before from "../assets/agentplace/p2-before.webp";
import p2After from "../assets/agentplace/p2-after.webp";
import p3Before from "../assets/agentplace/p3-before.webp";
import p3After from "../assets/agentplace/p3-after.webp";
import p4Before from "../assets/agentplace/p4-before.webp";
import p4After from "../assets/agentplace/p4-after.webp";
import p5Before from "../assets/agentplace/p5-before.webp";
import p5After from "../assets/agentplace/p5-after.webp";

// The project card this page sits behind (Home / Projects / Nav link here).
const PROJECT_ID = "contrarian";

// Colours from the audit deck, used for small accents only.
const DECK_BLUE = "#3050C8";
const DECK_GREEN = "#93B47E";

const STEPS = [
  { n: "Step 1", t: "Describe", d: "The owner types what the business does and what the agent should do." },
  { n: "Step 2", t: "Build", d: "An AI Builder creates the agent’s design, instructions and tools." },
  { n: "Step 3", t: "Publish", d: "One click puts it live, on the business’s website or as its own page." },
];

const PROBLEMS = [
  {
    title: "Go-live blockers are buried in a chat reply",
    problem: "Four launch requirements sit as bullets in one chat reply, with no status or actions.",
    solution: "Pin a go-live checklist with status and one-click Connect, Add and Choose.",
    before: p1Before,
    after: p1After,
    beforeAlt: "Before: four launch requirements listed as bullets inside a chat reply, with a note that live booking is disabled further down the conversation.",
    afterAlt: "After: a go-live checklist pinned above the chat showing 0 of 4 done, with Connect, Add and Choose buttons for Calendar, Booking rules, Callout fee and Human handoff.",
    wrong: "The agent can’t take real visits until four things exist: calendar, booking rules, callout fee, human handoff. They appear only as bullets in one chat reply, with no status or actions, and scroll away.",
    principle: "Visibility of system status & feedback",
    principleBody: "People should always know what state the system is in. Here the key state, “live booking disabled”, lives in prose, not in the interface.",
    fix: "Turn the list into a go-live checklist pinned above the chat: each item shows its status and a direct action (Connect, Add, Choose), with a progress count the dashboard repeats.",
    better: "Owners see at a glance what blocks launch and fix it in one click instead of rereading chat history. Progress is measurable, and nobody publishes believing bookings already work.",
  },
  {
    title: "The dashboard says “publish” but can’t publish",
    problem: "The card says “Publish your agent to see it here”, yet only offers a preview.",
    solution: "A status panel: draft thumbnail, “Draft · not published”, Publish and Preview buttons.",
    before: p2Before,
    after: p2After,
    beforeAlt: "Before: an empty agent card reading “Publish your agent to see it here”, whose only action is Open draft preview.",
    afterAlt: "After: a status panel with a draft thumbnail, a “Draft · not published” label, an explanation of what publishing changes, the checklist count, and Publish and Open draft preview buttons.",
    wrong: "The agent card reads “Publish your agent to see it here”, yet its only action is “Open draft preview”. Publish lives in the Builder’s top bar, so the dashboard names a goal it can’t complete.",
    principle: "Signifiers & discoverability",
    principleBody: "An instruction without a control leaves a gap between intention and action: the user knows what to do, but must hunt for where to do it.",
    fix: "Replace the empty state with a status panel: a draft thumbnail, a “Draft · not published” label, what publishing changes, the checklist count, and two buttons: Publish and Open draft preview.",
    better: "The dashboard becomes the place to see and change the agent’s state. One click publishes, the consequences are explained first, and an empty grey box becomes useful information.",
  },
  {
    title: "Credit balance is nowhere in sight",
    problem: "Building spends credits, but no balance shows in the sidebar or account menu.",
    solution: "Pin a credits card bottom-left: balance, usage bar and Upgrade plan.",
    before: p3Before,
    after: p3After,
    beforeAlt: "Before: the account menu’s seven items, none of them for credits, plan or usage, and no credit balance anywhere in the sidebar.",
    afterAlt: "After: an AI credits card pinned bottom-left in the sidebar showing 1,240 of 2,000 left this month, a usage bar, the free-model fallback and an Upgrade plan button.",
    wrong: "Building spends AI credits, yet the dashboard never shows the balance. The sidebar has none, and the account menu’s seven items skip credits, plan and usage, so checking takes several steps.",
    principle: "Visibility & knowledge in the world",
    principleBody: "Important state should be visible, not dug for. Users shouldn’t have to remember or hunt for a balance that limits what they can do.",
    fix: "Pin an AI credits card in the sidebar’s bottom-left, above the account row: credits left, a usage bar, the free-Luna fallback from the FAQ, plus Details and Upgrade plan.",
    better: "Credits are visible on every page with zero clicks. Users can see a low balance before it stops their work, and they can upgrade in one step without leaving the page.",
  },
  {
    title: "Connections & Skills start empty, no guidance",
    problem: "“No apps connected yet”, while the Builder is asking for a calendar.",
    solution: "Three tabs: Connected, Browse all apps and Suggested for your agent.",
    before: p4Before,
    after: p4After,
    beforeAlt: "Before: the Connections page shows only “No apps connected yet” and the Skills page shows “No skills yet”, while the Builder is asking for a calendar.",
    afterAlt: "After: Connections with three tabs, Connected, Browse all apps and Suggested for your agent, suggesting Google Calendar, Outlook or another provider so the agent can book real visits.",
    wrong: "Connections shows only “No apps connected yet” and a button; Skills shows “No skills yet.” Meanwhile the Builder is asking for a calendar. Nothing links that need to the page that fills it.",
    principle: "Knowledge in the world",
    principleBody: "People shouldn’t have to remember what the Builder asked or guess what a “skill” is. The screen should carry that knowledge for them.",
    fix: "Add three tabs: Connected (apps already linked), Browse all apps (everything available) and Suggested for your agent, which lists what the Builder asked for, such as Google Calendar or Outlook.",
    better: "Each tab answers one question: what do I have, what can I add, what does my agent need. Users go straight from need to action and connect the right app the first time.",
  },
  {
    title: "New Project starts blank, not from templates",
    problem: "The homepage promotes 10 templates; New Project offers a blank prompt and 4 generic ideas.",
    solution: "Add “Or start from a template” with real categories, cards and the 4 ideas as chips.",
    before: p5Before,
    after: p5After,
    beforeAlt: "Before: New Project shows a blank prompt and four generic idea cards, while the marketing homepage promotes ten templates in five categories.",
    afterAlt: "After: below the prompt, an “Or start from a template” panel with category filters, template cards for Home repair, Bookkeeping support, Pet grooming and Restaurant reservations, and the four ideas as compact chips.",
    wrong: "The homepage pushes “Start with a template” (10 templates, five categories). In the app, New Project offers only a blank prompt and four generic ideas like “Help me start”. No template appears.",
    principle: "Gulf of execution",
    principleBody: "The wider the gap between a goal and the first concrete action, the more people stall. A blank box asks them to write a full spec from memory.",
    fix: "Below the prompt, add “Or start from a template” with the gallery’s own categories and cards (Home repair, Pet grooming…), a link to all templates, and the four ideas kept as compact chips.",
    better: "New users begin from a working example close to their business, not a blank page, and the app keeps the homepage’s promise. Experienced users can still type freely.",
  },
];

const META = [
  { k: "Product", v: "Agentplace dashboard" },
  { k: "Type", v: "UI / usability audit" },
  { k: "Framework", v: "Don Norman’s design principles" },
  { k: "Output", v: "5 problems · 5 redesigns" },
];

/* ── Small building blocks ─────────────────────────────── */

function Eyebrow({ children, color }) {
  return (
    <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function Shot({ src, alt, label, theme, mode }) {
  return (
    // The screenshot carries its own Before/After badge, so no caption is needed.
    <figure
      aria-label={label}
      style={{
        margin: 0,
        borderRadius: 16,
        overflow: "hidden",
        border: `1px solid ${theme.line}`,
        background: theme.card,
        boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.07)",
      }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" width={1576} height={975} style={{ width: "100%", height: "auto", display: "block" }} />
    </figure>
  );
}

function DetailCard({ label, children, theme, mode, tint }) {
  return (
    <div style={{
      padding: "24px 26px",
      borderRadius: 18,
      background: tint || theme.card,
      border: `1px solid ${theme.line}`,
      height: "100%",
      boxSizing: "border-box",
    }}>
      <Eyebrow color={theme.inkMute}>{label}</Eyebrow>
      <div style={{ fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.65, color: theme.inkSoft }}>{children}</div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────── */

export default function AgentplaceCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const idx = projects.findIndex((p) => p.id === PROJECT_ID);
  const next = projects[(idx + 1) % projects.length];
  const isDark = mode === "dark";
  const pad = isMobile ? "0 4vw" : "0 6vw";
  const blueTint = isDark ? "rgba(48,80,200,0.16)" : "rgba(48,80,200,0.06)";
  const greenTint = isDark ? "rgba(147,180,126,0.16)" : "rgba(147,180,126,0.14)";

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 48px" : "0 6vw 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              data-cursor="hover"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "none",
                fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft,
                cursor: "pointer", padding: "8px 6px", marginLeft: -6, marginBottom: 28,
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; e.currentTarget.style.transform = "translateX(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.inkSoft; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1 }}>
              Agentplace Dashboard{" "}
              <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "1.08em" }}>UI Audit</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 19, lineHeight: 1.6, color: theme.inkSoft, margin: 0, maxWidth: 820 }}>
              A usability review of the Agentplace dashboard, where business owners build, connect and publish their AI agents.
              Five problems taken from the real product, each explained with one of Don Norman’s design principles and paired with a redesign that keeps Agentplace’s look.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? 20 : 32,
              marginTop: isMobile ? 36 : 52,
              paddingTop: isMobile ? 24 : 32,
              borderTop: `1px solid ${theme.line}`,
            }}>
              {META.map((m) => (
                <div key={m.k}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 15.5, fontWeight: 500, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT THE PRODUCT ── */}
      <section style={{ padding: isMobile ? "56px 4vw" : "96px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <Eyebrow color={theme.inkMute}>The product</Eyebrow>
            <h2 style={{ fontFamily: "Inter", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: "0 0 16px", lineHeight: 1.2 }}>
              What is Agentplace?
            </h2>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18, lineHeight: 1.65, color: theme.inkSoft, margin: 0, maxWidth: 820 }}>
              A platform for building AI agents that serve a business’s customers: they answer questions, book appointments, handle customer service and deliver services online.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "repeat(3, 1fr)", gap: 16, marginTop: isMobile ? 32 : 44 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={0.05 * i}>
                <div style={{ padding: "26px 26px 28px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box" }}>
                  <Eyebrow color={[DECK_GREEN, DECK_BLUE, theme.accent][i]}>{s.n}</Eyebrow>
                  <div style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", color: theme.ink, marginBottom: 8 }}>{s.t}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT THE AUDIT COVERS ── */}
      <section style={{ padding: isMobile ? "56px 4vw" : "96px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.2fr", gap: isMobile ? 28 : 56, alignItems: "start" }}>
          <Reveal>
            <Eyebrow color={theme.inkMute}>The audit</Eyebrow>
            <h2 style={{ fontFamily: "Inter", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: "0 0 16px", lineHeight: 1.2 }}>
              What this audit covers
            </h2>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 17, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
              Each problem is taken from screenshots of the real product. For each one: the problem and solution, a before → after comparison, and the details behind the decision.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {PROBLEMS.map((p, i) => (
                <li key={p.title}>
                  <a
                    href={`#problem-${i + 1}`}
                    data-cursor="hover"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(`problem-${i + 1}`);
                      if (!el) return;
                      if (window.lenis) window.lenis.scrollTo(el, { offset: -100 });
                      else el.scrollIntoView({ block: "start" });
                    }}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "16px 20px", borderRadius: 14,
                      background: theme.card, border: `1px solid ${theme.line}`,
                      textDecoration: "none", color: theme.ink,
                      fontFamily: "Inter", fontSize: isMobile ? 15 : 16, lineHeight: 1.4,
                    }}
                  >
                    <span style={{ fontVariantNumeric: "tabular-nums", color: theme.accent, fontWeight: 600, minWidth: 22 }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ flex: 1 }}>{p.title}</span>
                    <ArrowRight size={16} color={theme.inkMute} style={{ transform: "rotate(90deg)", flexShrink: 0 }} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      {PROBLEMS.map((p, i) => (
        <section
          key={p.title}
          id={`problem-${i + 1}`}
          aria-labelledby={`problem-${i + 1}-title`}
          style={{ padding: isMobile ? "56px 4vw" : "88px 6vw", borderTop: `1px solid ${theme.line}`, background: i % 2 === 0 ? theme.bgAlt : "transparent" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Reveal>
              <div style={{ display: "flex", alignItems: "baseline", gap: isMobile ? 14 : 24, marginBottom: isMobile ? 24 : 36 }}>
                <span aria-hidden="true" style={{ fontFamily: "Inter", fontSize: isMobile ? 44 : 72, fontWeight: 300, letterSpacing: "-0.04em", color: theme.accent, lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>
                    Problem {i + 1} of {PROBLEMS.length}
                  </div>
                  <h2 id={`problem-${i + 1}-title`} style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: 0, lineHeight: 1.2 }}>
                    {p.title}
                  </h2>
                </div>
              </div>
            </Reveal>

            {/* Problem / solution */}
            <Reveal delay={0.05}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 16, marginBottom: isMobile ? 28 : 40 }}>
                <DetailCard label="The problem" theme={theme} mode={mode} tint={blueTint}>
                  <span style={{ color: theme.ink, fontSize: 17 }}>{p.problem}</span>
                </DetailCard>
                <DetailCard label="The solution" theme={theme} mode={mode} tint={greenTint}>
                  <span style={{ color: theme.ink, fontSize: 17 }}>{p.solution}</span>
                </DetailCard>
              </div>
            </Reveal>

            {/* Before / after */}
            <Reveal delay={0.08}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 28, marginBottom: isMobile ? 28 : 40 }}>
                <Shot src={p.before} alt={p.beforeAlt} label="Before" theme={theme} mode={mode} />
                <Shot src={p.after} alt={p.afterAlt} label="After" theme={theme} mode={mode} />
              </div>
            </Reveal>

            {/* Details */}
            <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 16 }}>
              <Reveal delay={0.02}><DetailCard label="What’s wrong" theme={theme} mode={mode}>{p.wrong}</DetailCard></Reveal>
              <Reveal delay={0.06}>
                <DetailCard label="Norman’s principle" theme={theme} mode={mode}>
                  <strong style={{ color: theme.ink, fontWeight: 600 }}>{p.principle}.</strong> {p.principleBody}
                </DetailCard>
              </Reveal>
              <Reveal delay={0.02}><DetailCard label="How to fix it" theme={theme} mode={mode}>{p.fix}</DetailCard></Reveal>
              <Reveal delay={0.06}><DetailCard label="Why it’s better" theme={theme} mode={mode}>{p.better}</DetailCard></Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* ── NEXT CASE ── */}
      {next && next.id !== PROJECT_ID && (
        <section style={{ padding: isMobile ? "56px 4vw 80px" : "88px 6vw 120px", borderTop: `1px solid ${theme.line}` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Reveal>
              <button
                onClick={() => setRoute(`project:${next.id}`)}
                data-cursor="hover"
                style={{
                  width: "100%", textAlign: "left", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
                  padding: isMobile ? "24px 22px" : "36px 40px", borderRadius: 22,
                  background: theme.card, border: `1px solid ${theme.line}`, color: theme.ink,
                  fontFamily: "Inter",
                }}
              >
                <span>
                  <span style={{ display: "block", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 8 }}>Next case</span>
                  <span style={{ display: "block", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.03em" }}>{next.title}</span>
                </span>
                <ArrowUpRight size={isMobile ? 26 : 34} color={theme.accent} aria-hidden="true" style={{ flexShrink: 0 }} />
              </button>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
