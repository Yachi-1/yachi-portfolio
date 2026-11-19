import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import sessionMeeting from "../assets/workrooms/session-meeting.webp";
import sessionOutfits from "../assets/workrooms/session-avatar-outfits.webp";
import sessionShared from "../assets/workrooms/session-shared-screen.webp";
import sessionCollections from "../assets/workrooms/session-avatar-collections.webp";
import sessionControllers from "../assets/workrooms/session-controllers.webp";
import sessionSettings from "../assets/workrooms/session-settings.webp";
import questPro from "../assets/workrooms/quest-pro.webp";
import fMeetings from "../assets/workrooms/feature-meetings.webp";
import fScreen from "../assets/workrooms/feature-screen-sharing.webp";
import fAudio from "../assets/workrooms/feature-spatial-audio.webp";
import fAvatars from "../assets/workrooms/feature-avatars.webp";
import fDesktop from "../assets/workrooms/feature-desktop.webp";
import fHands from "../assets/workrooms/feature-hand-tracking.webp";
import fScreens from "../assets/workrooms/feature-virtual-screens.webp";
import fWhiteboard from "../assets/workrooms/feature-whiteboard.webp";

// The project card this page sits behind (Home / Projects / Nav link here).
const PROJECT_ID = "herrmann";

const TEAM = "Yachi Patel, Hemanth Chelluri, Rohith Goud Panjala, Catherin Revu and Harji Harpreet Kaur";

const META = [
  { k: "Type", v: "Moderated usability study" },
  { k: "Product", v: "Meta Horizon Workrooms" },
  { k: "Hardware", v: "Meta Quest Pro" },
  { k: "Team", v: "Group 4 · 5 researchers" },
];

const FEATURES = [
  { t: "Virtual meetings", d: "Users meet in a virtual space, creating a more immersive and engaging experience.", img: fMeetings },
  { t: "Screen sharing", d: "Share presentations, documents and other content in the virtual meeting space.", img: fScreen },
  { t: "Spatial audio", d: "Sound is placed by the speaker’s location in the room, for a more natural conversation flow.", img: fAudio },
  { t: "Avatars", d: "Personalised avatars with custom appearance, clothing, facial expressions and gestures.", img: fAvatars },
  { t: "Desktop support", d: "People without a headset can join on desktop through a 2D interface.", img: fDesktop },
  { t: "Hand tracking", d: "Some hand tracking lets people interact more naturally with virtual objects.", img: fHands },
  { t: "Virtual screens", d: "Mirror your desktop onto virtual screens to show presentations and documents to everyone.", img: fScreens },
  { t: "Whiteboard", d: "A shared whiteboard to write, draw and brainstorm together in real time.", img: fWhiteboard },
];

const QUEST = [
  { t: "High-end headset", d: "A VR/AR headset designed for professional use, with mixed reality, self-tracking controllers, and face and eye tracking." },
  { t: "Enhanced features", d: "Colour passthrough blends the real and virtual worlds, and pancake lenses give more comfort and less fatigue." },
  { t: "Improved performance", d: "The XR2+ chip delivers better sustained performance, for a smoother and more immersive experience." },
];

const LITERATURE = [
  { t: "The Future of Work: Do We Need Interactive Collaborative Offices? The Metaverse Perspective", url: "https://ieeexplore.ieee.org/document/10302963", d: "Explores VR/AR in collaborative offices, focusing on Horizon Workrooms. It highlights benefits and challenges, and argues for simple interfaces, smooth workflows and good task alignment." },
  { t: "Reality Check of Metaverse: A First Look at Commercial Social Virtual Reality Platforms", url: "https://ieeexplore.ieee.org/document/9757549", d: "Analyses the current state of Horizon Workrooms and identifies areas for improvement across user experience, technical performance and scalability." },
  { t: "Teaching & Learning in Virtual Reality: Metaverse Classroom Exploration", url: "https://ieeexplore.ieee.org/document/9796765", d: "Examines Workrooms for classroom teaching, focusing on video conferencing, spatial audio and engagement. It gives design guidelines and encourages simpler onboarding." },
  { t: "Meta-Governance: Blockchain Driven Platform for Mitigating Misbehavior Using Smart Contract and AI", url: "https://ieeexplore.ieee.org/document/10571927", d: "Proposes a blockchain and AI platform to detect and mitigate misbehaviour, offering a governance framework for VR platforms like Workrooms." },
];

const OBJECTIVES = [
  { t: "User experience", d: "Understand how people feel using Horizon Workrooms." },
  { t: "Usability", d: "Assess how easy it is to use features like screen sharing and whiteboards." },
  { t: "Practical challenges", d: "Identify barriers that might make VR collaboration difficult." },
];

const STEPS = [
  { t: "Tech setup", d: "Clean the equipment, set up Wi-Fi and device mirroring." },
  { t: "Participant orientation", d: "Greet the participant, explain the study and obtain consent." },
  { t: "VR tutorial", d: "Guide them through headset adjustment and basic tool use." },
  { t: "Task execution", d: "The participant completes the tasks and gives feedback." },
];

const SETUP = [
  ["Location", "User study room"],
  ["Headset connection", "Meta Quest Pro connected to Wi-Fi"],
  ["App installation", "Horizon Workrooms downloaded"],
  ["Casting", "Headset and tablet on the same Wi-Fi network to enable mirroring"],
];

const QUESTIONNAIRES = [
  { t: "Pre-session", d: "VR experience and physical considerations" },
  { t: "Post-session", d: "Usability, interaction and physical comfort" },
  { t: "Interview", d: "Detailed feedback on the experience and suggestions" },
];

const TASKS = ["Join the meeting through Horizon Workrooms", "Avatar interaction and customisation", "Shared screen collaboration"];

const DEMOGRAPHICS = [
  { n: "5", t: "Total participants", d: "3 men and 2 women took part." },
  { n: "1", t: "VR experienced", d: "Only one participant had used VR before." },
  { n: "0", t: "Motion sickness", d: "No participant reported motion sickness." },
];

const CONSENT = [
  ["Voluntary participation", "Participants could take breaks or stop at any time."],
  ["Data usage", "Recordings and notes were used for internal product improvement."],
  ["Confidentiality", "Personal information was treated confidentially; responses may be anonymised."],
];

const PERFORMANCE = [
  { n: "3 min", t: "Joining the meeting", s: "91.11% success" },
  { n: "3.5 min", t: "Avatar customisation", s: "100% success" },
  { n: "1 min", t: "Screen sharing", s: "100% success" },
];

const WORKED = [
  ["Easy meeting setup", "Joining virtual meetings was intuitive and seamless for all participants."],
  ["Interface usability", "Buttons followed Norman’s usability principles, which helped the experience."],
  ["Clear communication", "Audio between participants was clear and effective."],
  ["Cross-platform support", "Joining from both VR and a laptop gave people flexibility."],
];

const CHALLENGES = [
  ["Screen sharing limitations", "Text on shared screens was small, with no zoom option in VR."],
  ["Avatar interaction", "Participants found communicating through avatars slightly unusual."],
  ["Hidden hand movements", "Hand movements weren’t visible in VR without controllers."],
  ["Delayed feedback", "There were notable delays during screen sharing."],
];

const PROBLEMS = [
  ["Avatar customisation", "Users enjoyed avatars but wanted more realism and expressiveness."],
  ["Screen sharing", "Poor text legibility during screen sharing caused frustration."],
  ["Initial setup", "Joining meetings was easy, but the initial setup was time-consuming."],
  ["Interaction", "Head and hand tracking felt intuitive, but limited space hindered collaboration."],
];

const QUOTES = [
  "It felt futuristic to collaborate in a virtual space, but the screen-sharing text was too small to read clearly. I wish I could zoom in or move closer.",
  "Joining the meeting was surprisingly easy, but setting up the headset and creating the profile initially took more time than I expected.",
  "The avatar interactions were fun but felt a bit weird. It would be great if the avatars looked more realistic to make communication feel natural.",
  "I loved the head and hand tracking — it felt intuitive. However, the limited space and delays in screen sharing made it hard to fully collaborate.",
  "The ability to interact as avatars was engaging, but communicating with avatars instead of real faces felt a bit awkward. More expressive avatars would help.",
];

// Post-session ratings, average out of 5, in questionnaire order.
const RATINGS = [
  ["Ease of setup", 4.7],
  ["Navigation intuitiveness", 4.5],
  ["Interaction comfort", 4.2],
  ["Avatar customisation ease", 4.4],
  ["Immersion level", 3.9],
  ["Collaboration", 4.3],
  ["Communication ease", 4.6],
  ["Overall satisfaction", 4.5],
];

const RECOMMENDATIONS = [
  ["Adaptive room layouts", "AI-powered layouts that optimise the virtual space for collaboration."],
  ["Accessibility features", "Support for users with disabilities through inclusive design."],
  ["Real-time translation", "Seamless language translation for global collaboration."],
  ["Focus mode", "Minimises distractions to help people concentrate."],
];

const REFLECTION = [
  ["Comprehensive evaluation", "The study gives a comprehensive evaluation of the platform’s usability, user experience and practical challenges."],
  ["Strengths highlighted", "It highlights strengths such as intuitive meeting setup, clear communication and a flexible interface."],
  ["Areas for improvement", "Areas to improve include screen sharing limitations, avatar interaction and technical delays."],
  ["User satisfaction", "An overall satisfaction rating of 4.5/5 shows the platform works, but also leaves room to improve immersion and performance."],
  ["Future of VR collaboration", "The research offers insights into the future of VR-based collaboration, balancing technical innovation with user-centred recommendations."],
];

const GALLERY = [
  { img: sessionMeeting, w: 1600, h: 899, cap: "Two avatars meeting at the virtual desk, with a desktop participant joining on video", alt: "Inside Horizon Workrooms: two avatars sit at an L-shaped virtual desk in a lakeside room, one labelled Yachi, while a teammate joins by video in the top-left corner. The other participant’s name tag is blurred." },
  { img: sessionOutfits, w: 1600, h: 1037, cap: "Avatar customisation: choosing an outfit", alt: "The Workrooms avatar editor floating in the virtual room, showing a Style menu, a grid of top outfits and a full-length preview of the avatar." },
  { img: sessionCollections, w: 1600, h: 1171, cap: "Avatar customisation: browsing collections", alt: "The avatar editor’s Collections view with themed outfit cards next to a full-length avatar preview." },
  { img: sessionShared, w: 1600, h: 994, cap: "Shared screen collaboration: a laptop mirrored into the room", alt: "A participant’s laptop screen mirrored onto a large virtual display in the Workrooms environment, showing a document and a chat window." },
  { img: sessionControllers, w: 1600, h: 1123, cap: "A participant’s avatar using the Quest controllers", alt: "A participant’s avatar in a cap and sunglasses holding Quest controllers in front of a virtual bookshelf. Their name tag is blurred." },
  { img: sessionSettings, w: 1600, h: 905, cap: "Meeting settings, with a desktop participant on video", alt: "The Workrooms meeting settings panel and control bar, with a teammate joining on video in a floating window." },
];

const BAR_LIGHT = "#9C5B33";
const BAR_DARK = "#C98250";

/* ═══════════════════════ Building blocks ═══════════════════════ */

function Eyebrow({ children, color }) {
  return <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 12 }}>{children}</div>;
}

function Card({ children, theme, style }) {
  return <div style={{ padding: "24px 26px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box", ...style }}>{children}</div>;
}

function Section({ id, n, eyebrow, title, intro, children, alt, theme, isMobile }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={{ padding: isMobile ? "56px 4vw" : "96px 6vw", background: alt ? theme.bgAlt : "transparent", borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow color={theme.inkMute}>{String(n).padStart(2, "0")} · {eyebrow}</Eyebrow>
          <h2 id={`${id}-title`} style={{ fontFamily: "Inter", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: intro ? "0 0 14px" : 0, lineHeight: 1.2 }}>{title}</h2>
          {intro && <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18, lineHeight: 1.65, color: theme.inkSoft, margin: 0, maxWidth: 820 }}>{intro}</p>}
        </Reveal>
        <div style={{ marginTop: isMobile ? 28 : 40 }}>{children}</div>
      </div>
    </section>
  );
}

function SubHead({ children, theme }) {
  return <h3 style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: theme.ink, margin: "0 0 16px" }}>{children}</h3>;
}

/* ── Ratings chart: one series, one colour, hover/focus tooltip, table view ── */

function RatingsChart({ theme, isDark, isMobile }) {
  const [active, setActive] = useState(null);
  const [asTable, setAsTable] = useState(false);
  const bar = isDark ? BAR_DARK : BAR_LIGHT;
  const max = 5;
  const values = RATINGS.map((r) => r[1]);
  const hi = Math.max(...values), lo = Math.min(...values);
  const labelW = isMobile ? 132 : 210;

  const toggle = (
    <div role="group" aria-label="Chart view" style={{ display: "inline-flex", padding: 3, borderRadius: 999, border: `1px solid ${theme.line}`, background: theme.bgAlt }}>
      {[["Chart", false], ["Table", true]].map(([l, v]) => (
        <button key={l} type="button" aria-pressed={asTable === v} onClick={() => setAsTable(v)} data-cursor="hover"
          style={{ padding: "6px 14px", borderRadius: 999, border: "none", cursor: "pointer", fontFamily: "Inter", fontSize: 13, fontWeight: 600, background: asTable === v ? theme.card : "transparent", color: asTable === v ? theme.ink : theme.inkSoft }}>{l}</button>
      ))}
    </div>
  );

  return (
    <Card theme={theme}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink }}>Post-session ratings</div>
          <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkSoft, marginTop: 4 }}>Average score out of 5, 5 participants</div>
        </div>
        {toggle}
      </div>

      {asTable ? (
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter", fontSize: 15, color: theme.inkSoft }}>
          <thead><tr>{["Measure", "Average (out of 5)"].map((c, i) => <th key={c} scope="col" style={{ textAlign: i ? "right" : "left", padding: "10px 0", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute, borderBottom: `1px solid ${theme.line}` }}>{c}</th>)}</tr></thead>
          <tbody>{RATINGS.map(([k, v]) => <tr key={k} style={{ borderTop: `1px solid ${theme.line}` }}><th scope="row" style={{ textAlign: "left", fontWeight: 500, color: theme.ink, padding: "10px 0" }}>{k}</th><td style={{ textAlign: "right", padding: "10px 0", fontVariantNumeric: "tabular-nums" }}>{v.toFixed(1)}</td></tr>)}</tbody>
        </table>
      ) : (
        <div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {RATINGS.map(([k, v], i) => {
              const showLabel = v === hi || v === lo || k === "Overall satisfaction" || active === i;
              return (
                <li key={k} style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 36 }}>
                  <span style={{ width: labelW, flexShrink: 0, textAlign: "right", fontFamily: "Inter", fontSize: isMobile ? 13 : 14, color: theme.inkSoft, lineHeight: 1.25 }}>{k}</span>
                  <div
                    tabIndex={0}
                    role="img"
                    aria-label={`${k}: ${v.toFixed(1)} out of 5`}
                    onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)} onBlur={() => setActive(null)}
                    style={{ position: "relative", flex: 1, height: 36, display: "flex", alignItems: "center", outlineOffset: 2, cursor: "default" }}
                  >
                    {/* recessive gridlines at each whole point */}
                    {[1, 2, 3, 4, 5].map((g) => <span key={g} aria-hidden="true" style={{ position: "absolute", left: `${(g / max) * 100}%`, top: 0, bottom: 0, width: 1, background: theme.line }} />)}
                    <span aria-hidden="true" style={{ position: "relative", height: 20, width: `${(v / max) * 100}%`, background: bar, borderRadius: "0 4px 4px 0", opacity: active === null || active === i ? 1 : 0.55, transition: "opacity .15s ease" }} />
                    {showLabel && (
                      <span aria-hidden="true" style={{ position: "relative", marginLeft: 8, fontFamily: "Inter", fontSize: 13.5, fontWeight: 600, color: theme.ink, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{v.toFixed(1)}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {/* x axis */}
          <div aria-hidden="true" style={{ display: "flex", gap: 12, marginTop: 6 }}>
            <span style={{ width: labelW, flexShrink: 0 }} />
            <div style={{ position: "relative", flex: 1, height: 18, borderTop: `1px solid ${theme.inkMute}` }}>
              {[0, 1, 2, 3, 4, 5].map((g) => <span key={g} style={{ position: "absolute", left: `${(g / max) * 100}%`, transform: "translateX(-50%)", top: 4, fontFamily: "Inter", fontSize: 12, color: theme.inkMute }}>{g}</span>)}
            </div>
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, marginTop: 12 }}>Hover or focus a bar to see its score.</div>
        </div>
      )}
    </Card>
  );
}

/* ═══════════════════════ Page ═══════════════════════ */

export default function WorkroomsCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const idx = projects.findIndex((p) => p.id === PROJECT_ID);
  const next = projects[(idx + 1) % projects.length];
  const isDark = mode === "dark";
  const sp = { theme, isMobile };
  const cols2 = isMobileOrTablet ? "1fr" : "1fr 1fr";
  const cols3 = isMobileOrTablet ? "1fr" : "repeat(3, 1fr)";
  const cols4 = isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "repeat(4, 1fr)";
  const shadow = isDark ? "0 12px 40px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.07)";
  const cardTitle = { fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 8, letterSpacing: "-0.01em", lineHeight: 1.35 };
  const body = { fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft };
  const bigNum = { fontFamily: "Inter", fontSize: isMobile ? 40 : 48, fontWeight: 600, letterSpacing: "-0.04em", color: theme.ink, lineHeight: 1 };

  const simpleCards = (items, cols, numbered) => (
    <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16 }}>
      {items.map(([t, d], i) => (
        <Reveal key={t} delay={0.04 * (i % 4)}>
          <Card theme={theme}>
            {numbered && <div aria-hidden="true" style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: theme.accent, marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>}
            <div style={cardTitle}>{t}</div>
            <div style={body}>{d}</div>
          </Card>
        </Reveal>
      ))}
    </div>
  );

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 48px" : "0 6vw 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              data-cursor="hover"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, cursor: "pointer", padding: "8px 6px", marginLeft: -6, marginBottom: 28, transition: "color 0.2s ease, transform 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; e.currentTarget.style.transform = "translateX(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.inkSoft; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>
          <Reveal delay={0.05}><Eyebrow color={theme.inkMute}>UX research · VR usability study</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1 }}>
              Horizon Workrooms:{" "}
              <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "1.08em" }}>VR study analysis</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ ...body, fontSize: isMobile ? 16 : 19, margin: 0, maxWidth: 820 }}>
              An evaluation of Meta Horizon Workrooms, a VR collaboration app. We assessed the user experience, ease of use and practical challenges, to find ways to improve engagement and functionality in virtual workspaces.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 20 : 32, marginTop: isMobile ? 36 : 52, paddingTop: isMobile ? 24 : 32, borderTop: `1px solid ${theme.line}` }}>
              {META.map((m) => (
                <div key={m.k}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 15.5, fontWeight: 500, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                </div>
              ))}
            </div>
            <p style={{ ...body, fontSize: 14, color: theme.inkMute, margin: "18px 0 0" }}>A group project by {TEAM}.</p>
          </Reveal>
          <Reveal delay={0.25}>
            <figure style={{ margin: isMobile ? "36px 0 0" : "56px 0 0" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow }}>
                <img src={sessionMeeting} width={1600} height={899} alt={GALLERY[0].alt} fetchpriority="high" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <figcaption style={{ ...body, fontSize: 13.5, color: theme.inkMute, marginTop: 10 }}>From a study session inside Workrooms. The participant’s name tag is blurred.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 1 ── PRODUCT */}
      <Section {...sp} n={1} id="product" eyebrow="The product" title="Meta Horizon Workrooms" intro="Meta launched Horizon Workrooms in August 2021 as a free app, part of its push to build a “metaverse” for work. It offers virtual meeting spaces in VR where people can meet and work together in a more immersive environment." alt>
        <Reveal>
          <Card theme={theme} style={{ marginBottom: 24 }}>
            <div style={cardTitle}>Target audience</div>
            <div style={body}>Remote teams, businesses, creators and enterprise users looking for immersive ways to collaborate. It’s aimed mainly at Meta Quest headset owners (such as Quest 2 and Quest Pro), but people can also join from a desktop computer.</div>
          </Card>
        </Reveal>
        <SubHead theme={theme}>Key features</SubHead>
        <div style={{ display: "grid", gridTemplateColumns: cols4, gap: 16 }}>
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={0.04 * (i % 4)}>
              <Card theme={theme} style={{ padding: 0, overflow: "hidden" }}>
                <img src={f.img} width={420} height={260} alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block", borderBottom: `1px solid ${theme.line}` }} />
                <div style={{ padding: "16px 18px 20px" }}>
                  <div style={{ ...cardTitle, fontSize: 16.5 }}>{f.t}</div>
                  <div style={{ ...body, fontSize: 14.5 }}>{f.d}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <p style={{ ...body, fontSize: 13.5, color: theme.inkMute, margin: "14px 0 0" }}>Feature images: Meta.</p>
      </Section>

      {/* 2 ── HARDWARE */}
      <Section {...sp} n={2} id="hardware" eyebrow="The hardware" title="Meta Quest Pro" intro="Meta (formerly Facebook) rebranded in 2021 around building the metaverse, an interconnected virtual space for socialising, working and gaming. Its headsets range from the Meta Quest 3S ($299 for 128GB, $399 for 256GB) and Meta Quest 3 ($499) to the high-end Meta Quest Pro ($999), which we used for the study.">
        <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.15fr 1fr", gap: isMobile ? 24 : 40, alignItems: "center" }}>
          <Reveal>
            <figure style={{ margin: 0 }}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow }}>
                <img src={questPro} width={1016} height={571} alt="The Meta Quest Pro headset resting on a wooden table next to its charging dock." loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <figcaption style={{ ...body, fontSize: 13.5, color: theme.inkMute, marginTop: 10 }}>Image: Meta.</figcaption>
            </figure>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {QUEST.map((q, i) => <Reveal key={q.t} delay={0.05 * i}><Card theme={theme}><div style={cardTitle}>{q.t}</div><div style={body}>{q.d}</div></Card></Reveal>)}
          </div>
        </div>
      </Section>

      {/* 3 ── LITERATURE */}
      <Section {...sp} n={3} id="literature" eyebrow="Background" title="Literature review" intro="Four papers on Horizon Workrooms and VR collaboration framed what we looked for in the study." alt>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          {LITERATURE.map((l, i) => (
            <Reveal key={l.url} delay={0.04 * (i % 2)}>
              <Card theme={theme}>
                <div style={cardTitle}>{l.t}</div>
                <div style={body}>{l.d}</div>
                <a href={l.url} target="_blank" rel="noopener noreferrer" data-cursor="hover" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 14, fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Read on IEEE Xplore <ArrowUpRight size={14} aria-hidden="true" /><span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}> (opens in a new tab)</span>
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 ── STUDY DESIGN */}
      <Section {...sp} n={4} id="method" eyebrow="Study design" title="How we ran the study">
        <SubHead theme={theme}>Objectives</SubHead>
        {simpleCards(OBJECTIVES.map((o) => [o.t, o.d]), cols3)}

        <div style={{ marginTop: isMobile ? 40 : 56 }}>
          <SubHead theme={theme}>Session steps</SubHead>
          <Reveal>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: cols4, gap: 16 }}>
              {STEPS.map((s, i) => (
                <li key={s.t} style={{ position: "relative", padding: "22px 22px 24px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}` }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 10, background: theme.bgAlt, fontFamily: "Inter", fontWeight: 700, color: theme.ink, marginBottom: 14 }}>{i + 1}</span>
                  <div style={cardTitle}>{s.t}</div>
                  <div style={body}>{s.d}</div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: isMobile ? 40 : 56 }}>
          <Reveal>
            <Card theme={theme}>
              <div style={cardTitle}>Technical setup</div>
              <dl style={{ margin: 0 }}>
                {SETUP.map(([k, v], i) => (
                  <div key={k} style={{ padding: "12px 0", borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                    <dt style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 4 }}>{k}</dt>
                    <dd style={{ ...body, margin: 0 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={cardTitle}>Questionnaires</div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {QUESTIONNAIRES.map((q, i) => (
                  <li key={q.t} style={{ display: "flex", gap: 14, padding: "12px 0", borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                    <span style={{ fontFamily: "Inter", fontWeight: 700, color: theme.accent, minWidth: 18 }}>{i + 1}</span>
                    <span><span style={{ display: "block", fontFamily: "Inter", fontWeight: 600, color: theme.ink }}>{q.t}</span><span style={{ ...body, display: "block" }}>{q.d}</span></span>
                  </li>
                ))}
              </ol>
              <div style={{ ...cardTitle, marginTop: 18 }}>Tasks given to participants</div>
              <ol style={{ ...body, margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>{TASKS.map((t) => <li key={t}>{t}</li>)}</ol>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* 5 ── PARTICIPANTS */}
      <Section {...sp} n={5} id="participants" eyebrow="Participants" title="Who took part" alt>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {DEMOGRAPHICS.map((d, i) => (
            <Reveal key={d.t} delay={0.05 * i}>
              <Card theme={theme}>
                <div style={bigNum}>{d.n}</div>
                <div style={{ ...cardTitle, marginTop: 12 }}>{d.t}</div>
                <div style={body}>{d.d}</div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: isMobile ? 40 : 56 }}>
          <SubHead theme={theme}>Consent</SubHead>
          {simpleCards(CONSENT, cols3)}
        </div>
      </Section>

      {/* 6 ── FINDINGS */}
      <Section {...sp} n={6} id="findings" eyebrow="Findings" title="What we found">
        <SubHead theme={theme}>Task performance</SubHead>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {PERFORMANCE.map((p, i) => (
            <Reveal key={p.t} delay={0.05 * i}>
              <Card theme={theme}>
                <div style={bigNum}>{p.n}</div>
                <div style={{ ...cardTitle, marginTop: 12, marginBottom: 4 }}>{p.t}</div>
                <div style={body}>{p.s}</div>
              </Card>
            </Reveal>
          ))}
        </div>
        <p style={{ ...body, fontSize: 13.5, color: theme.inkMute, margin: "12px 0 0" }}>Average time to complete each task.</p>

        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: isMobile ? 40 : 32, marginTop: isMobile ? 40 : 56 }}>
          <div>
            <SubHead theme={theme}>What worked well</SubHead>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {WORKED.map(([t, d], i) => <Reveal key={t} delay={0.03 * i}><Card theme={theme} style={{ borderLeft: `4px solid ${isDark ? "#A6D190" : "#3E6B2F"}` }}><div style={cardTitle}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
            </div>
          </div>
          <div>
            <SubHead theme={theme}>Challenges encountered</SubHead>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CHALLENGES.map(([t, d], i) => <Reveal key={t} delay={0.03 * i}><Card theme={theme} style={{ borderLeft: `4px solid ${isDark ? "#F2A28F" : "#9A3B26"}` }}><div style={cardTitle}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
            </div>
          </div>
        </div>

        <div style={{ marginTop: isMobile ? 40 : 56 }}>
          <SubHead theme={theme}>Usability problems</SubHead>
          {simpleCards(PROBLEMS, cols2)}
        </div>

        <div style={{ marginTop: isMobile ? 40 : 56 }}>
          <SubHead theme={theme}>In participants’ words</SubHead>
          <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
            {QUOTES.map((q, i) => (
              <Reveal key={i} delay={0.04 * (i % 2)}>
                <blockquote style={{ margin: 0, padding: "22px 26px", borderRadius: 18, background: theme.bgAlt, fontFamily: "Inter", fontSize: 16.5, lineHeight: 1.6, color: theme.ink, height: "100%", boxSizing: "border-box" }}>
                  “{q}”
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 7 ── RESULTS */}
      <Section {...sp} n={7} id="results" eyebrow="Results" title="How participants rated it" intro="Participants scored each part of the experience from 1 to 5 after their session. Setup and communication scored highest; immersion scored lowest." alt>
        <Reveal><RatingsChart theme={theme} isDark={isDark} isMobile={isMobile} /></Reveal>
      </Section>

      {/* 8 ── RECOMMENDATIONS */}
      <Section {...sp} n={8} id="recommendations" eyebrow="Recommendations" title="Recommendations for improvement">
        {simpleCards(RECOMMENDATIONS, cols4, true)}
      </Section>

      {/* 9 ── REFLECTION */}
      <Section {...sp} n={9} id="reflection" eyebrow="Reflection" title="Looking back" alt>
        {simpleCards(REFLECTION, cols3, true)}
      </Section>

      {/* 10 ── GALLERY */}
      <Section {...sp} n={10} id="sessions" eyebrow="In the headset" title="From the study sessions" intro="Screenshots captured during the sessions. Participants’ name tags are blurred to protect their confidentiality.">
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: isMobile ? 24 : 28 }}>
          {GALLERY.slice(1).map((g, i) => (
            <Reveal key={g.cap} delay={0.04 * (i % 2)}>
              <figure style={{ margin: 0 }}>
                <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow, aspectRatio: "16 / 10", background: theme.bgAlt }}>
                  <img src={g.img} width={g.w} height={g.h} alt={g.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <figcaption style={{ ...body, fontSize: 14, marginTop: 10 }}>{g.cap}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── NEXT CASE ── */}
      {next && next.id !== PROJECT_ID && (
        <section style={{ padding: isMobile ? "24px 4vw 80px" : "32px 6vw 120px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Reveal>
              <button
                onClick={() => setRoute(`project:${next.id}`)}
                data-cursor="hover"
                style={{ width: "100%", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: isMobile ? "24px 22px" : "36px 40px", borderRadius: 22, background: theme.card, border: `1px solid ${theme.line}`, color: theme.ink, fontFamily: "Inter" }}
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
