import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";
import ProjectVisual from "./ProjectVisual.jsx";
import GridPaper from "./GridPaper.jsx";
import { projects } from "../data/projects.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

const SCATTER_POSITIONS = [
  { x: -220, y: -360 }, // Top-Left
  { x: 220, y: -360 },  // Top-Right
  { x: 480, y: 0 },     // Middle-Right
  { x: 220, y: 360 },   // Bottom-Right
  { x: -220, y: 360 },  // Bottom-Left
  { x: -480, y: 0 },    // Middle-Left
  { x: 0, y: -460 },    // Fallback if 7th project is added
  { x: 0, y: 460 },     // Fallback if 8th project is added
];

const STICKERS = [];

export default function FolderProjects({ theme, mode, setRoute }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <section style={{
      padding: isMobile ? "100px 4vw" : "140px 6vw",
      position: "relative", textAlign: "center"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", width: "100%", zIndex: 1 }}>
        <Reveal>
          <div style={{ marginBottom: isMobile ? 28 : 40 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 26, color: theme.accent, marginBottom: 4 }}>
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

        {isMobile ? (
          <MobileFolder
            theme={theme}
            mode={mode}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setRoute={setRoute}
          />
        ) : (
          <DesktopFolder
            theme={theme}
            mode={mode}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setRoute={setRoute}
          />
        )}

        <p style={{
          fontFamily: "Inter", fontSize: 12, color: theme.inkMute,
          marginTop: isMobile ? 24 : 32, textAlign: "center"
        }}>
          {isOpen ? "A collection of my selected work." : "Click on the portfolio folder to view all projects."}
        </p>
      </div>
    </section>
  );
}

function DesktopFolder({ theme, mode, isOpen, setIsOpen, setRoute }) {
  return (
    <div style={{
      background: `radial-gradient(circle at 20% 20%, ${theme.pastel2}28 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${theme.pastel1}22 0%, transparent 50%), ${theme.card}`,
      borderRadius: 32,
      border: `1px solid ${theme.line}`,
      position: "relative",
      overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
      minHeight: isOpen ? 1100 : 600,
      transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
      padding: isOpen ? "80px 60px" : "40px",
      maxWidth: 1200,
      margin: "0 auto"
    }}>
      <GridPaper theme={theme} noMask={true} />
      {/* Moodboard stickers - only visible when closed */}
      <AnimatePresence>
        {!isOpen && STICKERS.map((s, i) => (
          <StickerElement key={i} sticker={s} mode={mode} theme={theme} index={i} />
        ))}
      </AnimatePresence>

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
          data-magnet="0.1"
          data-cursor="view"
          data-cursor-label={isOpen ? "Close" : "Open"}
        >
          <FolderBack />

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
                <DesktopProjectItem
                  key={p.id} p={p} i={i} isOpen={isOpen}
                  floatY={floatY} floatDuration={floatDuration}
                  theme={theme} mode={mode}
                  closedX={closedX} closedY={closedY} closedRotate={closedRotate}
                  setRoute={setRoute}
                />
              );
            })}
          </AnimatePresence>

          <FolderFront isOpen={isOpen} />
        </motion.div>
      </div>
    </div>
  );
}

function StickerElement({ sticker: s, mode, theme, index }) {
  const darkFilter = mode === "dark" ? "brightness(0.85) saturate(0.8)" : "none";

  const baseStyle = {
    position: "absolute",
    zIndex: 2,
    rotate: s.style.rotate || "0deg",
    pointerEvents: "none",
    userSelect: "none",
    filter: darkFilter,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{
        delay: index * 0.06,
        type: "spring", stiffness: 260, damping: 20
      }}
      style={{
        ...baseStyle,
        top: s.style.top,
        bottom: s.style.bottom,
        left: s.style.left,
        right: s.style.right,
        transform: `rotate(${s.style.rotate || "0deg"})`,
      }}
    >
      {s.type === "badge" && (
        <div style={{
          background: mode === "dark" ? "rgba(255,214,224,0.15)" : s.style.background,
          color: mode === "dark" ? theme.pastel1 : s.style.color,
          border: mode === "dark" ? `1.5px solid ${theme.pastel1}40` : s.style.border,
          fontFamily: s.style.fontFamily, fontWeight: s.style.fontWeight,
          fontSize: s.style.fontSize, padding: s.style.padding,
          borderRadius: s.style.borderRadius,
          boxShadow: mode === "dark" ? "0 4px 16px rgba(0,0,0,0.3)" : s.style.boxShadow,
          whiteSpace: "nowrap",
        }}>
          {s.text}
        </div>
      )}

      {s.type === "text" && (
        <div style={{
          fontFamily: s.style.fontFamily, fontWeight: s.style.fontWeight,
          fontSize: s.style.fontSize,
          color: mode === "dark" ? theme.inkSoft : s.style.color,
        }}>
          {s.text}
        </div>
      )}

      {s.type === "circle" && (
        <div style={{
          width: s.style.width, height: s.style.height,
          background: mode === "dark" ? "rgba(255,220,160,0.12)" : s.style.background,
          border: mode === "dark" ? "2px solid rgba(255,200,140,0.2)" : s.style.border,
          borderRadius: s.style.borderRadius,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28,
        }}>
          {s.emoji}
        </div>
      )}

      {(s.type === "shape" || s.type === "heart") && (
        <div style={{
          fontSize: s.style.fontSize,
          color: mode === "dark"
            ? (s.style.color === "#8D74FA" ? theme.pastel5 : theme.inkSoft)
            : s.style.color,
        }}>
          {s.emoji}
        </div>
      )}

      {s.type === "sticky" && (
        <div style={{
          width: s.style.width,
          background: mode === "dark" ? "#1E1E2A" : s.style.background,
          boxShadow: mode === "dark" ? "0 4px 20px rgba(0,0,0,0.4)" : s.style.boxShadow,
          border: mode === "dark" ? "1px solid rgba(255,255,255,0.08)" : s.style.border,
          fontFamily: s.style.fontFamily, fontSize: s.style.fontSize,
          color: mode === "dark" ? theme.inkSoft : s.style.color,
          padding: s.style.padding, borderRadius: s.style.borderRadius,
          lineHeight: s.style.lineHeight,
          whiteSpace: "pre-line",
        }}>
          {s.text}
        </div>
      )}

    </motion.div>
  );
}

function MobileFolder({ theme, mode, isOpen, setIsOpen, setRoute }) {
  return (
    <div style={{
      background: `radial-gradient(circle at 20% 20%, ${theme.pastel2}28 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${theme.pastel1}22 0%, transparent 50%), ${theme.card}`,
      borderRadius: 24,
      border: `1px solid ${theme.line}`,
      position: "relative", overflow: "hidden",
      boxShadow: "0 16px 32px rgba(0,0,0,0.04)",
      padding: isOpen ? "40px 0 50px" : "30px 0",
      transition: "padding 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    }}>
      <GridPaper theme={theme} noMask={true} />

      <motion.div
        animate={{ scale: isOpen ? 0.92 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "relative",
          width: "min(260px, 80%)", height: 170,
          margin: "0 auto",
          cursor: "pointer",
          zIndex: 5,
          display: "flex", justifyContent: "center"
        }}
        data-magnet="0.1"
        data-cursor="view"
        data-cursor-label={isOpen ? "Close" : "Open"}
      >
        <FolderBack scale={0.7} />

        {!isOpen && projects.slice(0, 5).map((p, i) => {
          const numProjects = 5;
          const spreadRange = 160;
          const startX = -(spreadRange / 2);
          const stepX = spreadRange / (numProjects - 1 || 1);
          const closedX = startX + (i * stepX);
          const closedY = -60 + (Math.sin(i) * 6);
          const closedRotate = (i - numProjects / 2) * 2;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: closedX, y: closedY, rotate: closedRotate }}
              style={{
                position: "absolute", bottom: 0,
                pointerEvents: "none",
                transformOrigin: "bottom center",
              }}
            >
              <ProjectThumb p={p} theme={theme} mode={mode} size={90} />
            </motion.div>
          );
        })}

        <FolderFront isOpen={isOpen} compact />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: 30,
              display: "flex",
              gap: 14,
              overflowX: "auto",
              overflowY: "hidden",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingInline: "calc(50% - 90px)",
              paddingBottom: 12,
              scrollbarWidth: "none",
            }}
          >
            {projects.map((p, i) => (
              <MobileProjectItem key={p.id} p={p} i={i} theme={theme} mode={mode} setRoute={setRoute} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectThumb({ p, theme, mode, size = 150, isHovered = false }) {
  const r = Math.round(size * 0.13);
  return (
    <div style={{
      width: size, height: size, borderRadius: r,
      background: `linear-gradient(135deg, ${theme[p.color1]}, ${theme[p.color2]})`,
      boxShadow: mode === "dark"
        ? "none"
        : (isHovered ? "0 20px 40px rgba(0,0,0,0.2)" : "0 12px 24px rgba(0,0,0,0.1)"),
      border: mode === "dark" ? "1.5px solid rgba(255,255,255,0.25)" : "none",
      position: "relative", overflow: "hidden",
      transition: "all 0.3s ease"
    }}>
      <ProjectVisual project={p} theme={theme} hover={isHovered} />
    </div>
  );
}

function DesktopProjectItem({ p, i, isOpen, floatY, floatDuration, theme, mode, closedX, closedY, closedRotate, setRoute }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onClick={(e) => {
        if (isOpen) {
          e.stopPropagation();
          if (p.pdfLink) window.open(p.pdfLink, "_blank");
          else setRoute(`project:${p.id}`);
        }
      }}
      initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
      animate={{
        opacity: 1,
        x: isOpen ? SCATTER_POSITIONS[i]?.x || 0 : closedX,
        y: isOpen ? SCATTER_POSITIONS[i]?.y || 0 : closedY,
        rotate: isOpen ? 0 : closedRotate,
        scale: isOpen ? 1 : 0.75,
        zIndex: isOpen ? (isHovered ? 50 : 40) : 2
      }}
      transition={{
        type: "spring", stiffness: 180, damping: 22,
        delay: isOpen ? i * 0.05 : 0
      }}
      style={{
        position: "absolute", bottom: 0, cursor: "pointer",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
        pointerEvents: isOpen ? "auto" : "none",
        transformOrigin: "bottom center"
      }}
      onHoverStart={() => isOpen && setIsHovered(true)}
      onHoverEnd={() => isOpen && setIsHovered(false)}
      data-magnet="0"
      data-cursor="view"
      data-cursor-label="View"
    >
      <motion.div
        animate={isOpen ? { y: floatY } : {}}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
        whileHover={isOpen ? { scale: 1.05 } : {}}
      >
        <ProjectThumb p={p} theme={theme} mode={mode} size={150} isHovered={isHovered} />
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          style={{
            fontFamily: "Inter", fontSize: 14, fontWeight: 500,
            color: isHovered ? theme.accent : theme.ink,
            textAlign: "center", marginTop: 12,
            transition: "color 0.3s ease"
          }}
        >
          {p.title}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function MobileProjectItem({ p, i, theme, mode, setRoute }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      onClick={() => {
        if (p.pdfLink) window.open(p.pdfLink, "_blank");
        else setRoute(`project:${p.id}`);
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 200, damping: 22 }}
      whileTap={{ scale: 0.96 }}
      style={{
        flexShrink: 0, width: 180, scrollSnapAlign: "center",
        background: "transparent", border: "none", padding: 0, cursor: "pointer",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      }}
      data-magnet="0"
      data-cursor="view"
      data-cursor-label="View"
    >
      <ProjectThumb p={p} theme={theme} mode={mode} size={170} isHovered={isHovered} />
      <div style={{
        fontFamily: "Inter", fontSize: 14, fontWeight: 500,
        color: isHovered ? theme.accent : theme.ink, textAlign: "center", lineHeight: 1.2,
        transition: "color 0.3s ease"
      }}>
        {p.title}
      </div>
      <div style={{
        fontFamily: "Inter", fontSize: 11, color: theme.inkMute,
        letterSpacing: "0.02em",
      }}>
        {p.domain}
      </div>
    </motion.button>
  );
}

function FolderBack({ scale = 1 }) {
  const tabW = Math.round(140 * scale);
  return (
    <div style={{
      position: "absolute", bottom: 0, width: "100%", height: Math.round(220 * scale),
      background: "linear-gradient(180deg, #A895FF 0%, #8D74FA 100%)",
      borderRadius: "0 24px 24px 24px",
      boxShadow: "inset 0 4px 10px rgba(255,255,255,0.4), 0 10px 40px rgba(141, 116, 250, 0.25)",
      zIndex: 1
    }}>
      <div style={{
        position: "absolute", top: -Math.round(20 * scale), left: 0,
        width: tabW, height: Math.round(20 * scale),
        background: "linear-gradient(180deg, #B5A4FF 0%, #A895FF 100%)",
        borderRadius: "20px 20px 0 0",
        boxShadow: "inset 0 4px 8px rgba(255,255,255,0.4)"
      }} />
    </div>
  );
}

function FolderFront({ isOpen, compact }) {
  const height = compact ? 120 : 170;
  const padding = compact ? "10px 22px" : "12px 32px";
  const fontSize = compact ? 14 : 16;
  return (
    <motion.div
      animate={{ rotateX: isOpen ? -20 : 0, y: isOpen ? 10 : 0 }}
      style={{
        position: "absolute", bottom: 0, width: "100%", height,
        background: "linear-gradient(180deg, #B5A4FF 0%, #8D74FA 100%)",
        borderRadius: 24,
        boxShadow: "inset 0 4px 14px rgba(255,255,255,0.6), inset 0 -4px 10px rgba(0,0,0,0.1), 0 -4px 15px rgba(0,0,0,0.1)",
        zIndex: 3,
        display: "flex", alignItems: "center", justifyContent: "center",
        transformOrigin: "bottom center"
      }}
    >
      <div style={{
        fontFamily: "Inter", fontSize, fontWeight: 600, color: "white",
        background: "rgba(255, 255, 255, 0.35)",
        border: "1px solid rgba(255,255,255,0.5)",
        padding, borderRadius: 999,
        boxShadow: "0 8px 16px rgba(0,0,0,0.08), inset 0 2px 8px rgba(255,255,255,0.6)",
        display: "flex", alignItems: "center", gap: 8
      }}>
        {isOpen ? "Close portfolio" : "Open portfolio ✿"}
      </div>
    </motion.div>
  );
}
