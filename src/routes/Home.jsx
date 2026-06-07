import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useA11yReducedMotion } from "../hooks/useA11yReducedMotion.js";
import { ArrowRight, MousePointer2, ChevronDown } from "lucide-react";
import GridPaper from "../components/GridPaper.jsx";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import FolderProjects from "../components/FolderProjects.jsx";
import ApproachSection from "../components/ApproachSection.jsx";
import HeroCard from "../components/HeroCard.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

export default function Home({ theme, mode, setRoute }) {
  const reduced = useA11yReducedMotion();
  const { isMobile, isTablet } = useBreakpoint();
  const { scrollY } = useScroll();

  const [isPlayful, setIsPlayful] = useState(false);

  // Parallax offsets
  const parallax1 = useTransform(scrollY, [0, 1000], [0, -80]);
  const parallax2 = useTransform(scrollY, [0, 1000], [0, -40]);
  const parallax3 = useTransform(scrollY, [0, 1000], [0, -120]);
  const parallax4 = useTransform(scrollY, [0, 1000], [0, -60]);

  return (
    <div style={{ position: "relative", paddingTop: isMobile ? 90 : 110 }}>
      <section style={{ position: "relative", minHeight: isMobile ? "108vh" : "100vh", padding: isMobile ? "0 4vw" : "0 6vw", overflowX: "clip" }}>
        <GridPaper theme={theme} />
        <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto" }}>

          {/* Terminal card */}
          <HeroCard
            isMobile={isMobile} floatDelay={0} floatDuration={4} parallaxY={parallax1}
            initial={{ opacity: 0, y: 40, rotate: 4, scale: isMobile ? 0.85 : 1 }}
            animate={{ opacity: 1, y: 0, rotate: 4, scale: isMobile ? 0.85 : 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            drag={!isMobile} dragMomentum dragElastic={0.18}
            whileHover={isMobile ? undefined : { scale: 1.15, zIndex: 25, transition: { type: "spring", stiffness: 260, damping: 20 } }}
            whileTap={isMobile ? { scale: 0.97, rotate: 5 } : undefined}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            staticContent={
              <div style={{
                display: "flex", gap: isMobile ? 4 : 6, padding: isMobile ? "8px 10px" : "12px 16px",
                background: mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                borderBottom: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                alignItems: "center",
              }}>
                <div style={{ width: isMobile ? 7 : 10, height: isMobile ? 7 : 10, borderRadius: 999, background: "#FF5F56" }} />
                <div style={{ width: isMobile ? 7 : 10, height: isMobile ? 7 : 10, borderRadius: 999, background: "#FFBD2E" }} />
                <div style={{ width: isMobile ? 7 : 10, height: isMobile ? 7 : 10, borderRadius: 999, background: "#27C93F" }} />
              </div>
            }
            style={{
              zIndex: 6, cursor: isMobile ? "default" : "grab",
              right: isMobile ? "-1%" : "4%",
              top: isMobile ? 6 : 30,
              width: isMobile ? 150 : 280,
              background: mode === "dark" ? "#2D2D3D" : "#2A2A2A",
              borderRadius: 12, overflow: "hidden",
              boxShadow: mode === "dark" ? "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{
              padding: isMobile ? "6px 10px 10px" : "10px 16px 16px",
              fontFamily: "'SF Mono', 'Fira Code', monospace",
              fontSize: isMobile ? 9.5 : 12,
              lineHeight: 1.6,
              color: theme.inkSoft,
            }}>
              <div><span style={{ color: "#50FA7B" }}>~</span> <span style={{ color: "#8BE9FD" }}>whoami</span></div>
              <div style={{ color: "#F8F8F2" }}>yachi</div>
              <div style={{ marginTop: 6 }}><span style={{ color: "#50FA7B" }}>~</span> <span style={{ color: "#8BE9FD" }}>interestedin</span></div>
              <div style={{ color: "#F8F8F2" }}>design/ research/ craft/ ai/</div>
            </div>
          </HeroCard>

          {/* Education card */}
          <HeroCard
            isMobile={isMobile} floatDelay={0.5} floatDuration={4.5} parallaxY={parallax2}
            initial={{ opacity: 0, y: 40, rotate: -6, scale: isMobile ? 0.85 : 1 }}
            animate={{ opacity: 1, y: 0, rotate: -6, scale: isMobile ? 0.85 : 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            drag={!isMobile} dragMomentum dragElastic={0.18}
            whileHover={isMobile ? undefined : { scale: 1.15, zIndex: 25, rotate: -3, transition: { type: "spring", stiffness: 260, damping: 20 } }}
            whileTap={isMobile ? { scale: 0.97, rotate: -5 } : undefined}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            style={{
              zIndex: 5, cursor: isMobile ? "default" : "grab",
              left: isMobile ? "-2%" : "4%",
              top: isMobile ? 4 : 10,
              width: isMobile ? 205 : 280,
              background: mode === "dark" ? "#2B1A13" : "#FFE8D8",
              borderRadius: isMobile ? 16 : 24, overflow: "hidden",
              padding: isMobile ? "10px 10px 12px" : "20px 20px 22px",
              boxShadow: mode === "dark"
                ? "0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,180,130,0.12)"
                : "0 24px 60px rgba(200,100,50,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: `1px solid ${mode === "dark" ? "rgba(255,180,130,0.25)" : "rgba(255,160,100,0.25)"}`,
            }}
          >
            <div style={{ marginBottom: isMobile ? 8 : 16 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 16 : 24, fontWeight: 500, color: theme.accent, lineHeight: 1 }}>education ✿</div>
            </div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: isMobile ? 8 : 12, textAlign: "left",
                padding: isMobile ? "8px" : "12px", borderRadius: 14,
                background: mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.65)",
                border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.95)"}`,
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{
                flexShrink: 0, width: isMobile ? 28 : 36, height: isMobile ? 28 : 36, borderRadius: 10,
                background: `linear-gradient(135deg, ${theme.pastel2}, #9DD4F0)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: isMobile ? 14 : 18,
                boxShadow: "0 4px 12px rgba(157,212,240,0.4), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}>🎓</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Inter", fontSize: isMobile ? 6.5 : 7.5, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: theme.inkMute, opacity: mode === "dark" ? 1 : 0.7, marginBottom: 3 }}>
                  Bachelor's
                </div>
                <div style={{ fontFamily: "Inter", fontSize: isMobile ? 9.5 : 11, fontWeight: 700, color: theme.ink, lineHeight: 1.2, marginBottom: 6 }}>
                  Information Technology
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "'SF Mono', monospace", fontSize: 8.5, fontWeight: 600,
                  color: mode === "dark" ? "#9DD4F0" : "#4A90B5",
                  background: mode === "dark" ? "rgba(157,212,240,0.15)" : "rgba(157,212,240,0.25)",
                  borderRadius: 999, padding: "3px 8px", whiteSpace: "nowrap"
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: "#5BA8D6" }} />
                  2019 - 2023
                </div>
              </div>
            </motion.div>

            <div style={{
              height: 1, margin: "10px 4px",
              backgroundImage: `radial-gradient(circle, ${mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"} 1px, transparent 1px)`,
              backgroundSize: "6px 1px", backgroundRepeat: "repeat-x",
            }} />

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: isMobile ? 8 : 12, textAlign: "left",
                padding: isMobile ? "8px" : "12px", borderRadius: 14,
                background: mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.65)",
                border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.95)"}`,
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{
                flexShrink: 0, width: isMobile ? 28 : 36, height: isMobile ? 28 : 36, borderRadius: 10,
                background: mode === "dark" ? "linear-gradient(135deg, #3D2418, #4A2E1E)" : "linear-gradient(135deg, #FFD9C2, #FFB58F)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: isMobile ? 14 : 18,
                boxShadow: "0 4px 12px rgba(200,100,50,0.25), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}>👨‍🎓</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Inter", fontSize: isMobile ? 6.5 : 7.5, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: theme.inkMute, opacity: mode === "dark" ? 1 : 0.7, marginBottom: 3 }}>
                  Master's
                </div>
                <div style={{ fontFamily: "Inter", fontSize: isMobile ? 9.5 : 11, fontWeight: 700, color: theme.ink, lineHeight: 1.2, marginBottom: 6 }}>
                  Human-Centered Computing
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "'SF Mono', monospace", fontSize: 8.5, fontWeight: 600,
                  color: mode === "dark" ? "#FFB58F" : "#D4733A",
                  background: mode === "dark" ? "rgba(255,160,100,0.15)" : "rgba(255,160,100,0.22)",
                  borderRadius: 999, padding: "3px 8px", whiteSpace: "nowrap"
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: mode === "dark" ? "#FFB58F" : "#D4733A" }} />
                  2023 - 2025
                </div>
              </div>
            </motion.div>
          </HeroCard>

          {/* Sticky note (experience) */}
          <HeroCard
            isMobile={isMobile} floatDelay={0.2} floatDuration={3.5} parallaxY={parallax3}
            initial={{ opacity: 0, scale: isMobile ? 0.75 : 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: isMobile ? 0.85 : 1, rotate: -3 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            drag={!isMobile} dragMomentum dragElastic={0.18}
            whileHover={isMobile ? undefined : { scale: 1.15, zIndex: 25, rotate: -1, transition: { type: "spring", stiffness: 260, damping: 20 } }}
            whileTap={isMobile ? { scale: 0.97, rotate: -2 } : undefined}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            staticContent={
              <div style={{
                position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)",
                width: isMobile ? 40 : 56, height: isMobile ? 14 : 18,
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }} />
            }
            style={{
              zIndex: 7, cursor: isMobile ? "default" : "grab",
              right: isMobile ? "-1%" : "8%",
              bottom: isMobile ? 110 : 100,
              width: isMobile ? 180 : 260,
              padding: isMobile ? "8px 8px 6px" : "16px 16px 14px",
              background: `linear-gradient(170deg, ${theme.pastel3} 0%, #FFDFA0 100%)`,
              borderRadius: 4,
              boxShadow: "0 14px 30px rgba(120,80,0,0.18), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{
              position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)",
              width: isMobile ? 40 : 56, height: isMobile ? 14 : 18,
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }} />

            <div style={{ marginBottom: isMobile ? 8 : 14 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 16 : 24, fontWeight: 500, color: theme.accent, lineHeight: 1 }}>experience ✿</div>
            </div>

            {[
              { role: "UX Researcher", company: "UMBC", year: "Jan 2025 - Present", tint: "#E8A2A2" },
              { role: "UI/UX Designer", company: "KineticPotential", year: "Oct 2024 - Sept 2025", tint: "#A2C9E8" },
              { role: "Product Designer", company: "ToplineSwitchgear", year: "Jan 2021 - July 2023", tint: "#B5D8B0" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{
                  display: "flex", alignItems: "center", gap: isMobile ? 6 : 9,
                  padding: isMobile ? "4px 2px" : "6px 4px",
                  borderTop: i === 0 ? "none" : "1px dashed rgba(90,69,0,0.18)",
                }}
              >
                <div style={{
                  flexShrink: 0, width: isMobile ? 6 : 8, height: isMobile ? 6 : 8, borderRadius: 999,
                  background: item.tint,
                  boxShadow: `0 0 0 ${isMobile ? 1 : 2}px rgba(255,255,255,0.6)`,
                }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? 8.5 : 9.5, fontWeight: 700, color: "#3A2D00", lineHeight: 1.2 }}>{item.role}</div>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? 7 : 8.5, color: "#3A2D00", opacity: 0.85, lineHeight: 1.25 }}>@{item.company}</div>
                </div>
                <div style={{
                  fontFamily: "'SF Mono', monospace", fontSize: isMobile ? 5.5 : 6.5, fontWeight: 600,
                  color: "#3A2D00",
                  background: "rgba(255,255,255,0.5)",
                  padding: isMobile ? "2px 4px" : "2px 5px", borderRadius: 4,
                  whiteSpace: "nowrap",
                }}>{item.year}</div>
              </motion.div>
            ))}
          </HeroCard>

          {/* Photo board */}
          <HeroCard
            isMobile={isMobile} floatDelay={0.8} floatDuration={5} parallaxY={parallax4}
            initial={{ opacity: 0, y: 30, rotate: 5, scale: isMobile ? 0.85 : 1 }}
            animate={{ opacity: 1, y: 0, rotate: 5, scale: isMobile ? 0.85 : 1 }}
            transition={{ delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            drag={!isMobile} dragMomentum dragElastic={0.18}
            whileHover={isMobile ? undefined : { scale: 1.15, zIndex: 25, transition: { type: "spring", stiffness: 260, damping: 20 } }}
            whileTap={isMobile ? { scale: 0.97, rotate: 6 } : undefined}
            whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
            data-cursor="drag" data-cursor-label="Drag"
            style={{
              zIndex: 4, cursor: isMobile ? "default" : "grab",
              left: isMobile ? "1%" : "8%",
              bottom: isMobile ? 90 : 60,
              width: isMobile ? 130 : 200,
              padding: isMobile ? 8 : 14,
              background: mode === "dark" ? "#292936" : "#FFFFFF",
              borderRadius: isMobile ? 12 : 14, border: `1px solid ${theme.line}`,
              boxShadow: mode === "dark" ? "0 16px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 16px 50px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: isMobile ? 18 : 24, fontWeight: 500,
              color: theme.accent, opacity: mode === "dark" ? 1 : 0.9,
              marginBottom: isMobile ? 12 : 16, textAlign: "center"
            }}>
              what I love ✿
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 6 : 8 }}>
              {[
                { emoji: "🎨", label: "Design", bg: theme.pastel1 },
                { emoji: "✈️", label: "Travel", bg: theme.pastel2 },
                { emoji: "🎵", label: "Music", bg: theme.pastel5 },
                { emoji: "☕", label: "Tea & Coffee", bg: theme.pastel6 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    aspectRatio: "1/1", borderRadius: isMobile ? 8 : 10,
                    background: `linear-gradient(135deg, ${item.bg}, ${theme.pastel4})`,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    border: `1px solid rgba(255,255,255,0.15)`,
                  }}
                >
                  <span style={{ fontSize: isMobile ? 18 : 24, marginBottom: 2 }}>{item.emoji}</span>
                  <span style={{
                    fontFamily: "Inter", fontSize: isMobile ? 7.5 : 10, fontWeight: 700,
                    color: "rgba(0,0,0,0.75)", textAlign: "center", lineHeight: 1.1,
                    textTransform: "uppercase", letterSpacing: "0.02em"
                  }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </HeroCard>

          {/* Centered headline */}
          <div style={{
            position: "relative", zIndex: 10,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            minHeight: isMobile ? "92vh" : "85vh", textAlign: "center",
            pointerEvents: "none",
          }}>
            <Reveal delay={0.1}>
              <div style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 500, fontStyle: "italic", color: theme.inkMute, letterSpacing: "0.02em",
                marginBottom: 0, marginTop: isMobile ? 32 : 0,
              }}>
                Yachi Patel
              </div>
            </Reveal>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
              }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: isMobile ? "clamp(46px, 12vw, 64px)" : "clamp(48px, 8vw, 130px)",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: isMobile ? "-0.03em" : "-0.05em",
                color: theme.ink,
                margin: 0,
                textAlign: "center",
                maxWidth: "min(1100px, 92vw)",
              }}>
              <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } } }} style={{ display: "block" }}>
                <em style={{
                  fontFamily: "'Caveat', cursive", fontStyle: "normal",
                  fontWeight: 600, color: isPlayful ? theme.pastel5 : theme.accent,
                  fontSize: "0.85em", transition: "color 0.4s"
                }}>Creative</em>
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } } }} style={{ display: "block", marginTop: "-0.05em" }}>
                <span style={{ color: isPlayful ? theme.pastel5 : theme.accent, fontWeight: 800, transition: "color 0.4s" }}>PR</span>
                <span style={{
                  display: "inline-block", verticalAlign: "middle",
                  width: "clamp(50px, 6vw, 90px)", height: "clamp(28px, 3.2vw, 48px)",
                  borderRadius: 999, background: isPlayful ? theme.pastel5 : theme.accent,
                  position: "relative", margin: "0 -0.02em",
                  boxShadow: `0 4px 20px ${isPlayful ? theme.pastel5 : theme.accent}55`,
                  cursor: "pointer", transition: "background 0.4s",
                  pointerEvents: "auto",
                }}
                  onClick={() => setIsPlayful(!isPlayful)}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlayful(!isPlayful); }}
                  role="switch"
                  aria-checked={isPlayful}
                  aria-label="Toggle playful mode"
                >
                  <motion.div
                    animate={{ x: isPlayful ? "110%" : "15%", rotate: isPlayful ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      position: "absolute", top: "10%",
                      width: "clamp(22px, 2.6vw, 38px)", height: "clamp(22px, 2.6vw, 38px)",
                      borderRadius: 999,
                      background: mode === "dark" ? "#222" : "#fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                  />
                </span>
                <span style={{ color: isPlayful ? theme.pastel5 : theme.accent, fontWeight: 800, transition: "color 0.4s" }}>DUCT</span>
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } } }} style={{ display: "block", marginTop: "-0.05em" }}>
                DES
                <motion.span
                  animate={reduced ? { opacity: 1 } : { opacity: [1, 0.4, 1] }}
                  transition={reduced ? undefined : { duration: 1.2, repeat: Infinity }}
                  style={{
                    display: "inline-block", verticalAlign: "baseline",
                    color: mode === "dark" ? "#9B84E8" : "#7B5EA7", fontSize: "0.9em",
                  }}
                >
                  <MousePointer2 size="0.7em" style={{ display: "inline", verticalAlign: "baseline" }} />
                </motion.span>
                GNER
              </motion.span>
            </motion.h1>

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
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 24, pointerEvents: "auto" }}>
                <MagneticButton theme={theme} primary style={{ padding: "12px 22px", fontSize: 13 }} onClick={() => { setRoute("projects"); window.lenis?.scrollTo(0); }}>
                  See my work <ArrowRight size={14} />
                </MagneticButton>
                <MagneticButton theme={theme} style={{ padding: "12px 22px", fontSize: 13 }} onClick={() => { setRoute("about"); window.lenis?.scrollTo(0); }}>
                  About me
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.8}>
            <div style={{
              position: "relative", zIndex: 15,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              padding: isMobile ? "30px 0 24px" : "20px 0 40px",
            }}>
              <div style={{ fontFamily: "Inter", fontSize: 11, letterSpacing: "0.2em", color: theme.inkMute, textTransform: "uppercase" }}>
                Scroll
              </div>
              <motion.div
                animate={reduced ? { y: 0 } : { y: [0, 8, 0] }}
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

