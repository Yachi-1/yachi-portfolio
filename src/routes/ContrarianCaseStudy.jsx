import { ArrowRight, Target, Search, Users, Lightbulb, Briefcase, FileText } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import { SectionLabel, Callout, IconBadge, InsightCard, ProblemCard, ImagePlaceholder } from "../components/CaseStudyBlocks.jsx";

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
    { k: "Role", v: "Sole Designer" },
    { k: "Timeline", v: "3 weeks of evenings" },
    { k: "Deliverables", v: "3 product prototypes" },
    { k: "Method", v: "Desk research, synthesis, ideation, prototyping" },
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
                {["UX Strategy", "Research", "Product Design", "Prototyping", "2026"].map((tag, i) => (
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
                Contrarian Thinking - <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>A UX Process Walkthrough</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0", maxWidth: 800 }}>
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
                  Phase 01 · The Brief
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Contrarian Thinking is a media-and-education company built around Codie Sanchez's "buy boring businesses" thesis. They have 10,000+ paying members. But the actual work members joined to do-finding, evaluating, buying, and running a small business-happens almost entirely outside the product surface.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  I gave myself a fictional engagement: imagine Contrarian Thinking has hired a designer-in-residence. Design what should live between the course and the close.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  Constraints
                </div>
                <div style={{ padding: "20px", borderRadius: 12, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <ul style={{ margin: 0, paddingLeft: 20, fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>
                    <li style={{ marginBottom: 8 }}><strong>No access.</strong> No member interviews, no analytics, no team Slack. Desk research only.</li>
                    <li style={{ marginBottom: 8 }}><strong>Three weeks of evenings.</strong> Real-time constraint. Forces editing and prioritization.</li>
                    <li style={{ marginBottom: 8 }}><strong>Show the process.</strong> Document research and synthesis, not just final screens.</li>
                    <li><strong>Ship working prototypes.</strong> If a product can be built in code, it should be.</li>
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
          <Reveal><SectionLabel theme={theme}>Phase 02 · Competitor Audit</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 900 }}>
              I audited four products in the adjacent space against the five stages of the buyer journey. The gaps showed that nobody is serving the whole journey, and that "course + community + product" is an open positioning.
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
                      { name: "Acquire.com", stages: ["✓", "partial", "partial", "-", "-"] },
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
          <Reveal><SectionLabel theme={theme}>Phase 03 · Synthesis</SectionLabel></Reveal>
          
          <Reveal delay={0.05}>
            <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, marginBottom: 40 }}>
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
          </Reveal>

          <Reveal delay={0.1}>
            <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 20 }}>Four Insights</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
              <ProblemCard num={1} heading="The Gap" body="Members spend 4–12 months in a phase the current product doesn't support." theme={theme} isMobile={isMobile} icon={Target} />
              <ProblemCard num={2} heading="Filtering" body="The hard part isn't choosing a business, it's narrowing 200+ listings to 3 worth pursuing." theme={theme} isMobile={isMobile} icon={Search} />
              <ProblemCard num={3} heading="Lost Track" body="Buyers run their pipeline in spreadsheets that break down by week three." theme={theme} isMobile={isMobile} icon={FileText} />
              <ProblemCard num={4} heading="After Close" body="The moment a deal closes, the buyer's problem changes, but no product changes with them." theme={theme} isMobile={isMobile} icon={Briefcase} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── IDEATION & CUTTING ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Phase 04 · Ideation & How Might We</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 900 }}>
              Each insight became a "how-might-we" question. I sketched seven product ideas, and cut four of them. Cutting was the highest-leverage decision in the entire project.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
            <Reveal delay={0.1}>
              <InsightCard lead="How might we..." body="help Marcus go from 200 listings to 3 high-confidence options without him doing the filtering himself?" theme={theme} isMobile={isMobile} icon={Lightbulb} />
              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent }}>
                <ArrowRight size={16} /> Leads to AI Acquisition Matcher
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <InsightCard lead="How might we..." body="give buyers a tool that holds their pipeline so it stops collapsing in week three?" theme={theme} isMobile={isMobile} icon={Lightbulb} />
              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent }}>
                <ArrowRight size={16} /> Leads to Deal Pipeline Dashboard
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <InsightCard lead="How might we..." body="support members in the first 90 days of ownership when their problem suddenly changes from buying to operating?" theme={theme} isMobile={isMobile} icon={Lightbulb} />
              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent }}>
                <ArrowRight size={16} /> Leads to Marketing Design Hub
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Design Language</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 900 }}>
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
        </div>
      </section>

      {/* ── THE 3 INTERFACES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Phase 05 · Deliver</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 60px", maxWidth: 900 }}>
              The three products from the synthesis became three interfaces: live prototypes built in Next.js.
            </p>
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
                    <strong>Profile is the primary input.</strong> No filter form, no friction.<br/>
                    <strong>Score visible, not hidden.</strong> 94, 87, 82. Transparent scoring earns trust.
                  </p>
                </div>
                <ImagePlaceholder text="AI Matcher Prototype UI" theme={theme} isMobile={isMobile} height={isMobile ? 300 : 450} />
              </div>
            </Reveal>

            {/* Interface 02 */}
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 40, alignItems: "center" }}>
                {!isMobileOrTablet && <ImagePlaceholder text="Deal Pipeline Dashboard UI" theme={theme} isMobile={isMobile} height={450} />}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>2. Deal Pipeline Dashboard</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>A CRM that speaks the buyer's language.</div>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    <strong>A CRM, not a project tracker.</strong> A pipeline view with five stages drawn directly from the Academy curriculum: Sourcing → LOI → Diligence → Financing → Close.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, borderLeft: `3px solid ${theme.accent}`, paddingLeft: 12 }}>
                    <strong>Workflow-native stage names.</strong> Same language Codie teaches.<br/>
                    <strong>Color codes risk.</strong> LOI cards get amber, diligence gets rust, because that's where deals die.
                  </p>
                </div>
                {isMobileOrTablet && <ImagePlaceholder text="Deal Pipeline Dashboard UI" theme={theme} isMobile={isMobile} height={300} />}
              </div>
            </Reveal>

            {/* Interface 03 */}
            <Reveal delay={0.2}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr", gap: 40, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>3. Marketing Design Hub</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.accent, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>Vertical packs for newly-acquired Main Street.</div>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    <strong>Vertical-specific packs, not a generic library.</strong> Industry-specific template packs for the newly-acquired business owner. The Laundromat Starter Pack ships with 12 templates, ready to use.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, borderLeft: `3px solid ${theme.accent}`, paddingLeft: 12 }}>
                    <strong>Pack, not library.</strong> The pack already knows what the member needs.<br/>
                    <strong>Pre-written, not blank.</strong> The member edits a name, not a paragraph.
                  </p>
                </div>
                <ImagePlaceholder text="Marketing Design Hub UI" theme={theme} isMobile={isMobile} height={isMobile ? 300 : 450} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
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
              maxWidth: 720,
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

              {/* Massive decorative quote marks */}
              <div style={{
                position: "absolute", top: 8, left: 24,
                fontFamily: "Georgia, serif", fontSize: 130, lineHeight: 1,
                color: theme.accent, opacity: mode === "dark" ? 0.08 : 0.04,
                userSelect: "none", pointerEvents: "none", transform: "rotate(-10deg)"
              }}>“</div>
              <div style={{
                position: "absolute", bottom: 20, right: 24,
                fontFamily: "Georgia, serif", fontSize: 130, lineHeight: 1,
                color: theme.accent, opacity: mode === "dark" ? 0.08 : 0.04,
                userSelect: "none", pointerEvents: "none", transform: "rotate(10deg)"
              }}>”</div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 17 : 21, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  The hardest part wasn't designing three products. It was deciding they belonged together. Speculative work has to over-index on honesty. Naming the limits, and showing the validation plan, is what makes the work credible instead of fan fiction.
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
      <section style={{ padding: isMobile ? "0 4vw 60px" : "0 6vw 100px", marginTop: 60 }}>
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
