import { ArrowRight, Target, Search, Users, Lightbulb, Briefcase, FileText } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import { SectionLabel, Callout, IconBadge, InsightCard, ProblemCard, ImagePlaceholder } from "../components/CaseStudyBlocks.jsx";
import marketingHubImg from "../assets/Marketing_Design_Hub.png";
import dealPipelineImg from "../assets/Deal_Pipeline_Dashboard.png";
import aiMatcherImg from "../assets/AI_Matcher_Prototype.png";

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function ContrarianCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const project = projects.find(p => p.id === "contrarian");
  const idx = projects.findIndex(p => p.id === "contrarian");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  /* ── data ── */
  const meta = [
    { k: "Role", v: "Product Designer" },
    { k: "Timeline", v: "2 weeks" },
    { k: "Tools", v: "Figma, Claude, Google Antigravity" },
    { k: "Year", v: "2026" },
  ];

  const colorTokens = [
    { name: "Paper", hex: "#FDFAF5", use: "Workhorse background" },
    { name: "Cream", hex: "#F5F0E8", use: "Secondary surface" },
    { name: "Ink", hex: "#1A1410", use: "Typography" },
    { name: "Amber", hex: "#C8832A", use: "Action, money, opportunity" },
    { name: "Rust", hex: "#8B3A2A", use: "Risk, stalled deals" },
  ];

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 40px" : "0 6vw 60px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>
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

          <div>
            <Reveal delay={0.05}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
                {["Media & Education", "Prototyping", "2026"].map((tag, i) => (
                  <div key={i} style={{
                    padding: "4px 12px",
                    borderRadius: 100,
                    background: mode === "dark" ? `${theme.accent}20` : `${theme.accent}12`,
                    border: `1px solid ${theme.accent}30`,
                    color: theme.accent,
                    fontFamily: "Inter",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase"
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1 }}>
                Contrarian Thinking: <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>UX Design</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0", maxWidth: "100%" }}>
                Designing three different products for the small-business buying community in America. Built without inside access, structured to show the thinking, not just the screens.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div style={{
              marginTop: 48, paddingTop: 32, borderTop: `1px solid ${theme.line}`,
              display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 24 : 32,
            }}>
              {meta.map((m, i) => (
                <div key={m.k} style={{
                  borderLeft: isMobile ? "none" : `1px solid ${theme.line}`,
                  paddingLeft: isMobile ? 0 : 16,
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE BRIEF ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal delay={0.05}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 48,
            }}>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  The Brief
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Contrarian Thinking is a media and education company built around Codie Sanchez's "buy boring businesses" thesis. They have 10,000+ paying members. But the actual work members joined to do finding, evaluating, buying, and running a small business happens almost entirely outside the product surface.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  I gave myself a fictional engagement: imagine Contrarian Thinking has hired a designer in residence for one quarter. What would they ask me to work on?
                </p>

              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  Constraints
                </div>
                <div style={{ padding: "20px", borderRadius: 12, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <ul style={{ margin: 0, paddingLeft: 20, fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>
                    <li style={{ marginBottom: 12 }}><strong>No access.</strong> No member interviews, no analytics, no team. Desk research only.</li>
                    <li style={{ marginBottom: 12 }}><strong>Three weeks of evenings.</strong> Real-time constraint. Forces editing and prioritization.</li>
                    <li style={{ marginBottom: 12 }}><strong>Show the process.</strong> Treat this as a case study from day one, document research and synthesis, not just final screens.</li>
                    <li><strong>Ship working prototypes.</strong> If a product can be built in code, it should be static mockups are easier to fake than functional UI.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESEARCH & AUDIT ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Research</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: "100%" }}>
              Without member interviews, the next-best signal is the words and operators use in public newsletters, podcast transcripts, community forums, testimonials.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 32, marginBottom: 60 }}>
              {/* Primary Sources Card */}
              <div style={{ padding: isMobile ? "24px" : "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, boxShadow: "0 4px 24px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>Primary Sources</h3>
                  <div style={{ fontSize: 12, fontWeight: 600, color: theme.accent, background: `${theme.accent}15`, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.04em" }}>
                    CT'S SURFACE
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { title: "Main Street Minute", sub: "Newsletter", desc: "Heavy on real deal breakdowns." },
                    { title: "Codie Sanchez on YouTube", sub: "Video", desc: "Verbatim quotes shaped the persona." },
                    { title: "contrarianthinking.co", sub: "Website", desc: "Captured tone of voice and positioning." },
                    { title: "Academy member stories", sub: "Community", desc: "Reveal turning points in the journey." }
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <div style={{ flexShrink: 0, marginTop: 7, width: 6, height: 6, borderRadius: "50%", background: theme.accent, opacity: 0.8 }} />
                      <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 600, color: theme.ink }}>{item.title}</span>{" "}
                        <span style={{ fontWeight: 400, color: theme.inkMute, fontSize: 14 }}>({item.sub})</span>
                        <span style={{ color: theme.inkSoft }}> - {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Sources Card */}
              <div style={{ padding: isMobile ? "24px" : "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, boxShadow: "0 4px 24px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>Secondary Sources</h3>
                  <div style={{ fontSize: 12, fontWeight: 600, color: theme.inkSoft, background: mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", padding: "4px 10px", borderRadius: 100, letterSpacing: "0.04em" }}>
                    WIDER COMMUNITY
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { title: "Reddit", sub: "r/smallbusiness", desc: "Repeated questions represent unmet needs." },
                    { title: "#BoringBusiness", sub: "X / Twitter", desc: "Following active buyers gave the language." },
                    { title: "BizBuySell Insight Report", sub: "Data", desc: "Industry data on deal sizes and multiples." },
                    { title: "Competitor products", sub: "Audits", desc: "Audited UX of adjacent marketplaces and tools." }
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <div style={{ flexShrink: 0, marginTop: 7, width: 6, height: 6, borderRadius: "50%", background: theme.inkMute, opacity: 0.5 }} />
                      <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 600, color: theme.ink }}>{item.title}</span>{" "}
                        <span style={{ fontWeight: 400, color: theme.inkMute, fontSize: 14 }}>({item.sub})</span>
                        <span style={{ color: theme.inkSoft }}> - {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>What the competitors actually solve</h3>
            <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 24px" }}>
              Auditing four adjacent products revealed a clear gap: nobody serves the entire buyer journey. This makes "course + community + product" an open positioning.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              background: theme.card, borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", marginBottom: 20
            }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontFamily: "Inter", minWidth: 700 }}>
                  <thead>
                    <tr style={{ background: theme.bgAlt, borderBottom: `2px solid ${theme.line}` }}>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Product</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Source Deals</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Evaluate</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Track Pipeline</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Close Deal</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Operate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "BizBuySell", stages: ["✓", "partial", "-", "-", "-"] },
                      { name: "Acquire.com", stages: ["✓", "partial", "partial", "partial", "-"] },
                      { name: "DealRoom", stages: ["-", "✓", "✓", "partial", "-"] },
                      { name: "Searchfunder", stages: ["partial", "partial", "-", "-", "-"] },
                      { name: "Contrarian (today)", stages: ["-", "-", "-", "-", "-"], isCurrent: true },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: `1px solid ${theme.line}`, background: row.isCurrent ? `${theme.accent}10` : "transparent" }}>
                        <td style={{ padding: "16px 20px", fontWeight: row.isCurrent ? 700 : 500, color: row.isCurrent ? theme.accent : theme.ink, fontSize: 15 }}>
                          {row.name}
                        </td>
                        {row.stages.map((val, i) => (
                          <td key={i} style={{ padding: "16px 20px", color: val === "✓" ? theme.success : val === "partial" ? theme.warning : theme.inkMute, fontWeight: 600, fontSize: 15 }}>
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, fontStyle: "italic", margin: 0 }}>
              <strong>What this told me:</strong> CT's product surface today is empty on this matrix, which is a feature, not a bug. It means they can build the integrated journey nobody else has.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SYNTHESIS ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Synthesis</SectionLabel></Reveal>

          <Reveal delay={0.05}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24, marginBottom: 40, alignItems: "start" }}>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <IconBadge icon={Users} theme={theme} />
                  <div>
                    <h3 style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink, margin: 0 }}>Marcus, 34</h3>
                    <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute }}>Mid-career corporate · 5 months into the Academy</div>
                  </div>
                </div>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 18, fontStyle: "italic", color: theme.ink, margin: "0 0 16px", borderLeft: `3px solid ${theme.accent}`, paddingLeft: 16 }}>
                  "I've looked at maybe 200 listings on BizBuySell. I have no idea which of them I should actually pursue."
                </p>
                <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  His emotional confidence collapses at stage 4 of the journey. This is the moment he paid Contrarian Thinking to help him through, and it's the moment the product abandons him.
                </p>
              </div>

              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <IconBadge icon={Users} theme={theme} />
                  <div>
                    <h3 style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink, margin: 0 }}>Priya, 31</h3>
                    <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute }}>Design lead at Contrarian Thinking · 2 years in the role</div>
                  </div>
                </div>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 18, fontStyle: "italic", color: theme.ink, margin: "0 0 16px", borderLeft: `3px solid ${theme.accent}`, paddingLeft: 16 }}>
                  "Every week we ship newsletters, ads, and decks. But our project tracker has no idea what any of those things actually are."
                </p>
                <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  She's not on Marcus's journey she's the team that builds everything Marcus interacts with. Her velocity is the hidden constraint on how fast every other product gets better.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 20 }}>Marcus's journey, mapped</h3>
            <div style={{
              background: theme.card, borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", marginBottom: 60
            }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontFamily: "Inter", minWidth: 800 }}>
                  <thead>
                    <tr style={{ background: theme.bgAlt, borderBottom: `2px solid ${theme.line}` }}>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>Stage</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>01 Discover</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>02 Convert</th>
                      <th style={{ padding: "16px 20px", color: theme.inkMute, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>03 Learn</th>
                      <th style={{ padding: "16px 20px", color: theme.accent, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>04 Find & Evaluate</th>
                      <th style={{ padding: "16px 20px", color: theme.accent, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>05 Close & Operate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Doing", data: ["Podcasts, newsletter", "Signs up for Academy", "Cohort, playbooks", "200+ listings, 8 tabs", "Owns the business"] },
                      { label: "Tool", data: ["YouTube", "Checkout", "LMS, Slack", "None from CT", "None from CT"] },
                      { label: "Feeling", data: ["Excited", "Committed", "Confident", "Overwhelmed", "Alone"] },
                      { label: "Status", data: ["covered", "covered", "covered", "GAP", "GAP"] }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: `1px solid ${theme.line}` }}>
                        <td style={{ padding: "16px 20px", fontWeight: 600, color: theme.inkMute, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", background: theme.bgAlt }}>{row.label}</td>
                        {row.data.map((val, i) => (
                          <td key={i} style={{ padding: "16px 20px", color: (i >= 3 && row.label === "Status") ? theme.rust : (i >= 3 && row.label === "Feeling") ? theme.accent : theme.ink, fontWeight: i >= 3 ? 600 : 400, fontSize: 14 }}>
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Sticky notes, then themes</h3>
            <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 24px" }}>
              Before writing insights, I dumped every notable quote and observation onto sticky notes. Then I grouped them into themes.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 20, marginBottom: 60 }}>
              {[
                { title: "Overwhelm", notes: ["200 listings on BBS", "Eight tabs open", "Filter fatigue", "Should I look at SaaS?"] },
                { title: "Lost track", notes: ["Google Sheet broke", "Forgot to follow up", "Which lender is on which deal?", "Days-since-contact drops"] },
                { title: "INTERNAL VELOCITY", notes: ["Newsletter, ads, decks, every week", "Channel context missing on generic kanban", "Media-company pace, startup tooling"] },
                { title: "Brand fit", notes: ["Site feels like course funnel", "Editorial voice vs visual", "$10k+ expect investor-grade"] }
              ].map((themeCol, idx) => (
                <div key={idx} style={{ background: theme.card, borderRadius: 12, padding: 20, border: `1px solid ${theme.line}` }}>
                  <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.ink, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${theme.line}` }}>
                    {themeCol.title}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {themeCol.notes.map((note, nIdx) => (
                      <div key={nIdx} style={{ padding: "12px 14px", background: theme.bgAlt, borderRadius: 8, fontSize: 13, fontFamily: "Inter", lineHeight: 1.5, color: theme.inkSoft, borderLeft: `3px solid ${theme.accent}` }}>
                        "{note}"
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 20 }}>Four Insights</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
              <ProblemCard num={1} heading="The Gap" body="Members spend 4–12 months in a phase the current product doesn't support." theme={theme} isMobile={isMobile} icon={Target} />
              <ProblemCard num={2} heading="Filtering" body="The hard part isn't choosing a business, it's narrowing 200+ listings to 3 worth pursuing." theme={theme} isMobile={isMobile} icon={Search} />
              <ProblemCard num={3} heading="Lost Track" body="Buyers run their pipeline in spreadsheets that break down by week three." theme={theme} isMobile={isMobile} icon={FileText} />
              <ProblemCard num={4} heading="Internal Velocity" body="Media-company pace on startup tools. Internal velocity limits member impact." theme={theme} isMobile={isMobile} icon={Briefcase} />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div style={{
              marginTop: 60,
              padding: isMobile ? "32px 24px" : "40px 48px",
              borderRadius: 16,
              background: theme.card,
              border: `1px solid ${theme.accent}25`,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 40
            }}>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 48, background: theme.accent, borderRadius: 4, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.accent, marginBottom: 12 }}>
                    External Problem
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18, fontWeight: 400, lineHeight: 1.6, margin: 0, color: theme.ink }}>
                    Buyers need to <span style={{ color: theme.accent, fontWeight: 500 }}>filter 200+ listings into 3 solid deals</span> and track them over 12 months without breaking spreadsheets.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 48, background: theme.accent, borderRadius: 4, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.accent, marginBottom: 12 }}>
                    Internal Problem
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18, fontWeight: 400, lineHeight: 1.6, margin: 0, color: theme.ink }}>
                    CT's marketing team needs a tool that <span style={{ color: theme.accent, fontWeight: 500 }}>categorizes by channel</span> and shows ship dates. Generic trackers break at their pace.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── IDEATION & CUTTING ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Ideation & How Might We</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 17, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 24px", width: "100%", maxWidth: "none" }}>
              Before settling on three products, I sketched seven. Cutting four of them was the highest-leverage decision in the entire project; anything I kept was a claim I'd have to defend.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 40 }}>
                <div>
                  <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 700, color: theme.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: theme.accent }}>★</span> Kept
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { name: "AI Acquisition Matcher", reason: "Highest user pain · highest signal in research · most defensible product shape" },
                      { name: "Deal Pipeline Dashboard", reason: "Clear workflow problem · proven product category · easiest to validate" },
                      { name: "Marketing Design Hub", reason: "Internal tool · compounds member impact · hidden constraint" }
                    ].map((item, i) => (
                      <div key={i} style={{ background: theme.card, padding: 20, borderRadius: 12, border: `1px solid ${theme.line}` }}>
                        <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.ink, marginBottom: 6 }}>{item.name}</div>
                        <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, lineHeight: 1.5 }}>{item.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 700, color: theme.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: theme.rust }}>✕</span> Cut
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { name: "Brand Site Redesign", reason: "Visual refresh, not a product problem · stand-alone work" },
                      { name: "SBA Lender Marketplace", reason: "Adjacent industry · regulatory complexity · not a design problem" },
                      { name: "Member Mastermind Tool", reason: "Slack already does this · low marginal value" },
                      { name: "Deal Valuation Calculator", reason: "Solved by existing course templates · feature, not a product" }
                    ].map((item, i) => (
                      <div key={i} style={{ background: theme.bgAlt, padding: 20, borderRadius: 12, border: `1px solid ${theme.line}` }}>
                        <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.inkMute, marginBottom: 6 }}>{item.name}</div>
                        <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute, lineHeight: 1.5 }}>{item.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ marginTop: 80 }}>
              <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Three products, three design decisions.</h3>
              <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 40, width: "100%", maxWidth: "none" }}>
                For each product, one architectural decision shaped everything downstream. These weren't aesthetic choices, they were the calls about what kind of product each one fundamentally is.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
                {[
                  { num: "01", title: "AI Acquisition Matcher", head: "AI recommender, not a search engine.", desc: "Marketplaces hand the filtering work to the user. A recommender does the work for them. The system ranks every live deal against that profile." },
                  { num: "02", title: "Deal Pipeline Dashboard", head: "A CRM, not a project tracker.", desc: "Acquisition is a relationship with a seller, brokers, and lenders, not a project with tasks. Tasks live inside relationships, so the pipeline is the primary." },
                  { num: "03", title: "Marketing Design Hub", head: "Channel-native, not generic kanban.", desc: "Generic trackers treat all tasks equally. The Hub organizes by channel (Webflow, HubSpot) instead. Built-in context matches how the team thinks and drastically shortens status meetings." }
                ].map((item, i) => (
                  <div key={i} style={{ background: theme.card, padding: 32, borderRadius: 16, border: `1px solid ${theme.line}` }}>
                    <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.accent, marginBottom: 12 }}>{item.num} · {item.title}</div>
                    <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16, lineHeight: 1.4 }}>{item.head}</div>
                    <div style={{ fontFamily: "Inter", fontSize: 15, color: theme.inkSoft, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>


        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Design Language</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: "100%" }}>
              All three interfaces share a system: same type, same palette, same components, same voice. Without it, the three products would have felt like three startups. With it, they feel like one ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, marginBottom: 40
            }}>
              <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 24 }}>Color Tokens</h3>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "140px" : "180px"}, 1fr))`, gap: 20 }}>
                {colorTokens.map((token, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      width: "100%", height: 80, borderRadius: 8, background: token.hex,
                      border: token.hex === "#FDFAF5" || token.hex === "#F5F0E8" ? `1px solid ${theme.line}` : "none",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                    }} />
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink }}>{token.name}</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, textTransform: "uppercase" }}>{token.hex}</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkSoft, marginTop: 4, lineHeight: 1.4 }}>{token.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Typography</h3>
                <ul style={{ paddingLeft: 20, margin: 0, fontFamily: "Inter", fontSize: 14, lineHeight: 1.6, color: theme.inkSoft }}>
                  <li style={{ marginBottom: 12 }}><strong>Playfair Display</strong> - Headlines, pull quotes</li>
                  <li style={{ marginBottom: 12 }}><strong>Inter</strong> - Body, UI labels. Neutral workhorse.</li>
                  <li><strong>JetBrains Mono</strong> - Eyebrow labels, data.</li>
                </ul>
              </div>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Components</h3>
                <p style={{ fontFamily: "Inter", fontSize: 14, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  Three button states (Primary CTA, Ghost Secondary), one pill style (color-coded by stage). Anything more would be feature creep; anything less would force one-off styling.
                </p>
              </div>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Voice</h3>
                <ul style={{ paddingLeft: 20, margin: 0, fontFamily: "Inter", fontSize: 14, lineHeight: 1.6, color: theme.inkSoft }}>
                  <li style={{ marginBottom: 12 }}><strong>Direct.</strong> No softening.</li>
                  <li style={{ marginBottom: 12 }}><strong>Italicized emphasis.</strong> One word carries the punch.</li>
                  <li><strong>Operator-grade.</strong> Members are running businesses, not learning to.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE 3 INTERFACES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Deliver</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 24px", width: "100%", maxWidth: "none" }}>
              The three products from the synthesis became three interfaces: live prototypes built in Next.js.
            </p>
            <div style={{ background: theme.bgAlt, padding: 24, borderRadius: 12, border: `1px solid ${theme.line}`, marginBottom: 60, width: "100%", maxWidth: "none" }}>
              <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.accent, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>How they connect</div>
              <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                The Matcher and Pipeline share a member profile deals flow directly between them. The Hub is the internal tool used to ship every member-facing surface. It never appears on Marcus's screen, but every screen he interacts with was built through it.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 60 : 100 }}>
            {/* Interface 01 */}
            <Reveal delay={0.1}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr", gap: 40, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>1. AI Acquisition Matcher</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>Profile in, ranked deals out.</div>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    <strong>A recommender, not a search engine.</strong> The buyer fills in a profile once. The matcher ranks every live deal against that profile and shows the top three matches with a fit score and the reasoning behind it.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, borderLeft: `3px solid ${theme.accent}`, paddingLeft: 12 }}>
                    <strong>Profile is the primary input.</strong> No filter form, no friction.<br />
                    <strong>Score visible, not hidden.</strong> 94, 87, 82. Transparent scoring earns trust.
                  </p>
                </div>
                <a
                  href="https://ai-acquisition-matcher-by-yachi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: "none", cursor: "pointer", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = mode === "dark" ? `0 24px 60px rgba(0,0,0,0.5)` : `0 24px 60px rgba(0,0,0,0.1)`; e.currentTarget.style.borderColor = theme.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = theme.line; }}
                >
                  <img src={aiMatcherImg} alt="AI Matcher Prototype UI" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                </a>
              </div>
            </Reveal>

            {/* Interface 02 */}
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 40, alignItems: "center" }}>
                {!isMobileOrTablet && (
                  <a
                    href="https://deal-pipeline-dashboard-by-yachi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: "none", cursor: "pointer", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = mode === "dark" ? `0 24px 60px rgba(0,0,0,0.5)` : `0 24px 60px rgba(0,0,0,0.1)`; e.currentTarget.style.borderColor = theme.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = theme.line; }}
                  >
                    <img src={dealPipelineImg} alt="Deal Pipeline Dashboard UI" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </a>
                )}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>2. Deal Pipeline Dashboard</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>A CRM that speaks the buyer's language.</div>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    <strong>A CRM, not a project tracker.</strong> A pipeline view with five stages drawn directly from the Academy curriculum: Sourcing → LOI → Diligence → Financing → Close.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, borderLeft: `3px solid ${theme.accent}`, paddingLeft: 12 }}>
                    <strong>Workflow-native stage names.</strong> Same language Codie teaches.<br />
                    <strong>Color codes risk.</strong> LOI cards get amber, diligence gets rust, because that's where deals die.
                  </p>
                </div>
                {isMobileOrTablet && (
                  <a
                    href="https://deal-pipeline-dashboard-by-yachi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: "none", cursor: "pointer", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = mode === "dark" ? `0 24px 60px rgba(0,0,0,0.5)` : `0 24px 60px rgba(0,0,0,0.1)`; e.currentTarget.style.borderColor = theme.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = theme.line; }}
                  >
                    <img src={dealPipelineImg} alt="Deal Pipeline Dashboard UI" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </a>
                )}
              </div>
            </Reveal>

            {/* Interface 03 */}
            <Reveal delay={0.2}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr", gap: 40, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>3. Marketing Design Hub</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>THE INTERNAL WORKFLOW TOOL FOR CT'S MARKETING & DESIGN TEAM.</div>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    <strong>An internal tool, not a member-facing one.</strong> A purpose built workflow app for the team shipping CT's marketing output. It replaces generic kanbans (Asana, Trello) to serve Priya and her team of designers and writers directly.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, borderLeft: `3px solid ${theme.accent}`, paddingLeft: 12 }}>
                    <strong>Channel as filter.</strong> Webflow, HubSpot, Ads not Low/Med/High.<br />
                    <strong>One source of truth.</strong> Board to execute, calendar to plan. No exports.
                  </p>
                </div>
                <a
                  href="https://marketing-design-hub-by-yachi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: "none", cursor: "pointer", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = mode === "dark" ? `0 24px 60px rgba(0,0,0,0.5)` : `0 24px 60px rgba(0,0,0,0.1)`; e.currentTarget.style.borderColor = theme.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = theme.line; }}
                >
                  <img src={marketingHubImg} alt="Marketing Design Hub UI" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REFLECTION & NEXT STEPS ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Reflection & Next Steps</SectionLabel></Reveal>

          <Reveal delay={0.05}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
              <div style={{
                background: theme.card,
                padding: isMobile ? 24 : 40,
                borderRadius: 16,
                border: `1px solid ${theme.line}`,
                boxShadow: mode === "dark" ? "0 12px 40px -16px rgba(0,0,0,0.5)" : "0 12px 40px -16px rgba(0,0,0,0.06)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <Target size={24} color={theme.accent} />
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, margin: 0 }}>What I'd do next.</h3>
                </div>
                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, display: "flex", flexDirection: "column", gap: 16 }}>
                  <li style={{ display: "flex", gap: 12 }}>
                    <ArrowRight size={18} color={theme.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div><strong>Interview 5 members + observe Priya's team.</strong> Validate Marcus's persona and journey with Academy members. Validate the Hub separately by spending a sprint with CT's actual marketing team.</div>
                  </li>
                  <li style={{ display: "flex", gap: 12 }}>
                    <ArrowRight size={18} color={theme.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div><strong>Test with real closed deals.</strong> Check if the matcher would have recommended deals that buyers actually ended up buying.</div>
                  </li>
                  <li style={{ display: "flex", gap: 12 }}>
                    <ArrowRight size={18} color={theme.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div><strong>Lock in data & pricing.</strong> Define the exact data source and business model for the Matcher before touching Figma again.</div>
                  </li>
                </ul>
              </div>

              <div style={{
                background: theme.card,
                padding: isMobile ? 24 : 40,
                borderRadius: 16,
                border: `1px solid ${theme.line}`,
                boxShadow: mode === "dark" ? "0 12px 40px -16px rgba(0,0,0,0.5)" : "0 12px 40px -16px rgba(0,0,0,0.06)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <Lightbulb size={24} color={theme.accent} />
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, margin: 0 }}>What I learned</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 6 }}>Cutting is the hardest part.</div>
                    <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>Picking 3 connected products and cutting 4 others was my highest-leverage decision. The harder version of that lesson: a company that ships product is also a company that ships itself, and the team behind the product is a user too.</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 6 }}>Data &gt; UI.</div>
                    <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>I designed the matcher without solving the data source. Mistake. Next speculative project, the data and pricing questions get answered before Figma opens.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLOSING NOTE ── */}
      <section style={{ padding: isMobile ? "60px 4vw 60px" : "100px 6vw 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{
              position: "relative",
              padding: isMobile ? "32px 24px" : "40px 40px",
              borderRadius: 24,
              background: theme.card,
              border: `1px solid ${theme.line}`,
              boxShadow: mode === "dark" ? "0 24px 48px -12px rgba(0,0,0,0.5)" : "0 32px 64px -16px rgba(0,0,0,0.08)",
              textAlign: "center",
              maxWidth: 780,
              margin: "0 auto",
              overflow: "hidden"
            }}>
              {/* Dotted grid pattern overlay */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `radial-gradient(${theme.ink} 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
                opacity: mode === "dark" ? 0.08 : 0.04,
                pointerEvents: "none"
              }} />

              {/* Vibrant solid top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                background: theme.accent,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24
              }} />

              {/* Creative glowing orbs */}
              <div style={{
                position: "absolute", top: -80, left: -80, width: 250, height: 250,
                background: theme.accent, opacity: mode === "dark" ? 0.15 : 0.05, filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none"
              }} />
              <div style={{
                position: "absolute", bottom: -80, right: -80, width: 300, height: 300,
                background: theme.accent, opacity: mode === "dark" ? 0.1 : 0.04, filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none"
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 16px" }}>
                  This speculative case study was a deep dive into ecosystem design for a highly specific audience. I hope it provided a clear look into my process and product thinking. If anyone at Contrarian Thinking finds these ideas useful, feel free to run with them.
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                  <div style={{ height: 1, flex: 1, maxWidth: 60, borderBottom: `2px dashed ${theme.line}` }} />
                  <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                    <span style={{ color: theme.accent, fontFamily: "'Caveat', cursive", fontSize: isMobile ? 24 : 28 }}>- Yachi</span>
                  </p>
                  <div style={{ height: 1, flex: 1, maxWidth: 60, borderBottom: `2px dashed ${theme.line}` }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section style={{ padding: isMobile ? "0 4vw 60px" : "0 6vw 100px" }}>
        <div
          onClick={() => {
            if (next.pdfLink) {
              window.open(next.pdfLink, "_blank");
            } else {
              setRoute(`project:${next.id}`);
              window.lenis?.scrollTo(0);
            }
          }}
          data-magnet="0.05"
          data-cursor="view"
          data-cursor-label="Next"
          style={{
            maxWidth: 1300, margin: "0 auto",
            padding: isMobile ? "32px 24px" : "60px 50px",
            borderRadius: isMobile ? 18 : 24,
            background: `linear-gradient(135deg, ${theme[next.color1]}, ${theme[next.color2]})`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap", cursor: "pointer",
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
            width: isMobile ? 56 : 70,
            height: isMobile ? 56 : 70,
            borderRadius: 999,
            background: "rgba(0,0,0,0.85)", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <ArrowRight size={isMobile ? 22 : 26} />
          </div>
        </div>
      </section>
    </div>
  );
}
