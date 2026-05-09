import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";

export default function ProjectCard({ project, theme, mode, setRoute, large }) {
  const [hover, setHover] = useState(false);
  const c1 = theme[project.color1];
  const c2 = theme[project.color2];

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setRoute(`project:${project.id}`)}
      data-magnet="0.1"
      data-cursor="view"
      data-cursor-label="View"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        position: "relative", overflow: "hidden",
        borderRadius: 24,
        border: `1px solid ${theme.line}`,
        background: theme.card,
        cursor: "pointer",
        height: large ? 540 : 420,
        display: "flex", flexDirection: "column",
        boxShadow: hover
          ? (mode === "dark" ? "0 30px 80px rgba(0,0,0,0.5)" : "0 30px 80px rgba(0,0,0,0.12)")
          : "0 8px 24px rgba(0,0,0,0.04)",
        transition: "box-shadow .4s ease",
      }}
    >
      <div style={{
        position: "relative", flex: 1, overflow: "hidden",
        background: `linear-gradient(135deg, ${c1}, ${c2})`,
      }}>
        <ProjectVisual project={project} theme={theme} hover={hover} />

        <motion.div
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, ${c1}cc, ${c2}cc)`,
            mixBlendMode: "soft-light",
            pointerEvents: "none",
          }}
        />

        <div style={{
          position: "absolute", top: 18, left: 18,
          padding: "6px 10px", borderRadius: 999,
          background: mode === "dark" ? "rgba(20,20,26,0.85)" : "rgba(255,255,255,0.85)",
          border: `1px solid ${theme.line}`,
          fontFamily: "Inter", fontSize: 11, fontWeight: 600, color: theme.ink,
          letterSpacing: "0.02em",
        }}>
          {project.tag}
        </div>
        <div style={{
          position: "absolute", top: 18, right: 18,
          fontFamily: "'Caveat', cursive", fontSize: 22, color: "rgba(0,0,0,0.55)",
        }}>
          {project.year}
        </div>
      </div>

      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <h3 style={{
            fontFamily: "Inter", fontSize: large ? 32 : 24, fontWeight: 500,
            letterSpacing: "-0.03em", color: theme.ink, margin: 0, lineHeight: 1.05,
          }}>
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hover ? -45 : 0, scale: hover ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              width: 38, height: 38, borderRadius: 999,
              background: hover ? theme.ink : "transparent",
              border: `1px solid ${theme.ink}`,
              color: hover ? theme.bg : theme.ink,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: theme.inkSoft, fontFamily: "Inter", fontSize: 13.5 }}>
          <span>{project.subtitle}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: theme.inkMute }} />
          <span>{project.domain}</span>
        </div>
      </div>
    </motion.div>
  );
}
