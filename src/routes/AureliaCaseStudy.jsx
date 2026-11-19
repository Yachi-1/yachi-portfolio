import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CaseSummary from "../components/CaseSummary.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import heroImg from "../assets/aurelia/hero.webp";
import houseCardImg from "../assets/aurelia/house-card.webp";
import roomCardImg from "../assets/aurelia/room-card.webp";
import offerCardImg from "../assets/aurelia/offer-card.webp";
import pageHome from "../assets/aurelia/page-home.webp";
import pageDestinations from "../assets/aurelia/page-destinations.webp";
import pageStay from "../assets/aurelia/page-stay.webp";
import pageWellness from "../assets/aurelia/page-wellness.webp";
import pageOffers from "../assets/aurelia/page-offers.webp";

// The project card this page sits behind (Home / Projects / Nav link here).
const PROJECT_ID = "remitflow";

const META = [
  { k: "Role", v: "UX/UI Designer (end to end)" },
  { k: "Scope", v: "5 desktop pages: Home, Destinations, Stay, Wellness, Offers" },
  { k: "Tools", v: "Figma" },
  { k: "Type", v: "Concept project" },
];

const CHALLENGES = [
  { t: "Too many choices", d: "Eight houses in three regions with three house types. Guests can’t pick a place they can’t picture." },
  { t: "Low trust in booking direct", d: "Fear of hidden taxes and rate changes sends people back to booking sites like OTAs." },
  { t: "Hard-to-compare rooms", d: "A 42 sqm room and a 210 sqm private house need the same simple comparison cues." },
];

const PROCESS = [
  { t: "Discover", d: "Competitor review and a plan for interviews with travellers" },
  { t: "Define", d: "Proto-personas, a journey map and problem statements" },
  { t: "Structure", d: "A sitemap with 4 main pages and the key user flows" },
  { t: "Design", d: "Wireframes, then the visual system and 5 pages" },
  { t: "Validate", d: "A usability-test plan and a heuristic review" },
];

const PERSONAS = [
  { name: "Meera", role: "anniversary planner", d: "Wants a calm, special stay for two and a price she can trust." },
  { name: "Daniel", role: "multi-stop traveller", d: "Compares regions first and wants to link two houses in one trip." },
  { name: "Karan", role: "member / corporate", d: "Books often, uses codes and needs clear cancellation terms." },
];

// Each image is shown no wider than its pixel width / 1.5, so it stays sharp on
// high-density (Retina) screens instead of being stretched and blurred.
const maxCss = (w) => Math.round(w / 1.5);

const DECISIONS = [
  {
    solves: "Booking friction",
    title: "Mood and action in one view",
    body: "The booking bar overlaps the hero photo, so the main task is always visible. Guest counts sit in a small popover with steppers and plain rules (“Age 13 and above”, “Maximum 3 per booking”), which prevents errors before they happen.",
    img: heroImg, w: 1200, h: 901, layout: "wide",
    alt: "Aurelia home page hero: a lakeside hotel photo with the headline “Built for the long afternoon”, a booking bar for destination, dates and guests, and an open guest popover with steppers for adults, children and rooms.",
  },
  {
    solves: "Too many choices",
    title: "Place first, then product",
    body: "Every house card leads with where it is (Lake Pichola, Sathorn, Hajar coast). Filters follow the group’s own types: Resorts, City and Retreats. The arch image frame ties eight very different places into one family.",
    img: houseCardImg, w: 405, h: 757, layout: "narrow",
    alt: "House card for Aurelia Udaipur: an arch-shaped photo of a stone hotel above Lake Pichola, the location label, a one-line description and a View house link.",
  },
  {
    solves: "Hard-to-compare rooms",
    title: "One spec row for every room",
    body: "Every room shows size, guests, bed and view in the same order, so guests can compare without opening each room.",
    img: roomCardImg, w: 1200, h: 433, layout: "wide",
    alt: "Room card for the Courtyard Room: a photo of the room opening onto a water garden, a short description, and one spec row reading 42 sqm, 2 guests, King, Courtyard.",
  },
  {
    solves: "Low trust",
    title: "Honest offers, no pressure",
    body: "The Offers page is called “Reasons to book directly”. Each offer states its one condition, and a terms strip answers Rate, Cancellation and Combining in a line each. There are no countdowns or “only 2 left” tactics.",
    img: offerCardImg, w: 628, h: 687, layout: "narrow",
    alt: "Offer card “Third night, on the house”: an arch-shaped photo of a terrace dinner at sunset, an “Until 31 March” tag, the offer text and its single condition, minimum three nights with breakfast included.",
  },
];

const SWATCHES = [
  { name: "Ivory", hex: "#F7F4EF" },
  { name: "Sand", hex: "#EDE6DD" },
  { name: "Charcoal", hex: "#262422" },
  { name: "Bronze", hex: "#9C7B4F" },
];

const SYSTEM = [
  { t: "Type", d: "A light geometric sans (Poppins) for large headlines, with small spaced capitals for labels." },
  { t: "Arch motif", d: "Window-shaped images echo the architecture in the photos." },
  { t: "Soft glass", d: "Translucent nav, booking bar and popovers keep the photography visible." },
];

const PAGES = [
  { name: "Home", src: pageHome, w: 1000, h: 4662 },
  { name: "Destinations", src: pageDestinations, w: 1000, h: 3010 },
  { name: "Stay", src: pageStay, w: 1000, h: 3025 },
  { name: "Wellness", src: pageWellness, w: 1000, h: 2864 },
  { name: "Offers", src: pageOffers, w: 1000, h: 2979 },
];

/* ── Small building blocks ─────────────────────────────── */

function Eyebrow({ children, color }) {
  return (
    <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, intro, theme, isMobile }) {
  return (
    <Reveal>
      <Eyebrow color={theme.inkMute}>{eyebrow}</Eyebrow>
      <h2 style={{ fontFamily: "Inter", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: intro ? "0 0 14px" : 0, lineHeight: 1.2 }}>
        {title}
      </h2>
      {intro && (
        <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18, lineHeight: 1.65, color: theme.inkSoft, margin: 0, maxWidth: 820 }}>{intro}</p>
      )}
    </Reveal>
  );
}

function Card({ children, theme, style }) {
  return (
    <div style={{ padding: "24px 26px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box", ...style }}>
      {children}
    </div>
  );
}

function Note({ children, theme }) {
  return (
    <p style={{ fontFamily: "Inter", fontSize: 14, lineHeight: 1.6, color: theme.inkMute, margin: "16px 0 0", maxWidth: 640 }}>{children}</p>
  );
}

/* ── Page ──────────────────────────────────────────────── */

// Hero content for the case study page.
const SUMMARY = {
  eyebrow: "UX/UI case study · Hospitality website",
  title: "Aurelia: designing the",
  accent: "long afternoon",
  lede: "A direct-booking website for a boutique group of eight hotels across India, Southeast Asia and the Gulf, designed to feel calm and still be easy to book.",
  meta: [
    { k: "Role", v: "UX/UI designer, end to end" },
    { k: "Scope", v: "5 desktop pages" },
    { k: "Tools", v: "Figma" },
    { k: "Type", v: "Concept project" },
  ],
  hero: { src: heroImg, w: 1200, h: 901, alt: "Aurelia home page hero: a lakeside hotel photo with the headline “Built for the long afternoon”, a booking bar for destination, dates and guests, and an open guest popover." },
  problem: {
    title: "Beautiful hotel sites are easy to admire and hard to book",
    text: "Aurelia had to look premium and still answer three practical questions quickly, so guests book direct instead of going back to booking sites.",
    points: [
      ["Too many choices", "Eight houses in three regions and three house types; guests can’t pick a place they can’t picture."],
      ["Low trust in booking direct", "Fear of hidden taxes and rate changes sends people back to booking sites."],
      ["Hard-to-compare rooms", "A 42 sqm room and a 210 sqm private house need the same simple comparison cues."],
    ],
  },
  approach: ["Discover", "Define personas + journey", "Sitemap and flows", "Wireframes → 5 pages", "Test plan + heuristic review"],
  highlights: [
    ["Mood and action in one view", "The booking bar overlaps the hero photo, and the guest popover states its rules up front to prevent errors."],
    ["Place first, then product", "Every house card leads with where it is, and filters follow the group’s own types: Resorts, City, Retreats."],
    ["One spec row for every room", "Size, guests, bed and view in the same order, so rooms compare without opening each one."],
    ["Honest offers, no pressure", "“Reasons to book directly”: each offer states its one condition, with no countdowns or “only 2 left”."],
  ],
  stats: [["8", "hotels"], ["3", "regions"], ["5", "pages designed"]],
  takeaway: "Transparency is both a brand strategy and a UX strategy. A strong visual container, the arch frame, can unify very different places, and contrast over photos has to be tested image by image.",
  project: "Aurelia",
  screensLabel: "All pages",
  screens: PAGES.map((p) => ({ src: p.src, w: p.w, h: p.h, label: p.name })),
  note: "Concept project: personas, research and testing are proposed, and no outcome metrics are claimed.",
};

export default function AureliaCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const idx = projects.findIndex((p) => p.id === PROJECT_ID);
  const next = projects[(idx + 1) % projects.length];
  const isDark = mode === "dark";
  const cols2 = isMobileOrTablet ? "1fr" : "1fr 1fr";
  const cols3 = isMobileOrTablet ? "1fr" : "repeat(3, 1fr)";
  const sectionPad = isMobile ? "56px 4vw" : "96px 6vw";
  const shadow = isDark ? "0 12px 40px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.07)";
  const cardTitle = { fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 8, letterSpacing: "-0.01em" };
  const cardBody = { fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft };

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      <CaseSummary {...SUMMARY} theme={theme} mode={mode} setRoute={setRoute}>
      {/* ── CHALLENGE ── */}
      <section style={{ marginTop: isMobile ? 48 : 72, padding: sectionPad, background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle eyebrow="The challenge" title="Beautiful hotel sites are easy to admire and hard to book" intro="Aurelia had to look premium and still answer three practical questions quickly." theme={theme} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: isMobile ? 28 : 40 }}>
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.t} delay={0.05 * i}>
                <Card theme={theme}>
                  <div aria-hidden="true" style={{ fontFamily: "Inter", fontSize: 40, fontWeight: 300, letterSpacing: "-0.04em", color: theme.accent, lineHeight: 1, marginBottom: 16 }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={cardTitle}>{c.t}</div>
                  <div style={cardBody}>{c.d}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS & PERSONAS ── */}
      <section style={{ padding: sectionPad }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle eyebrow="Process" title="How I approached it" theme={theme} isMobile={isMobile} />
          <Reveal delay={0.05}>
            <ol style={{ listStyle: "none", margin: isMobile ? "28px 0 0" : "40px 0 0", padding: 0, borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card, overflow: "hidden" }}>
              {PROCESS.map((s, i) => (
                <li key={s.t} style={{ display: "flex", gap: isMobile ? 16 : 28, alignItems: "baseline", padding: isMobile ? "18px 20px" : "22px 28px", borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                  <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: theme.accent, fontVariantNumeric: "tabular-nums", minWidth: 22 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 4 : 20, flex: 1 }}>
                    <span style={{ fontFamily: "Inter", fontSize: 17, fontWeight: 600, color: theme.ink, minWidth: 110 }}>{s.t}</span>
                    <span style={{ fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.55, color: theme.inkSoft }}>{s.d}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Note theme={theme}>Research and testing are planned, not yet run. No user data or metrics are claimed.</Note>
          </Reveal>

          <div style={{ marginTop: isMobile ? 48 : 72 }}>
            <Reveal>
              <Eyebrow color={theme.inkMute}>Proto-personas</Eyebrow>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
              {PERSONAS.map((p, i) => (
                <Reveal key={p.name} delay={0.05 * i}>
                  <Card theme={theme}>
                    <div style={cardTitle}>{p.name} <span style={{ fontWeight: 400, color: theme.inkMute }}>· {p.role}</span></div>
                    <div style={cardBody}>{p.d}</div>
                  </Card>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Note theme={theme}>Proto-personas based on what the product offers. They still need to be validated with interviews.</Note>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── KEY DESIGN DECISIONS ── */}
      <section style={{ padding: sectionPad, background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle eyebrow="Key design decisions" title="What I designed, and why" theme={theme} isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 56 : 88, marginTop: isMobile ? 32 : 48 }}>
            {DECISIONS.map((d, i) => {
              const narrow = d.layout === "narrow";
              const image = (
                <div style={{
                  borderRadius: 18, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow, background: theme.card,
                  width: "100%", maxWidth: maxCss(d.w), margin: narrow ? "0 auto" : 0,
                }}>
                  <img src={d.img} width={d.w} height={d.h} alt={d.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              );
              const text = (
                <div>
                  <Eyebrow color={theme.accent}>Solves: {d.solves}</Eyebrow>
                  <h3 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500, letterSpacing: "-0.02em", color: theme.ink, margin: "0 0 14px", lineHeight: 1.25 }}>{d.title}</h3>
                  <p style={{ ...cardBody, fontSize: isMobile ? 16 : 17, lineHeight: 1.7, margin: 0 }}>{d.body}</p>
                </div>
              );
              return (
                <Reveal key={d.title}>
                  {narrow && !isMobileOrTablet ? (
                    // Tall cards sit beside their text, alternating sides.
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                      {i % 4 === 1 ? <>{image}{text}</> : <>{text}{image}</>}
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 24 : 32 }}>
                      {image}
                      <div style={{ maxWidth: 820 }}>{text}</div>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VISUAL SYSTEM ── */}
      <section style={{ padding: sectionPad }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle eyebrow="Visual system" title="Warm, tactile, quiet" theme={theme} isMobile={isMobile} />
          <Reveal delay={0.05}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 16, marginTop: isMobile ? 28 : 40 }}>
              {SWATCHES.map((s) => (
                <div key={s.name} style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${theme.line}`, background: theme.card }}>
                  <div aria-hidden="true" style={{ height: isMobile ? 84 : 120, background: s.hex, borderBottom: `1px solid ${theme.line}` }} />
                  <div style={{ padding: "14px 16px", fontFamily: "Inter", fontSize: 14, color: theme.inkSoft }}>
                    <strong style={{ color: theme.ink, fontWeight: 600 }}>{s.name}</strong> {s.hex}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 16 }}>
            {SYSTEM.map((s, i) => (
              <Reveal key={s.t} delay={0.05 * i}>
                <Card theme={theme}>
                  <div style={cardTitle}>{s.t}</div>
                  <div style={cardBody}>{s.d}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL DESIGN ── */}
      <section style={{ padding: sectionPad, background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle eyebrow="Final design" title="Five pages, one pattern" intro="Each page has a photo hero, filter chips, cards, a newsletter and a footer. Scroll inside each frame to see the full page." theme={theme} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: cols2, gap: isMobile ? 24 : 28, marginTop: isMobile ? 28 : 40 }}>
            {PAGES.map((p, i) => (
              <Reveal key={p.name} delay={0.04 * (i % 2)}>
                <figure style={{ margin: 0, borderRadius: 18, overflow: "hidden", border: `1px solid ${theme.line}`, background: theme.card, boxShadow: shadow }}>
                  {/* Scrollable frame; data-lenis-prevent lets the wheel scroll inside it. */}
                  <div
                    data-lenis-prevent
                    tabIndex={0}
                    role="region"
                    aria-label={`${p.name} page, full design (scrollable)`}
                    style={{ height: isMobile ? 420 : 560, overflowY: "auto", overscrollBehavior: "contain", outlineOffset: -3 }}
                  >
                    <img src={p.src} width={p.w} height={p.h} alt={`Full-length design of the Aurelia ${p.name} page.`} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <figcaption style={{ padding: "14px 18px", borderTop: `1px solid ${theme.line}`, fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.ink }}>
                    {p.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNINGS ── */}
      <section style={{ padding: sectionPad }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle eyebrow="Learnings & next steps" title="What I’d take forward" theme={theme} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: isMobile ? 28 : 40 }}>
            <Reveal>
              <Card theme={theme}>
                <div style={cardTitle}>Learnings</div>
                <div style={cardBody}>Transparency is both a brand strategy and a UX strategy. A strong visual container can unify very different content. Contrast over photos has to be tested image by image.</div>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card theme={theme}>
                <div style={cardTitle}>Next steps</div>
                <ul style={{ ...cardBody, margin: 0, paddingLeft: 18 }}>
                  <li>Run usability tests on the booking flow</li>
                  <li>Design detail pages and mobile layouts</li>
                  <li>Add a wellness enquiry flow</li>
                  <li>Track search-start rate and direct-booking share after launch</li>
                </ul>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <Note theme={theme}>Note: Aurelia is a concept project. Personas, research and testing are proposed, not completed, and no outcome metrics are claimed.</Note>
          </Reveal>
        </div>
      </section>

      </CaseSummary>

      {/* ── NEXT CASE ── */}
      {next && next.id !== PROJECT_ID && (
        <section style={{ padding: isMobile ? "24px 4vw 80px" : "32px 6vw 120px" }}>
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
