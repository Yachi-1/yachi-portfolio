import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";
import ProjectVisual from "./ProjectVisual.jsx";
import { projects } from "../data/projects.js";

const SCATTER_POSITIONS = [
  { x: -420, y: -360 },
  { x: 0, y: -460 },
  { x: 420, y: -360 },
  { x: -540, y: -20 },
  { x: 540, y: -20 },
  { x: -420, y: 340 },
  { x: 0, y: 440 },
  { x: 420, y: 340 },
];

export default function FolderProjects({ theme, mode, setRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section style={{ padding: "140px 6vw", position: "relative", textAlign: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", width: "100%", zIndex: 1 }}>
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: theme.accent, marginBottom: 4 }}>
              selected work ✦
            </div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
              margin: 0, lineHeight: 1,
            }}>
              Things I've designed.
            </h2>
          </div>
        </Reveal>

        <div style={{
          background: theme.card, borderRadius: 32,
          border: `1px solid ${theme.line}`,
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
          minHeight: isOpen ? 1100 : 600,
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          padding: isOpen ? "80px 60px" : "40px",
          maxWidth: 1200,
          margin: "0 auto"
        }}>
          <div style={{
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", height: "100%",
          }}>
            <motion.div
              animate={{ scale: isOpen ? 0.9 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                position: "relative",
                width: "100%", maxWidth: 380, height: 240,
                cursor: "pointer",
                zIndex: 50,
                display: "flex", justifyContent: "center"
              }}
            >
              <div style={{
                position: "absolute", bottom: 0, width: "100%", height: 220,
                background: "linear-gradient(180deg, #A895FF 0%, #8D74FA 100%)",
                borderRadius: "0 24px 24px 24px",
                boxShadow: "inset 0 4px 10px rgba(255,255,255,0.4), 0 10px 40px rgba(141, 116, 250, 0.25)",
                zIndex: 1
              }}>
                <div style={{
                  position: "absolute", top: -20, left: 0, width: 140, height: 20,
                  background: "linear-gradient(180deg, #B5A4FF 0%, #A895FF 100%)",
                  borderRadius: "20px 20px 0 0",
                  boxShadow: "inset 0 4px 8px rgba(255,255,255,0.4)"
                }} />
              </div>

              <AnimatePresence>
                {projects.map((p, i) => {
                  const numProjects = projects.length || 1;
                  const spreadRange = 260;
                  const startX = -(spreadRange / 2);
                  const stepX = spreadRange / (numProjects - 1 || 1);

                  const closedX = startX + (i * stepX);
                  const closedY = -75 + (Math.sin(i) * 8);
                  const closedRotate = (i - numProjects / 2) * 2;

                  const floatY = [0, -10, 0];
                  const floatDuration = 3 + (i % 3);

                  return (
                    <motion.div
                      key={p.id}
                      onClick={(e) => {
                        if (isOpen) {
                          e.stopPropagation();
                          setRoute(`project:${p.id}`);
                        }
                      }}
                      initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: isOpen ? SCATTER_POSITIONS[i]?.x || 0 : closedX,
                        y: isOpen ? SCATTER_POSITIONS[i]?.y || 0 : closedY,
                        rotate: isOpen ? 0 : closedRotate,
                        scale: isOpen ? 1 : 0.75,
                        zIndex: isOpen ? 40 : 2
                      }}
                      transition={{
                        type: "spring", stiffness: 180, damping: 22,
                        delay: isOpen ? i * 0.05 : 0
                      }}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        cursor: "pointer",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                        pointerEvents: isOpen ? "auto" : "none",
                        transformOrigin: "bottom center"
                      }}
                    >
                      <motion.div
                        animate={isOpen ? { y: floatY } : {}}
                        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={isOpen ? { scale: 1.05 } : {}}
                      >
                        <div style={{
                          width: 150, height: 150, borderRadius: 20,
                          background: `linear-gradient(135deg, ${theme[p.color1]}, ${theme[p.color2]})`,
                          boxShadow: mode === "dark" ? "0 20px 40px rgba(0,0,0,0.4)" : "0 14px 30px rgba(0,0,0,0.1)",
                          position: "relative", overflow: "hidden",
                          border: `1px solid ${theme.line}`
                        }}>
                          <ProjectVisual project={p} theme={theme} hover={false} />
                        </div>

                        <motion.div
                          animate={{ opacity: isOpen ? 1 : 0 }}
                          style={{
                            fontFamily: "Inter", fontSize: 14, fontWeight: 500, color: theme.ink,
                            textAlign: "center", marginTop: 12
                          }}
                        >
                          {p.title}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              <motion.div
                animate={{ rotateX: isOpen ? -20 : 0, y: isOpen ? 10 : 0 }}
                style={{
                  position: "absolute", bottom: 0, width: "100%", height: 170,
                  background: "linear-gradient(180deg, #B5A4FF 0%, #8D74FA 100%)",
                  borderRadius: 24,
                  boxShadow: "inset 0 4px 14px rgba(255,255,255,0.6), inset 0 -4px 10px rgba(0,0,0,0.1), 0 -4px 15px rgba(0,0,0,0.1)",
                  zIndex: 3,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transformOrigin: "bottom center"
                }}
              >
                <div style={{
                  fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: "white",
                  background: "rgba(255, 255, 255, 0.35)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  padding: "12px 32px", borderRadius: 999,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.08), inset 0 2px 8px rgba(255,255,255,0.6)",
                  display: "flex", alignItems: "center", gap: 8
                }}>
                  {isOpen ? "Close portfolio" : "Open portfolio ✿"}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
