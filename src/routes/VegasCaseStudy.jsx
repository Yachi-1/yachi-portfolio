import { ArrowRight, Clock, Target, ShieldCheck, Zap, Ticket, Users, BarChart3, Search, CreditCard, CheckCircle2, History, MousePointerClick, ShieldAlert, Monitor, LayoutDashboard, Layers, Smartphone, Banknote, Server, Lock } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import { SectionLabel, Callout, IconBadge, InsightCard, ProblemCard, ImagePlaceholder } from "../components/CaseStudyBlocks.jsx";

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function VegasCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const project = projects.find(p => p.id === "vegas");
  const idx = projects.findIndex(p => p.id === "vegas");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  /* ── data ── */
  const meta = [
    { k: "Role", v: "UX / Product Designer" },
    { k: "Timeline", v: "6 weeks" },
    { k: "Team", v: "Designer + PM + 2 Engineers" },
    { k: "Deliverables", v: "Product strategy, user flows, design system, hi-fi mockups, React spec" },
    { k: "Tools", v: "Figma, React (handoff)" },
  ];

  const colorTokens = [
    { name: "primary-navy", hex: "#0A1628" },
    { name: "brand-gold", hex: "#C9A84C" },
    { name: "secondary-blue", hex: "#1E3A5F" },
    { name: "surface-white", hex: "#FFFFFF" },
    { name: "background", hex: "#F8F9FB" },
    { name: "success", hex: "#38A169" },
    { name: "warning", hex: "#D69E2E" },
    { name: "danger", hex: "#E53E3E" },
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
                {["SaaS", "Point of Sale", "Ticketing", "B2B2C", "2025"].map((tag, i) => (
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
                Vegas Tickets - <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Multi-Tenant POS</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0", maxWidth: 800 }}>
                A point-of-sale web app that lets sales agents close a ticket sale in under 90 seconds, while giving partner venues their own branded storefront.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ImagePlaceholder text="POS Dashboard & Sales Flow Mockups" theme={theme} isMobile={isMobile} height={isMobile ? 300 : 500} />
          </Reveal>

          <Reveal delay={0.25}>
            <div style={{
              marginTop: 48, paddingTop: 32, borderTop: `1px solid ${theme.line}`,
              display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5,1fr)", gap: isMobile ? 24 : 32,
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
                  Vegas Tickets is a premium resale marketplace known for concierge-level service, all-in pricing with zero hidden fees, and deep local expertise. They needed a <strong>point-of-sale (POS) web portal</strong> so their sales agents and partner venue operators could process ticket transactions quickly and accurately.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  I designed the end-to-end agent sale flow - search, seat selection, checkout, confirmation - plus the operational dashboard and a multi-tenant venue management view. The system is built so that 10+ partner venues can run their own branded instance without a single screen being redesigned.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  The Problem
                </div>
                <p style={{ fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Agents at Vegas Tickets handle walk-in, phone, and online-assisted sales, often during high-pressure peak hours. The existing process was too slow and forced agents to switch between tools. At the same time, the business wanted to grow by letting partner venues operate their own branded POS.
                </p>
                <div style={{ padding: "20px", borderRadius: 12, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <Target size={18} color={theme.accent} strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.55, color: theme.ink, margin: 0, fontWeight: 500 }}>
                      The Goal: Reduce average transaction time to under 90 seconds, support multi-tenant architecture, and maintain all-in pricing transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20, marginTop: 48 }}>
              <ProblemCard
                num={1} theme={theme} isMobile={isMobile} icon={Clock}
                heading="Speed vs. Accuracy"
                body="Agents need to move fast without misquoting prices or overselling seats during peak hours."
              />
              <ProblemCard
                num={2} theme={theme} isMobile={isMobile} icon={Layers}
                heading="One Product vs. Many Brands"
                body="Every partner venue wants to feel like the customer is buying from them, not a third party."
              />
              <ProblemCard
                num={3} theme={theme} isMobile={isMobile} icon={ShieldCheck}
                heading="Trust vs. Transparency"
                body="Vegas Tickets' core differentiator is all-in pricing, which had to be reinforced at every step."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO I DESIGNED FOR ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Who I Designed For</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 800 }}>
              The <strong>sales agent</strong> was the primary persona - they touch the search bar 50+ times a day, so every saved click compounds across the business.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
            {[
              {
                role: "Sales Agent",
                desc: "Front-line staff handling walk-in, phone, and online-assisted sales.",
                needs: "Speed, accuracy, clear pricing, easy customer lookup.",
                icon: Users
              },
              {
                role: "Venue Manager",
                desc: "Partner venue operators using a branded POS instance.",
                needs: "Brand consistency, role-based access, operational visibility.",
                icon: LayoutDashboard
              },
              {
                role: "Admin / Ops Lead",
                desc: "Vegas Tickets internal team managing the platform.",
                needs: "Multi-tenant control, system health, scalability.",
                icon: Server
              }
            ].map((persona, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.05)}>
                <div style={{ padding: "28px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <IconBadge icon={persona.icon} theme={theme} />
                    <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>{persona.role}</h3>
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>{persona.desc}</p>
                  <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.inkMute, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Key Needs</div>
                  <div style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.ink }}>{persona.needs}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN PRINCIPLES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Design Principles</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 800 }}>
              I anchored the work in three principles that resolved trade-offs whenever they came up:
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 24, marginBottom: 56 }}>
            <Reveal delay={0.1}>
              <InsightCard num={1} lead="Speed over decoration." body="Every screen is optimized for task completion, not visual flourish. If a design choice didn't move the agent closer to 'Sale Complete,' it was cut." theme={theme} isMobile={isMobile} icon={Zap} />
            </Reveal>
            <Reveal delay={0.15}>
              <InsightCard num={2} lead="Clarity over cleverness." body="Transactional interfaces must be unambiguous. Pricing and availability are stated in plain language." theme={theme} isMobile={isMobile} icon={Search} />
            </Reveal>
            <Reveal delay={0.2}>
              <InsightCard num={3} lead="All-in pricing is sacred." body="Zero service fees are visible and reinforced at every step, never hidden in fine print." theme={theme} isMobile={isMobile} icon={Banknote} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SCREEN BY SCREEN ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The Sale Flow: Screen-by-Screen</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 900 }}>
              The core experience is a linear, four-step transaction that an agent can complete without ever leaving the flow.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 80 }}>
            {/* Step 1 */}
            <Reveal delay={0.1}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr", gap: 32, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>1. Event Search</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    The search bar is the hero of the screen because agents use it constantly. It auto-focuses on load to save a click on every single transaction.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    Each event card surfaces an availability badge - <strong>green for Available, amber for Low Stock, red for Sold Out</strong>. Sold-out events drop to 50% opacity and become non-clickable.
                  </p>
                </div>
                <ImagePlaceholder text="Screen 1: Event Search" theme={theme} isMobile={isMobile} height={isMobile ? 250 : 350} />
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 32, alignItems: "center" }}>
                {!isMobileOrTablet && <ImagePlaceholder text="Screen 2: Seat Selection" theme={theme} isMobile={isMobile} height={350} />}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>2. Seat Selection</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    Available seats are shown as a sortable list rather than an interactive map. A list is faster to build, works consistently across every venue type, and is quicker for an agent to scan.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    A persistent order-summary sidebar updates in real time and always displays a "Zero Service Fees" badge, reinforcing the all-in pricing promise right at the purchase-decision moment.
                  </p>
                </div>
                {isMobileOrTablet && <ImagePlaceholder text="Screen 2: Seat Selection" theme={theme} isMobile={isMobile} height={250} />}
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={0.2}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr", gap: 32, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>3. Checkout</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    Everything needed to close happens on one screen. The form allows searching for an existing customer by email or phone, auto-populating fields for returning buyers.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    Payment is presented as three card-style options (Credit Card, Cash, Invoice). The primary CTA, a 48px gold <strong>"Complete Sale"</strong> button, carries the total inline and stays disabled until every field validates.
                  </p>
                </div>
                <ImagePlaceholder text="Screen 3: Checkout Form" theme={theme} isMobile={isMobile} height={isMobile ? 250 : 350} />
              </div>
            </Reveal>

            {/* Step 4 */}
            <Reveal delay={0.25}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 32, alignItems: "center" }}>
                {!isMobileOrTablet && <ImagePlaceholder text="Screen 4: Confirmation & Dashboard" theme={theme} isMobile={isMobile} height={350} />}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>4. Confirmation & Dashboard</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    A 64px green check and bold headline give immediate closure. There's intentionally no back button, which prevents re-processing a completed order.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    The operational dashboard gives Ops Leads top-line KPIs and tracks the "Avg Transaction time" to ensure the 90-second target is met.
                  </p>
                </div>
                {isMobileOrTablet && <ImagePlaceholder text="Screen 4: Confirmation & Dashboard" theme={theme} isMobile={isMobile} height={250} />}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM & HANDOFF ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Design System & Architecture</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 900 }}>
              To support 10+ branded tenants without per-tenant redesign, I built a token-based system that cleanly separates what changes per brand from what never changes.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, marginBottom: 40
            }}>
              <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 24 }}>Color Tokens</h3>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "120px" : "160px"}, 1fr))`, gap: 16 }}>
                {colorTokens.map((token, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      width: "100%", height: 60, borderRadius: 8, background: token.hex,
                      border: token.hex === "#FFFFFF" ? `1px solid ${theme.line}` : "none",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                    }} />
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink }}>{token.name}</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, textTransform: "uppercase" }}>{token.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 32 }}>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>React Component Mapping</h3>
                <ul style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.7, color: theme.inkSoft, margin: 0, paddingLeft: 18 }}>
                  <li><code>&lt;NavBar tenantLogo agentName /&gt;</code> - tenant context via a context provider.</li>
                  <li><code>&lt;EventCard event status /&gt;</code> - stateless, data from props.</li>
                  <li><code>&lt;TicketRow section available onQtyChange /&gt;</code> - quantity lifted to order state.</li>
                  <li><code>&lt;OrderSummary items total /&gt;</code> - derived from global cart state.</li>
                </ul>
              </div>
              <div style={{ padding: "32px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>CSS Variables Themeing</h3>
                <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  Tenant-specific variables (<code>--tenant-logo</code>, <code>--tenant-accent</code>) change per venue, while platform constants (spacing, radius, fonts) never change. This is the mechanism that lets the design scale to 10+ branded tenants from a single codebase.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EDGE CASES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Designing for the Edges</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px", maxWidth: 900 }}>
              Transactional tools live or die by their failure states. I specified the unhappy paths alongside the happy one.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 20 }}>
            {[
              { title: "Empty search", sol: "Centered, muted 'No events found. Try a different search or browse categories.'" },
              { title: "Seat becomes unavailable mid-session", sol: "Amber warning, auto-removed from summary, CTA disabled, toast notification." },
              { title: "Payment declined", sol: "Inline error below form, red border. Form stays populated so agent doesn't re-key." },
              { title: "Price changes mid-flow", sol: "'Price updated' label with the old price struck through." },
            ].map((e, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.05)}>
                <div style={{ padding: "24px", borderRadius: 14, background: theme.bgAlt, border: `1px solid ${theme.line}`, height: "100%" }}>
                  <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>{e.title}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.6 }}>{e.sol}</div>
                </div>
              </Reveal>
            ))}
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
                  The design delivers a single-screen-per-step flow that lets an agent move from open to "Sale Complete" without tool-switching. Most importantly, the all-in-pricing promise is structurally enforced, turning the company's core differentiator into something the customer sees before they pay.
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
