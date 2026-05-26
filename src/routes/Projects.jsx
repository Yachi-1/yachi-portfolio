import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import { projects } from "../data/projects.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import GridPaper from "../components/GridPaper.jsx";

export default function Projects({ theme, mode, setRoute }) {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130, paddingBottom: 100, position: "relative" }}>
      <GridPaper theme={theme} />
      <section style={{ padding: isMobile ? "0 4vw 40px" : "0 6vw 60px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 28, color: theme.accent, marginBottom: 8 }}>
              selected work ✦
            </div>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(42px, 6vw, 84px)",
              fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink,
              margin: 0, lineHeight: 1.05,
            }}>
              Everything I've crafted so far.
            </h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: isMobile ? "0 4vw" : "0 6vw", position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: 1400, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: isMobile ? 24 : 32,
        }}>
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProjectCard p={p} theme={theme} mode={mode} setRoute={setRoute} isMobile={isMobile} isTablet={isTablet} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ p, theme, mode, setRoute, isMobile, isTablet }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={() => {
        if (p.pdfLink) {
          window.open(p.pdfLink, "_blank");
        } else {
          setRoute(`project:${p.id}`);
          window.lenis?.scrollTo(0);
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        borderRadius: isMobile ? 18 : 22,
        overflow: "hidden",
        background: theme.card,
        border: `1px solid ${isHovered ? theme.accent + "40" : theme.line}`,
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        boxShadow: isHovered
          ? (mode === "dark"
            ? `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${theme.accent}25`
            : `0 20px 50px rgba(0,0,0,0.1), 0 0 0 1px ${theme.accent}20`)
          : (mode === "dark"
            ? "0 4px 20px rgba(0,0,0,0.3)"
            : "0 4px 20px rgba(0,0,0,0.03)"),
      }}
      data-magnet="0"
      data-cursor="view"
      data-cursor-label="View"
    >
      {/* Image */}
      <div style={{
        width: "100%",
        aspectRatio: "1/1",
        background: `linear-gradient(135deg, ${theme[p.color1]}, ${theme[p.color2]})`,
        position: "relative",
        overflow: "hidden",
      }}>
        <ProjectVisual project={p} theme={theme} hover={isHovered} />



        {/* Hover arrow */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute", bottom: 16, right: 16,
            width: 42, height: 42, borderRadius: 999,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          }}
        >
          <ArrowRight size={16} color="#1A1A1A" />
        </motion.div>
      </div>

      {/* Info */}
      <div style={{ padding: isMobile ? "16px 16px 20px" : "20px 22px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
        {/* Title + year */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <h3 style={{
            fontFamily: "Inter", fontSize: isMobile ? 17 : isTablet ? 19 : 20,
            fontWeight: 600, letterSpacing: "-0.02em",
            color: isHovered ? theme.accent : theme.ink,
            margin: 0, lineHeight: 1.2,
            transition: "color 0.3s ease",
          }}>{p.title}</h3>
          <span style={{
            fontFamily: "JetBrains Mono, monospace", fontSize: 11,
            fontWeight: 500, color: theme.inkMute,
            padding: "3px 8px", borderRadius: 6,
            background: theme.bgAlt,
            flexShrink: 0,
          }}>{p.year}</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontFamily: "'Caveat', cursive", fontSize: 16,
          color: theme.accent, lineHeight: 1.2,
        }}>{p.subtitle}</div>
      </div>
    </motion.div>
  );
}
