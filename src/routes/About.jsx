import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, FlaskConical } from "lucide-react";
import GridPaper from "../components/GridPaper.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import heroImg from "../assets/IMG_1670.jpg?w=320;640;960&format=avif;webp;jpg&as=picture";
import yachiImg1 from "../assets/Yachi_Image_1.jpeg?w=160;320&format=avif;webp;jpg&as=picture";
import yachiImg2 from "../assets/Yachi_Image_2.jpg?w=160;320&format=avif;webp;jpg&as=picture";

export default function About({ theme, mode }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  return (
    <div style={{ paddingTop: isMobile ? 100 : 130, position: "relative" }}>
      <section style={{ padding: isMobile ? "0 4vw 60px" : "0 6vw 100px", position: "relative" }}>
        <GridPaper theme={theme} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 28, color: theme.accent }}>
              hi, I'm Yachi ✿
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(44px, 8vw, 120px)",
              fontWeight: 500, letterSpacing: isMobile ? "-0.03em" : "-0.045em",
              color: theme.ink,
              margin: "10px 0 0", lineHeight: 0.95,
            }}>
              Designer.<br />
              <em style={{ fontFamily: "'Caveat', cursive", fontStyle: "normal", color: theme.accent }}>Curious human.</em>
            </h1>
          </Reveal>

          <div style={{
            marginTop: isMobile ? 50 : 80, display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "minmax(280px, 1fr) minmax(320px, 1.4fr)",
            gap: isMobile ? 50 : 60, alignItems: "start",
          }}>
            <Reveal delay={0.2}>
              <PortraitFrame theme={theme} mode={mode} isMobile={isMobile} />
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <p style={{
                  fontFamily: "Inter", fontSize: "clamp(16px, 1.4vw, 19px)",
                  lineHeight: 1.65, color: theme.inkSoft, marginTop: 0,
                  letterSpacing: "-0.01em",
                }}>
                  Four years in, I've designed across <span style={{ background: theme.pastel2, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>healthcare</span>, <span style={{ background: theme.pastel3, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>e-commerce</span>, <span style={{ background: theme.pastel5, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>enterprise</span>, and <span style={{ background: theme.pastel4, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>AI</span>. Each one taught me that the hardest part of design isn't the pixels, it's the listening (to both users and the business). I move through the full arc: research, prototype, test, ship. Creating intuitive, high-impact experiences that improve usability, boost engagement, and drive measurable business value.
                </p>

                <p style={{
                  fontFamily: "Inter", fontSize: "clamp(16px, 1.4vw, 19px)",
                  lineHeight: 1.65, color: theme.inkSoft, marginTop: 20,
                  letterSpacing: "-0.01em",
                }}>
                  I've worked across both ends of the spectrum. Fast-paced startups like <span style={{ fontWeight: 600, color: theme.ink }}>Kinetic Potential</span>, where I juggled multiple projects at once, and larger companies like <span style={{ fontWeight: 600, color: theme.ink }}>Topline Switchgear</span>, where I went deep on a single domain. I'm comfortable in both worlds.
                </p>

                <p style={{
                  fontFamily: "Inter", fontSize: "clamp(16px, 1.4vw, 19px)",
                  lineHeight: 1.65, color: theme.inkSoft, marginTop: 20,
                  letterSpacing: "-0.01em",
                }}>
                  Right now, I'm a <span style={{ fontWeight: 600, color: theme.ink }}>UX Researcher at UMBC</span>, studying how generative AI can help underserved communities understand their medical records.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider theme={theme} />

      <section style={{ padding: isMobile ? "70px 4vw" : "120px 6vw", position: "relative", textAlign: "center" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 26, color: theme.accent, marginBottom: 4 }}>
              tools of the trade ✦
            </div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
              margin: 0, lineHeight: 1,
            }}>
              Yachi's technical skills.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <SkillJar theme={theme} isMobile={isMobile} />
          </Reveal>
        </div>
      </section>

      <SectionDivider theme={theme} />

      <JourneyRoadmap theme={theme} isMobileOrTablet={isMobileOrTablet} isMobile={isMobile} />
    </div>
  );
}

const FORMAT_MIME = {
  avif: "image/avif",
  webp: "image/webp",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
};

function ResponsiveImage({ source, alt, style, loading, fetchPriority, width, height }) {
  return (
    <picture>
      {Object.entries(source.sources).map(([format, srcset]) => (
        <source key={format} type={FORMAT_MIME[format] || `image/${format}`} srcSet={srcset} />
      ))}
      <img
        src={source.img.src}
        alt={alt}
        width={width || source.img.w}
        height={height || source.img.h}
        loading={loading}
        decoding="async"
        fetchpriority={fetchPriority}
        style={style}
      />
    </picture>
  );
}

function PortraitFrame({ theme, mode, isMobile }) {
  const sideImg1 = isMobile
    ? { width: 90, height: 110, top: "12%", left: -16 }
    : { width: 120, height: 145, top: "15%", left: -60 };
  const sideImg2 = isMobile
    ? { width: 110, height: 85, bottom: "6%", right: -20 }
    : { width: 145, height: 110, bottom: "5%", right: -70 };

  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: isMobile ? 260 : 320,
      aspectRatio: "4/5",
      margin: "0 auto"
    }}>
      <div style={{
        position: "absolute", top: -20, left: 40, width: 90, height: 32,
        background: theme.pastel3, transform: "rotate(-8deg)", zIndex: 3,
        opacity: 0.85, boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
      }} />
      <div style={{
        position: "absolute", top: -16, right: 30, width: 90, height: 32,
        background: theme.pastel1, transform: "rotate(12deg)", zIndex: 3,
        opacity: 0.85, boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        border: `2px solid ${theme.ink}`,
        borderRadius: 4,
        transform: "rotate(-1.5deg)",
        background: theme.card,
        padding: 18,
        zIndex: 1,
      }}>
        <div style={{
          width: "100%", height: "100%",
          background: theme.bgAlt,
          borderRadius: 2,
          position: "relative", overflow: "hidden",
        }}>
          <ResponsiveImage
            source={heroImg}
            alt="Yachi Patel"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <motion.div
        whileHover={isMobile ? undefined : { scale: 1.1, rotate: -5, zIndex: 10 }}
        style={{
          position: "absolute",
          top: sideImg1.top, left: sideImg1.left,
          width: sideImg1.width, height: sideImg1.height,
          background: theme.card, border: `1px solid ${theme.ink}`, borderRadius: 4,
          padding: 8, transform: "rotate(-12deg)", zIndex: 2,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <ResponsiveImage
          source={yachiImg1}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
          loading="lazy"
        />
      </motion.div>

      <motion.div
        whileHover={isMobile ? undefined : { scale: 1.1, rotate: 5, zIndex: 10 }}
        style={{
          position: "absolute",
          bottom: sideImg2.bottom, right: sideImg2.right,
          width: sideImg2.width, height: sideImg2.height,
          background: theme.card, border: `1px solid ${theme.ink}`, borderRadius: 4,
          padding: 8, transform: "rotate(15deg)", zIndex: 2,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <ResponsiveImage
          source={yachiImg2}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
          loading="lazy"
        />
      </motion.div>

      <div style={{
        position: "absolute",
        bottom: isMobile ? -50 : -64,
        left: isMobile ? 8 : 0,
        fontFamily: "'Caveat', cursive",
        fontSize: isMobile ? 22 : 26,
        color: theme.inkSoft,
      }}>
        ↳ that's me, in pixels ✿
      </div>
    </div>
  );
}

function SkillJar({ theme, isMobile }) {
  const [isSpilled, setIsSpilled] = useState(false);

  const categories = [
    { label: "Research", color: "pastel2", skills: ["Competitive Analysis", "Information Architecture", "Persona Creation", "User Surveys", "Focus Groups", "User Interviews", "Empathy Mapping", "Journey Mapping", "Storyboarding", "Heuristic Evaluation"] },
    { label: "Design", color: "pastel1", skills: ["Wireframing", "Mockups", "Interactive Prototyping", "Responsive Design", "Accessible Design", "Component Libraries", "Typography", "Color Theory", "Iconography", "Grid Systems"] },
    { label: "Testing", color: "pastel4", skills: ["Usability Testing", "User Testing", "Observational Studies", "Cognitive Walkthroughs", "A/B Testing"] },
    { label: "Tools", color: "pastel3", skills: ["Figma", "Webflow", "WordPress", "Wix", "Framer", "Adobe XD", "Sketch", "InVision", "Balsamiq", "Proto.io", "Maze", "Miro", "Adobe Creative Suite", "Cvent", "Hotjar", "Google Analytics", "HTML", "CSS", "JavaScript", "Jira", "Notion", "Slack"] },
    { label: "AI", color: "pastel5", skills: ["ChatGPT", "Claude", "Gemini", "Relume", "UX Pilot", "Magic Patterns", "Builder.io", "Figma Make", "Lovable", "Windsurf", "Antigravity", "Replit", "n8n", "Zapier", "Google Stitch", "Pomelli", "NotebookLM", "Gamma AI"] },
  ];

  const allSkills = categories.flatMap((cat, ci) =>
    cat.skills.map((s, si) => ({
      name: s,
      catColor: cat.color,
      id: `${ci}-${si}`,
      delay: Math.random() * 0.4 + (ci * 0.1)
    }))
  );

  return (
    <div style={{ marginTop: 40, position: "relative" }}>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginBottom: 20,
        minHeight: 28, position: "relative"
      }}>
        {isSpilled && (
          <button
            onClick={() => setIsSpilled(false)}
            style={{
              position: "absolute", right: 0,
              padding: "4px 10px", borderRadius: 6, background: theme.card,
              border: `1px solid ${theme.line}`, color: theme.ink,
              fontFamily: "Inter", fontSize: 11, cursor: "pointer"
            }}
          >
            Refill Jar
          </button>
        )}
      </div>

      <div
        spellCheck={false}
        style={{
          height: isMobile ? 460 : 400, width: "100%",
          background: theme.card, borderRadius: isMobile ? 24 : 32,
          border: `1px solid ${theme.line}`,
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.04)"
        }}
      >
        <motion.div
          onClick={() => setIsSpilled(true)}
          animate={isSpilled
            ? { rotate: -100, x: isMobile ? -160 : -220, y: 0, opacity: 0, scale: 0 }
            : { rotate: 0, x: 0, y: 0, opacity: 1, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          style={{
            width: isMobile ? 110 : 140,
            height: isMobile ? 140 : 180,
            background: "rgba(255,255,255,0.18)",
            border: `2px solid rgba(255,255,255,0.4)`,
            borderRadius: "20px 20px 60px 60px",
            position: "relative",
            zIndex: isSpilled ? 0 : 10,
            marginBottom: isMobile ? 30 : 40,
            cursor: isSpilled ? "default" : "pointer",
            pointerEvents: isSpilled ? "none" : "auto",
            boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <div style={{
            position: "absolute", top: -10, left: "15%",
            width: "70%", height: 15, background: "rgba(255,255,255,0.15)",
            border: `2px solid rgba(255,255,255,0.4)`, borderRadius: 4
          }} />

          <motion.div
            animate={isSpilled ? { y: -100, opacity: 0, rotate: 45 } : { y: 0, opacity: 1 }}
            style={{
              position: "absolute", top: -25, left: "20%",
              width: "60%", height: 20, background: "#8B5E3C", borderRadius: "4px 4px 0 0"
            }}
          />

          {!isSpilled && (
            <div style={{
              position: "absolute", inset: 10, display: "flex",
              flexWrap: "wrap", gap: 4, justifyContent: "center", alignItems: "flex-end"
            }}>
              {allSkills.map((s) => (
                <div key={s.id} style={{
                  width: 8, height: 8, borderRadius: 999, background: theme[s.catColor],
                  opacity: 0.7
                }} />
              ))}
            </div>
          )}
        </motion.div>

        <AnimatePresence>
          {isSpilled && (
            <div style={{
              position: "absolute", inset: 0,
              padding: isMobile ? "20px 16px 24px" : "30px 40px 40px",
              display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "flex-start",
              gap: isMobile ? "6px 6px" : "10px 8px",
              overflowY: isMobile ? "auto" : "visible",
              zIndex: 5
            }}>
              {allSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  initial={{ scale: 0, y: 150, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{
                    type: "spring", stiffness: 120, damping: 15,
                    delay: skill.delay
                  }}
                  style={{
                    position: "relative",
                    padding: isMobile ? "5px 10px" : "6px 14px", borderRadius: 999,
                    background: theme[skill.catColor],
                    border: `1px solid ${theme.line}`,
                    fontFamily: "Inter",
                    fontSize: isMobile ? 11.5 : 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.8)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    whiteSpace: "nowrap"
                  }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      <p style={{
        fontFamily: "Inter", fontSize: 12, color: theme.inkMute,
        marginTop: 12, textAlign: "center"
      }}>
        {isSpilled ? "A collection of my technical skills." : "Click on the jar to view all skills."}
      </p>
    </div>
  );
}

function JourneyRoadmap({ theme, isMobileOrTablet, isMobile }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathLen = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const nodes = [
    {
      stage: "Education", year: "June 2019 — May 2023",
      title: "B.Tech Information Technology",
      org: "Indus University · India",
      text: "Built a foundation in software engineering, databases, and web technologies. First exposure to user-centered thinking.",
      icon: GraduationCap, color: "pastel2",
    },
    {
      stage: "Industry", year: "Jan 2021 — July 2023",
      title: "Product Designer",
      org: "Topline Switchgear Pvt. Ltd. · India",
      text: "Designed an end-to-end ERP experience unifying 30+ manufacturing processes, improving workflow efficiency by 45% and reducing manual effort by 50%. Led 15 stakeholder discovery sessions and created 30+ high-fidelity prototypes.",
      icon: Briefcase, color: "pastel3",
    },
    {
      stage: "Education", year: "Aug 2023 — May 2025",
      title: "M.S. Human-Centered Computing",
      org: "UMBC · Maryland",
      text: "Deep dove into mixed-methods research, accessibility, and the ethics of designing with AI.",
      icon: GraduationCap, color: "pastel5",
    },
    {
      stage: "Industry", year: "Oct 2024 — Sept 2025",
      title: "UI/UX Designer",
      org: "Kinetic Potential · USA",
      text: "Designed end-to-end user experiences across 4 brand touchpoints. Led UX research spanning stakeholder interviews, competitive analysis, and surveys. Achieved a 60% improvement in task completion rates.",
      icon: Briefcase, color: "pastel1",
    },
    {
      stage: "Research", year: "Jan 2025 — Present",
      title: "UX Researcher",
      org: "University of Maryland, Baltimore County (UMBC)",
      text: "Conducting informant interviews with underserved populations in Baltimore. Designed high-fidelity prototypes for 3 generative AI tool concepts. Presented prototypes across 6 focus group sessions.",
      icon: FlaskConical, color: "pastel4",
    },
  ];

  if (isMobileOrTablet) {
    return (
      <section ref={ref} style={{
        padding: isMobile ? "60px 4vw 80px" : "80px 5vw 100px",
        background: theme.bgAlt, position: "relative"
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: isMobile ? 50 : 70, textAlign: "center" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 26, color: theme.accent, marginBottom: 4 }}>
                the path so far ✦
              </div>
              <h2 style={{
                fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
                margin: 0, lineHeight: 1,
              }}>
                A scrolling roadmap.
              </h2>
            </div>
          </Reveal>

          <div style={{ position: "relative", paddingLeft: 4 }}>
            <svg
              style={{ position: "absolute", left: 24, top: 0, width: 4, height: "100%", pointerEvents: "none", zIndex: 0 }}
              viewBox="0 0 4 1800" preserveAspectRatio="none"
            >
              <motion.path
                d="M 2 0 L 2 1800"
                stroke={theme.accent}
                strokeWidth="2"
                strokeDasharray="6 8"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: pathLen }}
              />
            </svg>

            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 50, position: "relative", zIndex: 1 }}>
              {nodes.map((n, i) => {
                const Icon = n.icon;
                return (
                  <Reveal key={i} delay={0.1}>
                    <div style={{
                      display: "flex", alignItems: "flex-start", gap: 18,
                    }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 999,
                        background: theme[n.color],
                        border: `2px solid ${theme.ink}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: `0 0 0 5px ${theme.bgAlt}`,
                      }}>
                        <Icon size={20} color={theme.ink} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <RoadmapCard n={n} theme={theme} compact />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} style={{ padding: "100px 6vw 120px", background: theme.bgAlt, position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 80, textAlign: "center" }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: theme.accent, marginBottom: 4 }}>
              the path so far ✦
            </div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
              margin: 0, lineHeight: 1,
            }}>
              A scrolling roadmap.
            </h2>
          </div>
        </Reveal>

        <div style={{ position: "relative" }}>
          <svg
            style={{ position: "absolute", left: "50%", top: 0, width: 200, height: "100%", transform: "translateX(-50%)", pointerEvents: "none", zIndex: 0 }}
            viewBox="0 0 200 1800" preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 30 Q 30 200 100 360 Q 170 520 100 700 Q 30 880 100 1050 Q 170 1220 100 1400 Q 50 1580 100 1770"
              stroke={theme.accent}
              strokeWidth="2.5"
              strokeDasharray="6 8"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: pathLen }}
            />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", gap: 80, position: "relative", zIndex: 1 }}>
            {nodes.map((n, i) => {
              const Icon = n.icon;
              const left = i % 2 === 0;
              return (
                <Reveal key={i} delay={0.1}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center", gap: 30,
                  }}>
                    <div style={{ textAlign: "right", paddingRight: 20 }}>
                      {left && <RoadmapCard n={n} theme={theme} />}
                    </div>
                    <div style={{
                      width: 64, height: 64, borderRadius: 999,
                      background: theme[n.color],
                      border: `2px solid ${theme.ink}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 0 0 6px ${theme.bg}`,
                    }}>
                      <Icon size={26} color={theme.ink} />
                    </div>
                    <div style={{ paddingLeft: 20 }}>
                      {!left && <RoadmapCard n={n} theme={theme} />}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({ n, theme, compact }) {
  return (
    <div style={{
      display: compact ? "block" : "inline-block",
      padding: compact ? 16 : 22, borderRadius: 16,
      background: theme.card,
      border: `1px solid ${theme.line}`,
      maxWidth: compact ? "none" : 380,
      width: compact ? "100%" : "auto",
      textAlign: "left",
      boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
      }}>
        <span style={{
          padding: "3px 9px", borderRadius: 999,
          background: theme[n.color],
          fontFamily: "Inter", fontSize: 10.5, fontWeight: 600,
          color: "rgba(0,0,0,0.7)", letterSpacing: "0.04em", textTransform: "uppercase",
        }}>{n.stage}</span>
        <span style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute }}>
          {n.year}
        </span>
      </div>
      <h3 style={{
        fontFamily: "Inter", fontSize: 22, fontWeight: 600,
        letterSpacing: "-0.02em", color: theme.ink, margin: 0, lineHeight: 1.15,
      }}>
        {n.title}
      </h3>
      <div style={{
        fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent, marginTop: 4,
      }}>
        {n.org}
      </div>
      <p style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.5, marginTop: 12, marginBottom: 0 }}>
        {n.text}
      </p>
    </div>
  );
}
