import { ArrowRight, ExternalLink, Eye, Paintbrush, BookOpen, Search, Lightbulb, Ruler, Type, Palette, Grid3X3, Image, FileText, Layout, Smartphone, AlertTriangle, Users, FlaskConical, MessageSquareQuote, Layers, PenTool } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { Callout } from "../components/CaseStudyBlocks.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";
import herrmannOriginalImg from "../assets/herrmann_original.png?w=1200&format=webp&quality=80";
import herrmannRedesignImg from "../assets/herrmann_redesign.png?w=1200&format=webp&quality=80";
import wireframeHtml from "../../wireframe_squared.html?raw";

/* ─── Shared section-header style ─── */
const SectionLabel = ({ children, theme }) => (
  <div style={{
    fontFamily: "'Caveat', cursive", fontSize: 28, color: theme.accent, marginBottom: 8,
  }}>{children}</div>
);

/* ─── Icon wrapper for consistent sizing ─── */
const IconBadge = ({ icon: Icon, theme, size = 20 }) => (
  <div style={{
    width: 44, height: 44, borderRadius: 12,
    background: `${theme.accent}15`,
    border: `1px solid ${theme.accent}25`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    <Icon size={size} color={theme.accent} strokeWidth={1.6} />
  </div>
);

/* ─── Diagnosis card ─── */
function DiagnosisCard({ num, heading, body, theme, isMobile, icon: Icon }) {
  return (
    <Reveal delay={num * 0.06}>
      <div style={{
        padding: isMobile ? "24px 20px" : "32px 28px",
        borderRadius: 14,
        background: theme.card,
        border: `1px solid ${theme.line}`,
        height: "100%", boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          {Icon && <IconBadge icon={Icon} theme={theme} />}
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent,
            lineHeight: 1,
          }}>{num}</div>
        </div>
        <h3 style={{
          fontFamily: "Inter", fontSize: isMobile ? 17 : 19,
          fontWeight: 600, color: theme.ink, margin: "0 0 12px",
          lineHeight: 1.3, letterSpacing: "-0.015em",
        }}>{heading}</h3>
        <p style={{
          fontFamily: "Inter", fontSize: isMobile ? 15 : 16,
          lineHeight: 1.6, color: theme.inkSoft, margin: 0,
        }}>{body}</p>
      </div>
    </Reveal>
  );
}

/* ─── Brand system item card ─── */
function BrandSystemCard({ num, title, body, theme, isMobile, icon: Icon }) {
  return (
    <Reveal delay={0.05}>
      <div style={{
        padding: isMobile ? "24px 20px" : "28px 24px",
        borderRadius: 14,
        background: theme.card,
        border: `1px solid ${theme.line}`,
        height: "100%", boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          {Icon && <IconBadge icon={Icon} theme={theme} />}
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.accent,
            lineHeight: 1,
          }}>{String(num).padStart(2, "0")}</div>
        </div>
        <h3 style={{
          fontFamily: "Inter", fontSize: isMobile ? 17 : 19,
          fontWeight: 500, color: theme.ink, margin: "0 0 10px",
          lineHeight: 1.2, letterSpacing: "-0.02em",
        }}>{title}</h3>
        <p style={{
          fontFamily: "Inter", fontSize: isMobile ? 14 : 15,
          lineHeight: 1.65, color: theme.inkSoft, margin: 0,
          whiteSpace: "pre-wrap",
        }}>{body}</p>
      </div>
    </Reveal>
  );
}


/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function HerrmannCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const project = projects.find(p => p.id === "herrmann");
  const idx = projects.findIndex(p => p.id === "herrmann");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  const meta = [
    { k: "Role", v: "Brand & Web Designer" },
    { k: "Timeline", v: "1 week" },
    { k: "Tools", v: "Figma, Claude Design" },
    { k: "Year", v: "2026" },
  ];

  const diagnosisItems = [
    { heading: "Placeholder-heavy hero.", body: "Several of the most prominent storytelling slots relied on placeholder imagery, which weakened the first impression for a studio whose work is highly visual.", icon: Image },
    { heading: "Dated visual language.", body: "The overall layout and styling read as late-2010s, which undersold the quality and ambition of the portfolio it was showcasing.", icon: Paintbrush },
    { heading: "Hierarchy and density.", body: "The homepage tried to surface a lot at once. There was an opportunity to guide the eye more deliberately and let the work breathe.", icon: Layers },
    { heading: "Mobile experience.", body: "The responsive behavior felt like an adaptation of the desktop layout rather than a mobile-first consideration.", icon: Smartphone },
    { heading: "No cohesive design system.", body: "The brand expression varied across sections, which made the site feel less unified than the polished client work it presented.", icon: Grid3X3 },
  ];

  const approachItems = [
    { lead: "Respect the equity.", body: "Keep what makes Herrmann recognizable and trustworthy. Modernize the expression, do not erase the identity.", icon: Eye },
    { lead: "Let the work lead.", body: "For a studio, the portfolio is the product. The design should frame the work, not compete with it.", icon: Layout },
    { lead: "Build a system, not just screens.", body: "Every decision should ladder up to a documented set of rules so the result feels intentional and repeatable.", icon: Ruler },
    { lead: "Design mobile-first.", body: "Treat small screens as the primary canvas, then scale up.", icon: Smartphone },
  ];

  const brandSystemItems = [
    { title: "Logo & Wordmark", body: "Usage rules and a compact stamp mark for tight spaces. Clear guidance for safe zones, minimum sizes, and background pairings.", icon: PenTool },
    { title: "Color Palette", body: "Built around a warm, confident vermilion paired with a deep ink and a soft paper neutral, with supporting clay and stone tones.", icon: Palette },
    { title: "Typography", body: "An expressive serif for display moments with a clean, highly legible sans for interface and body text, plus a monospace accent for labels and metadata.", icon: Type },
    { title: "Spacing & Grid", body: "Rules to keep layouts consistent across screen sizes. An 8px base unit with documented breakpoints and container widths.", icon: Grid3X3 },
    { title: "Iconography", body: "Guidance for a unified visual vocabulary, stroke weights, corner radii, and optical sizing rules that keep icons feeling part of the family.", icon: FileText },
    { title: "Applied Materials", body: "Business card, letterhead, and a presentation template to show the system working beyond the screen.", icon: BookOpen },
  ];

  const reflectionItems = [
    { lead: "No stakeholder input.", body: "A real engagement would start with conversations with the Herrmann team about their goals, their clients, and their internal constraints. My diagnosis is an outsider's read, and some of it might be wrong in ways only the team would know.", icon: Users },
    { lead: "No user research.", body: "I would want to validate the navigation and content priorities with people who actually use the site, rather than relying on my own assumptions.", icon: FlaskConical },
    { lead: "No real data or testimonials.", body: "Any copy and content in this concept is illustrative. I did not invent metrics, quotes, or results and present them as real.", icon: AlertTriangle },
  ];

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 40px" : "0 6vw 60px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>

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

          {/* Tags */}
          <Reveal delay={0.05}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
              {["Brand System", "Web Redesign", "2026"].map((tag, i) => (
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

          {/* Title */}
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1 }}>
              Herrmann Advertising <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Redesign</span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.15}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 12px", maxWidth: "none" }}>
              A self-initiated brand system and homepage redesign concept for a full-service creative studio with over 40 years of craft.
            </p>
          </Reveal>

        </div>
      </section>


      {/* ── INTRODUCTION / THE HOOK ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 48,
            }}>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  The Hook
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  While visiting Annapolis, Maryland, I walked past a studio on West Street and noticed the sign for Herrmann Advertising | Branding | Technology. I was curious, so I looked them up: a full-service agency that has been building brands for clients around the world for over 40 years.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  Their work spans law firms, healthcare, government agencies, and cultural institutions like Visit Annapolis, National Geographic, and the UNHCR.
                </p>
              </div>
              <div>
                <Callout theme={theme} isMobile={isMobile}>
                  A studio with that much craft and history caught my attention, and it made me wonder how their digital presence could be brought to the same standard as the work they produce for clients.
                </Callout>
              </div>
            </div>
          </Reveal>

          {/* Links with images */}
          <Reveal delay={0.15}>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: isMobile ? 20 : 24 }}>
              {[
                { label: "Before Redesign", href: "https://www.herrmann.com/", img: herrmannOriginalImg, alt: "Original Herrmann homepage" },
                { label: "After Redesign", href: "/herrmann_homepage.html", img: herrmannRedesignImg, alt: "Herrmann homepage redesign" },
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
                    <img src={l.img} alt={l.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
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

      {/* ── WHY HERRMANN ── */}
      <section style={{
        padding: isMobile ? "60px 4vw" : "100px 6vw",
        borderTop: `1px solid ${theme.line}`,
        background: "transparent",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Subtle decorative background gradient */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "0%",
          width: "60%",
          height: "100%",
          background: `radial-gradient(circle at top left, ${theme.accent}05, transparent 70%)`,
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: isMobile ? 24 : 32 }}>
            <Reveal>
              <div style={{ display: "inline-block", marginBottom: 0 }}>
                <SectionLabel theme={theme}>Why Herrmann</SectionLabel>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 style={{
                fontFamily: "Inter",
                fontSize: isMobile ? "clamp(28px, 4.5vw, 36px)" : "48px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: theme.ink,
                lineHeight: 1.15,
                margin: 0,
                maxWidth: 700
              }}>
                Rethinking a <span style={{ color: theme.accent }}>brand</span>.
              </h2>
            </Reveal>
          </div>

          {/* Simple text layout side-by-side on desktop */}
          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 64 }}>

            {/* The challenge of quality */}
            <Reveal delay={0.15}>
              <div style={{ paddingRight: isMobileOrTablet ? 0 : 32 }}>
                <div style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: theme.inkMute,
                  marginBottom: 16
                }}>
                  The Core Challenge
                </div>

                <p style={{
                  fontFamily: "Inter",
                  fontSize: isMobile ? 16 : 18.5,
                  lineHeight: 1.6,
                  color: theme.inkSoft,
                  margin: 0
                }}>
                  Choosing a real, respected studio raised the bar for me. <strong style={{ color: theme.ink, fontWeight: 600 }}>It is easy to redesign a bad website.</strong> It is harder, and more useful, to modernize the digital presence of a place that already does great work and has real brand equity worth protecting.
                </p>
              </div>
            </Reveal>

            {/* The design question */}
            <Reveal delay={0.2}>
              <div>
                <div style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: theme.inkMute,
                  marginBottom: 16
                }}>
                  The Objective
                </div>

                <p style={{
                  fontFamily: "Inter",
                  fontSize: isMobile ? 16 : 18.5,
                  lineHeight: 1.6,
                  color: theme.inkSoft,
                  margin: 0
                }}>
                  The goal was never to suggest the existing brand was wrong. It was to ask a narrower question: <strong style={{ color: theme.ink, fontWeight: 600 }}>if Herrmann were rethinking its own website and brand expression today, what could that look like?</strong>
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── THE DIAGNOSIS ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The Diagnosis</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ maxWidth: "100%" }}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 32px" }}>
                Before designing, I reviewed the current site to identify areas for improvement. These are objective observations, not criticisms.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
            {diagnosisItems.map((item, i) => (
              <DiagnosisCard
                key={i}
                num={i + 1}
                heading={item.heading}
                body={item.body}
                theme={theme}
                isMobile={isMobile}
                icon={item.icon}
              />
            ))}
          </div>

          <Reveal delay={0.15}>
            <div style={{
              marginTop: isMobile ? 32 : 48,
              padding: isMobile ? "24px 20px" : "32px 28px",
              borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`,
              display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "auto 1fr",
              gap: isMobile ? 16 : 24, alignItems: "start",
            }}>
              <IconBadge icon={Lightbulb} theme={theme} />
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 12 }}>
                  What This Became
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
                  These observations became the brief I set for myself. Every design decision in the brand system and the homepage redesign traces back to one of these five findings.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MY APPROACH ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>My Approach</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 32px", maxWidth: "100%" }}>
              I set a few self-imposed constraints to keep the project honest and focused:
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20 }}>
            {approachItems.map((a, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <div style={{
                  padding: isMobile ? "24px 20px" : "32px 28px",
                  borderRadius: 14,
                  background: theme.bgAlt,
                  border: `1px solid ${theme.line}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <IconBadge icon={a.icon} theme={theme} />
                    <div style={{
                      fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent,
                      lineHeight: 1,
                    }}>{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <p style={{
                    fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5,
                    lineHeight: 1.6, color: theme.inkSoft, margin: 0,
                  }}>
                    <strong style={{ color: theme.ink, fontWeight: 600 }}>{a.lead} </strong>{a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIREFRAME ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Wireframe & High Fidelity</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 32px", maxWidth: "100%" }}>
              Before high-fidelity design, I created a wireframe to define the layout, hierarchy, and content flow. Here is a side-by-side look at the structural wireframe alongside the final design.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 32 }}>
              {/* Wireframe Side */}
              <div>
                <div style={{ maxWidth: "100%", margin: "0 auto 12px", textAlign: "center" }}>
                  <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, fontStyle: "italic", letterSpacing: "0.01em" }}>
                    Scroll to view full wireframe
                  </span>
                </div>
                <div className="wireframe-box"
                  style={{
                    borderRadius: 14, overflow: "hidden",
                    background: theme.card, border: `1px solid ${theme.line}`,
                    boxShadow: "0 8px 30px -6px rgba(0,0,0,0.06)",
                    maxWidth: "100%", margin: "0 auto",
                    position: "relative",
                    height: isMobile ? 400 : 500,
                    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
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
                  <iframe
                    srcDoc={wireframeHtml}
                    title="Herrmann Wireframe"
                    style={{
                      width: isMobile ? "250%" : "200%",
                      height: isMobile ? "250%" : "200%",
                      transform: isMobile ? "scale(0.4)" : "scale(0.5)",
                      transformOrigin: "top left",
                      border: "none",
                      display: "block"
                    }}
                  />
                </div>
              </div>

              {/* High Fidelity Side */}
              <div>
                <div style={{ maxWidth: "100%", margin: "0 auto 12px", textAlign: "center" }}>
                  <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, fontStyle: "italic", letterSpacing: "0.01em" }}>
                    Scroll to view high fidelity
                  </span>
                </div>
                <div className="hifi-box"
                  style={{
                    borderRadius: 14, overflow: "hidden",
                    background: theme.card, border: `1px solid ${theme.line}`,
                    boxShadow: "0 8px 30px -6px rgba(0,0,0,0.06)",
                    maxWidth: "100%", margin: "0 auto",
                    position: "relative",
                    height: isMobile ? 400 : 500,
                    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
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
                  <iframe
                    src="/herrmann_homepage.html"
                    title="Herrmann High Fidelity"
                    loading="lazy"
                    style={{
                      width: isMobile ? "250%" : "200%",
                      height: isMobile ? "250%" : "200%",
                      transform: isMobile ? "scale(0.4)" : "scale(0.5)",
                      transformOrigin: "top left",
                      border: "none",
                      display: "block"
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE BRAND SYSTEM ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The Brand System</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ maxWidth: "100%" }}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                Rather than redesign a single page in isolation, I built a small brand book first so the homepage would sit on a coherent foundation. <strong style={{ color: theme.ink }}>This is the part of the project I am most proud of</strong>, because it forced me to make and defend a complete set of decisions.
              </p>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 32px" }}>
                Documenting these decisions kept the homepage design disciplined. Whenever I was unsure about a choice on the page, the brand book gave me an answer.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
            {brandSystemItems.map((item, i) => (
              <BrandSystemCard
                key={i}
                num={i + 1}
                title={item.title}
                body={item.body}
                theme={theme}
                isMobile={isMobile}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Brand Book iframe */}
          <Reveal delay={0.2}>
            <div style={{ maxWidth: "100%", margin: "48px auto 12px", textAlign: "center" }}>
              <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, fontStyle: "italic", letterSpacing: "0.01em" }}>
                Scroll to view full brand book
              </span>
            </div>
            <div className="brandbook-box"
              style={{
                borderRadius: 14, overflow: "hidden",
                background: theme.card, border: `1px solid ${theme.line}`,
                boxShadow: "0 8px 30px -6px rgba(0,0,0,0.06)",
                maxWidth: "100%", margin: "0 auto",
                position: "relative",
                height: isMobile ? 400 : 700,
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
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
              <iframe
                src="/herrmann_brand_book.html"
                title="Herrmann Brand Book"
                loading="lazy"
                style={{
                  width: isMobile ? "250%" : "100%",
                  height: isMobile ? "250%" : "100%",
                  transform: isMobile ? "scale(0.4)" : "none",
                  transformOrigin: "top left",
                  border: "none",
                  display: "block"
                }}
              />
            </div>
          </Reveal>
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
                  This is a self-initiated concept project, so it lives or dies on its reasoning. I’d love to hear where this approach succeeds and where it falls short. If anyone at Herrmann Advertising finds these ideas useful, feel free to run with them.
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

      {/* ── NEXT CASE ── */}
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
          data-cursor="view" data-cursor-label="Next"
          style={{
            maxWidth: 1400, margin: "0 auto",
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
