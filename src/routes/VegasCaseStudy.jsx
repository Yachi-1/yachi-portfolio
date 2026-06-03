import { ArrowRight, Clock, Target, ShieldCheck, Zap, Ticket, Users, BarChart3, Search, CreditCard, CheckCircle2, History, MousePointerClick, ShieldAlert, Monitor, LayoutDashboard, Layers, Smartphone, Banknote, Server, Lock, SearchX, AlertTriangle, XCircle, RefreshCcw } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import { SectionLabel, Callout, IconBadge, InsightCard, ProblemCard, ImagePlaceholder } from "../components/CaseStudyBlocks.jsx";
import vegasTicketsHero from "../assets/vegas-tickets.png";
import screen1Img from "../assets/vegas/Screen 1- Event Search.png";
import screen2Img from "../assets/vegas/Screen 2- Seat Selection.png";
import screen3Img from "../assets/vegas/Screen 3- Checkout.png";
import screen4Img from "../assets/vegas/Screen 4- Confirmation.png";
import dashboardImg from "../assets/vegas/Dashboard.png";
import venuesImg from "../assets/vegas/Venues.png";

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
    { k: "Role", v: "UX Designer" },
    { k: "Timeline", v: "2 weeks" },
    { k: "Tools", v: "Figma, Gemini" },
    { k: "Year", v: "2025" },
  ];

  const colorTokens = [
    { name: "primary-navy", hex: "#0A1628", desc: "Nav bar, headings" },
    { name: "brand-gold", hex: "#C9A84C", desc: "CTAs, active states" },
    { name: "secondary-blue", hex: "#1E3A5F", desc: "Secondary buttons, prices" },
    { name: "surface-white", hex: "#FFFFFF", desc: "Cards, inputs" },
    { name: "background", hex: "#F8F9FB", desc: "Page canvas" },
    { name: "text-primary", hex: "#1A202C", desc: "Headings, body" },
    { name: "text-secondary", hex: "#4A5568", desc: "Descriptions, meta" },
    { name: "text-muted", hex: "#A0AEC0", desc: "Disabled, hints" },
    { name: "border-default", hex: "#E2E8F0", desc: "Borders, dividers" },
    { name: "success", hex: "#38A169", desc: "Available, confirmed" },
    { name: "warning", hex: "#D69E2E", desc: "Low stock, pending" },
    { name: "danger", hex: "#E53E3E", desc: "Sold out, errors" },
    { name: "info", hex: "#3182CE", desc: "Links, info badges" },
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
                {["Point of Sale", "Ticketing", "2025"].map((tag, i) => (
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
                Vegas Tickets <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Multi-Tenant POS</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0" }}>
                A point-of-sale web app that lets sales agents close a ticket sale in under 90 seconds, while giving partner venues their own branded storefront.
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
                  Vegas Tickets is a premium resale marketplace known for concierge-level service, all-in pricing with zero hidden fees, and deep local expertise. They needed a <strong>point-of-sale web portal</strong> so their sales agents and partner venue operators could process ticket transactions quickly and accurately.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  The Problem
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Agents at Vegas Tickets handle walk-in, phone, and online-assisted sales, often during high-pressure peak hours. The existing process was too slow and forced agents to switch between tools. At the same time, the business wanted to grow by letting partner venues operate their own branded POS.
                </p>
              </div>
            </div>

            <div style={{
              marginTop: isMobile ? 16 : 24,
              position: "relative",
              padding: "24px 32px",
              borderRadius: 16,
              background: theme.card,
              border: `1px solid ${theme.line}`,
              boxShadow: mode === "dark" ? "0 12px 30px rgba(0,0,0,0.2)" : "0 8px 24px rgba(0,0,0,0.06)",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, bottom: 0, width: 4,
                background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accent}40)`,
              }} />
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accent}05)`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <Target size={24} color={theme.accent} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                    The Goal
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15.5 : 17, lineHeight: 1.5, color: theme.ink, margin: 0, fontWeight: 500 }}>
                    Reduce average transaction time to under 90 seconds, support multi-tenant architecture, and maintain all-in pricing transparency.
                  </p>
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
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              The <strong>sales agent</strong> was the primary persona they touch the search bar 50+ times a day, so every saved click compounds across the business.
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
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              I anchored the work in three principles that resolved trade-offs whenever they came up:
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 24 }}>
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

      {/* ── USER STORIES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>User Stories & Acceptance Criteria</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              To ensure no requirements were missed, I translated the high-level goals into detailed user stories and acceptance criteria before moving into wireframing.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 32 }}>
            {[
              {
                id: "US-01",
                title: "Event Search & Discovery",
                color: "#6b46c1",
                role: "Sales Agent",
                screen: "Screen 1- Event Search",
                story: "As a sales agent, I want to quickly search for events by name, artist, or venue so that I can find the right event for a walk-in or phone customer in under 10 seconds, minimizing wait time and maximizing sales throughput during peak hours.",
                ac: [
                  "Search input auto-focused on page load, no click needed",
                  "Auto-suggest dropdown after 2 characters with 200ms debounce",
                  "Event cards show: name, date/time, venue, price, availability badge",
                  "Badges: green (Available), amber (Low Stock ≤ 5), red (Sold Out)",
                  "Sold-out events at 50% opacity, red badge, not clickable",
                  "Category chips filter instantly without page reload",
                  "Date filter: Today, This Week, This Weekend, This Month, All",
                  "Results count updates dynamically above grid",
                  "Empty state: centered message when no results match",
                  "Click available card → navigates to Screen 2",
                  "Search state preserved on back navigation"
                ],
                rationale: "Search bar is the hero, agents use it 50+ times daily. Auto-focus saves one click per transaction. Category chips enable lateral navigation for \"I want a show tonight\" requests. Green/amber/red badges give instant visual signal without reading text.",
                edge: [
                  "No results: \"No events found for [query]. Try different search or browse categories.\"",
                  "API timeout: skeleton cards (3), error toast after 5 seconds",
                  "Special characters in search input sanitized to prevent XSS"
                ]
              },
              {
                id: "US-02",
                title: "Seat Selection & Cart",
                color: "#059669",
                role: "Sales Agent",
                screen: "Screen 2- Seat Selection",
                story: "As a sales agent, I want to view available seats by section, type, and price so I can help the customer choose the best option for their budget, with a real-time total reflecting all-in pricing and zero hidden fees.",
                ac: [
                  "Event header: name (18px bold), full date/time, venue link",
                  "Sortable by: Price Low-High, Price High-Low, Section, Availability",
                  "Rows: section/row, type badge (Floor/Lower/Upper/VIP), price, qty selector",
                  "Qty selector: -/+ buttons, min 0, max = available, disabled at limits",
                  "Selected row highlights with gold tint (5% opacity)",
                  "Order summary sidebar updates in real-time",
                  "Zero Service Fees green badge always visible in summary",
                  "Total = exact final amount, no fees added later",
                  "\"Continue to Checkout\" disabled until ≥ 1 seat selected",
                  "Back to Search preserves query and filter state"
                ],
                rationale: "List view over seating map for V1, faster to build, works across venue types. Persistent sidebar ensures agent always sees running total. All-In Pricing badge reinforces Vegas Tickets' differentiator at the purchase decision moment.",
                edge: [
                  "Seat unavailable mid-session: amber warning, auto-remove from cart, toast",
                  "Select more than available: + disables, tooltip \"Only N available\"",
                  "Price changes: \"Price updated\" label, old price struck through",
                  "Cart exceeds limit: message shown, prevent adding more"
                ]
              },
              {
                id: "US-03",
                title: "Checkout & Payment",
                color: "#c2410c",
                role: "Sales Agent",
                screen: "Screen 3- Checkout",
                story: "As a sales agent, I want to capture customer details and process payment in a single screen so I can complete the sale without switching tools, keeping wait time under 60 seconds from \"ready to pay\" to \"done.\"",
                ac: [
                  "Customer form: First + Last Name (2-col), Email, Phone (full width)",
                  "\"Search existing customer\" by email or phone for returning buyers",
                  "Existing found: auto-populate fields, show \"Returning customer\" badge",
                  "Payment: 3 card-style options Credit Card, Cash, Invoice",
                  "Credit Card default selected with gold border",
                  "CC fields: number (mask), expiry MM/YY, CVV, name on card",
                  "Cash: \"Collect $570.00 at counter\" display",
                  "Invoice: send to email, toggle immediate vs. net-30",
                  "Summary sidebar read-only, finalized event + tickets + total",
                  "\"Complete Sale- $570.00\" gold CTA (48px) with total inline",
                  "CTA disabled until all fields validated",
                  "Loading: spinner replaces CTA text during payment (1-3s)"
                ],
                rationale: "Single-screen checkout eliminates transitions at the critical moment. Card-style payment (not dropdown) shows all options at once. Cash + Invoice reflect POS reality. \"Search existing customer\" implies CRM integration, shows systemic thinking.",
                edge: [
                  "Payment declined: inline error, red border, form stays populated",
                  "Email invalid: real-time error \"Please enter a valid email\"",
                  "Network error: retry button + connection error message",
                  "Session timeout: warn at 5 min idle, auto-save cart",
                  "Duplicate prevention: disable CTA after first click, show spinner"
                ]
              },
              {
                id: "US-04",
                title: "Order Confirmation & Receipt",
                color: "#475569",
                role: "Sales Agent",
                screen: "Screen 4- Confirmation",
                story: "As a sales agent, I want a clear confirmation with all order details so I can verify accuracy with the customer, issue a receipt if needed, and immediately start a new transaction with zero friction.",
                ac: [
                  "Success: green check (64px), \"Sale Complete!\" (24px bold), order ID",
                  "Order ID format: VT-YYYYMMDD-XXXX",
                  "Receipt sections: Event, Customer (\"Sent\" badge), Tickets, Payment, Delivery",
                  "Email auto-sent, green \"Sent\" badge confirms delivery",
                  "\"Print Receipt\" (secondary) + \"New Sale\" (primary gold)",
                  "\"New Sale\" clears everything, returns to Screen 1",
                  "All step indicators green",
                  "No back navigation, prevents duplicate transactions"
                ],
                rationale: "\"New Sale\" is primary CTA because the next action is always another transaction. No back button prevents re-processing. Receipt layout mirrors physical receipts familiar to agents.",
                edge: [
                  "Email fails: amber \"Pending\" badge + \"Resend\" link",
                  "Printer unavailable: system dialog, fallback \"Save as PDF\"",
                  "Browser closed: order persisted server-side"
                ]
              }
            ].map((st, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.05)}>
                <div style={{
                  background: theme.card,
                  borderRadius: 16,
                  border: `1px solid ${theme.line}`,
                  borderTop: `6px solid ${st.color}`,
                  padding: "32px",
                  boxShadow: mode === "dark" ? "0 12px 30px rgba(0,0,0,0.2)" : "0 8px 24px rgba(0,0,0,0.04)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: st.color, background: `${st.color}15`, padding: "4px 10px", borderRadius: 6 }}>{st.id}</div>
                      <h3 style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 700, color: theme.ink, margin: 0 }}>{st.title}</h3>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: st.color, background: `${st.color}10`, padding: "4px 8px", borderRadius: 4 }}>{st.role}</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, background: theme.bgAlt, padding: "4px 8px", borderRadius: 4 }}>{st.screen}</div>
                    </div>
                    <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.ink, margin: 0 }}>{st.story}</p>
                  </div>

                  <div style={{ height: 1, background: theme.line, margin: "4px 0" }} />

                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: st.color, textTransform: "uppercase", marginBottom: 12 }}>Acceptance Criteria</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {st.ac.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <div style={{ width: 6, height: 6, borderRadius: 3, background: st.color, flexShrink: 0, marginTop: 7 }} />
                          <span style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ height: 1, background: theme.line, margin: "4px 0" }} />

                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: st.color, textTransform: "uppercase", marginBottom: 8 }}>Design Rationale</div>
                    <p style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>{st.rationale}</p>
                  </div>

                  <div style={{ height: 1, background: theme.line, margin: "4px 0" }} />

                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: "#e11d48", textTransform: "uppercase", marginBottom: 8 }}>Edge Cases</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                      {st.edge.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <div style={{ width: 4, height: 14, background: "#e11d48", flexShrink: 0, marginTop: 4, borderRadius: 2 }} />
                          <span style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM & HANDOFF ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Design System & Architecture</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              To support 10+ branded tenants without per-tenant redesign, I built a token-based system that cleanly separates what changes per brand from what never changes.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              padding: "24px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, marginBottom: 40
            }}>
              <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginTop: 0, marginBottom: 24 }}>Color Tokens</h3>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "120px" : "160px"}, 1fr))`, gap: 16 }}>
                {colorTokens.map((token, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      width: "100%", height: 60, borderRadius: 8, background: token.hex,
                      border: `1px solid ${theme.line}`,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                    }} />
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink }}>{token.name}</div>
                      <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, textTransform: "uppercase", marginBottom: 2 }}>{token.hex}</div>
                      {token.desc && <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkSoft }}>{token.desc}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 32, marginBottom: 32 }}>
              <div style={{ padding: "24px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginTop: 0, marginBottom: 20 }}>Typography Scale</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute, letterSpacing: "0.05em", textTransform: "uppercase" }}>Page Title · 24px Bold</div>
                    <div style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 700, color: theme.ink }}>Find an Event</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute, letterSpacing: "0.05em", textTransform: "uppercase" }}>Section Heading · 18px SemiBold</div>
                    <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink }}>Bruno Mars with Leon Thomas III</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute, letterSpacing: "0.05em", textTransform: "uppercase" }}>Card Title · 16px SemiBold</div>
                    <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink }}>Section 120, Row C</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute, letterSpacing: "0.05em", textTransform: "uppercase" }}>Body Text · 14px Regular</div>
                    <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 400, color: theme.ink }}>Fri, Apr 10, 2026 · 8:00 PM · Allegiant Stadium</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute, letterSpacing: "0.05em", textTransform: "uppercase" }}>Price / Amount · 20px Bold</div>
                    <div style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 700, color: theme.ink }}>$570.00</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: "24px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginTop: 0, marginBottom: 20 }}>Spacing & Radius</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 4 }}>Base Unit</div>
                    <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft }}>4px</div>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 4 }}>Padding & Gaps</div>
                    <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, lineHeight: 1.6 }}>
                      Inputs: 12px · Cards: 16px · Sections: 20px<br />
                      Card Gap: 12px · Section Gap: 24px
                    </div>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 4 }}>Border Radius</div>
                    <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, lineHeight: 1.6 }}>
                      Badges: 4px · Cards/Buttons: 8px · Modals: 12px
                    </div>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 4 }}>Icons</div>
                    <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, lineHeight: 1.6 }}>
                      Tiny: 16px · Standard: 20px · Standalone: 24px
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 32 }}>

              <div style={{ padding: "24px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginTop: 0, marginBottom: 24 }}>Input Field States</h3>
                <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>First Name</label>
                    <div style={{ border: `1px solid ${theme.line}`, borderRadius: 8, padding: "12px 16px", fontFamily: "Inter", fontSize: 14, color: theme.inkMute, background: theme.bg }}>Enter first name</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, marginTop: 8 }}>Default</div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>First Name</label>
                    <div style={{ border: `2px solid #C9A84C`, borderRadius: 8, padding: "11px 15px", fontFamily: "Inter", fontSize: 14, color: theme.ink, background: theme.bg }}>Michael</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, marginTop: 8 }}>Focused</div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>First Name</label>
                    <div style={{ border: `2px solid #E53E3E`, borderRadius: 8, padding: "11px 15px", fontFamily: "Inter", fontSize: 14, color: theme.ink, background: theme.bg }}>m.chen@</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: "#E53E3E", marginTop: 8 }}>Error: Please enter a valid email</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "2.5fr 1fr", gap: 32 }}>
                <div style={{ padding: "24px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginTop: 0, marginBottom: 24 }}>Button Variants</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <button style={{ background: "#C9A84C", color: "#1A202C", border: "none", padding: "14px 24px", borderRadius: 8, fontFamily: "Inter", fontSize: 14, fontWeight: 600, cursor: "default" }}>Complete Sale</button>
                      <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>Primary (Gold)</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <button style={{ background: "transparent", color: mode === 'dark' ? '#E2E8F0' : '#1E3A5F', border: `1px solid ${mode === 'dark' ? '#E2E8F0' : '#1E3A5F'}`, padding: "14px 24px", borderRadius: 8, fontFamily: "Inter", fontSize: 14, fontWeight: 600, cursor: "default" }}>Print Receipt</button>
                      <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>Secondary</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <button style={{ background: "transparent", color: "#E53E3E", border: "1px solid #E53E3E", padding: "14px 24px", borderRadius: 8, fontFamily: "Inter", fontSize: 14, fontWeight: 600, cursor: "default" }}>Cancel Sale</button>
                      <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>Danger</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <button style={{ background: "transparent", color: "#3182CE", border: "none", padding: "14px 0", fontFamily: "Inter", fontSize: 14, fontWeight: 600, cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                        <ArrowRight size={16} style={{ transform: "rotate(180deg)" }} /> Back to Search
                      </button>
                      <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>Ghost / Link</div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "24px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginTop: 0, marginBottom: 24 }}>Status Badges</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ background: "#38A16920", color: "#38A169", padding: "6px 12px", borderRadius: 4, fontFamily: "Inter", fontSize: 11, fontWeight: 600 }}>Available</div>
                    <div style={{ background: "#D69E2E20", color: "#D69E2E", padding: "6px 12px", borderRadius: 4, fontFamily: "Inter", fontSize: 11, fontWeight: 600 }}>Low Stock</div>
                    <div style={{ background: "#E53E3E20", color: "#E53E3E", padding: "6px 12px", borderRadius: 4, fontFamily: "Inter", fontSize: 11, fontWeight: 600 }}>Sold Out</div>
                    <div style={{ background: "#C9A84C20", color: "#C9A84C", padding: "6px 12px", borderRadius: 4, fontFamily: "Inter", fontSize: 11, fontWeight: 600 }}>VIP</div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EDGE CASES ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Designing for the Edges</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              Transactional tools live or die by their failure states. I specified the unhappy paths alongside the happy one.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 24 }}>
            {[
              { title: "Empty search", sol: "Centered, muted 'No events found. Try a different search or browse categories.'", icon: SearchX, color: "#6b7280" },
              { title: "Seat becomes unavailable mid-session", sol: "Amber warning, auto-removed from summary, CTA disabled, toast notification.", icon: AlertTriangle, color: "#f59e0b" },
              { title: "Payment declined", sol: "Inline error below form, red border. Form stays populated so agent doesn't re-key.", icon: XCircle, color: "#ef4444" },
              { title: "Price changes mid-flow", sol: "'Price updated' label with the old price struck through.", icon: RefreshCcw, color: "#3b82f6" },
            ].map((e, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.05)}>
                <div
                  style={{
                    padding: "32px",
                    borderRadius: 16,
                    background: theme.card,
                    border: `1px solid ${theme.line}`,
                    boxShadow: mode === "dark" ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.03)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "default"
                  }}
                  onMouseEnter={ev => {
                    ev.currentTarget.style.transform = "translateY(-4px)";
                    ev.currentTarget.style.boxShadow = mode === "dark" ? "0 8px 30px rgba(0,0,0,0.3)" : "0 12px 30px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={ev => {
                    ev.currentTarget.style.transform = "translateY(0)";
                    ev.currentTarget.style.boxShadow = mode === "dark" ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.03)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: `${e.color}15`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: e.color
                    }}>
                      <e.icon size={24} strokeWidth={2} />
                    </div>
                    <div style={{ fontFamily: "Inter", fontSize: 17, fontWeight: 600, color: theme.ink }}>{e.title}</div>
                  </div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, color: theme.inkSoft, lineHeight: 1.6 }}>{e.sol}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREEN BY SCREEN ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The Sale Flow: Screen-by-Screen</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
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
                    Each event card surfaces an availability badge <strong>green for Available, amber for Low Stock, red for Sold Out</strong>. Sold-out events drop to 50% opacity and become non-clickable.
                  </p>
                </div>
                <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                  <img src={screen1Img} alt="Screen 1: Event Search" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 32, alignItems: "center" }}>
                {!isMobileOrTablet && (
                  <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                    <img src={screen2Img} alt="Screen 2: Seat Selection" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>2. Seat Selection</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    Available seats are shown as a sortable list rather than an interactive map. A list is faster to build, works consistently across every venue type, and is quicker for an agent to scan.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    A persistent order-summary sidebar updates in real time and always displays a "Zero Service Fees" badge, reinforcing the all-in pricing promise right at the purchase-decision moment.
                  </p>
                </div>
                {isMobileOrTablet && (
                  <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                    <img src={screen2Img} alt="Screen 2: Seat Selection" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
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
                <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                  <img src={screen3Img} alt="Screen 3: Checkout Form" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            </Reveal>

            {/* Step 4 */}
            <Reveal delay={0.25}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 32, alignItems: "center" }}>
                {!isMobileOrTablet && (
                  <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                    <img src={screen4Img} alt="Screen 4: Confirmation" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>4. Confirmation</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    A 64px green check and bold headline give immediate closure. There's intentionally no back button, which prevents re-processing a completed order.
                  </p>
                </div>
                {isMobileOrTablet && (
                  <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                    <img src={screen4Img} alt="Screen 4: Confirmation" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
              </div>
            </Reveal>

            {/* Dashboard */}
            <Reveal delay={0.3}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr", gap: 32, alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Operational Dashboard</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    The operational dashboard gives Ops Leads a bird's eye view of daily performance. Real-time metrics track ticket sales, revenue, and active agents at a glance.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    Customizable date ranges and automated reporting make end-of-day reconciliation effortless, shifting managers away from spreadsheets and into actionable insights.
                  </p>
                </div>
                <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                  <img src={dashboardImg} alt="Operational Dashboard" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            </Reveal>

            {/* Venues */}
            <Reveal delay={0.35}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.5fr 1fr", gap: 32, alignItems: "center" }}>
                {!isMobileOrTablet && (
                  <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                    <img src={venuesImg} alt="Multi-Tenant Venues" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 16 }}>Multi-Tenant Architecture</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, marginBottom: 16 }}>
                    The system scales effortlessly across different venues through a multi-tenant structure. Each venue has its own dedicated inventory, branded storefront, and pricing tiers.
                  </p>
                  <p style={{ fontFamily: "Inter", fontSize: 16, lineHeight: 1.6, color: theme.inkSoft }}>
                    This ensures agents only see the tickets relevant to their specific location, while a centralized backend allows global administrators to manage multiple sites seamlessly.
                  </p>
                </div>
                {isMobileOrTablet && (
                  <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, overflow: "hidden", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)" }}>
                    <img src={venuesImg} alt="Multi-Tenant Venues" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* ── WHAT I LEARNED ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>What I Learned</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px" }}>
              Lessons learned from designing a complex transactional system from scratch.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
            {[
              {
                icon: Target,
                color: "#C9A84C",
                title: "Design for Speed, Not Beauty",
                desc: "In a high-pressure environment, every extra click costs real money. I learned to ruthlessly prioritize task completion speed over visual flourish the best interface is the one the agent doesn't even notice."
              },
              {
                icon: Layers,
                color: "#3182CE",
                title: "Scalable Systems > Pixel-Perfect Screens",
                desc: "Building a token-based design system that works across 10+ branded tenants taught me that investing time in architecture pays off exponentially one well-built system beats ten custom designs."
              },
              {
                icon: ShieldAlert,
                color: "#E53E3E",
                title: "Edge Cases Define Quality",
                desc: "Designing the happy path is easy. The real craft lives in how a system handles payment failures, mid-session seat conflicts, and price changes those moments define whether users trust the product."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.08)}>
                <div style={{
                  padding: "24px",
                  borderRadius: 16,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${item.color}12`,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <item.icon size={22} color={item.color} />
                  </div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>{item.title}</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING & NEXT PROJECT ── */}
      <section style={{ padding: isMobile ? "60px 4vw 60px" : "100px 6vw 100px", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", marginBottom: isMobile ? 60 : 80 }}>
          <Reveal>
            <div style={{
              position: "relative",
              padding: isMobile ? "24px 24px" : "32px 48px",
              borderRadius: 24,
              background: theme.card,
              border: `1px solid ${theme.line}`,
              boxShadow: mode === "dark" ? "0 24px 48px -12px rgba(0,0,0,0.5)" : "0 32px 64px -16px rgba(0,0,0,0.08)",
              textAlign: "center",
              maxWidth: 900,
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
                  This project was originally an interview design challenge. The company decided to eliminate the UX/UI Designer role due to internal restructuring, but completing the task gave me a great opportunity to design complex operational workflows and build a scalable design system from scratch.
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

        {/* ── NEXT PROJECT ── */}
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
