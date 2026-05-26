import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";
import kpImage from "../assets/KP_Cover.png";

export default function KineticCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isTablet, isMobileOrTablet } = useBreakpoint();

  const project = projects.find(p => p.id === "kinetic");
  const idx = projects.findIndex(p => p.id === "kinetic");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  // Severity color utility
  const getSeverityStyle = (sev) => {
    switch (sev.toLowerCase()) {
      case "high":
        return { bg: theme.pastel1, color: theme.ink, border: `1px solid ${theme.line}` };
      case "medium":
        return { bg: theme.pastel3, color: theme.ink, border: `1px solid ${theme.line}` };
      case "low":
      default:
        return { bg: theme.pastel4, color: theme.ink, border: `1px solid ${theme.line}` };
    }
  };

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>
      {/* HEADER SECTION */}
      <section style={{ padding: isMobile ? "0 4vw 40px" : "0 6vw 60px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              data-magnet="0.3"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "none",
                fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft,
                cursor: "pointer", marginBottom: 30,
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.accent;
                e.currentTarget.style.transform = "translateX(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.inkSoft;
                e.currentTarget.style.transform = "translateX(0)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.color = theme.pastel1;
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.color = theme.accent;
              }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{
              width: "100%",
              height: isMobile ? "auto" : isTablet ? 500 : 700,
              aspectRatio: isMobile ? "1/1" : "auto",
              borderRadius: isMobile ? 16 : 24,
              overflow: "hidden",
              border: `1px solid ${theme.line}`,
              background: "#9E3F16",
              position: "relative",
              marginTop: 20,
              boxShadow: mode === "dark" ? "0 20px 50px rgba(0,0,0,0.4)" : "0 20px 50px rgba(0,0,0,0.06)",
            }}>
              <img
                src={kpImage}
                alt="Kinetic Potential Cover Mockup"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section style={{ padding: isMobile ? "30px 4vw" : "40px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? 24 : 32,
              width: "100%",
            }}>
              {[
                { k: "Role", v: "Solo UI/UX Designer" },
                { k: "Timeline", v: "8 weeks" },
                { k: "Deliverables", v: "Design system, Interactive Prototypes" },
                { k: "Tools", v: "Figma · FigJam · Jira · ChatGPT" },
              ].map((d, i) => (
                <div key={d.k} style={{
                  borderLeft: isMobile && i % 2 === 0 ? "none" : `1px solid ${theme.line}`,
                  paddingLeft: isMobile && i % 2 === 0 ? 0 : 16,
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 6 }}>{d.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.ink, lineHeight: 1.4 }}>{d.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 01 — THE PROBLEM */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>01 — The Problem</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Two audiences, one confused experience.
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 48px",
              maxWidth: 1200,
            }}>
              KP Connect serves two distinct groups: <strong>individuals</strong> looking for jobs, training, and entrepreneurship, and <strong>organizations</strong> seeking partnerships, grants, and talent development. The existing site forced this split into the top-level navigation, but the underlying services overlapped so much that users couldn't tell which path led where.
            </p>
          </Reveal>

          {/* Audit findings grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: 24,
          }}>
            {[
              {
                num: "01",
                title: "Frozen in time",
                desc: "Footer copyright reads \"2008–2023.\" STAR initiative still leads with COVID-era language. The brand has clearly evolved past what the site reflects."
              },
              {
                num: "02",
                title: "Overlapping IA",
                desc: "\"Talent Development\" lives under Organizations; \"Up Skill Training\" - the same thing lives under Individuals. Users hit dead ends and back-buttons."
              },
              {
                num: "03",
                title: "Inconsistent visual identity",
                desc: "Mix of fonts, button styles, and colors page to page. The brand has a logo, but no system holding the rest together."
              }
            ].map((f, i) => (
              <Reveal key={f.num} delay={i * 0.05}>
                <div style={{
                  padding: 24,
                  borderRadius: 16,
                  border: `1px solid ${theme.line}`,
                  background: theme.card,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.accent }}>{f.num}</div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, margin: 0 }}>{f.title}</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — HEURISTIC EVALUATION */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>02 — Heuristic Evaluation</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Measuring against Nielsen's ten.
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px",
              maxWidth: 900,
            }}>
              I ran a heuristic evaluation against Jakob Nielsen's ten usability heuristics, scoring each on severity. The biggest gaps were in <strong>match with the real world</strong>, <strong>consistency</strong>, and <strong>aesthetic & minimalist design</strong>.
            </p>
          </Reveal>

          {/* Heuristic Table */}
          <Reveal delay={0.1}>
            <div style={{ overflowX: "auto", border: `1px solid ${theme.line}`, borderRadius: 16, background: theme.card }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600, textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${theme.line}`, background: theme.bgAlt }}>
                    <th style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: theme.inkMute, textTransform: "uppercase" }}>#</th>
                    <th style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: theme.inkMute, textTransform: "uppercase" }}>Heuristic</th>
                    <th style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: theme.inkMute, textTransform: "uppercase" }}>Severity</th>
                    <th style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: theme.inkMute, textTransform: "uppercase" }}>Finding</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { num: "01", name: "Visibility of system status", sev: "Low", desc: "Most links navigate predictably. Loading states absent on form submissions." },
                    { num: "02", name: "Match between system & real world", sev: "High", desc: "\"Indidev,\" \"kp-network,\" \"retraining-20m-jobless\" appear in URLs and labels. Users have no idea what these mean." },
                    { num: "03", name: "User control & freedom", sev: "Medium", desc: "No breadcrumbs. Once deep in a service page, the only way out is the browser back button." },
                    { num: "04", name: "Consistency & standards", sev: "High", desc: "Buttons styled differently across pages. Headings switch fonts mid-page. Card components don't match." },
                    { num: "05", name: "Error prevention", sev: "Medium", desc: "Forms use image CAPTCHAs as the only validation. No inline field hints or formatting examples." },
                    { num: "06", name: "Recognition over recall", sev: "Medium", desc: "Service categories require users to remember which audience-bucket holds what — Individual or Organization." },
                    { num: "07", name: "Flexibility & efficiency", sev: "Low", desc: "Search exists but doesn't index service pages well. No advanced filters for the job board." },
                    { num: "08", name: "Aesthetic & minimalist design", sev: "High", desc: "Pages stack everything visible at once. No hierarchy, no breathing room, no editorial restraint." },
                    { num: "09", name: "Recovery from errors", sev: "Low", desc: "Standard 404s. Form errors shown after submission rather than inline." },
                    { num: "10", name: "Help & documentation", sev: "Medium", desc: "No FAQ. No \"Getting Started.\" Help is buried in form-intake flows rather than self-serve content." }
                  ].map((row, idx) => {
                    const sevStyle = getSeverityStyle(row.sev);
                    return (
                      <tr key={row.num} style={{ borderBottom: idx === 9 ? "none" : `1px solid ${theme.line}` }}>
                        <td style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 14.5, color: theme.inkMute }}>{row.num}</td>
                        <td style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 14.5, fontWeight: 600, color: theme.ink }}>{row.name}</td>
                        <td style={{ padding: "16px 24px" }}>
                          <span style={{
                            padding: "4px 10px",
                            borderRadius: 999,
                            fontFamily: "Inter",
                            fontSize: 11.5,
                            fontWeight: 600,
                            ...sevStyle
                          }}>
                            {row.sev}
                          </span>
                        </td>
                        <td style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.5 }}>{row.desc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03 — USER RESEARCH / PERSONAS */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>03 — User Research</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Who is this really for?
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 48px",
              maxWidth: 900,
            }}>
              From the existing site's service descriptions, partner list, and language, I synthesised two primary personas. Both share the same core need — a clear path forward — but arrive at the site with very different vocabularies and expectations.
            </p>
          </Reveal>

          {/* Personas container */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: 32,
          }}>
            {/* Persona 1 */}
            <Reveal delay={0.05}>
              <div style={{
                padding: isMobile ? 24 : 36,
                borderRadius: 20,
                border: `1px solid ${theme.line}`,
                background: theme.card,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent, marginBottom: 4 }}>Persona 01</div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, margin: 0 }}>Marcus J.</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute, marginTop: 2 }}>Dislocated worker · Age 34</div>
                </div>

                <div style={{ height: 1, background: theme.line }} />

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 6 }}>Context</div>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>
                    Lost a logistics job during a regional plant closure. Considering retraining in a new field but doesn't know which programs are real or which are scams.
                  </p>
                </div>

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 8 }}>Goals</div>
                  <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Find a free or funded training program",
                      "Understand what jobs it leads to",
                      "Know if he's eligible before investing time",
                    ].map((g, i) => (
                      <li key={i} style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 8 }}>Frustrations</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Acronym soup", "No clear next step", "Too many forms"].map(tag => (
                      <span key={tag} style={{ padding: "4px 10px", borderRadius: 999, background: theme.bgAlt, fontFamily: "Inter", fontSize: 12, color: theme.inkSoft, border: `1px solid ${theme.line}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: 16,
                  borderRadius: 12,
                  borderLeft: `4px solid ${theme.accent}`,
                  background: theme.bgAlt,
                  marginTop: "auto",
                }}>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, fontStyle: "italic", lineHeight: 1.5, color: theme.ink, margin: 0 }}>
                    "I don't know what 'WIOA' means. I just need to know if it's free, and what I'd actually be doing."
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Persona 2 */}
            <Reveal delay={0.15}>
              <div style={{
                padding: isMobile ? 24 : 36,
                borderRadius: 20,
                border: `1px solid ${theme.line}`,
                background: theme.card,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent, marginBottom: 4 }}>Persona 02</div>
                  <h3 style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink, margin: 0 }}>Linda P.</h3>
                  <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute, marginTop: 2 }}>Workforce Board Director · Age 52</div>
                </div>

                <div style={{ height: 1, background: theme.line }} />

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 6 }}>Context</div>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>
                    Runs a county-level workforce board. Looking for trusted partners to deliver upskilling at scale for her region's workforce.
                  </p>
                </div>

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 8 }}>Goals</div>
                  <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Quickly verify KP is legitimate",
                      "See who else has partnered with them",
                      "Understand the partnership model",
                      "Find a contact",
                    ].map((g, i) => (
                      <li key={i} style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 8 }}>Frustrations</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["No partner page", "No case studies", "No clear contact"].map(tag => (
                      <span key={tag} style={{ padding: "4px 10px", borderRadius: 999, background: theme.bgAlt, fontFamily: "Inter", fontSize: 12, color: theme.inkSoft, border: `1px solid ${theme.line}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: 16,
                  borderRadius: 12,
                  borderLeft: `4px solid ${theme.accent}`,
                  background: theme.bgAlt,
                  marginTop: "auto",
                }}>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, fontStyle: "italic", lineHeight: 1.5, color: theme.ink, margin: 0 }}>
                    "I need to send this link to my board chair before our next meeting. It has to look credible."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 04 — INFORMATION ARCHITECTURE AUDIT */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>04 — Information Architecture</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Untangling the navigation.
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 48px",
              maxWidth: 900,
            }}>
              The most consequential change in this redesign wasn't visual — it was structural. The old site split the entire experience by audience at the top level, then duplicated services underneath. The new structure surfaces the four service pillars directly and lets a toggle handle the audience split where it actually matters.
            </p>
          </Reveal>

          {/* Before/After tree visual */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: 32,
            marginBottom: 48,
          }}>
            {/* Before card */}
            <Reveal delay={0.05}>
              <div style={{
                padding: 24,
                borderRadius: 16,
                background: theme.card,
                border: `1px solid ${theme.line}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h4 style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: theme.inkSoft, margin: 0 }}>BEFORE — sprawling, duplicated</h4>
                </div>
                <pre style={{
                  margin: 0,
                  padding: 16,
                  borderRadius: 12,
                  background: theme.bgAlt,
                  color: theme.inkSoft,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 13,
                  lineHeight: 1.5,
                  overflowX: "auto"
                }}>
                  {`For Organizations
 └─ Collaboration Opportunities
 └─ Tech Modernization Grants
 └─ Talent Development           [duplicate]

For Individuals
 └─ Social Entrepreneurship
 └─ S.T.A.R. Initiative
     └─ About STAR
     └─ Career Advisory
     └─ Is it really free?
     └─ Programs
 └─ Up Skill Training            [duplicate]
 └─ Community Support
 └─ Find Jobs
 └─ Residential Housing

Blog · Login`}
                </pre>
              </div>
            </Reveal>

            {/* After card */}
            <Reveal delay={0.15}>
              <div style={{
                padding: 24,
                borderRadius: 16,
                background: theme.card,
                border: `1px solid ${theme.accent}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h4 style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: theme.accent, margin: 0 }}>AFTER — four pillars, one toggle</h4>
                </div>
                <pre style={{
                  margin: 0,
                  padding: 16,
                  borderRadius: 12,
                  background: theme.bgAlt,
                  color: theme.ink,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 13,
                  lineHeight: 1.5,
                  overflowX: "auto"
                }}>
                  {`Home
About
Services [Individual / Organization toggle]
 └─ KP Academy (K-12)
 └─ KP University (Adults)
 └─ KP Care (Support)
 └─ Innovative Workforce
     └─ STAR Initiative
     └─ Social Entrepreneurship
     └─ Find Jobs
Blog
Contact`}
                </pre>
              </div>
            </Reveal>
          </div>

          {/* Pull quote Callout */}
          <Reveal>
            <div style={{
              padding: isMobile ? 24 : 40,
              borderRadius: 20,
              background: theme.card,
              border: `1px solid ${theme.line}`,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              textAlign: "center",
              maxWidth: 900,
              margin: "0 auto"
            }}>
              <span style={{ fontSize: 32, lineHeight: 1, color: theme.accent }}>“</span>
              <p style={{
                fontFamily: "Inter",
                fontSize: isMobile ? 16 : 19,
                lineHeight: 1.6,
                color: theme.ink,
                fontWeight: 500,
                margin: 0,
                letterSpacing: "-0.01em",
              }}>
                The audience split is a real distinction — but it's the <strong>wrong axis</strong> for top-level navigation. Most KP services serve both audiences from different angles. Surfacing the <strong>services themselves</strong> first, then letting users self-identify with a toggle, is the design move that unlocks everything else.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 05 — KEY INSIGHTS */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>05 — Key Insights</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 48px", lineHeight: 1.1,
            }}>
              Five decisions that shaped the redesign.
            </h2>
          </Reveal>

          {/* Insights stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 900, margin: "0 auto" }}>
            {[
              {
                num: "01",
                title: "Lead with the four-pillar service model.",
                desc: "Before this redesign, services lived as flat links in a dropdown. KP Academy, KP University, KP Care, and Innovative Workforce now anchor the homepage and the Services hub — giving the brand a clear, memorisable architecture."
              },
              {
                num: "02",
                title: "Make credibility visible.",
                desc: "Linda — the workforce director persona — needs to verify KP fast. Stat blocks (10+ years, 20K+ lives changed, 98% success rate), a real partner network with logos, and testimonials now appear above the fold."
              },
              {
                num: "03",
                title: "Translate the jargon.",
                desc: "WIOA, CTE, RAP, OHCDS — the existing site assumes users speak workforce-policy fluently. The redesign surfaces these terms alongside plain-language descriptions so Marcus understands what's actually being offered."
              },
              {
                num: "04",
                title: "One identity, applied consistently.",
                desc: "I built a small design system — Fraunces for display, Inter for body, KP's orange-red as the accent, a 12-column grid, and a card pattern that recurs throughout. Every page now feels like the same product."
              },
              {
                num: "05",
                title: "Build for the next decade, not the last one.",
                desc: "I removed the COVID-era framing from STAR, replaced placeholder copy with real content, modernized the blog structure, and added pages the site was missing entirely — a proper Contact, a structured Blog, a usable About."
              }
            ].map((ins, i) => (
              <Reveal key={ins.num} delay={i * 0.05}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "60px 1fr",
                  gap: isMobile ? 12 : 24,
                  alignItems: "start",
                }}>
                  <div style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: 28,
                    color: theme.accent,
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    background: theme.bgAlt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${theme.line}`
                  }}>
                    {ins.num}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Inter", fontSize: 19, fontWeight: 600, color: theme.ink, margin: "4px 0 8px" }}>{ins.title}</h3>
                    <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>{ins.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — DESIGN SYSTEM */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>06 — Design System</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              A small kit, used precisely.
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 48px",
              maxWidth: 900,
            }}>
              Not a full design system — a working kit. Enough tokens to keep eight pages consistent without over-engineering a one-person rebuild.
            </p>
          </Reveal>

          {/* Palette display */}
          <div style={{ marginBottom: 48 }}>
            <Reveal>
              <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 16 }}>Color Palette</div>
            </Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)",
              gap: 20,
            }}>
              {[
                { name: "Orange (Primary)", hex: "#E8542A", text: "white", bg: "#E8542A" },
                { name: "Deep Orange", hex: "#C43D18", text: "white", bg: "#C43D18" },
                { name: "Soft Orange", hex: "#F4A583", text: "#1A1612", bg: "#F4A583" },
                { name: "Ink", hex: "#1A1612", text: "#F5F1EA", bg: "#1A1612" },
                { name: "Paper", hex: "#F5F1EA", text: "#1A1612", bg: "#F5F1EA", border: `1px solid ${theme.line}` }
              ].map((color, i) => (
                <Reveal key={color.name} delay={i * 0.05}>
                  <div style={{
                    borderRadius: 16,
                    background: theme.card,
                    border: `1px solid ${theme.line}`,
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}>
                    <div style={{
                      height: 80,
                      borderRadius: 10,
                      background: color.bg,
                      border: color.border || "none",
                      display: "flex",
                      alignItems: "end",
                      padding: 12,
                    }}>
                      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 600, color: color.text }}>{color.hex}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 14.5, fontWeight: 600, color: theme.ink }}>{color.name}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <p style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, marginTop: 12, fontStyle: "italic" }}>
                Color rationale: KP's existing orange-red carries the brand identity. Ink and paper provide editorial contrast.
              </p>
            </Reveal>
          </div>

          {/* Typography & Spacing grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: 32,
          }}>
            {/* Typography */}
            <Reveal delay={0.05}>
              <div style={{
                padding: 24,
                borderRadius: 16,
                background: theme.card,
                border: `1px solid ${theme.line}`,
                height: "100%",
              }}>
                <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 20 }}>Typography</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 24, color: theme.ink }}>Fraunces (Display)</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, marginTop: 2 }}>Serif, distinctive personality for headlines</div>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 500, color: theme.ink }}>Inter (Body)</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, marginTop: 2 }}>Sans-serif, clean, readable for paragraphs and UI controls</div>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 16, color: theme.ink }}>JetBrains Mono (Mono)</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, marginTop: 2 }}>Monospace for labels, numbers, and technical metadata</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Spacing & Grid */}
            <Reveal delay={0.15}>
              <div style={{
                padding: 24,
                borderRadius: 16,
                background: theme.card,
                border: `1px solid ${theme.line}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase" }}>Spacing & Grid</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>4-point baseline</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, margin: 0 }}>Every element aligns to a consistent 4px rhythm, guaranteeing visual hierarchy and clean vertical flow.</p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>12-column grid</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, margin: 0 }}>All pages utilize a responsive 12-column layout with 24px gutters for balanced alignments across desktop screens.</p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Scaleable Padding</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, margin: 0 }}>Section padding scales dynamically from 5rem on mobile viewport widths up to 8rem on large desktop displays.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 07 — BEFORE / AFTER COMPARISONS */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>07 — Before / After Comparisons</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Where the redesign actually lands.
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 48px",
              maxWidth: 900,
            }}>
              Three section-level comparisons showing how research translated into decisions. The strongest moves were the ones that changed structure, not just style.
            </p>
          </Reveal>

          {/* Comparisons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {[
              {
                num: "Comparison 01",
                label: "Homepage Hero",
                head: "From \"tagline floating on a photo\" to a structured value proposition.",
                desc: "The old hero gave visitors a phrase and two buttons. The redesign establishes context immediately: who KP is, what it does, who it's for, and proof it's real — all visible without scrolling.",
                changes: [
                  "Stat block (10+ / 20K+ / 98%) added above the fold",
                  "Audience cards replace forced binary buttons",
                  "Photography shows real participants, not stock"
                ]
              },
              {
                num: "Comparison 02",
                label: "Services Page",
                head: "Audience toggle, not audience navigation.",
                desc: "Services now live on one page, with a toggle between Individual and Organization views. Same content base, two presentations, no duplicated routes — and Linda and Marcus can both find what they need without backtracking.",
                changes: [
                  "One Services hub instead of two split routes",
                  "Toggle preserves user mental model",
                  "Sub-services nest visibly under each pillar"
                ]
              },
              {
                num: "Comparison 03",
                label: "Contact",
                head: "From buried intake forms to a real contact page.",
                desc: "The old site had no dedicated contact page — just CAPTCHAs and WIOA intake forms exposed as page content. The redesign adds a single, scannable contact page with map, hours, multiple channels, and a properly framed message form.",
                changes: [
                  "Dedicated /contact route created",
                  "Map shows physical location for trust",
                  "Form replaces the raw CAPTCHA gauntlet"
                ]
              }
            ].map((comp, idx) => (
              <Reveal key={comp.num} delay={idx * 0.05}>
                <div style={{
                  padding: isMobile ? 24 : 40,
                  borderRadius: 20,
                  border: `1px solid ${theme.line}`,
                  background: theme.card,
                  display: "grid",
                  gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
                  gap: isMobile ? 24 : 48,
                }}>
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.accent, textTransform: "uppercase", marginBottom: 6 }}>{comp.num} — {comp.label}</div>
                    <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, margin: "0 0 16px", lineHeight: 1.2 }}>{comp.head}</h3>
                    <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>{comp.desc}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase" }}>Key Changes</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {comp.changes.map(ch => (
                        <div key={ch} style={{ display: "flex", alignItems: "start", gap: 10 }}>
                          <div style={{
                            width: 20, height: 20, borderRadius: 999, background: theme.pastel4,
                            color: "#2E7D32", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1
                          }}>
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.ink, lineHeight: 1.4 }}>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — FINAL DESIGNS */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>08 — Final Designs</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Eight pages, one system.
            </h2>
            <p style={{
              fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5,
              lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 40px",
              maxWidth: 900,
            }}>
              The complete redesign spans eight pages — Home, About, Services, three sub-service deep pages (Jobs, S.T.A.R., Social Entrepreneurship), Blog, and Contact — built on a single design system that scales across audience contexts.
            </p>
          </Reveal>

          {/* List of 8 pages */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: 20,
          }}>
            {[
              { num: "01", name: "Home", role: "Landing Grid" },
              { num: "02", name: "About", role: "Vision & Leadership" },
              { num: "03", name: "Services Hub", role: "Audience Toggle + 4 Pillars" },
              { num: "04", name: "Find Jobs", role: "Sub-service (Workforce)" },
              { num: "05", name: "S.T.A.R. Initiative", role: "Advisory & Training" },
              { num: "06", name: "Social Entr.", role: "Community Impact" },
              { num: "07", name: "Blog Hub", role: "Articles & Categories" },
              { num: "08", name: "Contact Page", role: "Closed Loop Routing" }
            ].map((p, i) => (
              <Reveal key={p.num} delay={i * 0.05}>
                <div style={{
                  padding: 20,
                  borderRadius: 16,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}>
                  <div style={{
                    fontFamily: "JetBrains Mono, monospace", fontSize: 13, fontWeight: 600, color: theme.accent,
                    width: 36, height: 36, borderRadius: 8, background: theme.bgAlt,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {p.num}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.ink }}>{p.name}</div>
                    <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute }}>{p.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — REFLECTION */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>09 — Reflection</div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
              margin: "0 0 48px", lineHeight: 1.1,
            }}>
              What worked, and what I'd revisit.
            </h2>
          </Reveal>

          {/* reflection grids */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: 40,
          }}>
            {/* what worked */}
            <Reveal delay={0.05}>
              <div style={{
                padding: isMobile ? 24 : 36,
                borderRadius: 20,
                border: `1px solid ${theme.line}`,
                background: theme.card,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 999, background: "#2E7D32" }} />
                  <h3 style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink, margin: 0 }}>What worked</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Structure First, Surface Second</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      The biggest unlock was treating information architecture as the primary design problem, not the visual layer. The orange palette and Fraunces typography are nice, but they wouldn't have mattered if the four-pillar service model hadn't replaced the audience-split nav.
                    </p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Persona-Sharpened Decisions</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      Persona work — even with two synthesised personas drawn from public-facing material — sharpened every subsequent decision. Each component answered a question like "would Marcus understand this in five seconds?" or "would Linda forward this to her board?"
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* what I'd revisit */}
            <Reveal delay={0.15}>
              <div style={{
                padding: isMobile ? 24 : 36,
                borderRadius: 20,
                border: `1px solid ${theme.line}`,
                background: theme.card,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 999, background: theme.accent }} />
                  <h3 style={{ fontFamily: "Inter", fontSize: 20, fontWeight: 600, color: theme.ink, margin: 0 }}>What I'd revisit</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Tree-Testing IA with Real Users</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      With real client access, I'd run tree-testing on the new IA before committing — the four-pillar model is strong on paper, but real users sometimes route through unexpected categories.
                    </p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Refined Blog & Job Filters</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      I'd rebuild the blog content with KP's actual workforce focus instead of using cybersecurity placeholder articles, and design a proper job-board filtering system rather than the prototype filters in the current state.
                    </p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Contrast & Accessibility</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      The orange-on-paper palette hits AAA contrast in body text but flirts with AA on smaller accent type. A real production pass would tighten that.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <section style={{ padding: isMobile ? "80px 4vw" : "120px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, textAlign: "center" }}>
        <Reveal>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(36px, 6vw, 64px)", color: theme.accent, marginBottom: 12 }}>
            Thanks for reading.
          </div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12.5, color: theme.inkMute, textTransform: "uppercase", letterSpacing: "0.15em" }}>
            KP Connect · UX/UI Case Study · 2024
          </div>
        </Reveal>
      </section>

      {/* NEXT CASE STUDY CTA */}
      <section style={{ padding: isMobile ? "0 4vw 60px" : "0 6vw 100px", background: theme.bgAlt }}>
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
