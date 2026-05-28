import { ArrowRight, ExternalLink, Eye, EyeOff, Clock, Target, Compass, Lightbulb, Scissors, Search, Users, BarChart3, ShieldCheck, MapPin, Star, Video, MousePointerClick, Layers, Package, ScanEye, CheckCircle2, XCircle, RefreshCw, Smartphone, Palette, FlaskConical, ArrowUpDown, Images, MessageSquareQuote } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";
import nellisOriginalImg from "../assets/Nellis_Original.png";
import nellisRedesignImg from "../assets/Nellis_Redesign.png";
import nellisHeroV1Img from "../assets/nellis_hero_v1.png";
import nellisHeroV2Img from "../assets/nellis_hero_v2.png";
import nellisHeroV3Img from "../assets/nellis_hero_v3.png";

/* ─── Shared section-header style ─── */
const SectionLabel = ({ children, theme }) => (
  <div style={{
    fontFamily: "'Caveat', cursive", fontSize: 28, color: theme.accent, marginBottom: 8,
  }}>{children}</div>
);

/* ─── Blockquote ─── */
const Callout = ({ children, theme, isMobile }) => (
  <div style={{
    borderLeft: `3px solid ${theme.accent}`,
    paddingLeft: isMobile ? 16 : 24,
    margin: isMobile ? "28px 0" : "40px 0",
  }}>
    <p style={{
      fontFamily: "Inter", fontSize: isMobile ? 17 : 20,
      lineHeight: 1.55, color: theme.ink, fontWeight: 500,
      fontStyle: "italic", margin: 0, letterSpacing: "-0.01em",
    }}>{children}</p>
  </div>
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

/* ─── Numbered insight card with icon ─── */
function InsightCard({ num, lead, body, theme, isMobile, icon: Icon }) {
  return (
    <div style={{
      padding: isMobile ? "24px 20px" : "32px 28px",
      borderRadius: 14,
      background: theme.bgAlt,
      border: `1px solid ${theme.line}`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        {Icon && <IconBadge icon={Icon} theme={theme} />}
        <div style={{
          fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent,
          lineHeight: 1,
        }}>{String(num).padStart(2, "0")}</div>
      </div>
      <p style={{
        fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5,
        lineHeight: 1.6, color: theme.inkSoft, margin: 0,
      }}>
        <strong style={{ color: theme.ink, fontWeight: 600 }}>{lead} </strong>{body}
      </p>
    </div>
  );
}

/* ─── Problem card with icon ─── */
function ProblemCard({ num, heading, body, theme, isMobile, icon: Icon }) {
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

/* ─── Design section card (for Final Design) ─── */
function DesignSectionCard({ num, title, body, theme, isMobile, icon: Icon }) {
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
export default function NellisCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const project = projects.find(p => p.id === "nellis");
  const idx = projects.findIndex(p => p.id === "nellis");
  const next = projects[(idx + 1) % projects.length];

  if (!project) return null;

  /* ── data ── */
  const meta = [
    { k: "Role", v: "UI/UX Designer (self-initiated)" },
    { k: "Timeline", v: "2 weeks" },
    { k: "Tools", v: "Figma · Claude Design · Maze" },
    { k: "Year", v: "2025" },
  ];

  const competitors = [
    { name: "eBay", note: "Leads with categories and saved searches; trust is implicit" },
    { name: "StockX", note: 'Leads with the value prop ("Don\'t Pay Retail") and live activity' },
    { name: "Mercari", note: "Feed-first, treats the homepage as a discovery surface" },
  ];

  const designSections = [
    { title: "Hero", icon: MousePointerClick, body: `Headline: "Bid on brand-name items. Pay a fraction." Primary CTA: Start Bidding, It's Free. Right side: a live auction card - item image, current bid, retail price strikethrough, time remaining.` },
    { title: "How it works", icon: Layers, body: `Four numbered steps in a single row. Each step has a red numbered circle, a verb-led title, one sentence of explanation. This is the section I'd defend hardest - it's the part doing the teaching.` },
    { title: "Live auctions near you", icon: Clock, body: `Card grid with filter pills. Each card shows item photo, "LIVE" badge + time remaining, retail price struck through, current bid (bold, large), a green "savings" indicator, and star rating.` },
    { title: "Find exactly what you need", icon: Search, body: `Five category tiles: Electronics, Home & Household, Furniture, Clothing & Shoes, Patio & Garden. Each tile is a clean illustration with a category name and item count.` },
    { title: "Trust strip", icon: ShieldCheck, body: `Four promises with icons:\n• 7-Day Hassle-Free Returns\n• 2-Minute Curbside Pickup\n• Transparent Total Pricing\n• 4 Pickup Locations Across Las Vegas` },
    { title: "Pickup locations", icon: MapPin, body: `"Always stocked, always close." Three photo cards with an interior photo, a location name, and a one-line description. Address is secondary. The redesign treats them as a comfort signal, not the primary entry point.` },
    { title: "Reviews", icon: Star, body: `"Trusted by bidders nationwide." 4.8 ★ on Google. Three review cards with name, location, date, and quote. The aggregate rating sits in the headline so a skimmer gets the signal even if they don't read the quotes.` },
    { title: "Customer stories", icon: Video, body: `"Real savings from real people." One featured video card with a play button. Three smaller thumbnails below. Stronger framing than the current passive heading.` },
    { title: "Final CTA", icon: ArrowRight, body: `A dark card spanning the full width: "Ready to stop paying retail?" with a single "Create Free Account" button. One job, one button, one promise.` },
  ];

  const learned = [
    { lead: 'Defaulting to "show everything" is the enemy of clarity.', body: "The current homepage isn't badly designed in any individual block - every element is reasonable. The problem is additive. Each block makes the next block harder to see. Designing the redesign mostly meant cutting, not adding.", icon: Eye },
    { lead: "Trust is built before the first bid, not after.", body: 'The single biggest change in user testing wasn\'t "the redesign looks nicer" - it was "now I get what this is." A clean layout is just a delivery mechanism for clarity.', icon: ShieldCheck },
    { lead: "Operational details are not user value.", body: "The current homepage is organized around warehouses because the business is organized around warehouses. But users don't think in warehouses. They think in items, prices, and time.", icon: Package },
    { lead: "Heuristic + small-N testing is enough to direct early work.", body: "Five people and a 15-second test surfaced the same gaps as the heuristic walkthrough did. Small-N research is suggestive, not conclusive. But it's enough to make a defensible first-pass redesign.", icon: Users },
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

          {/* Text zone */}
          <div>
            <Reveal delay={0.05}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
                {["E-Commerce", "UX Homepage Redesign", "2025"].map((tag, i) => (
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
                Nellis Auction Website <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "clamp(34px, 5.5vw, 70px)" }}>Redesign</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: theme.inkSoft, margin: "0", maxWidth: "none" }}>
                A homepage redesign of Nellis Auction, turning a wall of warehouse links into a focused, scannable entry point for new bidders.
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
                  Nellis Auction is a returns-liquidation auction site where people bid on brand-name items for a fraction of retail. The current homepage is functional but reads like a warehouse manifest - eight simultaneous auctions, four warehouse addresses, and a wall of red CTAs all competing in the first scroll. I redesigned the homepage around a clearer mental model: <strong style={{ color: theme.ink }}>bid → win → pick up.</strong>
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 16 }}>
                  Key Shifts in the Redesign
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: Target, text: "One clear value proposition above the fold instead of four parallel CTAs" },
                    { icon: Clock, text: "Live auctions surfaced with real-time countdowns and current bids" },
                    { icon: Layers, text: 'A 4-step "How it works" flow to teach the model before asking for a signup' },
                    { icon: MapPin, text: 'Pickup locations reframed from "warehouse addresses" to "places near you"' },
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
                { label: "Before Redesign", href: "https://www.nellisauction.com/", img: nellisOriginalImg, alt: "Original Nellis Auction homepage" },
                { label: "After Redesign", href: "https://redesign-by-yachi.vercel.app/", img: nellisRedesignImg, alt: "Nellis Auction homepage redesign" },
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
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = "scale(1.02)";
                    const text = e.currentTarget.querySelector('.hover-text');
                    if (text) { text.style.color = theme.accent; text.style.opacity = "1"; }
                    const icon = e.currentTarget.querySelector('.hover-icon');
                    if (icon) icon.style.color = theme.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = mode === "dark" ? theme.line : "rgba(0,0,0,0.15)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = "scale(1)";
                    const text = e.currentTarget.querySelector('.hover-text');
                    if (text) { text.style.color = theme.inkMute; text.style.opacity = "0.7"; }
                    const icon = e.currentTarget.querySelector('.hover-icon');
                    if (icon) icon.style.color = theme.inkMute;
                  }}
                >
                  <div style={{
                    overflow: "hidden",
                    background: theme.bgAlt, borderBottom: mode === "dark" ? `1px solid ${theme.line}` : "1px solid rgba(0,0,0,0.15)",
                  }}>
                    <img src={l.img} alt={l.alt} style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }} />
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

      {/* ── THE SETUP ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The Setup</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 24 : 48,
            }}>
              <div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  I came across Nellis Auction while looking for an auction-style site to redesign. It's a real, mid-sized business three Las Vegas area warehouses plus an online operation selling customer returned and overstock inventory from major retailers via 7-day auctions.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  The model is interesting: items start at $1, you bid against other locals, and you pick up in person within seven days. Free returns within seven days if it's broken.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  <strong style={{ color: theme.ink }}>The product is good. The homepage is doing too much.</strong>
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 14.5 : 15.5, lineHeight: 1.6, color: theme.inkMute, margin: 0, fontStyle: "italic", padding: isMobile ? "16px" : "20px", borderRadius: 12, background: theme.bgAlt, border: `1px solid ${theme.line}` }}>
                  I'm not a Nellis employee, I have no access to their analytics, and the metrics I cite are from heuristic evaluation and a small unmoderated test with 5 participants. This is a portfolio exercise, but a serious one grounded in observable problems on the live site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>The Problem</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 24 : 48,
              marginBottom: isMobile ? 28 : 40,
            }}>
              <div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Spend thirty seconds on the current homepage and you'll notice something: <strong style={{ color: theme.ink }}>it doesn't tell you what to do.</strong>
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15.5 : 17, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
                  There are four warehouse cards, eight "Special Events" cards, a generic banner, a "What to Expect" strip with four icons, three testimonials, three benefit icons, a video section, and a footer. The page is built for someone who already knows what Nellis is.
                </p>
              </div>
              <div>
                <Callout theme={theme} isMobile={isMobile}>
                  How might we redesign the homepage so a first-time visitor understands the value, sees something they want, and takes a first action - all within the first scroll?
                </Callout>
              </div>
            </div>
          </Reveal>

          {/* Three problems */}
          <Reveal delay={0.1}>
            <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 20, marginTop: 12 }}>
              Three Problems I Kept Returning To
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
            <ProblemCard
              num={1} theme={theme} isMobile={isMobile} icon={EyeOff}
              heading="The mental model is hidden."
              body={`The page fails to explain how Nellis works. The "Bid, Win, Pick Up" model is buried, while warehouse locations dominate. New visitors can't tell if it's a retail store or a live auction.`}
            />
            <ProblemCard
              num={2} theme={theme} isMobile={isMobile} icon={Package}
              heading="Inventory is presented as paperwork, not as items."
              body={`Auction cards highlight warehouse addresses and pickup times instead of the actual products. The item thumbnails are too small, forcing users to browse by location rather than inventory.`}
            />
            <ProblemCard
              num={3} theme={theme} isMobile={isMobile} icon={Clock}
              heading="There's no urgency, and no current state."
              body={`Auctions thrive on time-sensitivity, but the current site hides this. Without real-time countdowns or live bids, there's no sense of urgency or active competition.`}
            />
          </div>

          {/* What I think is going on */}
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
                  What I Think Is Going On
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5, lineHeight: 1.65, color: theme.inkSoft, margin: "0 0 12px" }}>
                  The homepage looks like it grew rather than was designed. By giving equal weight to every warehouse, event, and internal stakeholder, it forgets the user.
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
                  Businesses with complex logistics often build pages that <em>describe</em> their physical operation, when the user just needs to understand the offer.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Research</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 32px" }}>
              Because I'm not embedded with Nellis, I leaned on three sources I could actually run:
            </p>
          </Reveal>

          {/* Research methods - 3 column cards */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 20 : 24, marginBottom: isMobile ? 40 : 56 }}>
            {/* 1 - Heuristic walkthrough */}
            <Reveal delay={0.08}>
              <div style={{ padding: isMobile ? "24px 20px" : "28px 24px", borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <IconBadge icon={ScanEye} theme={theme} />
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.inkMute }}>01 · Heuristic Walkthrough</div>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 16px" }}>
                  Nielsen's 10 heuristics, focusing on <strong style={{ color: theme.ink }}>match between system and the real world</strong>, <strong style={{ color: theme.ink }}>visibility of system status</strong>, and <strong style={{ color: theme.ink }}>recognition over recall</strong>.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "No visible system status for auctions",
                    "Internal jargon leaks onto the homepage",
                    "The page asks for recall instead of recognition",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: theme.accent, fontSize: 14, flexShrink: 0, lineHeight: 1.5 }}>→</span>
                      <p style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 2 - Competitor scan */}
            <Reveal delay={0.1}>
              <div style={{ padding: isMobile ? "24px 20px" : "28px 24px", borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <IconBadge icon={Compass} theme={theme} />
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.inkMute }}>02 · Competitor Scan</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {competitors.map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, color: theme.ink, flexShrink: 0, minWidth: 50 }}>{c.name}</span>
                      <p style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>{c.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 3 - User test */}
            <Reveal delay={0.12}>
              <div style={{ padding: isMobile ? "24px 20px" : "28px 24px", borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <IconBadge icon={Users} theme={theme} />
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.inkMute }}>03 · User Testing (with 5 users via Maze)</div>
                </div>
                {[
                  { stat: "4/5", desc: "Couldn't articulate the returns-liquidation business model or value proposition upon arrival" },
                  { stat: "3/5", desc: "Expressed intent to search for items, but felt overwhelmed and didn't know where to start" },
                  { stat: "2/5", desc: 'Expressed hesitation about site legitimacy, noting the design felt "spammy" or "outdated"' },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                    <div style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 500, letterSpacing: "-0.04em", color: theme.accent, lineHeight: 1, flexShrink: 0, minWidth: 40 }}>{r.stat}</div>
                    <p style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* What the research crystallized */}
          <Reveal delay={0.15}>
            <div style={{
              padding: isMobile ? "24px 20px" : "32px 28px",
              borderRadius: 14, background: theme.bgAlt, border: `1px solid ${theme.line}`,
              display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "auto 1fr",
              gap: isMobile ? 16 : 24, alignItems: "start",
            }}>
              <IconBadge icon={Target} theme={theme} />
              <div>
                <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 12 }}>
                  What the Research Crystallized
                </div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 12px" }}>
                  The homepage has two jobs it's not doing:
                </p>
                <div style={{ display: "flex", flexDirection: isMobileOrTablet ? "column" : "row", gap: isMobile ? 10 : 32 }}>
                  {[
                    { icon: Lightbulb, text: "Teach the model - what is this, how does it work, why should I care" },
                    { icon: Clock, text: "Surface the urgency - auctions are closing, items are moving, something is happening now" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                      <item.icon size={16} color={theme.accent} strokeWidth={1.8} style={{ flexShrink: 0, marginTop: 3 }} />
                      <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.55, color: theme.ink, margin: 0, fontWeight: 500 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Approach</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18.5, lineHeight: 1.6, color: theme.inkSoft, margin: "0 0 28px" }}>
              I set three principles before opening Figma:
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
            {[
              { lead: "Lead with one promise, not four.", body: "The current page hedges. The redesign should commit to a single, confident value proposition that earns the next scroll.", icon: Target },
              { lead: "Show items, not warehouses.", body: "Warehouses are an operational detail. They matter at checkout, not at first glance. Items, prices, and time remaining are what a bidder wants to see.", icon: Package },
              { lead: "Make the model legible in four steps.", body: '"Bid, Win, Schedule, Pick Up" is the right structure. It just needs visual weight. A real explainer, not an icon strip.', icon: Layers },
            ].map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <InsightCard num={i + 1} lead={p.lead} body={p.body} theme={theme} isMobile={isMobile} icon={p.icon} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{
              marginTop: 32, padding: isMobile ? "20px" : "24px 28px",
              borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`,
              display: "flex", gap: 16, alignItems: "center",
            }}>
              <Palette size={20} color={theme.accent} strokeWidth={1.6} style={{ flexShrink: 0 }} />
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 16, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                One constraint: <strong style={{ color: theme.ink }}>keep the red.</strong> Nellis's red is recognizable and not the problem. Used sparingly, the same red can carry the brand without overwhelming the page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Process</SectionLabel></Reveal>

          {/* Audit map + Priority grid side by side */}
          <Reveal delay={0.05}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 24 : 48,
              marginBottom: isMobile ? 40 : 56,
            }}>
              <div>
                <h2 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, letterSpacing: "-0.025em", color: theme.ink, margin: "0 0 16px", lineHeight: 1.2 }}>
                  Audit Map
                </h2>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15.5 : 17, lineHeight: 1.65, color: theme.inkSoft, margin: "0 0 20px" }}>
                  Before sketching, I screenshotted the current homepage and annotated every block with three labels: <strong style={{ color: theme.ink }}>what it's trying to do</strong>, <strong style={{ color: theme.ink }}>what it actually does</strong>, and <strong style={{ color: theme.ink }}>what a first-time visitor would take from it.</strong>
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15.5 : 17, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
                  The page has at least six "primary" CTAs visible at once. When everything is primary, nothing is.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Must do", items: "Explain what Nellis is, show what's available now, build trust", icon: CheckCircle2 },
                  { label: "Should do", items: "Show pickup locations, browse categories, social proof", icon: Target },
                  { label: "Could do", items: "Video stories, app download, expanded reviews", icon: Lightbulb },
                  { label: "Don't need", items: "Warehouse-level event listings, internal jargon, four parallel CTAs", icon: XCircle },
                ].map((p, i) => (
                  <div key={i} style={{
                    padding: isMobile ? "16px" : "18px",
                    borderRadius: 12, background: theme.card, border: `1px solid ${theme.line}`,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <p.icon size={14} color={i === 3 ? theme.inkMute : theme.accent} strokeWidth={2} />
                      <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: i === 3 ? theme.inkMute : theme.accent }}>{p.label}</div>
                    </div>
                    <p style={{ fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.5, color: theme.inkSoft, margin: 0 }}>{p.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Low-fi sketches + page structure side by side */}
          <Reveal delay={0.08}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 24 : 48,
              marginBottom: isMobile ? 40 : 56,
            }}>
              <div>
                <h2 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, letterSpacing: "-0.025em", color: theme.ink, margin: "0 0 16px", lineHeight: 1.2 }}>
                  Low-fi Sketches
                </h2>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15.5 : 17, lineHeight: 1.65, color: theme.inkSoft, margin: "0 0 20px" }}>
                  I sketched four homepage structures on paper, varying what came first: search-first (like eBay), hero + live auctions (like StockX), category grid first, and story-led (hero + how it works, then auctions).
                </p>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15.5 : 17, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
                  Both testers preferred the story-led option. They wanted to understand what Nellis was before browsing.
                </p>
              </div>
              <div style={{
                padding: isMobile ? "20px 16px" : "28px 24px",
                borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`,
                fontFamily: "'IBM Plex Mono', 'Menlo', monospace",
                fontSize: isMobile ? 12 : 13, lineHeight: 2, color: theme.inkSoft,
              }}>
                <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 12 }}>Final Page Structure</div>
                {[
                  "1. Hero - value prop + primary CTA + live auction",
                  "2. How it works - 4 steps with numbered circles",
                  "3. Live auctions near you - filterable card grid",
                  "4. Browse categories - visual category tiles",
                  "5. Trust strip - returns, pickup, pricing, locations",
                  "6. Pickup locations - photo cards, place-first",
                  "7. Reviews - rating + review count + testimonials",
                  "8. Customer stories - video + thumbnails",
                  '9. Final CTA - "Ready to stop paying retail?"',
                ].map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Key decisions */}
          <Reveal delay={0.12}>
            <h2 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, letterSpacing: "-0.025em", color: theme.ink, margin: "0 0 20px", lineHeight: 1.2 }}>
              Key Decisions, with the Reasoning
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20, marginBottom: isMobile ? 40 : 56 }}>
              {[
                { icon: MousePointerClick, lead: "Hero: pair the headline with a live auction preview.", body: "I replaced a generic stock-photo banner with a real auction card: actual item, current bid, time left. This is happening right now, here's proof." },
                { icon: Layers, lead: "How it works: numbered, horizontal, one line each.", body: "Four steps: Discover → Bid & Win → Schedule Pickup → Love It or Return It. The part of the page doing the heaviest lifting." },
                { icon: BarChart3, lead: "Live auctions: countdowns in red, retail comparison in green.", body: "Retail price struck through next to current bid, plus a 'you save' indicator. Showing retail vs. current bid is the entire pitch." },
                { icon: MapPin, lead: "Pickup locations: photos, not just addresses.", body: "Photo cards - warehouse interior, storefront. The address becomes secondary. This is a real place, not a logistical hurdle." },
              ].map((d, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, alignItems: "start",
                  padding: isMobile ? "20px 16px" : "24px 20px",
                  borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`,
                }}>
                  <IconBadge icon={d.icon} theme={theme} />
                  <p style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                    <strong style={{ color: theme.ink, fontWeight: 600 }}>{d.lead} </strong>{d.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hero versions grouped */}
          <Reveal delay={0.14}>
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, letterSpacing: "-0.025em", color: theme.ink, margin: "0 0 24px", lineHeight: 1.2 }}>
                Hero: Three Versions
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: 24,
              }}>
                {[
                  { ver: "V1", img: nellisHeroV1Img, icon: XCircle, text: "Centered hero with a big headline and a single CTA. Felt static - too much like a marketing page." },
                  { ver: "V2", img: nellisHeroV2Img, icon: RefreshCw, text: "Split 60/40 with auction card preview on the right. Too many elements competed with the headline." },
                  { ver: "V3", img: nellisHeroV3Img, icon: CheckCircle2, text: "Kept the split, simplified the card to image, current bid, time left. Three stat counters add scale without clutter." },
                ].map((v, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{
                      borderRadius: 14, overflow: "hidden", border: `1px solid ${i === 2 ? theme.accent + "40" : theme.line}`,
                      background: theme.card,
                      padding: isMobile ? "24px" : "40px",
                      display: "flex", justifyContent: "center", alignItems: "center"
                    }}>
                      <img src={v.img} alt={`Hero ${v.ver} Wireframe`} style={{ width: "100%", maxWidth: "240px", height: "auto", display: "block" }} />
                    </div>
                    <div style={{
                      display: "flex", gap: 12, alignItems: "flex-start",
                      padding: "16px", borderRadius: 12, flexGrow: 1,
                      background: i === 2 ? `${theme.accent}08` : theme.card,
                      border: `1px solid ${i === 2 ? theme.accent + "30" : theme.line}`,
                    }}>
                      <v.icon size={16} color={i === 2 ? theme.accent : theme.inkMute} strokeWidth={1.8} style={{ flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <span style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, color: i === 2 ? theme.accent : theme.inkMute, letterSpacing: "0.06em" }}>{v.ver}</span>
                        <p style={{ fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.55, color: theme.inkSoft, margin: "4px 0 0" }}>{v.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL DESIGN, SECTION BY SECTION ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>Final Design</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: "Inter", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: "0 0 24px", lineHeight: 1.1 }}>
              Section by Section
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
            {designSections.map((s, i) => (
              <DesignSectionCard
                key={i}
                num={i + 1}
                title={s.title}
                body={s.body}
                theme={theme}
                isMobile={isMobile}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I LEARNED ── */}
      <section style={{ padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal><SectionLabel theme={theme}>What I Learned</SectionLabel></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 20 : 24, marginTop: 16 }}>
            {learned.map((l, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  padding: isMobile ? "24px 20px" : "28px 24px",
                  borderRadius: 14, background: theme.card, border: `1px solid ${theme.line}`,
                  display: "flex", gap: 16, alignItems: "start",
                }}>
                  <IconBadge icon={l.icon} theme={theme} />
                  <div>
                    <strong style={{ color: theme.ink, fontWeight: 600, display: "block", fontSize: isMobile ? 17 : 18, marginBottom: 8, letterSpacing: "-0.01em", fontFamily: "Inter" }}>{l.lead}</strong>
                    <p style={{ fontFamily: "Inter", fontSize: isMobile ? 15 : 16, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>{l.body}</p>
                  </div>
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
                  This is a self-initiated project, so it lives or dies on the reasoning. I'd love feedback on where the case for the redesign is weakest. If you're at Nellis Auction and any of this is useful, please use it.
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
