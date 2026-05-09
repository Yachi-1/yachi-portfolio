import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MousePointer2, ChevronDown } from "lucide-react";
import GridPaper from "../components/GridPaper.jsx";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import FolderProjects from "../components/FolderProjects.jsx";
import ApproachSection from "../components/ApproachSection.jsx";

export default function Home({ theme, mode, setRoute }) {
  const reduced = useReducedMotion();
  return (
    <div style={{ position: "relative", paddingTop: 110 }}>
      <section style={{ position: "relative", minHeight: "100vh", padding: "0 6vw", overflow: "hidden" }}>
        <GridPaper theme={theme} />
        <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto" }}>

          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            drag dragMomentum dragElastic={0.18}
            whileHover={{ scale: 1.04, zIndex: 20 }}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            style={{
              position: "absolute", right: "4%", top: 30, zIndex: 6, cursor: "grab",
              width: 280, background: mode === "dark" ? "#1E1E26" : "#2A2A2A",
              borderRadius: 12, overflow: "hidden",
              boxShadow: mode === "dark" ? "0 20px 60px rgba(0,0,0,0.5)" : "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ padding: "8px 12px", display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#FF5F56" }} />
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#FFBD2E" }} />
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#28C940" }} />
              <span style={{ fontFamily: "SF Mono, monospace", fontSize: 10, color: "#888", marginLeft: "auto" }}>yachi ~</span>
            </div>
            <div style={{ padding: "10px 16px 16px", fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: 12, lineHeight: 1.7, color: "#CCCCCC" }}>
              <div><span style={{ color: "#50FA7B" }}>~</span> <span style={{ color: "#8BE9FD" }}>whoami</span></div>
              <div style={{ color: "#F8F8F2" }}>yachi</div>
              <div style={{ marginTop: 6 }}><span style={{ color: "#50FA7B" }}>~</span> <span style={{ color: "#8BE9FD" }}>interestedin</span></div>
              <div style={{ color: "#F8F8F2" }}>design/ research/ craft/ ai/</div>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            drag dragMomentum dragElastic={0.18}
            whileHover={{ scale: 1.04, zIndex: 20, rotate: -3 }}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            style={{
              position: "absolute", left: "-2%", top: 10, zIndex: 5, cursor: "grab",
              width: 260,
              background: mode === "dark" ? "#1A110D" : "#FFE8D8",
              borderRadius: 18, overflow: "hidden", padding: "16px 16px 18px",
              boxShadow: mode === "dark"
                ? "0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,180,130,0.06)"
                : "0 24px 60px rgba(200,100,50,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: `1px solid ${mode === "dark" ? "rgba(255,180,130,0.12)" : "rgba(255,160,100,0.25)"}`,
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.inkMute, opacity: 0.8, lineHeight: 1 }}>education</div>
            </div>

            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10, textAlign: "left",
                padding: "9px 9px 10px", borderRadius: 11,
                background: mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
                border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.85)"}`,
              }}
            >
              <div style={{
                flexShrink: 0, width: 32, height: 32, borderRadius: 9,
                background: `linear-gradient(135deg, ${theme.pastel2}, #9DD4F0)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, marginTop: 1,
                boxShadow: "0 4px 10px rgba(157,212,240,0.4), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}>🎓</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Inter", fontSize: 7, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: theme.inkMute, opacity: 0.7, marginBottom: 2 }}>
                  Bachelor's
                </div>
                <div style={{ fontFamily: "Inter", fontSize: 10.5, fontWeight: 700, color: theme.ink, lineHeight: 1.25, marginBottom: 5 }}>
                  Information Technology
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontFamily: "'SF Mono', monospace", fontSize: 8, fontWeight: 600,
                  color: theme.inkMute,
                  background: mode === "dark" ? "rgba(157,212,240,0.12)" : "rgba(157,212,240,0.28)",
                  borderRadius: 999, padding: "2px 7px",
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: "#5BA8D6" }} />
                  2019 — 2023
                </div>
              </div>
            </motion.div>

            <div style={{
              height: 1, margin: "8px 4px",
              backgroundImage: `radial-gradient(circle, ${mode === "dark" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)"} 1px, transparent 1px)`,
              backgroundSize: "5px 1px", backgroundRepeat: "repeat-x", opacity: 0.6,
            }} />

            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10, textAlign: "left",
                padding: "9px 9px 10px", borderRadius: 11,
                background: mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
                border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.85)"}`,
              }}
            >
              <div style={{
                flexShrink: 0, width: 32, height: 32, borderRadius: 9,
                background: mode === "dark" ? "linear-gradient(135deg, #3D2418, #4A2E1E)" : "linear-gradient(135deg, #FFD9C2, #FFB58F)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, marginTop: 1,
                boxShadow: "0 4px 10px rgba(200,100,50,0.25), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}>👨‍🎓</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Inter", fontSize: 7, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: theme.inkMute, opacity: 0.7, marginBottom: 2 }}>
                  Master's
                </div>
                <div style={{ fontFamily: "Inter", fontSize: 10.5, fontWeight: 700, color: theme.ink, lineHeight: 1.25, marginBottom: 5 }}>
                  Human-Centered Computing
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontFamily: "'SF Mono', monospace", fontSize: 8, fontWeight: 600,
                  color: theme.inkMute,
                  background: mode === "dark" ? "rgba(255,160,100,0.12)" : "rgba(255,160,100,0.22)",
                  borderRadius: 999, padding: "2px 7px",
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: mode === "dark" ? "#FFB58F" : "#D4733A" }} />
                  2023 — 2025
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sticky note (experience) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            drag dragMomentum dragElastic={0.18}
            whileHover={{ scale: 1.05, zIndex: 20, rotate: -1 }}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            style={{
              position: "absolute", right: "8%", bottom: 100, zIndex: 7, cursor: "grab",
              width: 260, padding: "16px 16px 14px",
              background: `linear-gradient(170deg, ${theme.pastel3} 0%, #FFDFA0 100%)`,
              borderRadius: 4,
              boxShadow: "0 14px 30px rgba(120,80,0,0.18), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{
              position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)",
              width: 56, height: 18,
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }} />

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: "#5A4500", opacity: 0.85, lineHeight: 1 }}>experience</div>
            </div>

            {[
              { role: "UX Researcher", company: "UMBC", year: "Jan 2025 — Present", tint: "#E8A2A2" },
              { role: "UI/UX Designer", company: "KineticPotential", year: "Oct 2024 — Sept 2025", tint: "#A2C9E8" },
              { role: "Product Designer", company: "ToplineSwitchgear", year: "Jan 2021 — July 2023", tint: "#B5D8B0" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{
                  display: "flex", alignItems: "center", gap: 9,
                  padding: "6px 4px",
                  borderTop: i === 0 ? "none" : "1px dashed rgba(90,69,0,0.18)",
                }}
              >
                <div style={{
                  flexShrink: 0, width: 8, height: 8, borderRadius: 999,
                  background: item.tint,
                  boxShadow: `0 0 0 2px rgba(255,255,255,0.6)`,
                }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 9.5, fontWeight: 700, color: "#3A2D00", lineHeight: 1.2 }}>{item.role}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 8.5, color: "#5A4500", opacity: 0.65, lineHeight: 1.25 }}>@{item.company}</div>
                </div>
                <div style={{
                  fontFamily: "'SF Mono', monospace", fontSize: 6.5, fontWeight: 600,
                  color: "#5A4500",
                  background: "rgba(255,255,255,0.5)",
                  padding: "2px 5px", borderRadius: 4,
                  whiteSpace: "nowrap",
                }}>{item.year}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Photo board */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            drag dragMomentum dragElastic={0.18}
            whileHover={{ scale: 1.04, zIndex: 20 }}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            style={{
              position: "absolute", left: "2%", bottom: 60, zIndex: 4, cursor: "grab",
              width: 200, padding: 14,
              background: mode === "dark" ? "#1E1E26" : "#FFFFFF",
              borderRadius: 14, border: `1px solid ${theme.line}`,
              boxShadow: mode === "dark" ? "0 16px 50px rgba(0,0,0,0.4)" : "0 16px 50px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { emoji: "🎨", label: "Design", bg: theme.pastel1 },
                { emoji: "✈️", label: "Travel", bg: theme.pastel2 },
                { emoji: "🎵", label: "Music", bg: theme.pastel5 },
                { emoji: "☕", label: "Tea & Coffee", bg: theme.pastel6 },
              ].map((item, i) => (
                <div key={i} style={{
                  aspectRatio: "1/1", borderRadius: 8,
                  background: `linear-gradient(135deg, ${item.bg}, ${theme.pastel4})`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 2,
                }}>
                  <span style={{ fontSize: 22 }}>{item.emoji}</span>
                  <span style={{ fontFamily: "Inter", fontSize: 9, fontWeight: 600, color: theme.ink, opacity: 0.7 }}>{item.label}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: theme.inkMute, marginTop: 8, textAlign: "center" }}>
              what I love
            </div>
          </motion.div>

          {/* Centered headline */}
          <div style={{
            position: "relative", zIndex: 10,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            minHeight: "85vh", textAlign: "center",
          }}>
            <Reveal delay={0.1}>
              <div style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 500, fontStyle: "italic", color: theme.inkMute, letterSpacing: "0.02em",
                marginBottom: 12,
              }}>
                Yachi Patel
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <h1 style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(48px, 8vw, 130px)",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                color: theme.ink,
                margin: 0,
                textAlign: "center",
                maxWidth: 1100,
              }}>
                <span style={{ display: "block" }}>
                  <em style={{
                    fontFamily: "'Caveat', cursive", fontStyle: "normal",
                    fontWeight: 600, color: theme.accent,
                    fontSize: "0.85em",
                  }}>Creative</em>
                </span>
                <span style={{ display: "block", marginTop: "-0.05em" }}>
                  <span style={{ color: theme.accent, fontWeight: 800 }}>PR</span>
                  <span style={{
                    display: "inline-block", verticalAlign: "middle",
                    width: "clamp(50px, 6vw, 90px)", height: "clamp(28px, 3.2vw, 48px)",
                    borderRadius: 999, background: theme.accent,
                    position: "relative", margin: "0 -0.02em",
                    boxShadow: `0 4px 20px ${theme.accent}55`,
                  }}>
                    <motion.div
                      animate={reduced ? undefined : { x: ["15%", "55%", "15%"] }}
                      transition={reduced ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        position: "absolute", top: "10%",
                        width: "clamp(22px, 2.6vw, 38px)", height: "clamp(22px, 2.6vw, 38px)",
                        borderRadius: 999,
                        background: mode === "dark" ? "#222" : "#fff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }}
                    />
                  </span>
                  <span style={{ color: theme.accent, fontWeight: 800 }}>DUCT</span>
                </span>
                <span style={{ display: "block", marginTop: "-0.05em" }}>
                  DES
                  <motion.span
                    animate={reduced ? undefined : { opacity: [1, 0.4, 1] }}
                    transition={reduced ? undefined : { duration: 1.2, repeat: Infinity }}
                    style={{
                      display: "inline-block", verticalAlign: "baseline",
                      color: mode === "dark" ? "#9B84E8" : "#7B5EA7", fontSize: "0.9em",
                    }}
                  >
                    <MousePointer2 size="0.7em" style={{ display: "inline", verticalAlign: "baseline" }} />
                  </motion.span>
                  GNER
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.45}>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.4vw, 18px)",
                color: theme.inkSoft, maxWidth: 520, margin: "32px auto 0",
                lineHeight: 1.6, textAlign: "center",
              }}>
                Designing Digital Interfaces Since 2020
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 36 }}>
                <MagneticButton theme={theme} primary onClick={() => setRoute("projects")} label="See">
                  See my work <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton theme={theme} onClick={() => setRoute("about")} label="About">
                  About me
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.8}>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              padding: "20px 0 40px",
            }}>
              <div style={{ fontFamily: "Inter", fontSize: 11, letterSpacing: "0.2em", color: theme.inkMute, textTransform: "uppercase" }}>
                Scroll
              </div>
              <motion.div
                animate={reduced ? undefined : { y: [0, 8, 0] }}
                transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={20} color={theme.inkMute} />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider theme={theme} />
      <FolderProjects theme={theme} mode={mode} setRoute={setRoute} />
      <SectionDivider theme={theme} />
      <ApproachSection theme={theme} />
    </div>
  );
}
