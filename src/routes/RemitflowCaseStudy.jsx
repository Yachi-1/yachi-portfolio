import { Mail, Monitor, Keyboard, AlertTriangle, HelpCircle, Upload, Bot, ArrowRight, Sparkles, Target, Compass, Lightbulb, Search, Users, ShieldCheck, CheckCircle2, XCircle, FileText, Repeat, Zap, Activity, Navigation, Smartphone, Banknote, ShieldAlert, Coins, History, FileSearch, ArrowDownUp, Layers } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import { SectionLabel, Callout, IconBadge, InsightCard, ProblemCard, ImagePlaceholder } from "../components/CaseStudyBlocks.jsx";
import LazyVideo from "../components/LazyVideo.jsx";
import remitflowHeroImg from "../assets/remitflow_hero_transparent.png";
import remitflowVideoMp4 from "../assets/remitflow_video.mp4";
import remitflowVideoWebm from "../assets/remitflow_video.webm";
import remitflowPoster from "../assets/remitflow_poster.png?w=1280&format=webp&quality=80";
import remitflowUserFlowImg from "../assets/user_flow.png?w=1400&format=webp&quality=82";
/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function RemitflowCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const project = projects.find(p => p.id === "remitflow");
  const idx = projects.findIndex(p => p.id === "remitflow");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  /* ── data ── */
  const meta = [
    { k: "Role", v: "UX Designer" },
    { k: "Timeline", v: "4 weeks" },
    { k: "Tools", v: "Figma, Miro, UX Pilot" },
    { k: "Year", v: "2024" },
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
                {["UX Design", "Fintech", "2024"].map((tag, i) => (
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
                RemitFlow: <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Designing Global Payouts</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0", maxWidth: 800 }}>
                An AI-assisted, end-to-end payment experience for paying contractors across 80+ countries.
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
                  borderLeft: isMobile && (i === 0 || i === 2) ? "none" : `1px solid ${theme.line}`,
                  paddingLeft: isMobile && (i === 0 || i === 2) ? 0 : 16,
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OVERVIEW & CHALLENGE ── */}
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
                  Overview
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Paying contractors internationally is deceptively hard. A single payout can touch fluctuating exchange rates, country-specific compliance rules, multiple payment rails with different speeds and costs, and a stack of manual data entry that quietly invites errors.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  I designed <strong style={{ color: theme.ink }}>RemitFlow</strong>, a seamless multi-currency payment flow that uses AI to do the heavy lifting extracting invoice data, surfacing the right contractor, comparing payment methods, locking FX rates, and catching compliance issues <em>before</em> a payment goes out.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  The Challenge & Outcome
                </div>
                <p style={{ fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Design a seamless global payment flow for <strong>80+ countries</strong> that delivers multi-currency support, adapts to compliance rules, and leverages AI for smart suggestions without losing the user's trust.
                </p>
                <div style={{ padding: "20px", borderRadius: 12, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} color={theme.accent} strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.55, color: theme.ink, margin: 0, fontWeight: 500 }}>
                      The Outcome: A guided 5-step experience that reduces payment processing time through smart automation and predictive assistance turning a manual, error-prone chore into a confident click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEM UNDERSTANDING ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Problem Space</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              I framed the problem space across three lenses: the inherent complexity of the domain, the real pain users feel, and where AI could meaningfully help.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
            <ProblemCard
              num={1} theme={theme} isMobile={isMobile} icon={Banknote}
              heading="Payment Complexity"
              body={[
                "Multiple currencies & fluctuating rates.",
                "Various methods, speeds & costs.",
                "Country-specific compliance & fees.",
                "Error-prone manual data entry."
              ]}
            />
            <ProblemCard
              num={2} theme={theme} isMobile={isMobile} icon={ShieldAlert}
              heading="User Pain Points"
              body={[
                "Stressful post-error corrections.",
                "Hidden fees discovered too late.",
                "Unclear tracking after sending.",
                "Repetitive monthly contractor work."
              ]}
            />
            <ProblemCard
              num={3} theme={theme} isMobile={isMobile} icon={Sparkles}
              heading="The AI Opportunity"
              body={[
                "Learns payment patterns over time.",
                "Predicts user needs & preferences.",
                "Suggests optimal methods & timing.",
                "Proactively prevents errors."
              ]}
            />
          </div>

          <Reveal delay={0.2}>
            <div style={{ marginTop: 56 }}>
              <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                User Persona: The Finance Manager
              </div>
              <div style={{
                padding: isMobile ? "24px 20px" : "32px 40px",
                borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`,
                display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 48
              }}>
                <div>
                  <Callout theme={theme} isMobile={isMobile}>
                    "I pay the same 20 contractors monthly, but still enter everything manually."
                  </Callout>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
                  <div>
                    <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.ink, display: "block", marginBottom: 6 }}>Frustrations</span>
                    <span style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>✗ Repetitive data entry · ✗ Hidden fees · ✗ Last-minute compliance issues</span>
                  </div>
                  <div>
                    <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.ink, display: "block", marginBottom: 6 }}>Goals</span>
                    <span style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>✓ Process payments quickly · ✓ Minimize errors · ✓ Stay compliant</span>
                  </div>
                  <div>
                    <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.ink, display: "block", marginBottom: 6 }}>Needs from AI</span>
                    <span style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>✓ Extract invoice details · ✓ Suggest the right contractor · ✓ Validate compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── UX STRATEGY & DECISIONS ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>UX Strategy</SectionLabel></Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24, marginTop: 40 }}>
            <Reveal delay={0.05}>
              <InsightCard num={1} lead="Progressive Disclosure." body="Reveal complexity only when needed, leaning on AI for smart defaults so the default path stays simple." theme={theme} isMobile={isMobile} icon={Layers} />
            </Reveal>
            <Reveal delay={0.1}>
              <InsightCard num={2} lead="Radical Transparency." body="Show all costs, FX conversions, and fees upfront. No surprises." theme={theme} isMobile={isMobile} icon={Search} />
            </Reveal>
            <Reveal delay={0.15}>
              <InsightCard num={3} lead="Error Prevention." body="AI catches issues proactively, with clear, actionable messages rather than cryptic failures." theme={theme} isMobile={isMobile} icon={ShieldCheck} />
            </Reveal>
            <Reveal delay={0.2}>
              <InsightCard num={4} lead="Intelligent Assistant." body="AI suggests, but the user decides. Always show the reasoning and allow overrides." theme={theme} isMobile={isMobile} icon={Sparkles} />
            </Reveal>
          </div>


        </div>
      </section>

      {/* ── COMPETITIVE ANALYSIS ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Competitive Analysis</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              The market splits between basic money movers and heavy HR platforms. Crucially, none use AI as a proactive payout assistant.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ overflowX: "auto", paddingBottom: 20 }}>
              <table style={{ width: "100%", minWidth: 800, borderCollapse: "collapse", fontFamily: "Inter", fontSize: 14.5 }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${theme.line}`, textAlign: "left" }}>
                    <th style={{ padding: "16px", color: theme.ink, fontWeight: 600 }}>Dimension</th>
                    <th style={{ padding: "16px", color: theme.inkMute, fontWeight: 500 }}>Wise</th>
                    <th style={{ padding: "16px", color: theme.inkMute, fontWeight: 500 }}>Payoneer</th>
                    <th style={{ padding: "16px", color: theme.inkMute, fontWeight: 500 }}>Deel</th>
                    <th style={{ padding: "16px", color: theme.accent, fontWeight: 700, background: `${theme.accent}10`, borderRadius: "12px 12px 0 0" }}>RemitFlow</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["FX Transparency", "Strong: mid-market rate, clear cost", "Moderate: margin on contractor", "Bundled into platform pricing", "Core principle: full FX & fees shown upfront"],
                    ["Compliance Handling", "None (money movement only)", "Limited (onboarding/docs)", "Strong: automates tax & compliance", "Built-in: pre-submission checks"],
                    ["AI Assistance", "Minimal", "Minimal", "Emerging", "Central: extraction, suggestions, anomaly detect"],
                    ["In-App Comparison", "No (single rail)", "Limited", "Multiple methods, less comparison", "Yes: bank vs crypto vs wallet, side by side"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${theme.line}` }}>
                      <td style={{ padding: "16px", color: theme.ink, fontWeight: 600 }}>{row[0]}</td>
                      <td style={{ padding: "16px", color: theme.inkSoft }}>{row[1]}</td>
                      <td style={{ padding: "16px", color: theme.inkSoft }}>{row[2]}</td>
                      <td style={{ padding: "16px", color: theme.inkSoft }}>{row[3]}</td>
                      <td style={{ padding: "16px", color: theme.ink, fontWeight: 600, background: `${theme.accent}05` }}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ marginTop: 40, padding: isMobile ? "24px 20px" : "32px 40px", borderRadius: 16, background: theme.bgAlt, border: `1px solid ${theme.line}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <Target size={24} color={theme.accent} />
                <h3 style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink, margin: 0 }}>How It Shaped The Design</h3>
              </div>
              <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                This gap analysis directly informed the product's positioning: <strong style={{ color: theme.ink }}>lead with transparency</strong> (FX/fees always upfront), <strong style={{ color: theme.ink }}>make compliance proactive</strong> (checked before final confirmation), and <strong style={{ color: theme.ink }}>make AI the connective tissue</strong> of the flow. RemitFlow isn't trying to out-scale a full HR platform; it's designed to make the repetitive, multi-currency payout faster, clearer, and more trustworthy.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── JOURNEY MAPPING ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>From Manual to Magical</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              Mapping the current vs. AI-assisted journey shows the clear value of automation. We turn manual entry and reactive fixes into a guided, transparent path.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 48 }}>
            <Reveal delay={0.1}>
              <div style={{ padding: isMobile ? "24px 20px" : "32px 28px", borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <History size={20} color={theme.inkSoft} />
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>Current Journey (Manual)</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { text: "Receive invoice - manual review", icon: Mail },
                    { text: "Log into payment system - navigation overhead", icon: Monitor },
                    { text: "Manually enter all details - typing and checking", icon: Keyboard },
                    { text: "Google exchange rates - external research", icon: Search },
                    { text: "Discover a compliance issue - searching docs", icon: AlertTriangle },
                    { text: "Choose a payment method - guesswork", icon: HelpCircle },
                    { text: "Finally submit", icon: CheckCircle2 }
                  ].map((step, i) => (
                    <div key={i} style={{ fontFamily: "Inter", fontSize: 15, color: theme.inkSoft, opacity: 0.8, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ marginTop: 2, display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ fontSize: 14 }}>{i + 1}.</span>
                        <step.icon size={16} color={theme.accent} />
                      </div>
                      <span>{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div style={{ padding: isMobile ? "24px 20px" : "32px 28px", borderRadius: 14, background: theme.card, border: `2px solid ${theme.accent}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <Sparkles size={20} color={theme.accent} />
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>Desired Journey (AI-Assisted)</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { text: "Receive invoice", icon: Mail },
                    { text: "Upload to system → AI extracts data (automated)", icon: Upload, highlight: true },
                    { text: "AI suggests contractor & amount (confirmation, not entry)", icon: Bot, highlight: true },
                    { text: "FX rate and fees shown upfront (transparency)", icon: Lightbulb },
                    { text: "AI recommends the optimal method (comparison)", icon: Sparkles, highlight: true },
                    { text: "Compliance auto-checked by AI (validation)", icon: ShieldCheck, highlight: true },
                    { text: "Finally submit - with confidence", icon: CheckCircle2 }
                  ].map((step, i) => (
                    <div key={i} style={{
                      fontFamily: "Inter", fontSize: 15,
                      color: step.highlight ? theme.accent : theme.ink,
                      fontWeight: step.highlight ? 600 : 400,
                      display: "flex", alignItems: "flex-start", gap: 10
                    }}>
                      <div style={{ marginTop: 2, display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ fontSize: 14, color: theme.inkSoft, fontWeight: 400 }}>{i + 1}.</span>
                        <step.icon size={16} color={theme.accent} />
                      </div>
                      <span>{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>



        </div>
      </section>

      {/* ── AI INTEGRATION & FLOW ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The 5-Step Flow & AI Weave</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              AI acts as an assistant, not an autopilot every suggestion is explainable and overridable. Here's how it integrates into the architecture.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 32, alignItems: "flex-start" }}>

            {/* Left Column: 5 Steps Timeline */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1.8, position: "relative" }}>
              {/* Vertical line behind icons */}
              {!isMobile && <div style={{ position: "absolute", left: 24, top: 24, bottom: 24, width: 2, background: theme.line, zIndex: 0 }} />}

              {[
                { step: "Step 1: Invoice / Amount", ai: "OCR extracts amount, contractor, invoice number, and date from an uploaded PDF/image.", icon: FileText },
                { step: "Step 2: Contractor Selection", ai: "Surfaces the top 3 suggested contractors and detects recurring patterns.", icon: Users },
                { step: "Step 3: Payment Method", ai: "Provides a recommendation (e.g. 'Crypto recommended based on speed/cost') alongside Bank and Wallet options.", icon: ArrowDownUp },
                { step: "Step 4: Review & Confirm", ai: "Flags unusual amounts (Anomaly Detection) and auto-validates country-specific compliance.", icon: ShieldCheck },
                { step: "Step 5: Confirmation", ai: "Offers to set up auto-payments after success.", icon: Repeat },
              ].map((s, i) => (
                <Reveal key={i} delay={0.1 + (i * 0.05)}>
                  <div style={{
                    display: "flex", gap: 24,
                    alignItems: "flex-start",
                    padding: "20px 0",
                    position: "relative", zIndex: 1
                  }}>
                    {/* Icon Circle */}
                    <div style={{
                      width: 50, height: 50, borderRadius: "50%", background: theme.card, border: `1px solid ${theme.line}`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      boxShadow: mode === "dark" ? "0 4px 12px rgba(0,0,0,0.5)" : "0 4px 12px rgba(0,0,0,0.05)"
                    }}>
                      <s.icon size={22} color={theme.accent} />
                    </div>

                    {/* Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 12 }}>
                      <div style={{ fontFamily: "Inter", fontSize: 17, fontWeight: 600, color: theme.ink }}>{s.step}</div>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <Sparkles size={16} color={theme.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                        <div style={{ fontFamily: "Inter", fontSize: 15, color: theme.inkSoft, lineHeight: 1.6 }}>{s.ai}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Column: Flow Diagram Image */}
            <div style={{ flex: 0.8, position: isMobile ? "static" : "sticky", top: 100 }}>
              <Reveal delay={0.3}>
                <div style={{
                  width: "100%",
                  height: isMobile ? 400 : 550,
                  borderRadius: 16,
                  border: `1px solid ${theme.line}`,
                  background: theme.card,
                  boxShadow: mode === "dark" ? "0 12px 24px -10px rgba(0,0,0,0.5)" : "0 12px 24px -10px rgba(0,0,0,0.05)",
                  padding: isMobile ? 16 : 32
                }}>
                  <img src={remitflowUserFlowImg} alt="User Flow Diagram" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", display: "block", objectFit: "contain", objectPosition: "center" }} />
                </div>
              </Reveal>
            </div>

          </div>

        </div>
      </section>

      {/* ── EDGE CASES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Edge Cases & Error Handling</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              Designing for the unhappy paths is where trust is earned. Each edge case pairs a clear user-facing solution with an explainable AI message.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {[
              { title: "FX rate fluctuation", sol: "Lock rate for 60s, show countdown timer. Refresh if expired.", ai: '"Rate changed. New estimate: ₹1,58,500 (₹500 less)."' },
              { title: "Insufficient balance", sol: "Check balance before review step, show a clear error.", ai: '"Add funds or schedule for a date when balance is sufficient."' },
              { title: "Compliance violation", sol: "Block at review with a clear explanation.", ai: '"Split into 2 payments or use an alternative method."' },
              { title: "Contractor details change", sol: "Require confirmation and allow a note/reason.", ai: '"Highlights the change and asks for confirmation."' },
              { title: "Unusual amount", sol: "Require additional confirmation.", ai: '"This is 3× your average payment to this contractor. Verify before proceeding."' },
            ].map((e, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.05)}>
                <div style={{
                  padding: "28px",
                  borderRadius: 16,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                  borderTop: `4px solid ${theme.accent}`,
                  height: "100%",
                  boxShadow: mode === "dark" ? "0 4px 12px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.03)",
                  display: "flex", flexDirection: "column"
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>{e.title}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, color: theme.inkSoft, marginBottom: 24, lineHeight: 1.5 }}>
                    <strong style={{ color: theme.ink }}>Solution:</strong> {e.sol}
                  </div>
                  <div style={{
                    marginTop: "auto",
                    padding: "14px 18px",
                    borderRadius: "0 12px 12px 12px",
                    background: mode === "dark" ? `${theme.accent}15` : `${theme.accent}10`,
                    color: theme.accent,
                    fontFamily: "Inter", fontSize: 14, fontStyle: "italic",
                    display: "flex", gap: 10, alignItems: "flex-start",
                    borderLeft: `2px solid ${theme.accent}`
                  }}>
                    <Sparkles size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div style={{ lineHeight: 1.5 }}>{e.ai}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Design System</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              To ensure consistency, we built a design system rooted in clear typography, accessible colors, and an 8px grid.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "repeat(3, 1fr)", gap: 32 }}>
            {/* 1. Color Palette */}
            <Reveal delay={0.1}>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, height: "100%" }}>
                <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                  <Layers size={20} color={theme.accent} />
                  Color Palette
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 24 }}>
                  <div>
                    <div style={{ width: "100%", height: 48, background: "#2E6DB5", borderRadius: 8, marginBottom: 8 }}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink }}>Primary Blue</span>
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: theme.inkSoft }}>#2E6DB5</span>
                    </div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft, marginTop: 4 }}>Trust & Professionalism</div>
                  </div>

                  <div>
                    <div style={{ width: "100%", height: 48, background: "#10B981", borderRadius: 8, marginBottom: 8 }}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink }}>Accent Green</span>
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: theme.inkSoft }}>#10B981</span>
                    </div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft, marginTop: 4 }}>Success & Growth</div>
                  </div>

                  <div>
                    <div style={{ display: "flex", height: 48, borderRadius: 8, overflow: "hidden", marginBottom: 8 }}>
                      {["#9CA3AF", "#6B7280", "#4B5563", "#374151", "#1F2937", "#111827"].map(c => (
                        <div key={c} style={{ flex: 1, background: c }}></div>
                      ))}
                    </div>
                    <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink }}>Neutral Grays</div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft, marginTop: 4 }}>Hierarchy & Readability</div>
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 24 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>Semantic Colors</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { l: "Success", c: "#10B981" },
                      { l: "Warning", c: "#F97316" },
                      { l: "Error", c: "#EF4444" },
                      { l: "Info", c: "#2E6DB5" }
                    ].map(s => (
                      <div key={s.l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 12, height: 12, borderRadius: "50%", background: s.c }}></div>
                        <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft }}>{s.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2. Typography */}
            <Reveal delay={0.15}>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, height: "100%" }}>
                <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20, color: theme.accent, fontWeight: 700 }}>Aa</span>
                  Typography
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 28, fontWeight: 700, color: theme.ink, marginBottom: 4 }}>Inter</div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft, marginBottom: 16 }}>Primary Font - Headings & Body</div>

                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 500, color: theme.ink, marginBottom: 4 }}>JetBrains Mono</div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft }}>Monospace Font - Amounts & IDs</div>
                </div>

                <div style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 24 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Type Scale</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 700, color: theme.ink, marginBottom: 2, lineHeight: 1 }}>Heading 3</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkSoft }}>24px / Bold / Inter</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 2, lineHeight: 1 }}>Heading 4</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkSoft }}>18px / Semibold / Inter</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 400, color: theme.ink, marginBottom: 2, lineHeight: 1 }}>Body Large</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkSoft }}>16px / Regular / Inter</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 500, color: theme.ink, marginBottom: 2, lineHeight: 1 }}>$12,345.67</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkSoft }}>14px / Medium / JetBrains</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. Spacing System */}
            <Reveal delay={0.2}>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, height: "100%" }}>
                <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                  <Monitor size={20} color={theme.accent} />
                  Spacing System
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>8px Base Unit</div>
                  <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 40 }}>
                    {[1, 2, 3, 4, 5, 6].map(u => (
                      <div style={{ width: 16, height: u * 8, background: theme.accent, opacity: 0.2 + (u * 0.1), borderRadius: "2px 2px 0 0" }} key={u}></div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                    {[8, 16, 24, 32, 40, 48].map(px => (
                      <div style={{ width: 16, fontFamily: "Inter", fontSize: 10, color: theme.inkSoft, textAlign: "center" }} key={px}>{px}</div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 24, marginBottom: 24 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>Component Padding</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { l: "Cards", v: "24px" },
                      { l: "Buttons", v: "16px 32px" },
                      { l: "Input Fields", v: "16px" }
                    ].map(s => (
                      <div key={s.l} style={{ display: "flex", justifyContent: "space-between", fontFamily: "Inter", fontSize: 13 }}>
                        <span style={{ color: theme.inkSoft }}>{s.l}</span>
                        <span style={{ color: theme.ink, fontWeight: 500 }}>{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 24 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>Border Radius</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { l: "Cards", v: "12px" },
                      { l: "Buttons & Inputs", v: "8px" }
                    ].map(s => (
                      <div key={s.l} style={{ display: "flex", justifyContent: "space-between", fontFamily: "Inter", fontSize: 13 }}>
                        <span style={{ color: theme.inkSoft }}>{s.l}</span>
                        <span style={{ color: theme.ink, fontWeight: 500 }}>{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HIGH FIDELITY ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>High Fidelity Designs</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              The high-fidelity UI focuses on clarity and trust, naturally guiding users through the AI-assisted flow.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <Reveal delay={0.1}>
              <div style={{
                maxWidth: 800,
                margin: "0 auto",
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${theme.line}`,
                background: theme.card,
                boxShadow: mode === "dark" ? "0 12px 24px -10px rgba(0,0,0,0.5)" : "0 12px 24px -10px rgba(0,0,0,0.05)"
              }}>
                <LazyVideo
                  poster={remitflowPoster}
                  sources={[
                    { src: remitflowVideoWebm, type: "video/webm" },
                    { src: remitflowVideoMp4, type: "video/mp4" },
                  ]}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 24, color: theme.accent, marginBottom: 0 }}>
              Reflection
            </div>
            <h2 style={{ fontFamily: "Inter", fontSize: isMobile ? 32 : 48, fontWeight: 600, letterSpacing: "-0.03em", color: theme.ink, marginTop: 0, marginBottom: 48, lineHeight: 1.1 }}>
              What worked, and what I'd revisit.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 32 }}>
            {/* What worked */}
            <Reveal delay={0.1}>
              <div style={{ background: theme.card, borderRadius: 24, padding: isMobile ? 24 : 40, border: `1px solid ${theme.line}`, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
                  <div style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink }}>What worked</div>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>AI as an Assistant, Not Autopilot</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>
                    Keeping the AI suggestions transparent and overridable built trust. Users preferred having control over the final payout decision rather than a black-box automated process.
                  </div>
                </div>

                <div style={{ height: 1, background: theme.line, marginBottom: 32 }} />

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>The 5-Step Guided Flow</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>
                    Breaking down complex international payouts into a linear, wizard-like flow reduced cognitive load and minimized errors compared to a traditional dense dashboard.
                  </div>
                </div>
              </div>
            </Reveal>

            {/* What I'd revisit */}
            <Reveal delay={0.2}>
              <div style={{ background: theme.card, borderRadius: 24, padding: isMobile ? 24 : 40, border: `1px solid ${theme.line}`, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: theme.accent }} />
                  <div style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink }}>What I'd revisit</div>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>Testing with Real Financial Data</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>
                    While the flow works well conceptually, testing with real, messy financial documents and edge-case compliance issues would reveal friction points in the AI's data extraction accuracy.
                  </div>
                </div>

                <div style={{ height: 1, background: theme.line, marginBottom: 32 }} />

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>Advanced Error States</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft }}>
                    The current design handles the happy path beautifully. In the future, I would spend more time mapping out complex error states (like blocked transactions or missing tax forms) and how the AI helps resolve them.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section style={{ padding: isMobile ? "60px 4vw 40px" : "100px 6vw 60px", background: mode === "dark" ? theme.bgAlt : "#f3efe8" }}>
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
                  I designed this project for a friend launching a new business. The goal was to create a prototype for testing with early users and validating the concept through real feedback.
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
      <section style={{ padding: isMobile ? "0 4vw 60px" : "0 6vw 100px", background: mode === "dark" ? theme.bgAlt : "#f3efe8" }}>
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
