import { ArrowRight, Check, AlertCircle, ExternalLink, Layers, ShieldCheck, MessageSquareQuote, Palette } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";
import kpConnectImg from "../assets/kp_connect_design.png";

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
        return { background: mode === "dark" ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.1)", color: mode === "dark" ? "#fca5a5" : "#b91c1c", border: "none" };
      case "medium":
        return { background: mode === "dark" ? "rgba(245, 158, 11, 0.15)" : "rgba(245, 158, 11, 0.1)", color: mode === "dark" ? "#fcd34d" : "#b45309", border: "none" };
      case "low":
      default:
        return { background: mode === "dark" ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.1)", color: mode === "dark" ? "#6ee7b7" : "#047857", border: "none" };
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

          {/* Text zone */}
          <div style={{ marginTop: 10, marginBottom: 40 }}>
            <Reveal delay={0.05}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
                {["Workforce Development", "UI/UX Case Study", "2024"].map((tag, i) => (
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
                Kinetic Potential Website <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Redesign</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0", maxWidth: "none" }}>
                Same Mission, New Look: Redesigning the Kinetic Potential website to make it easier for both of its audiences to understand and use.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Two-column: text left, key shifts right */}
          <Reveal delay={0.05}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 48,
            }}>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  Introduction
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  KP Connect (Kinetic Potential) is a U.S. talent-development agency that helps at-risk and underserved communities access training, jobs, and entrepreneurship. Their website hadn't seen a meaningful update in over a decade, and it showed: outdated content, inconsistent visuals, and a navigation structure that worked against the two audiences it was built to serve. This project is a full UX-led redesign, eight pages rebuilt from a structural audit up.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  Key Shifts in the Redesign
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: Layers, text: "Replaced audience-split navigation with a service-first structure built on four clear pillars." },
                    { icon: ShieldCheck, text: "Reworked a floating tagline into a credible first impression with trust signals up front." },
                    { icon: MessageSquareQuote, text: "Translated policy jargon into plain language anyone can understand." },
                    { icon: Palette, text: "Unified inconsistent, dated pages into one cohesive, forward-looking design system." },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <item.icon size={16} color={theme.accent} strokeWidth={1.8} style={{ flexShrink: 0, marginTop: 3 }} />
                      <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.55, color: theme.inkSoft, margin: 0 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Links with images */}
          <Reveal delay={0.15}>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: isMobile ? 20 : 24 }}>
              {[
                { label: "Before Redesign", href: "https://www.kpconnect.com/", img: "/Kinetic_Before.png", alt: "Original Kinetic Potential homepage" },
                { label: "After Redesign", href: "https://www.figma.com/proto/9T1FeFHEfZLsbXZPwNcHZp/KP-Connect?node-id=1-2513&p=f&t=DTb9disoclGKMFPX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", img: "/Kinetic_After_v2.png", alt: "Kinetic Potential homepage redesign" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", flexDirection: "column", gap: 0,
                  borderRadius: 14, overflow: "hidden",
                  background: theme.card, border: mode === "dark" ? `1px solid ${theme.line}` : "1px solid rgba(0,0,0,0.15)",
                  textDecoration: "none",
                  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                  cursor: "pointer",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = theme.accent;
                    e.currentTarget.style.boxShadow = mode === "dark" ? "0 12px 32px rgba(0,0,0,0.25)" : "0 12px 32px rgba(0,0,0,0.06)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    const text = e.currentTarget.querySelector('.hover-text');
                    if (text) { text.style.color = theme.accent; text.style.opacity = "1"; }
                    const icon = e.currentTarget.querySelector('.hover-icon');
                    if (icon) icon.style.color = theme.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = mode === "dark" ? theme.line : "rgba(0,0,0,0.15)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    const text = e.currentTarget.querySelector('.hover-text');
                    if (text) { text.style.color = theme.inkMute; text.style.opacity = "0.7"; }
                    const icon = e.currentTarget.querySelector('.hover-icon');
                    if (icon) icon.style.color = theme.inkMute;
                  }}
                >
                  <div style={{
                    height: 350, overflow: "hidden",
                    background: theme.bgAlt, borderBottom: mode === "dark" ? `1px solid ${theme.line}` : "1px solid rgba(0,0,0,0.15)",
                  }}>
                    <img src={l.img} alt={l.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} onError={(e) => { e.target.src = "https://placehold.co/800x450/e2e8f0/64748b?text=" + l.label.replace(" ", "+") }} />
                  </div>
                  <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink }}>{l.label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span className="hover-text" style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: theme.inkMute, opacity: 0.7, transition: "color 0.2s, opacity 0.2s" }}>View Site</span>
                      <ExternalLink className="hover-icon" size={14} color={theme.inkMute} style={{ transition: "color 0.2s" }} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Metadata strip */}
          <Reveal delay={0.2}>
            <div style={{
              marginTop: 48, paddingTop: 32, borderTop: `1px solid ${theme.line}`,
              display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 24 : 32,
            }}>
              {[
                { k: "Role", v: "Solo UI/UX Designer" },
                { k: "Timeline", v: "8 weeks" },
                { k: "Tools", v: "Figma, Jira, ChatGPT, Otter.ai, Builder.io" },
                { k: "Year", v: "2024" },
              ].map((m, i) => (
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

      {/* SECTION 01 - THE PROBLEM */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>The Problem</div>
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

      {/* SECTION 02 - HEURISTIC EVALUATION */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>Heuristic Evaluation</div>
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
              maxWidth: "100%",
            }}>
              A heuristic evaluation revealed severe gaps in <strong>match with the real world</strong>, <strong>consistency</strong>, and <strong>aesthetic & minimalist design</strong>.
            </p>
          </Reveal>

          {/* Heuristic Table */}
          <Reveal delay={0.1}>
            <div style={{ overflowX: "auto", border: "none", boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.3)" : "0 12px 40px rgba(0,0,0,0.06)", borderRadius: 16, background: theme.card }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600, textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${theme.line}` }}>
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
                    { num: "06", name: "Recognition over recall", sev: "Medium", desc: "Service categories require users to remember which audience-bucket holds what: Individual or Organization." },
                    { num: "07", name: "Flexibility & efficiency", sev: "Low", desc: "Search exists but doesn't index service pages well. No advanced filters for the job board." },
                    { num: "08", name: "Aesthetic & minimalist design", sev: "High", desc: "Pages stack everything visible at once. No hierarchy, no breathing room, no editorial restraint." },
                    { num: "09", name: "Recovery from errors", sev: "Low", desc: "Standard 404s. Form errors shown after submission rather than inline." },
                    { num: "10", name: "Help & documentation", sev: "Medium", desc: "No FAQ. No \"Getting Started.\" Help is buried in form-intake flows rather than self-serve content." }
                  ].map((row, idx) => {
                    const sevStyle = getSeverityStyle(row.sev);
                    return (
                      <tr
                        key={row.num}
                        style={{ borderBottom: idx === 9 ? "none" : `1px solid ${theme.line}` }}
                      >
                        <td style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 14.5, color: theme.inkMute }}>{row.num}</td>
                        <td style={{ padding: "16px 24px", fontFamily: "Inter", fontSize: 14.5, fontWeight: 600, color: theme.ink }}>{row.name}</td>
                        <td style={{ padding: "16px 24px" }}>
                          <span style={{
                            padding: "6px 12px",
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

      {/* SECTION 03 - USER RESEARCH / PERSONAS */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>User Research</div>
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
              maxWidth: "100%",
            }}>
              I synthesized two primary personas from the existing site. Both seek a clear path forward, but arrive with vastly different vocabularies and expectations.
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

      {/* SECTION 04 - INFORMATION ARCHITECTURE AUDIT */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>Information Architecture</div>
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
              maxWidth: "100%",
            }}>
              The biggest redesign was structural: surfacing the four core service pillars directly and using a simple toggle to split audiences.
            </p>
          </Reveal>

          {/* Before/After tree visual */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: 32,
            marginBottom: 0,
            alignItems: "start",
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
                  <h4 style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: theme.inkSoft, margin: 0 }}>BEFORE - sprawling, duplicated</h4>
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
                  <h4 style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: theme.accent, margin: 0 }}>AFTER - four pillars, one toggle</h4>
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
Services
 └─ KP Academy 
 └─ KP University 
 └─ KP Care
 └─ Innovative Workforce
 └─ Individual / Organization toggle
Blog
Contact`}
                </pre>
              </div>

            </Reveal>
          </div>
        </div>
      </section>



      {/* SECTION 06 - DESIGN SYSTEM */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>Design System</div>
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
              Not a full design system - a working kit. Enough tokens to keep eight pages consistent without over-engineering a one-person rebuild.
            </p>
          </Reveal>

          {/* Colors */}
          <div style={{ marginBottom: 48 }}>
            <Reveal>
              <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 16 }}>Brand Palette</div>
            </Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isMobileOrTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
              gap: 16,
              marginBottom: 32
            }}>
              {[
                { name: "Orange", hex: "#E17427", bg: "#E17427", text: "white" },
                { name: "Red", hex: "#BF2026", bg: "#BF2026", text: "white" },
                { name: "Warm Surface", hex: "#FCF1E9", bg: "#FCF1E9", text: theme.ink, border: `1px solid ${theme.line}` },
                { name: "Orange 10%", hex: "#E17427 10%", bg: "rgba(225, 116, 39, 0.1)", text: theme.ink, border: `1px solid rgba(225, 116, 39, 0.2)` },
                { name: "Orange 20%", hex: "#E17427 20%", bg: "rgba(225, 116, 39, 0.2)", text: theme.ink, border: `1px solid rgba(225, 116, 39, 0.3)` },
                { name: "Gradient", hex: "linear", bg: "linear-gradient(to right, #E17427, #BF2026)", text: "white" },
              ].map((color, i) => (
                <Reveal key={color.name} delay={i * 0.05}>
                  <div style={{
                    borderRadius: 16,
                    background: theme.card,
                    border: `1px solid ${theme.line}`,
                    padding: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}>
                    <div style={{
                      height: 60,
                      borderRadius: 8,
                      background: color.bg,
                      border: color.border || "none",
                      display: "flex",
                      alignItems: "end",
                      padding: 10,
                    }}>
                      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, fontWeight: 600, color: color.text }}>{color.hex}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink }}>{color.name}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 16 }}>Neutral Palette</div>
            </Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
              gap: 16,
            }}>
              {[
                { name: "Black", hex: "#111111", bg: "#111111", text: "white" },
                { name: "Med Black", hex: "#333333", bg: "#333333", text: "white" },
                { name: "Dark Gray", hex: "#666666", bg: "#666666", text: "white" },
                { name: "Med Gray", hex: "#999999", bg: "#999999", text: "white" },
                { name: "Light Gray", hex: "#E0E0E0", bg: "#E0E0E0", text: theme.ink },
                { name: "White", hex: "#FFFFFF", bg: "#FFFFFF", text: theme.ink, border: `1px solid ${theme.line}` },
              ].map((color, i) => (
                <Reveal key={color.name} delay={i * 0.05}>
                  <div style={{
                    borderRadius: 12,
                    background: theme.card,
                    border: `1px solid ${theme.line}`,
                    padding: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}>
                    <div style={{ height: 40, borderRadius: 6, background: color.bg, border: color.border || "none" }} />
                    <div style={{ padding: "0 4px" }}>
                      <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: theme.ink }}>{color.name}</div>
                      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: theme.inkMute, marginTop: 2 }}>{color.hex}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: 32,
            marginBottom: 0
          }}>
            {/* Typography */}
            <Reveal delay={0.05}>
              <div style={{
                padding: 32,
                borderRadius: 20,
                background: theme.card,
                border: `1px solid ${theme.line}`,
                height: "100%",
              }}>
                <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 24 }}>Typography (Inter)</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Section Heading", font: "42px / Bold", color: "Gradient", style: { background: "linear-gradient(to right, #E17427, #BF2026)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700, fontSize: 24 } },
                    { label: "Subheading", font: "32px / Bold", color: "#333", style: { fontWeight: 700, fontSize: 20, color: theme.ink } },
                    { label: "Card Title", font: "24px / Bold", color: "#333", style: { fontWeight: 700, fontSize: 18, color: theme.ink } },
                    { label: "Body Large", font: "20px / Regular", color: "#333", style: { fontWeight: 400, fontSize: 16, color: theme.ink } },
                    { label: "Nav Link", font: "18px / Medium", color: "#333", style: { fontWeight: 500, fontSize: 15, color: theme.ink } },
                    { label: "Body Default", font: "16px / Regular", color: "#333", style: { fontWeight: 400, fontSize: 14, color: theme.ink } },
                    { label: "Small / Legal", font: "12px / Regular", color: "#999", style: { fontWeight: 400, fontSize: 12, color: theme.inkMute } },
                  ].map((typo, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i === 6 ? "none" : `1px solid ${theme.line}`, paddingBottom: i === 6 ? 0 : 16 }}>
                      <div style={{ fontFamily: "Inter", ...typo.style }}>{typo.label}</div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: theme.inkMute }}>{typo.font}</div>
                        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: theme.inkMute, marginTop: 2 }}>{typo.color}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Spacing, Radius, Shadow */}
            <Reveal delay={0.15}>
              <div style={{ display: "flex", flexDirection: "column", gap: 32, height: "100%" }}>
                <div style={{
                  padding: 32,
                  borderRadius: 20,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 24 }}>Spacing Scale (Base-4)</div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 16 }}>
                    {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map(s => (
                      <div key={s} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ width: s, height: s, background: theme.bgAlt, border: `1px solid ${theme.line}`, borderRadius: 4 }} />
                        <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft }}>
                          {s}px
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: 32,
                  borderRadius: 20,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                }}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 24 }}>Border Radius</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      { r: 4, label: "Tags" },
                      { r: 8, label: "Buttons/Cards" },
                      { r: 10, label: "User Cards" },
                      { r: 12, label: "Icon Boxes" }
                    ].map(b => (
                      <div key={b.r} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 32, height: 32, border: `2px solid #D4C4B7`, borderRadius: b.r }} />
                        <div>
                          <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.ink }}>{b.r}px</div>
                          <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute }}>{b.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </Reveal>
          </div>

        </div>
      </section>



      {/* SECTION 08 - FINAL DESIGNS */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>Final Designs</div>
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
              The complete redesign spans eight pages - Home, About, Services, three sub-service deep pages (Jobs, S.T.A.R., Social Entrepreneurship), Blog, and Contact - built on a single design system that scales across audience contexts.
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
              { num: "03", name: "Services Hub", role: "4 Pillars + Audience Toggle" },
              { num: "04", name: "Find Jobs", role: "Career Page" },
              { num: "05", name: "S.T.A.R. Initiative", role: "Advisory & Training" },
              { num: "06", name: "Social Entrepreneur", role: "Community Impact" },
              { num: "07", name: "Blog Hub", role: "Articles & Categories" },
              { num: "08", name: "Contact Page", role: "Direct Inquiries" }
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

          {/* Connect Homepage Scrollable Image */}
          <Reveal delay={0.2}>
            <div style={{ maxWidth: "100%", margin: "48px auto 12px", textAlign: "center" }}>
              <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, fontStyle: "italic", letterSpacing: "0.01em" }}>
                Click to view full Figma design
              </span>
            </div>
            <a className="homepage-box"
              href="https://www.figma.com/design/9T1FeFHEfZLsbXZPwNcHZp/KP-Connect?node-id=0-1&t=Whhn5IPlRkJEoOhH-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                borderRadius: 14, overflow: "hidden",
                background: theme.card, border: `1px solid ${theme.line}`,
                boxShadow: "0 8px 30px -6px rgba(0,0,0,0.06)",
                maxWidth: "100%", margin: "0 auto",
                position: "relative",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.accent;
                e.currentTarget.style.boxShadow = "0 24px 60px -12px rgba(0,0,0,0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.line;
                e.currentTarget.style.boxShadow = "0 8px 30px -6px rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={kpConnectImg}
                alt="Kinetic Potential Homepage Design"
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%", height: "auto", display: "block"
                }}
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 09 - REFLECTION */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>Reflection</div>
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
                      The biggest unlock was treating information architecture as the primary design problem, not the visual layer. The orange palette and Inter typography are nice, but they wouldn't have mattered if the four-pillar service model hadn't replaced the audience-split nav.
                    </p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Persona-Sharpened Decisions</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      Persona work even with two synthesised personas drawn from public-facing material sharpened every subsequent decision. Each component answered a question like "would Marcus understand this in five seconds?" or "would Linda forward this to her board?"
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
                      With real client access, I'd run tree-testing on the new IA before committing the four-pillar model is strong on paper, but real users sometimes route through unexpected categories.
                    </p>
                  </div>
                  <div style={{ height: 1, background: theme.line }} />
                  <div>
                    <h4 style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink, margin: "0 0 6px" }}>Micro-Interactions & Motion</h4>
                    <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                      While the current state has basic fade-ins, adding deliberate micro-interactions to the cards and buttons would elevate the premium feel and make the interface even more tactile.
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

      {/* ── FINAL THOUGHT ── */}
      <section style={{ padding: isMobile ? "24px 4vw 60px" : "40px 6vw 80px", background: theme.bgAlt, display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 800, width: "100%" }}>
          <Reveal delay={0.1}>
            <div style={{
              position: "relative",
              padding: isMobile ? "32px 24px" : "40px 40px",
              borderRadius: 24,
              background: theme.card,
              border: `1px solid ${theme.line}`,
              boxShadow: mode === "dark" ? "0 20px 40px rgba(0,0,0,0.2)" : "0 20px 40px rgba(0,0,0,0.04)",
              textAlign: "center",
              overflow: "hidden"
            }}>
              {/* Decorative top bar */}
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
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 16px" }}>
                  This is a live client project for Kinetic Potential. As the only designer on a small cross-functional team, I owned the UX research and visual design while aligning each decision with business and development input.
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
