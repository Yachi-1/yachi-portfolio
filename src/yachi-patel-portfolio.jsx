import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion";
import Lenis from "lenis";
import {
  Sun, Moon, ArrowUpRight, ArrowRight, Mail, Linkedin, Download, Check,
  Sparkles, MousePointer2, Heart, ChevronDown, ExternalLink, Quote, Layers,
  Zap, Eye, FileText, Briefcase, GraduationCap, FlaskConical, Palette,
  Code2, Search, Lightbulb, Users, Target, TrendingUp, ArrowLeft
} from "lucide-react";

// Assets
import heroImg from "./assets/IMG_1670.jpg";
import yachiImg1 from "./assets/Yachi_Image_1.jpeg";
import yachiImg2 from "./assets/Yachi_Image_2.jpg";

/* =========================================================
   YACHI PATEL · PORTFOLIO
   Editorial Collage meets Modern Tech
========================================================= */

// ---------- Theme Tokens ----------
const themes = {
  light: {
    bg: "#FAFAF7",
    bgAlt: "#F2EFE8",
    ink: "#1A1A1A",
    inkSoft: "#4A4A4A",
    inkMute: "#8A8A8A",
    line: "rgba(0,0,0,0.08)",
    card: "#FFFFFF",
    glass: "rgba(255,255,255,0.6)",
    grid: "rgba(0,0,0,0.04)",
    pastel1: "#FFD6E0", // pink
    pastel2: "#C8E6F5", // blue
    pastel3: "#FFE9B8", // yellow
    pastel4: "#D4F0D4", // green
    pastel5: "#E8DCFA", // lavender
    pastel6: "#FFD9C2", // peach
    accent: "#FF8FA3",
  },
  dark: {
    bg: "#0B0B0F",
    bgAlt: "#14141A",
    ink: "#F2F0E8",
    inkSoft: "#B8B5AC",
    inkMute: "#6E6B63",
    line: "rgba(255,255,255,0.08)",
    card: "#16161D",
    glass: "rgba(20,20,26,0.55)",
    grid: "rgba(255,255,255,0.04)",
    pastel1: "#FF9FB5", // luminescent pink
    pastel2: "#9DD4F0", // luminescent blue
    pastel3: "#FFD78A", // luminescent yellow
    pastel4: "#A8E6A8", // luminescent green
    pastel5: "#C9B6F5", // luminescent lavender
    pastel6: "#FFB58F", // luminescent peach
    accent: "#FF7A95",
  },
};

// ---------- Section Divider ----------
function SectionDivider({ theme }) {
  return (
    <div style={{ padding: "0 6vw" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${theme.line} 15%, ${theme.line} 85%, transparent)`,
        }} />
      </div>
    </div>
  );
}

// ---------- Magnetic Cursor (physics-based) ----------
function MagneticCursor({ theme }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 350, damping: 28, mass: 0.4 });
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35 });
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let target = null;
    const move = (e) => {
      setVisible(true);
      let x = e.clientX, y = e.clientY;
      // Magnetic attraction
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const magnet = el?.closest("[data-magnet]");
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const strength = parseFloat(magnet.dataset.magnet) || 0.35;
        x = e.clientX + (cx - e.clientX) * strength;
        y = e.clientY + (cy - e.clientY) * strength;
        target = magnet;
        setVariant(magnet.dataset.cursor || "hover");
        setLabel(magnet.dataset.cursorLabel || "");
      } else {
        target = null;
        setVariant("default");
        setLabel("");
      }
      cursorX.set(x);
      cursorY.set(y);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  const sizes = {
    default: { ring: 36, dot: 6 },
    hover: { ring: 64, dot: 8 },
    view: { ring: 92, dot: 0 },
    drag: { ring: 80, dot: 0 },
  };
  const s = sizes[variant] || sizes.default;

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          translateX: ringX, translateY: ringY,
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{ width: s.ring, height: s.ring, x: -s.ring / 2, y: -s.ring / 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            borderRadius: 999,
            border: `1.5px solid ${theme.ink}`,
            background: variant === "view" ? theme.ink : "transparent",
            color: theme.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.05em", textTransform: "uppercase",
            mixBlendMode: variant === "default" ? "difference" : "normal",
          }}
        >
          {label}
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          translateX: dotX, translateY: dotY,
          opacity: visible && s.dot > 0 ? 1 : 0,
        }}
      >
        <div style={{
          width: s.dot, height: s.dot, marginLeft: -s.dot / 2, marginTop: -s.dot / 2,
          borderRadius: 999, background: theme.ink,
          mixBlendMode: "difference",
        }} />
      </motion.div>
    </>
  );
}

// ---------- Animated Grid Paper Background ----------
function GridPaper({ theme }) {
  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      backgroundImage: `
        linear-gradient(${theme.grid} 1px, transparent 1px),
        linear-gradient(90deg, ${theme.grid} 1px, transparent 1px)
      `,
      backgroundSize: "44px 44px",
      maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
      pointerEvents: "none",
    }} />
  );
}

// ---------- Floating 3D-feel Blobs (CSS only, lightweight) ----------
function FloatingBlobs({ theme }) {
  const blobs = [
    { c: theme.pastel1, top: "10%", left: "8%", size: 280, dur: 18 },
    { c: theme.pastel2, top: "55%", left: "78%", size: 340, dur: 22 },
    { c: theme.pastel5, top: "75%", left: "12%", size: 220, dur: 20 },
    { c: theme.pastel3, top: "20%", left: "65%", size: 200, dur: 24 },
  ];
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: b.top, left: b.left,
            width: b.size, height: b.size, borderRadius: "50%",
            background: b.c, filter: "blur(60px)",
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  );
}

// ---------- Navigation ----------
function Nav({ theme, mode, setMode, route, setRoute }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "resume", label: "Resume" },
  ];
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: "fixed", top: 22, left: "50%", translateX: "-50%",
        zIndex: 100, display: "flex", alignItems: "center", gap: 8,
        padding: "8px 8px 8px 22px",
        background: theme.glass,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: `1px solid ${theme.line}`,
        borderRadius: 999,
        boxShadow: mode === "dark"
          ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      <button
        onClick={() => setRoute("home")}
        data-magnet="0.2"
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "transparent", border: "none", cursor: "pointer",
          fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700,
          color: theme.ink, paddingRight: 8,
        }}
      >
        <span style={{
          backgroundImage: `linear-gradient(135deg, ${theme.pastel1}, ${theme.accent})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          fontWeight: 800,
          fontSize: 24,
          fontFamily: "'Caveat', cursive",
          letterSpacing: "-0.02em",
          display: "inline-block",
          verticalAlign: "middle",
          padding: "0.2em 0.5em",
          margin: "-0.2em -0.5em",
          overflow: "visible",
        }}>YP</span>
      </button>
      <div style={{ width: 1, height: 22, background: theme.line }} />
      {items.map((it) => {
        const active = route === it.id;
        return (
          <button
            key={it.id}
            onClick={() => it.id === "resume" ? window.open("https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing", "_blank") : setRoute(it.id)}
            data-magnet="0.25"
            style={{
              position: "relative",
              padding: "8px 14px", borderRadius: 999, border: "none",
              background: active ? theme.ink : "transparent",
              color: active ? theme.bg : theme.inkSoft,
              fontFamily: "Inter, sans-serif", fontSize: 13.5, fontWeight: 500,
              cursor: "pointer", letterSpacing: "-0.01em",
              transition: "color .25s ease",
            }}
          >
            {it.label}
          </button>
        );
      })}
      <ThemeToggle theme={theme} mode={mode} setMode={setMode} />
    </motion.nav>
  );
}

// ---------- 3D-feel Theme Toggle ----------
function ThemeToggle({ theme, mode, setMode }) {
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      data-magnet="0.4"
      data-cursor="hover"
      aria-label="Toggle theme"
      style={{
        position: "relative",
        width: 56, height: 32, borderRadius: 999,
        border: `1px solid ${theme.line}`,
        background: mode === "light"
          ? `linear-gradient(135deg, ${theme.pastel2}, ${theme.pastel3})`
          : `linear-gradient(135deg, #1a1a2e, #16161d)`,
        cursor: "pointer", padding: 0, overflow: "hidden",
        boxShadow: `inset 0 2px 6px ${mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.5)"}`,
      }}
    >
      <motion.div
        animate={{ x: mode === "light" ? 2 : 26, rotate: mode === "light" ? 0 : 360 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        style={{
          position: "absolute", top: 2, left: 0,
          width: 28, height: 28, borderRadius: 999,
          background: mode === "light"
            ? `radial-gradient(circle at 30% 30%, #FFF8C4, #FFD66B)`
            : `radial-gradient(circle at 30% 30%, #E8E5DC, #B8B5AC)`,
          boxShadow: mode === "light"
            ? "0 2px 8px rgba(255,200,80,0.5), inset -2px -2px 4px rgba(0,0,0,0.08)"
            : "0 0 12px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(0,0,0,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {mode === "light" ? <Sun size={14} color="#8B5E00" /> : <Moon size={14} color="#2A2A35" />}
      </motion.div>
    </button>
  );
}

// ---------- Reveal on Scroll ----------
function Reveal({ children, delay = 0, y = 30, className, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ---------- Hero: Draggable Layered Cards (physics-based) ----------
function HeroCollage({ theme, mode }) {
  // Each card has a default home position; can be dragged and bumps via spring back.
  const cardDefs = [
    {
      id: "wave", x: -270, y: -140, rot: -8, w: 220, h: 140, z: 3,
      kind: "annotation",
    },
    {
      id: "thumb1", x: 240, y: -160, rot: 6, w: 240, h: 170, z: 4,
      kind: "thumb", color: theme.pastel2, label: "Nellis · Auction",
    },
    {
      id: "thumb2", x: -340, y: 90, rot: -5, w: 230, h: 160, z: 5,
      kind: "thumb", color: theme.pastel1, label: "Contrarian · Dashboard",
    },
    {
      id: "blob3d", x: 320, y: 110, rot: 0, w: 160, h: 160, z: 2,
      kind: "blob",
    },
    {
      id: "ui", x: 90, y: 180, rot: 4, w: 230, h: 90, z: 4,
      kind: "ui",
    },
    {
      id: "note", x: -120, y: -210, rot: -3, w: 170, h: 90, z: 5,
      kind: "note",
    },
  ];

  return (
    <div style={{
      position: "relative", width: "100%", height: 520,
      display: "flex", alignItems: "center", justifyContent: "center",
      pointerEvents: "auto",
    }}>
      {cardDefs.map((c, i) => (
        <DraggableCard key={c.id} def={c} theme={theme} mode={mode} delay={0.6 + i * 0.08} />
      ))}
    </div>
  );
}

function DraggableCard({ def, theme, mode, delay }) {
  const x = useMotionValue(def.x);
  const y = useMotionValue(def.y);
  const rot = useMotionValue(def.rot);
  const dragging = useRef(false);

  const onDragEnd = () => {
    dragging.current = false;
  };

  const content = (() => {
    if (def.kind === "thumb") {
      return (
        <div style={{
          width: "100%", height: "100%",
          background: `linear-gradient(135deg, ${def.color}, ${theme.pastel5})`,
          borderRadius: 14, overflow: "hidden", position: "relative",
          padding: 14, display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(0,0,0,0.18)" }} />)}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <div style={{ height: 8, width: 60, borderRadius: 4, background: "rgba(0,0,0,0.25)" }} />
            <div style={{ height: 8, width: 30, borderRadius: 4, background: "rgba(0,0,0,0.15)" }} />
            <div style={{ height: 8, width: 80, borderRadius: 4, background: "rgba(0,0,0,0.18)" }} />
          </div>
          <div style={{
            fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
            color: "rgba(0,0,0,0.7)", letterSpacing: "0.03em", textTransform: "uppercase",
          }}>{def.label}</div>
        </div>
      );
    }
    if (def.kind === "ui") {
      return (
        <div style={{
          width: "100%", height: "100%",
          background: theme.card, borderRadius: 14,
          border: `1px solid ${theme.line}`,
          padding: 14, display: "flex", alignItems: "center", gap: 12,
          boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.5)" : "0 12px 40px rgba(0,0,0,0.08)",
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: `linear-gradient(135deg, ${theme.pastel4}, ${theme.pastel2})`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Sparkles size={18} color={theme.ink} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: theme.ink }}>
              Research Insight
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, color: theme.inkMute, marginTop: 2 }}>
              Mixed-methods · 24 interviews
            </div>
          </div>
          <div style={{
            padding: "4px 8px", borderRadius: 999,
            background: theme.pastel3, fontFamily: "Inter", fontSize: 10, fontWeight: 600,
            color: "#7A5500",
          }}>+18%</div>
        </div>
      );
    }
    if (def.kind === "note") {
      return (
        <div style={{
          width: "100%", height: "100%",
          background: theme.pastel3,
          borderRadius: 4,
          padding: "12px 16px",
          transform: "rotate(0deg)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          fontFamily: "'Caveat', cursive", fontSize: 22,
          color: "#5A4500", lineHeight: 1.1,
          display: "flex", alignItems: "center",
        }}>
          design with intention ✦
        </div>
      );
    }
    if (def.kind === "annotation") {
      return (
        <div style={{
          width: "100%", height: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Caveat', cursive", fontSize: 28,
          color: theme.ink,
        }}>
          <svg width="100%" height="100%" viewBox="0 0 260 140" style={{ overflow: "visible" }}>
            <text x="20" y="40" fontFamily="Caveat, cursive" fontSize="26" fill={theme.ink}>thinking deeply</text>
            <text x="40" y="76" fontFamily="Caveat, cursive" fontSize="26" fill={theme.accent}>building intentionally</text>
            <path d="M 30 92 Q 80 110 140 100" stroke={theme.ink} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M 138 100 L 130 96 M 138 100 L 134 108" stroke={theme.ink} strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );
    }
    if (def.kind === "blob") {
      return (
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          background: `radial-gradient(circle at 35% 30%, ${theme.pastel5}, ${theme.pastel1} 60%, ${theme.accent})`,
          boxShadow: `0 20px 60px ${theme.pastel1}88, inset -10px -20px 40px rgba(0,0,0,0.12), inset 10px 10px 30px rgba(255,255,255,0.4)`,
        }} />
      );
    }
  })();

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 220, bounceDamping: 16 }}
      onDragStart={() => { dragging.current = true; }}
      onDragEnd={onDragEnd}
      whileHover={{ scale: 1.04, zIndex: 20 }}
      whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
      initial={{ opacity: 0, scale: 0.6, x: def.x, y: def.y, rotate: def.rot }}
      animate={{ opacity: 1, scale: 1, x: def.x, y: def.y, rotate: def.rot }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        width: def.w, height: def.h,
        zIndex: def.z,
        cursor: "grab",
        x, y, rotate: rot,
      }}
      data-magnet="0.15"
      data-cursor="drag"
      data-cursor-label="Drag"
    >
      {content}
    </motion.div>
  );
}

// ---------- Magnetic Button ----------
function MagneticButton({ children, onClick, theme, primary, label, big, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnet="0.4"
      data-cursor="hover"
      data-cursor-label={label || ""}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "relative",
        x: sx, y: sy,
        padding: big ? "20px 36px" : "14px 26px",
        borderRadius: 999,
        background: primary ? theme.ink : "transparent",
        color: primary ? theme.bg : theme.ink,
        border: primary ? "none" : `1.5px solid ${theme.ink}`,
        fontFamily: "Inter, sans-serif",
        fontSize: big ? 18 : 14,
        fontWeight: 600,
        letterSpacing: "-0.01em",
        cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 10,
        ...rest.style,
      }}
    >
      {children}
    </motion.button>
  );
}

function DesignerWorkspaceBackground({ theme, mode }) {
  const isDark = mode === "dark";
  const gridColor = isDark ? "rgba(168, 149, 255, 0.1)" : "rgba(168, 149, 255, 0.08)";
  const paperColor = isDark ? "#0B0B0F" : "#FAFAF7";

  return (
    <div style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      overflow: "hidden", zIndex: 0, pointerEvents: "none",
      background: paperColor,
    }}>
      {/* Grid Pattern */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        backgroundImage: `
          linear-gradient(${gridColor} 1px, transparent 1px),
          linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        opacity: 0.8,
      }} />

      {/* Floating Design Elements */}
      <div style={{ position: "relative", width: "100%", height: "100%", opacity: isDark ? 0.4 : 0.6 }}>
        {/* Figma-style Floating Panel */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "15%", right: "5%",
            width: 180, height: 240,
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)",
            backdropFilter: "blur(4px)",
            borderRadius: 8,
            border: `1px solid ${theme.line}`,
            padding: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            zIndex: 1,
            opacity: 0.6
          }}
        >
          <div style={{ width: "100%", height: 12, background: theme.line, borderRadius: 2, marginBottom: 16, opacity: 0.3 }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ width: "30%", height: 6, background: theme.line, borderRadius: 1, opacity: 0.2 }} />
              <div style={{ width: "50%", height: 6, background: theme.line, borderRadius: 1, opacity: 0.4 }} />
            </div>
          ))}
          <div style={{ marginTop: 20, width: "100%", height: 32, borderRadius: 4, background: theme.accent, opacity: 0.15 }} />
        </motion.div>

        {/* Sketchy Wireframe 1 */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-2, 0, -2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "10%", left: "5%",
            width: 200, height: 140,
            border: `1.5px solid ${theme.line}`,
            borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: 0.5
          }}
        >
          <div style={{ width: "80%", height: "80%", border: `1px dashed ${theme.line}`, position: "relative" }}>
            <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", borderTop: `1px solid ${theme.line}`, transform: "rotate(20deg)" }} />
            <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", borderTop: `1px solid ${theme.line}`, transform: "rotate(-20deg)" }} />
          </div>
        </motion.div>

        {/* Sticky Note 1 */}
        <motion.div
          animate={{ rotate: [5, 8, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "15%", left: "22%",
            width: 80, height: 80,
            background: theme.pastel6, // Yellow/Peach
            boxShadow: "2px 4px 10px rgba(0,0,0,0.05)",
            borderRadius: 2,
            padding: 8,
          }}
        >
          <div style={{ width: "60%", height: 2, background: "rgba(0,0,0,0.1)", marginBottom: 4 }} />
          <div style={{ width: "80%", height: 2, background: "rgba(0,0,0,0.1)", marginBottom: 4 }} />
          <div style={{ width: "40%", height: 2, background: "rgba(0,0,0,0.1)" }} />
        </motion.div>

        {/* Sketchy Wireframe 2 (Mobile) */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "50%", right: "8%",
            width: 100, height: 180,
            border: `1.5px solid ${theme.line}`,
            borderRadius: 12,
            padding: 10,
          }}
        >
          <div style={{ width: "100%", height: 20, border: `1px solid ${theme.line}`, borderRadius: 4, marginBottom: 8 }} />
          <div style={{ width: "100%", height: 60, border: `1px solid ${theme.line}`, borderRadius: 4, marginBottom: 8 }} />
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ flex: 1, height: 30, border: `1px solid ${theme.line}`, borderRadius: 2 }} />
            <div style={{ flex: 1, height: 30, border: `1px solid ${theme.line}`, borderRadius: 2 }} />
          </div>
        </motion.div>

        {/* Sticky Note 2 (Pink) */}
        <motion.div
          animate={{ rotate: [-4, -2, -4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", bottom: "20%", left: "15%",
            width: 90, height: 90,
            background: theme.pastel1, // Pink
            boxShadow: "2px 4px 10px rgba(0,0,0,0.05)",
            borderRadius: 2,
            transform: "rotate(-4deg)",
          }}
        />

        {/* Flowchart Snippet */}
        <div style={{ position: "absolute", bottom: "35%", left: "8%", opacity: 0.4 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div style={{ width: 60, height: 30, border: `1.5px solid ${theme.line}`, borderRadius: 4 }} />
            <div style={{ width: 1, height: 20, background: theme.line }} />
            <div style={{ width: 80, height: 40, border: `1.5px solid ${theme.line}`, transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ transform: "rotate(-45deg)", width: 20, height: 2, background: theme.line, opacity: 0.3 }} />
            </div>
            <div style={{ width: 1, height: 20, background: theme.line }} />
            <div style={{ display: "flex", gap: 30 }}>
              <div style={{ width: 50, height: 30, border: `1.5px solid ${theme.line}`, borderRadius: 4 }} />
              <div style={{ width: 50, height: 30, border: `1.5px solid ${theme.line}`, borderRadius: 4 }} />
            </div>
          </div>
        </div>

        {/* Cursor Icon */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "25%", right: "20%", zIndex: 10 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5.66 3L19 12L11 14L8 21L5.66 3Z" fill={theme.accent} stroke="white" strokeWidth="1.5" />
          </svg>
          <div style={{
            background: theme.accent, color: "white", padding: "2px 8px", borderRadius: 4,
            fontSize: 10, fontWeight: 600, marginTop: 4, whiteSpace: "nowrap"
          }}>
            Yachi P.
          </div>
        </motion.div>

        {/* Second Cursor (Collaborator) */}
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "10%", left: "30%", zIndex: 10, opacity: 0.8 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5.66 3L19 12L11 14L8 21L5.66 3Z" fill="#38BDF8" stroke="white" strokeWidth="1.5" />
          </svg>
          <div style={{
            background: "#38BDF8", color: "white", padding: "2px 8px", borderRadius: 4,
            fontSize: 10, fontWeight: 600, marginTop: 4, whiteSpace: "nowrap"
          }}>
            Dev Guy
          </div>
        </motion.div>

        {/* Vector Path with Control Points */}
        <div style={{ position: "absolute", bottom: "15%", right: "25%" }}>
          <svg width="200" height="100">
            <path d="M 10,80 C 40,10 160,10 190,80" fill="none" stroke={theme.pastel2} strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="10" cy="80" r="4" fill="white" stroke={theme.pastel2} />
            <circle cx="40" cy="10" r="4" fill={theme.accent} />
            <line x1="10" y1="80" x2="40" y2="10" stroke={theme.line} strokeWidth="0.5" />
            <circle cx="190" cy="80" r="4" fill="white" stroke={theme.pastel2} />
            <circle cx="160" cy="10" r="4" fill={theme.accent} />
            <line x1="190" y1="80" x2="160" y2="10" stroke={theme.line} strokeWidth="0.5" />
          </svg>
        </div>

        {/* Typography Specs */}
        <div style={{ position: "absolute", top: "5%", left: "40%", opacity: 0.5 }}>
          <div style={{ fontFamily: "Inter", fontSize: 10, color: theme.ink }}>
            <span style={{ fontWeight: 700 }}>H1 Inter Bold</span><br />
            48px / 1.2 line-height<br />
            -3.5% letter-spacing
          </div>
          <div style={{ marginTop: 20, width: 40, height: 1.5, background: theme.accent }} />
        </div>

        {/* Layout Grid Snippet */}
        <div style={{
          position: "absolute", top: 0, right: "15%", width: 120, height: "100%",
          display: "flex", gap: 12, opacity: 0.05
        }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ flex: 1, height: "100%", background: theme.accent }} />
          ))}
        </div>

        {/* Component Silhouettes */}
        <div style={{ position: "absolute", bottom: "10%", left: "5%", display: "flex", gap: 12, opacity: 0.5 }}>
          {/* Button */}
          <div style={{ width: 80, height: 32, borderRadius: 16, border: `1.5px solid ${theme.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 40, height: 4, background: theme.line, borderRadius: 2 }} />
          </div>
          {/* Toggle */}
          <div style={{ width: 48, height: 24, borderRadius: 12, background: theme.pastel5, position: "relative" }}>
            <div style={{ position: "absolute", top: 2, right: 2, width: 20, height: 20, borderRadius: "50%", background: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
          </div>
        </div>

        {/* Soft Interface Overlays (Artboards) */}
        <div style={{ position: "absolute", top: "10%", left: "10%", width: "80%", height: "80%", opacity: 0.03 }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 400, height: 600, border: `2px solid ${theme.ink}`, borderRadius: 20 }} />
          <div style={{ position: "absolute", top: 40, left: 40, width: 400, height: 600, border: `2px solid ${theme.ink}`, borderRadius: 20 }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 300, height: 500, border: `2px solid ${theme.ink}`, borderRadius: 20 }} />
        </div>

        {/* Prototyping Noodle */}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <motion.path
            d="M 200,600 C 400,600 400,300 600,300"
            fill="none"
            stroke="#38BDF8" // UI Blue
            strokeWidth="2"
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            strokeDasharray="8,4"
            opacity={0.3}
          />
          <circle cx="200" cy="600" r="4" fill="#38BDF8" opacity={0.3} />
          <circle cx="600" cy="300" r="4" fill="none" stroke="#38BDF8" strokeWidth="2" opacity={0.3} />
        </svg>

        {/* Component Card Snippet */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "45%", right: "25%",
            width: 140, height: 50,
            background: isDark ? "rgba(255,255,255,0.02)" : "white",
            borderRadius: 8,
            border: `1px solid ${theme.line}`,
            display: "flex", alignItems: "center", gap: 10, padding: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            opacity: 0.6
          }}
        >
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: theme.pastel3, opacity: 0.5 }} />
          <div style={{ flex: 1 }}>
            <div style={{ width: "80%", height: 4, background: theme.line, borderRadius: 2, marginBottom: 4, opacity: 0.4 }} />
            <div style={{ width: "50%", height: 4, background: theme.line, borderRadius: 2, opacity: 0.2 }} />
          </div>
        </motion.div>

        {/* Color Palette Strip */}
        <div style={{
          position: "absolute", top: "40%", left: "3%",
          display: "flex", flexDirection: "column", gap: 4
        }}>
          {[theme.pastel1, theme.pastel2, theme.pastel3, theme.pastel4, theme.pastel5, theme.pastel6].map((c, i) => (
            <div key={i} style={{ width: 24, height: 24, background: c, borderRadius: 2 }} />
          ))}
        </div>
      </div>

      {/* Fade at top/bottom */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        background: `linear-gradient(to bottom, ${paperColor} 0%, transparent 20%, transparent 80%, ${paperColor} 100%)`,
        zIndex: 1
      }} />
    </div>
  );
}

function FolderProjects({ theme, mode, setRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section style={{ padding: "140px 6vw", position: "relative", textAlign: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", width: "100%", zIndex: 1 }}>

        {/* Title */}
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

        {/* The "Square Thing" (Container Card) */}
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
          {/* Interactive Folder & Scattered Projects Area */}
          <div style={{
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", height: "100%",
          }}>

            {/* Center Folder & Projects Container */}
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
              {/* Folder Back */}
              <div style={{
                position: "absolute", bottom: 0, width: "100%", height: 220,
                background: "linear-gradient(180deg, #A895FF 0%, #8D74FA 100%)",
                borderRadius: "0 24px 24px 24px",
                boxShadow: "inset 0 4px 10px rgba(255,255,255,0.4), 0 10px 40px rgba(141, 116, 250, 0.25)",
                zIndex: 1
              }}>
                {/* Tab */}
                <div style={{
                  position: "absolute", top: -20, left: 0, width: 140, height: 20,
                  background: "linear-gradient(180deg, #B5A4FF 0%, #A895FF 100%)",
                  borderRadius: "20px 20px 0 0",
                  boxShadow: "inset 0 4px 8px rgba(255,255,255,0.4)"
                }} />
              </div>

              {/* Projects (Peeking or Floating) */}
              <AnimatePresence>
                {projects.map((p, i) => {
                  // Pre-calculated scattered positions (relative to folder center)
                  const scatterPositions = [
                    { x: -420, y: -360 }, // 0: Top left
                    { x: 0, y: -460 },    // 1: Top center
                    { x: 420, y: -360 },  // 2: Top right
                    { x: -540, y: -20 },  // 3: Middle left
                    { x: 540, y: -20 },   // 4: Middle right
                    { x: -420, y: 340 },  // 5: Bottom left
                    { x: 0, y: 440 },     // 6: Bottom center
                    { x: 420, y: 340 },   // 7: Bottom right
                  ];

                  // Spread closed cards across the length of the folder
                  const numProjects = projects.length || 1;
                  const spreadRange = 260; // Max spread width within the folder
                  const startX = -(spreadRange / 2);
                  const stepX = spreadRange / (numProjects - 1 || 1);

                  const closedX = startX + (i * stepX);
                  const closedY = -75 + (Math.sin(i) * 8); // Half-inside, half-outside look
                  const closedRotate = (i - numProjects / 2) * 2; // Fanning angle

                  // Slightly randomize floating animation
                  const floatY = [0, -10, 0];
                  const floatDuration = 3 + (i % 3);

                  return (
                    <motion.div
                      key={p.id}
                      onClick={(e) => {
                        if (isOpen) {
                          e.stopPropagation(); // Don't close folder when clicking a floating project
                          setRoute(`project:${p.id}`);
                        }
                      }}
                      initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: isOpen ? scatterPositions[i]?.x || 0 : closedX,
                        y: isOpen ? scatterPositions[i]?.y || 0 : closedY,
                        rotate: isOpen ? 0 : closedRotate,
                        scale: isOpen ? 1 : 0.75, // Scale down slightly more to fit horizontally
                        zIndex: isOpen ? 40 : 2
                      }}
                      transition={{
                        type: "spring", stiffness: 180, damping: 22,
                        delay: isOpen ? i * 0.05 : 0
                      }}
                      style={{
                        position: "absolute",
                        bottom: 0, // Anchor to bottom of folder for rotation
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

                        {/* Hide title when inside folder */}
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

              {/* Folder Front */}
              <motion.div
                animate={{ rotateX: isOpen ? -20 : 0, y: isOpen ? 10 : 0 }}
                style={{
                  position: "absolute", bottom: 0, width: "100%", height: 170,
                  background: "linear-gradient(180deg, #B5A4FF 0%, #8D74FA 100%)",
                  borderRadius: 24, // Softer 3D pillowy edges
                  boxShadow: "inset 0 4px 14px rgba(255,255,255,0.6), inset 0 -4px 10px rgba(0,0,0,0.1), 0 -4px 15px rgba(0,0,0,0.1)", // 3D highlight and shadow
                  zIndex: 3,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transformOrigin: "bottom center"
                }}
              >
                <div style={{
                  fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: "white",
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  padding: "12px 32px", borderRadius: 999,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.08), inset 0 2px 8px rgba(255,255,255,0.6)", // Soft 3D pill look
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

// ---------- HOME PAGE ----------
function Home({ theme, mode, setRoute }) {
  return (
    <div style={{ position: "relative", paddingTop: 110 }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", padding: "0 6vw", overflow: "hidden" }}>
        <GridPaper theme={theme} />
        <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto" }}>

          {/* ── Scattered floating artifact cards ── */}
          {/* Terminal card - top right */}
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

          {/* Badge card - top left */}
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
            {/* Header */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.inkMute, opacity: 0.8, lineHeight: 1 }}>education</div>
            </div>

            {/* B.Tech row */}
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

            {/* Dotted divider */}
            <div style={{
              height: 1, margin: "8px 4px",
              backgroundImage: `radial-gradient(circle, ${mode === "dark" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)"} 1px, transparent 1px)`,
              backgroundSize: "5px 1px", backgroundRepeat: "repeat-x", opacity: 0.6,
            }} />

            {/* M.S. row */}
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

          {/* Sticky note */}
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
            {/* Tape strip */}
            <div style={{
              position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)",
              width: 56, height: 18,
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              backdropFilter: "blur(2px)",
            }} />

            {/* Header */}
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

          {/* Photo board - bottom left */}
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

          {/* ── Main centered content ── */}
          <div style={{
            position: "relative", zIndex: 10,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            minHeight: "85vh", textAlign: "center",
          }}>
            {/* Handwritten name */}
            <Reveal delay={0.1}>
              <div style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 500, fontStyle: "italic", color: theme.inkMute, letterSpacing: "0.02em",
                marginBottom: 12,
              }}>
                Yachi Patel
              </div>
            </Reveal>

            {/* Bold headline with inline elements */}
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
                  {/* Toggle replacing O */}
                  <span style={{
                    display: "inline-block", verticalAlign: "middle",
                    width: "clamp(50px, 6vw, 90px)", height: "clamp(28px, 3.2vw, 48px)",
                    borderRadius: 999, background: theme.accent,
                    position: "relative", margin: "0 -0.02em",
                    boxShadow: `0 4px 20px ${theme.accent}55`,
                  }}>
                    <motion.div
                      animate={{ x: ["15%", "55%", "15%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
                  {/* Cursor replacing I */}
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
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

            {/* Tagline */}
            <Reveal delay={0.45}>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.4vw, 18px)",
                color: theme.inkSoft, maxWidth: 520, margin: "32px auto 0",
                lineHeight: 1.6, textAlign: "center",
              }}>
                Designing Digital Interfaces Since 2020
              </p>
            </Reveal>

            {/* CTA buttons */}
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

          {/* Scroll hint */}
          <Reveal delay={0.8}>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              padding: "20px 0 40px",
            }}>
              <div style={{ fontFamily: "Inter", fontSize: 11, letterSpacing: "0.2em", color: theme.inkMute, textTransform: "uppercase" }}>
                Scroll
              </div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={20} color={theme.inkMute} />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>





      <SectionDivider theme={theme} />

      {/* Interactive Folder Section */}
      <FolderProjects theme={theme} mode={mode} setRoute={setRoute} />

      <SectionDivider theme={theme} />

      {/* Approach */}
      <ApproachSection theme={theme} />
    </div>
  );
}


// ---------- Project data ----------
const projects = [
  {
    id: "nellis",
    title: "Nellis Auction",
    subtitle: "Website Redesign",
    domain: "E-commerce",
    year: "2024",
    tag: "Featured",
    color1: "pastel1",
    color2: "pastel5",
    description: "Reimagined the bidding experience for a fast-growing live-auction platform. Cut bid friction by 38% and lifted return-bidder rate.",
  },
  {
    id: "contrarian",
    title: "Contrarian Thinking",
    subtitle: "Deal Pipeline · Marketing Hub · AI Acquisition Matcher",
    domain: "AI / Enterprise",
    year: "2024",
    tag: "Suite",
    color1: "pastel2",
    color2: "pastel4",
    description: "Designed a four-product suite: deal pipeline dashboard, marketing hub, AI acquisition matcher, and sales funnel automation - all under one design system.",
  },
  {
    id: "herrmann",
    title: "Herrmann",
    subtitle: "Brand Book & Website",
    domain: "Brand · Web",
    year: "2024",
    tag: "Brand",
    color1: "pastel3",
    color2: "pastel6",
    description: "From brand foundations to a full marketing site - typography, motion, and a design system that scales across surfaces.",
  },
  {
    id: "vegas",
    title: "Vegas Ticket Company",
    subtitle: "UX Case Study",
    domain: "E-commerce",
    year: "2023",
    tag: "Research",
    color1: "pastel4",
    color2: "pastel2",
    description: "Mixed-methods research into ticket-buyer behavior, concluding in a redesigned discovery and checkout flow.",
  },
  {
    id: "float-draw",
    title: "Float Draw",
    subtitle: "Game UI Design",
    domain: "Game / Mobile",
    year: "2023",
    tag: "Playful",
    color1: "pastel5",
    color2: "pastel1",
    description: "A playful, tactile UI system for a casual mobile drawing game - buttons, HUD, onboarding, and reward screens.",
  },
  {
    id: "kinetic",
    title: "Kinetic Potential",
    subtitle: "Website Redesign",
    domain: "Education / Non-profit",
    year: "2023",
    tag: "Web",
    color1: "pastel6",
    color2: "pastel3",
    description: "A fresh, energetic identity and marketing site for a non-profit empowering refugee youth through tech careers.",
  },
  {
    id: "pennyjuice",
    title: "PennyJuice",
    subtitle: "Website Redesign",
    domain: "Healthcare / B2B",
    year: "2022",
    tag: "Web",
    color1: "pastel2",
    color2: "pastel3",
    description: "Modernized the storefront and ordering flow for a beverage manufacturer serving early-childhood programs.",
  },
  {
    id: "globalpayout",
    title: "Global Payout",
    subtitle: "App Design",
    domain: "Fintech",
    year: "2022",
    tag: "Mobile",
    color1: "pastel4",
    color2: "pastel5",
    description: "Mobile app design for a global cross-border payouts platform - onboarding, KYC, transfers, and analytics.",
  },
];

function ProjectCard({ project, theme, mode, setRoute, large }) {
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
      {/* Visual */}
      <div style={{
        position: "relative", flex: 1, overflow: "hidden",
        background: `linear-gradient(135deg, ${c1}, ${c2})`,
      }}>
        <ProjectVisual project={project} theme={theme} hover={hover} />

        {/* Hover wash */}
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

        {/* Tag */}
        <div style={{
          position: "absolute", top: 18, left: 18,
          padding: "6px 10px", borderRadius: 999,
          background: theme.glass, backdropFilter: "blur(10px)",
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

      {/* Meta */}
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

function ProjectVisual({ project, theme, hover }) {
  // Each project gets a tailored mini-visual
  const id = project.id;
  if (id === "nellis") return <VisualNellis theme={theme} hover={hover} />;
  if (id === "contrarian") return <VisualContrarian theme={theme} hover={hover} />;
  if (id === "herrmann") return <VisualHerrmann theme={theme} hover={hover} />;
  if (id === "vegas") return <VisualVegas theme={theme} hover={hover} />;
  if (id === "float-draw") return <VisualFloat theme={theme} hover={hover} />;
  if (id === "kinetic") return <VisualKinetic theme={theme} hover={hover} />;
  if (id === "pennyjuice") return <VisualPenny theme={theme} hover={hover} />;
  if (id === "globalpayout") return <VisualGlobal theme={theme} hover={hover} />;
  return null;
}

// ---------- Per-project visuals (custom illustrations) ----------
const visualCardStyle = (theme) => ({
  position: "absolute",
  background: theme.card === "#FFFFFF" ? "#FFFFFF" : "#1E1E26",
  borderRadius: 12,
  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
  overflow: "hidden",
  border: `1px solid rgba(0,0,0,0.06)`,
});

function VisualNellis({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <motion.div animate={{ y: hover ? -8 : 0, rotate: hover ? -2 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), top: 50, left: "10%", width: 220, height: 130, padding: 14 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#FF5F57" }} />
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#FFBD2E" }} />
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#28C940" }} />
        </div>
        <div style={{ height: 6, width: "70%", borderRadius: 4, background: "rgba(0,0,0,0.12)", marginBottom: 6 }} />
        <div style={{ height: 6, width: "50%", borderRadius: 4, background: "rgba(0,0,0,0.08)", marginBottom: 12 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
          {[0, 1, 2, 3, 4, 5].map(i => <div key={i} style={{ aspectRatio: "1/1", borderRadius: 6, background: i === 1 ? theme.accent : "rgba(0,0,0,0.08)" }} />)}
        </div>
      </motion.div>
      <motion.div animate={{ y: hover ? 8 : 0, rotate: hover ? 4 : 2 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), bottom: 30, right: "8%", width: 180, height: 90, padding: 12, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: theme.inkSoft }}>current bid</div>
        <div style={{ fontFamily: "Inter", fontSize: 24, fontWeight: 600, color: theme.ink }}>$1,240</div>
        <div style={{ height: 4, width: "100%", borderRadius: 999, background: "rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <div style={{ width: "68%", height: "100%", background: theme.accent }} />
        </div>
      </motion.div>
    </div>
  );
}

function VisualContrarian({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <motion.div animate={{ y: hover ? -6 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), top: 40, left: "12%", width: 280, height: 170, padding: 14 }}>
        <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, color: theme.inkSoft, marginBottom: 10 }}>DEAL PIPELINE</div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Sourcing", "Review", "Closing"].map((s, i) => (
            <div key={s} style={{ flex: 1 }}>
              <div style={{ fontFamily: "Inter", fontSize: 10, color: theme.inkMute, marginBottom: 6 }}>{s}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from({ length: 3 - i }).map((_, j) => (
                  <div key={j} style={{ height: 22, borderRadius: 6, background: i === 1 ? theme.accent + "55" : "rgba(0,0,0,0.06)", border: i === 1 ? `1px solid ${theme.accent}` : "1px solid rgba(0,0,0,0.06)" }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div animate={{ x: hover ? 6 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), bottom: 30, right: "10%", width: 160, height: 100, padding: 12, background: `linear-gradient(135deg, ${theme.pastel2}, ${theme.pastel4})` }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: "rgba(0,0,0,0.7)" }}>AI matcher</div>
        <div style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: "rgba(0,0,0,0.85)", marginTop: 6 }}>92% fit</div>
      </motion.div>
    </div>
  );
}

function VisualHerrmann({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div animate={{ scale: hover ? 1.05 : 1 }} transition={{ duration: 0.5 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{
          fontFamily: "Inter", fontSize: 88, fontWeight: 500, letterSpacing: "-0.06em",
          color: theme.ink, lineHeight: 0.9,
        }}>
          H<span style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, color: theme.accent }}>err</span>mann
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[theme.pastel1, theme.pastel3, theme.pastel4, theme.pastel2, theme.pastel5].map((c, i) => (
            <div key={i} style={{ width: 28, height: 28, borderRadius: 6, background: c, border: "1px solid rgba(0,0,0,0.05)" }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function VisualVegas({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 30 }}>
      <motion.div animate={{ rotate: hover ? -3 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), top: "20%", left: "15%", width: 240, height: 110, padding: 14 }}>
        <div style={{ fontFamily: "Inter", fontSize: 11, color: theme.inkMute, marginBottom: 4 }}>SAT · 8:00 PM</div>
        <div style={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 8 }}>Cirque du Soleil</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <div style={{ padding: "3px 8px", borderRadius: 999, background: theme.pastel1, fontFamily: "Inter", fontSize: 10, fontWeight: 600 }}>VIP</div>
          <div style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: theme.ink }}>$185</div>
        </div>
      </motion.div>
      <motion.div animate={{ rotate: hover ? 3 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), bottom: "15%", right: "15%", width: 180, height: 80, padding: 12, background: theme.pastel3 }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: "#7A5500" }}>only 3 seats left</div>
        <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
          {[0, 1, 2, 3, 4].map(i => <div key={i} style={{ width: 18, height: 18, borderRadius: 4, background: i < 3 ? "#7A5500" : "rgba(0,0,0,0.1)" }} />)}
        </div>
      </motion.div>
    </div>
  );
}

function VisualFloat({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div animate={{ rotate: hover ? 5 : 0, scale: hover ? 1.05 : 1 }} transition={{ duration: 0.5 }} style={{
        width: 200, height: 340, borderRadius: 32,
        background: theme.card, border: `2px solid rgba(0,0,0,0.1)`,
        padding: 16, position: "relative", overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      }}>
        <div style={{ width: 60, height: 6, borderRadius: 4, background: "rgba(0,0,0,0.15)", margin: "0 auto 16px" }} />
        <div style={{ background: `linear-gradient(135deg, ${theme.pastel2}, ${theme.pastel5})`, borderRadius: 16, height: 180, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, position: "relative", overflow: "hidden" }}>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} style={{ width: 60, height: 60, borderRadius: "50%", background: "white", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }} />
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: theme.pastel1 }} />
          <div style={{ width: 44, height: 44, borderRadius: 14, background: theme.ink }} />
          <div style={{ width: 44, height: 44, borderRadius: 14, background: theme.pastel4 }} />
        </div>
      </motion.div>
    </div>
  );
}

function VisualKinetic({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="80%" height="80%" viewBox="0 0 400 240" style={{ overflow: "visible" }}>
        <motion.path
          d="M 30 180 Q 100 30, 200 120 T 370 80"
          stroke={theme.ink} strokeWidth="3" fill="none" strokeLinecap="round"
          strokeDasharray="500"
          animate={{ strokeDashoffset: hover ? 0 : 500 }}
          initial={{ strokeDashoffset: 500 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <circle cx="30" cy="180" r="10" fill={theme.accent} />
        <circle cx="370" cy="80" r="14" fill={theme.ink} />
        <text x="40" y="210" fontFamily="Caveat, cursive" fontSize="22" fill={theme.ink}>start</text>
        <text x="320" y="60" fontFamily="Caveat, cursive" fontSize="22" fill={theme.ink}>potential ✦</text>
      </svg>
    </div>
  );
}

function VisualPenny({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 30, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
      <motion.div animate={{ x: hover ? 8 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), padding: 14, display: "flex", alignItems: "center", gap: 12, height: 70 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${theme.pastel3}, ${theme.pastel6})` }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: 8, width: "60%", borderRadius: 4, background: "rgba(0,0,0,0.15)", marginBottom: 6 }} />
          <div style={{ height: 6, width: "40%", borderRadius: 4, background: "rgba(0,0,0,0.08)" }} />
        </div>
        <div style={{ padding: "4px 10px", borderRadius: 999, background: theme.pastel4, fontFamily: "Inter", fontSize: 11, fontWeight: 600 }}>+1</div>
      </motion.div>
      <motion.div animate={{ x: hover ? -8 : 0 }} transition={{ duration: 0.5 }} style={{ ...visualCardStyle(theme), padding: 14, display: "flex", alignItems: "center", gap: 12, height: 70, marginLeft: 30 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${theme.pastel2}, ${theme.pastel5})` }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: 8, width: "70%", borderRadius: 4, background: "rgba(0,0,0,0.15)", marginBottom: 6 }} />
          <div style={{ height: 6, width: "50%", borderRadius: 4, background: "rgba(0,0,0,0.08)" }} />
        </div>
      </motion.div>
    </div>
  );
}

function VisualGlobal({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div animate={{ rotate: hover ? -3 : 0 }} transition={{ duration: 0.5 }} style={{
        width: 180, height: 320, borderRadius: 28,
        background: theme.ink, padding: 14, position: "relative",
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
      }}>
        <div style={{ background: theme.bg, borderRadius: 20, height: "100%", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontFamily: "Inter", fontSize: 10, color: theme.inkMute }}>BALANCE</div>
          <div style={{ fontFamily: "Inter", fontSize: 28, fontWeight: 600, color: theme.ink, letterSpacing: "-0.03em" }}>$24,580</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 4 }}>
            {[theme.pastel1, theme.pastel2, theme.pastel4].map((c, i) => (
              <div key={i} style={{ aspectRatio: "1/1", borderRadius: 12, background: c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 14, height: 14, borderRadius: 6, background: "rgba(0,0,0,0.3)" }} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
            {[1, 2].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: 999, background: theme.bgAlt }} />
                <div style={{ flex: 1, height: 4, borderRadius: 999, background: theme.bgAlt }} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ---------- Approach Section ----------
function ApproachSection({ theme }) {
  const items = [
    { icon: Search, title: "Research", text: "Defining user and business requirements through qualitative and quantitative research.", color: "pastel2" },
    { icon: Lightbulb, title: "Synthesize", text: "Translating research findings into clear, actionable insights.", color: "pastel3" },
    { icon: Palette, title: "Design", text: "Prototyping solutions based on identified needs, with a focus on user-centered design.", color: "pastel1" },
    { icon: Code2, title: "Test", text: "Validating concepts with real users to confirm usability and meet business goals.", color: "pastel4" },
  ];
  return (
    <section style={{ padding: "120px 6vw", background: theme.bgAlt, position: "relative" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 60, maxWidth: 1000 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: theme.accent, marginBottom: 4 }}>
              how I work ✦
            </div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
              margin: 0, lineHeight: 1,
            }}>
              A loop, not a line.
            </h2>
            <p style={{ fontFamily: "Inter", fontSize: 17, color: theme.inkSoft, lineHeight: 1.55, marginTop: 18 }}>
              Every project comes back to the same four moves - but the order, the depth, and the tools change every time.
            </p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div style={{
                  padding: 28, borderRadius: 20,
                  background: theme.card,
                  border: `1px solid ${theme.line}`,
                  height: "100%",
                  position: "relative", overflow: "hidden",
                }} data-magnet="0.05">
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: theme[it.color],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                  }}>
                    <Icon size={22} color={theme.ink} />
                  </div>
                  <div style={{
                    fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.inkMute,
                    marginBottom: 4,
                  }}>0{i + 1}</div>
                  <h3 style={{
                    fontFamily: "Inter", fontSize: 22, fontWeight: 600,
                    letterSpacing: "-0.02em", color: theme.ink, margin: 0, marginBottom: 8,
                  }}>{it.title}</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.5, margin: 0 }}>
                    {it.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- ABOUT PAGE ----------
function About({ theme, mode }) {
  return (
    <div style={{ paddingTop: 130, position: "relative" }}>
      <section style={{ padding: "0 6vw 100px", position: "relative" }}>
        <GridPaper theme={theme} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, color: theme.accent }}>
              hi, I'm Yachi ✿
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(48px, 8vw, 120px)",
              fontWeight: 500, letterSpacing: "-0.045em", color: theme.ink,
              margin: "10px 0 0", lineHeight: 0.95,
            }}>
              Designer.<br />
              <em style={{ fontFamily: "'Caveat', cursive", fontStyle: "normal", color: theme.accent }}>Curious human.</em>
            </h1>
          </Reveal>

          <div style={{
            marginTop: 80, display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) minmax(320px, 1.4fr)",
            gap: 60, alignItems: "start",
          }}>
            <Reveal delay={0.2}>
              <PortraitFrame theme={theme} mode={mode} />
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                {/* Experience depth */}
                <p style={{
                  fontFamily: "Inter", fontSize: "clamp(16px, 1.4vw, 19px)",
                  lineHeight: 1.65, color: theme.inkSoft, marginTop: 0,
                  letterSpacing: "-0.01em",
                }}>
                  Four years in, I've designed across <span style={{ background: theme.pastel2, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>healthcare</span>, <span style={{ background: theme.pastel3, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>e-commerce</span>, <span style={{ background: theme.pastel5, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>enterprise</span>, and <span style={{ background: theme.pastel4, padding: "1px 8px", borderRadius: 6, color: theme.ink }}>AI</span>. Each one taught me that the hardest part of design isn't the pixels, it's the listening (to both users and the business). I move through the full arc: research, prototype, test, ship. Creating intuitive, high-impact experiences that improve usability, boost engagement, and drive measurable business value.
                </p>

                {/* Range */}
                <p style={{
                  fontFamily: "Inter", fontSize: "clamp(16px, 1.4vw, 19px)",
                  lineHeight: 1.65, color: theme.inkSoft, marginTop: 20,
                  letterSpacing: "-0.01em",
                }}>
                  I've worked across both ends of the spectrum. Fast-paced startups like <span style={{ fontWeight: 600, color: theme.ink }}>Kinetic Potential</span>, where I juggled multiple projects at once, and larger companies like <span style={{ fontWeight: 600, color: theme.ink }}>Topline Switchgear</span>, where I went deep on a single domain. I'm comfortable in both worlds.
                </p>

                {/* Current role */}
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

      {/* Technical Skills Section */}
      <section style={{ padding: "120px 6vw", position: "relative", textAlign: "center" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: theme.accent, marginBottom: 4 }}>
              tools of the trade ✦
            </div>
            <h2 style={{
              fontFamily: "Inter", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 500, letterSpacing: "-0.035em", color: theme.ink,
              margin: 0, lineHeight: 1,
            }}>
              Yachi's technical skills.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <SkillJar theme={theme} />
          </Reveal>
        </div>
      </section>

      <SectionDivider theme={theme} />

      {/* Journey roadmap */}
      <JourneyRoadmap theme={theme} />


    </div>
  );
}


function SkillJar({ theme }) {
  const [isSpilled, setIsSpilled] = useState(false);
  const canvasRef = useRef(null);

  const categories = [
    { label: "Research", color: "pastel2", skills: ["Competitive Analysis", "Information Architecture", "Persona Creation", "User Surveys", "Focus Groups", "User Interviews", "Empathy Mapping", "Journey Mapping", "Storyboarding", "Heuristic Evaluation"] },
    { label: "Design", color: "pastel1", skills: ["Wireframing", "Mockups", "Interactive Prototyping", "Responsive Design", "Accessible Design", "Component Libraries", "Typography", "Color Theory", "Iconography", "Grid Systems"] },
    { label: "Testing", color: "pastel4", skills: ["Usability Testing", "User Testing", "Observational Studies", "Cognitive Walkthroughs", "A/B Testing"] },
    { label: "Tools", color: "pastel3", skills: ["Figma", "Webflow", "WordPress", "Wix", "Framer", "Adobe XD", "Sketch", "InVision", "Balsamiq", "Proto.io", "Maze", "Miro", "Adobe Creative Suite", "Cvent", "Hotjar", "Google Analytics", "HTML", "CSS", "JavaScript", "Jira", "Notion", "Slack"] },
    { label: "AI", color: "pastel5", skills: ["ChatGPT", "Claude", "Gemini", "Relume", "UX Pilot", "Magic Patterns", "Builder.io", "Figma Make", "Lovable", "Windsurf", "Antigravity", "Replit", "n8n", "Zapier", "Google Stitch", "Pomelli", "NotebookLM", "Gamma AI"] },
  ];

  const allSkills = categories.flatMap((cat, ci) =>
    cat.skills.map((s, si) => {
      return {
        name: s,
        catColor: cat.color,
        id: `${ci}-${si}`,
        delay: Math.random() * 0.4 + (ci * 0.1)
      };
    })
  );

  return (
    <div style={{ marginTop: 40, position: "relative" }}>
      {/* Header Info */}
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
        ref={canvasRef}
        spellCheck={false}
        style={{
          height: 400, width: "100%",
          background: theme.card, borderRadius: 32,
          border: `1px solid ${theme.line}`,
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.04)"
        }}
      >
        {/* The Jar Visual */}
        <motion.div
          onClick={() => setIsSpilled(true)}
          animate={isSpilled ? { rotate: -100, x: -220, y: 0, opacity: 0, scale: 0 } : { rotate: 0, x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          style={{
            width: 140, height: 180,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: `2px solid rgba(255,255,255,0.4)`,
            borderRadius: "20px 20px 60px 60px",
            position: "relative",
            zIndex: isSpilled ? 0 : 10,
            marginBottom: 40,
            cursor: isSpilled ? "default" : "pointer",
            pointerEvents: isSpilled ? "none" : "auto",
            boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          {/* Jar Neck */}
          <div style={{
            position: "absolute", top: -10, left: "15%",
            width: "70%", height: 15, background: "rgba(255,255,255,0.15)",
            border: `2px solid rgba(255,255,255,0.4)`, borderRadius: 4
          }} />

          {/* Cork Lid */}
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
              {allSkills.map((s, i) => (
                <div key={s.id} style={{
                  width: 8, height: 8, borderRadius: 999, background: theme[s.catColor],
                  opacity: 0.7
                }} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Spilled Skills */}
        <AnimatePresence>
          {isSpilled && (
            <div style={{
              position: "absolute", inset: 0, padding: "30px 40px 40px",
              display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "flex-start", gap: "10px 8px",
              zIndex: 5
            }}>
              {allSkills.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  initial={{ scale: 0, y: 150, opacity: 0 }}
                  animate={{
                    scale: 1,
                    y: 0,
                    opacity: 1
                  }}
                  transition={{
                    type: "spring", stiffness: 120, damping: 15,
                    delay: skill.delay
                  }}
                  style={{
                    position: "relative",
                    padding: "6px 14px", borderRadius: 999,
                    background: theme[skill.catColor],
                    border: `1px solid ${theme.line}`,
                    fontFamily: "Inter", fontSize: 13, fontWeight: 500,
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

function PortraitFrame({ theme, mode }) {
  // Brutalist/collage frame holding a stylized portrait illustration
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 320, aspectRatio: "4/5", margin: "0 auto" }}>
      {/* Tape pieces */}
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
      {/* Frame border */}
      <div style={{
        position: "absolute", inset: 0,
        border: `2px solid ${theme.ink}`,
        borderRadius: 4,
        transform: "rotate(-1.5deg)",
        background: theme.card,
        padding: 18,
        zIndex: 1,
      }}>
        {/* Stylized portrait */}
        <div style={{
          width: "100%", height: "100%",
          background: theme.bgAlt,
          borderRadius: 2,
          position: "relative", overflow: "hidden",
        }}>
          <img
            src={heroImg}
            alt="Yachi Patel"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Secondary image 1 */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -5, zIndex: 10 }}
        style={{
          position: "absolute", top: "15%", left: -60, width: 120, height: 145,
          background: theme.card, border: `1px solid ${theme.ink}`, borderRadius: 4,
          padding: 8, transform: "rotate(-12deg)", zIndex: 2,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <img src={yachiImg1} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }} alt="" />
      </motion.div>

      {/* Secondary image 2 */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5, zIndex: 10 }}
        style={{
          position: "absolute", bottom: "5%", right: -70, width: 145, height: 110,
          background: theme.card, border: `1px solid ${theme.ink}`, borderRadius: 4,
          padding: 8, transform: "rotate(15deg)", zIndex: 2,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <img src={yachiImg2} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }} alt="" />
      </motion.div>

      {/* Caption */}
      <div style={{
        position: "absolute", bottom: -64, left: 0,
        fontFamily: "'Caveat', cursive", fontSize: 26, color: theme.inkSoft,
      }}>
        ↳ that's me, in pixels ✿
      </div>
    </div>
  );
}

function JourneyRoadmap({ theme }) {
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
          {/* SVG path that draws as you scroll */}
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
                    {/* Left side */}
                    <div style={{ textAlign: "right", paddingRight: 20 }}>
                      {left && <RoadmapCard n={n} theme={theme} align="right" />}
                    </div>
                    {/* Node */}
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
                    {/* Right side */}
                    <div style={{ paddingLeft: 20 }}>
                      {!left && <RoadmapCard n={n} theme={theme} align="left" />}
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

function RoadmapCard({ n, theme, align }) {
  return (
    <div style={{
      display: "inline-block",
      padding: 22, borderRadius: 16,
      background: theme.card,
      border: `1px solid ${theme.line}`,
      maxWidth: 380,
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

// ---------- PROJECTS PAGE ----------
function Projects({ theme, mode, setRoute }) {
  return (
    <div style={{ minHeight: "80vh", paddingTop: 130, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ fontFamily: "Inter", fontSize: 18, color: theme.inkMute }}>
        Coming soon ✿
      </p>
    </div>
  );
}

// ---------- PROJECT DETAIL ----------
function ProjectDetail({ id, theme, mode, setRoute }) {
  const project = projects.find(p => p.id === id);
  if (!project) {
    return (
      <div style={{ paddingTop: 200, textAlign: "center", color: theme.ink, fontFamily: "Inter" }}>
        Project not found.
      </div>
    );
  }
  const idx = projects.findIndex(p => p.id === id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div style={{ paddingTop: 130 }}>
      <section style={{ padding: "0 6vw 60px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              data-magnet="0.3"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "none",
                fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft,
                cursor: "pointer", marginBottom: 30,
              }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
              <span style={{ padding: "5px 12px", borderRadius: 999, background: theme[project.color1], fontFamily: "Inter", fontSize: 12, fontWeight: 600 }}>{project.tag}</span>
              <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>{project.domain}</span>
              <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>· {project.year}</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(48px, 7vw, 110px)",
              fontWeight: 500, letterSpacing: "-0.045em", color: theme.ink,
              margin: 0, lineHeight: 0.95,
            }}>
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 32, color: theme.accent, marginTop: 12 }}>
              {project.subtitle}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero visual */}
      <Reveal delay={0.3}>
        <section style={{ padding: "0 6vw 60px" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div style={{
              height: 540, borderRadius: 24, overflow: "hidden",
              background: `linear-gradient(135deg, ${theme[project.color1]}, ${theme[project.color2]})`,
              position: "relative",
            }}>
              <ProjectVisual project={project} theme={theme} hover={true} />
            </div>
          </div>
        </section>
      </Reveal>

      {/* Meta + intro */}
      <section style={{ padding: "60px 6vw" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(220px, 280px) 1fr", gap: 60 }}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { k: "Role", v: "Lead UI/UX Designer" },
                { k: "Timeline", v: project.year },
                { k: "Domain", v: project.domain },
                { k: "Tools", v: "Figma · Framer · FigJam" },
              ].map(d => (
                <div key={d.k}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 4 }}>{d.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 15, color: theme.ink }}>{d.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{
              fontFamily: "Inter", fontSize: "clamp(20px, 1.8vw, 26px)",
              lineHeight: 1.5, color: theme.ink, fontWeight: 400, margin: 0,
              letterSpacing: "-0.015em",
            }}>
              {project.description}
            </p>
            <div style={{ marginTop: 30, display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { k: "+38%", v: "Faster bid conversion" },
                { k: "24", v: "User interviews" },
                { k: "12wk", v: "Sprint to ship" },
              ].map(s => (
                <div key={s.k}>
                  <div style={{
                    fontFamily: "Inter", fontSize: 44, fontWeight: 500,
                    letterSpacing: "-0.04em", color: theme.ink, lineHeight: 1,
                  }}>{s.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft, marginTop: 4 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story sections */}
      <section style={{ padding: "60px 6vw 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {[
            { h: "The challenge", t: "Users were dropping off mid-funnel. The data said one thing, but qualitative interviews surfaced a different story - one we couldn't have caught with analytics alone." },
            { h: "Research & synthesis", t: "I led a mixed-methods study: 24 user interviews, 3 usability rounds, and behavioral analytics over 6 weeks. The core insight reframed our entire roadmap." },
            { h: "The design", t: "Iterated through 4 concepts before landing on a flow that felt obvious in hindsight. Built a component system that engineering could ship in sprints, not quarters." },
            { h: "Outcome", t: "Shipped to 100% of users in Q4. The KPI we cared about moved 38% in our direction; secondary metrics held steady or improved. Most importantly, support tickets in the relevant flow dropped by half." },
          ].map((s, i) => (
            <Reveal key={i} delay={0.05}>
              <div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, marginBottom: 8 }}>0{i + 1}</div>
                <h2 style={{
                  fontFamily: "Inter", fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink,
                  margin: 0, marginBottom: 16, lineHeight: 1.1,
                }}>{s.h}</h2>
                <p style={{ fontFamily: "Inter", fontSize: 17.5, lineHeight: 1.65, color: theme.inkSoft, margin: 0, letterSpacing: "-0.005em" }}>{s.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next */}
      <section style={{ padding: "0 6vw 100px" }}>
        <div
          onClick={() => setRoute(`project:${next.id}`)}
          data-magnet="0.05"
          data-cursor="view"
          data-cursor-label="Next"
          style={{
            maxWidth: 1300, margin: "0 auto",
            padding: "60px 50px", borderRadius: 24,
            background: `linear-gradient(135deg, ${theme[next.color1]}, ${theme[next.color2]})`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 30, flexWrap: "wrap", cursor: "pointer",
          }}
        >
          <div>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginBottom: 8 }}>Next case</div>
            <div style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.035em", color: "rgba(0,0,0,0.9)", lineHeight: 1 }}>
              {next.title}
            </div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "rgba(0,0,0,0.6)", marginTop: 6 }}>{next.subtitle}</div>
          </div>
          <div style={{
            width: 70, height: 70, borderRadius: 999,
            background: "rgba(0,0,0,0.85)", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ArrowRight size={26} />
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- RÉSUMÉ PAGE ----------
function Resume({ theme, mode }) {
  const [downloaded, setDownloaded] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleDownload = () => {
    if (downloaded) return;
    setDownloaded(true);
    // Confetti pop
    const pieces = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 360,
      y: -Math.random() * 320 - 80,
      rot: Math.random() * 720 - 360,
      color: [theme.pastel1, theme.pastel2, theme.pastel3, theme.pastel4, theme.pastel5, theme.accent][i % 6],
      size: 6 + Math.random() * 8,
      shape: i % 3,
    }));
    setParticles(pieces);
    setTimeout(() => setParticles([]), 1800);
    setTimeout(() => setDownloaded(false), 3500);

    // Redirect to Google Drive
    window.open("https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing", "_blank");
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      paddingTop: 130, paddingBottom: 100, padding: "130px 6vw 100px",
      position: "relative", overflow: "hidden",
    }}>
      <FloatingBlobs theme={theme} />

      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", zIndex: 1, width: "100%" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, color: theme.accent, marginBottom: 8 }}>
              the takeaway ✦
            </div>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink,
              margin: 0, lineHeight: 1, marginBottom: 16,
            }}>
              Want the full details?
            </h1>
            <p style={{
              fontFamily: "Inter", fontSize: 19, color: theme.inkSoft,
              lineHeight: 1.5, margin: 0,
            }}>
              Preview my resume below or download a copy.
            </p>
          </div>
        </Reveal>

        {/* Two-column: Preview + Download card */}
        <Reveal delay={0.2}>
          <div>
            {/* PDF Preview */}
            <div style={{
              borderRadius: 20, overflow: "hidden",
              border: `1px solid ${theme.line}`,
              background: theme.card,
              boxShadow: mode === "dark"
                ? "0 30px 80px rgba(0,0,0,0.5)"
                : "0 30px 80px rgba(0,0,0,0.08)",
            }}>
              {/* Preview header */}
              <div style={{
                padding: "12px 18px", display: "flex", alignItems: "center", gap: 8,
                borderBottom: `1px solid ${theme.line}`,
                background: mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: 999, background: "#FF5F56" }} />
                <div style={{ width: 10, height: 10, borderRadius: 999, background: "#FFBD2E" }} />
                <div style={{ width: 10, height: 10, borderRadius: 999, background: "#28C940" }} />
                <div style={{
                  flex: 1, textAlign: "center",
                  fontFamily: "Inter", fontSize: 11, color: theme.inkMute,
                  letterSpacing: "0.02em",
                }}>
                  Yachi-Patel-Resume.pdf
                </div>
                <Eye size={14} color={theme.inkMute} />
                <button
                  onClick={() => window.open("https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing", "_blank")}
                  title="Download PDF"
                  style={{
                    background: `linear-gradient(135deg, ${theme.pastel1}, ${theme.pastel5})`,
                    border: "none", cursor: "pointer",
                    width: 28, height: 28, borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginLeft: 4,
                  }}
                >
                  <Download size={14} color={theme.ink} />
                </button>
              </div>
              {/* Embedded PDF preview via Google Drive */}
              <div style={{ aspectRatio: "8.5/11", position: "relative", background: mode === "dark" ? "#1a1a22" : "#f5f5f5" }}>
                <iframe
                  src="https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/preview"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: 0 }}
                  title="Resume Preview"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function ResumeCard({ theme, mode, downloaded, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 16 });
  const sy = useSpring(y, { stiffness: 200, damping: 16 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.18);
    y.set((e.clientY - r.top - r.height / 2) * 0.18);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnet="0.5"
      data-cursor="hover"
      data-cursor-label={downloaded ? "Done" : "Click"}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      style={{
        position: "relative",
        x: sx, y: sy,
        width: 380, padding: "32px 28px",
        borderRadius: 24,
        background: theme.card,
        border: `1px solid ${theme.line}`,
        cursor: "pointer",
        boxShadow: mode === "dark"
          ? "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 30px 80px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
        textAlign: "left",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient ring */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 180, height: 180, borderRadius: "50%",
        background: `radial-gradient(circle, ${theme.pastel5}88, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
        <motion.div
          animate={{
            background: downloaded
              ? `linear-gradient(135deg, ${theme.pastel4}, ${theme.pastel2})`
              : `linear-gradient(135deg, ${theme.pastel1}, ${theme.pastel5})`,
            rotate: downloaded ? 360 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 56, height: 56, borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: theme.ink, flexShrink: 0,
          }}
        >
          <AnimatePresence mode="wait">
            {downloaded ? (
              <motion.div key="check" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Check size={24} strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.div key="dl" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Download size={22} strokeWidth={2.4} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div>
          <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 2 }}>
            {downloaded ? "Downloaded ✦" : "PDF · 124 KB"}
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            {downloaded ? "Sent to your downloads" : "Yachi-Patel-Resume.pdf"}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${theme.line}`, paddingTop: 18 }}>
        <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft }}>
          {downloaded ? "Thanks for reading ♡" : "Updated · January 2026"}
        </div>
        <motion.div
          animate={{ x: downloaded ? 0 : [0, 4, 0] }}
          transition={downloaded ? {} : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {downloaded
            ? <Check size={18} color={theme.accent} strokeWidth={2.6} />
            : <ArrowRight size={18} color={theme.ink} />}
        </motion.div>
      </div>
    </motion.button>
  );
}

// ---------- FOOTER ----------
function Footer({ theme, setRoute }) {
  return (
    <footer style={{
      padding: "100px 6vw 50px",
      borderTop: `1px solid ${theme.line}`,
      background: theme.bg,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        {/* Big CTA */}

        {/* Bottom row */}
        <div style={{
          marginTop: 60, display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 40, alignItems: "start",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, fontWeight: 700, color: theme.ink }}>
                <span style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.pastel1}, ${theme.accent})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                  fontSize: 28,
                  fontFamily: "'Caveat', cursive",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  padding: "0.2em 0.5em",
                  margin: "-0.2em -0.5em",
                  overflow: "visible",
                }}>YP</span>
              </div>
            </div>
            <p style={{ fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.6, maxWidth: 360, margin: 0 }}>
              Product designer. Currently shaping the next chapter of human-centered AI.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 18 }}>
              Quick links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Work" },
                { id: "resume", label: "Resume" },
              ].map(l => (
                <button
                  key={l.id}
                  onClick={() => l.id === "resume" ? window.open("https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing", "_blank") : setRoute(l.id)}
                  data-magnet="0.2"
                  style={{
                    background: "none", border: "none", padding: 0,
                    fontFamily: "Inter", fontSize: 15, color: theme.ink,
                    textAlign: "left", cursor: "pointer",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 18 }}>
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:yachi883@gmail.com" data-magnet="0.2" style={{ fontFamily: "Inter", fontSize: 15, color: theme.ink, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Mail size={14} /> Email
              </a>
              <a href="https://linkedin.com/in/yachi-patel/" target="_blank" rel="noopener noreferrer" data-magnet="0.2" style={{ fontFamily: "Inter", fontSize: 15, color: theme.ink, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div style={{
          marginTop: 80, paddingTop: 24,
          borderTop: `1px solid ${theme.line}`,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.inkSoft, display: "inline-flex", alignItems: "center", gap: 8 }}>
            Made with <Heart size={16} fill={theme.accent} color={theme.accent} /> by Yachi
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>
            © 2026 Yachi Patel. All rights reserved.
          </div>
        </div>

        {/* Big watermark text */}
        <div aria-hidden style={{
          marginTop: 60, paddingTop: 20,
          display: "flex", justifyContent: "center", gap: 0,
          overflow: "hidden", userSelect: "none",
        }}>
          {"YACHI".split("").map((char, i) => (
            <motion.span
              key={i}
              whileHover={{
                scale: 1.15,
                opacity: 0.5,
                color: [theme.pastel3, theme.pastel2, theme.pastel6, theme.pastel5, theme.pastel1][i],
                textShadow: `0 0 40px ${[theme.pastel3, theme.pastel2, theme.pastel6, theme.pastel5, theme.pastel1][i]}60`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                fontFamily: "Inter", fontSize: "clamp(80px, 22vw, 360px)",
                fontWeight: 500, letterSpacing: "-0.06em", color: theme.ink,
                opacity: 0.06, lineHeight: 0.85, cursor: "default",
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ---------- ROOT ----------
export default function YachiPortfolio() {
  const [mode, setMode] = useState("light");
  const [route, setRoute] = useState("home");
  const theme = themes[mode];

  // Smooth route transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  // Inject fonts
  useEffect(() => {
    if (document.getElementById("yachi-fonts")) return;
    const link = document.createElement("link");
    link.id = "yachi-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&family=Caveat:wght@400..700&family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap";
    document.head.appendChild(link);
  }, []);

  // Smooth Scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);


  // Hide native cursor on desktop for our custom one
  useEffect(() => {
    const isTouch = "ontouchstart" in window;
    if (!isTouch) {
      document.body.style.cursor = "none";
    }
    return () => { document.body.style.cursor = ""; };
  }, []);

  const isProjectDetail = route.startsWith("project:");
  const projectId = isProjectDetail ? route.split(":")[1] : null;

  return (
    <div style={{
      minHeight: "100vh", background: theme.bg, color: theme.ink,
      fontFamily: "Inter, sans-serif",
      transition: "background .6s ease, color .6s ease",
      overflow: "hidden",
    }}>
      <style>{`
        html, body { margin: 0; padding: 0; }
        * { box-sizing: border-box; }
        ::selection { background: ${theme.accent}; color: white; }
        button:focus-visible, a:focus-visible { outline: 2px solid ${theme.accent}; outline-offset: 3px; border-radius: 6px; }
        @media (max-width: 760px) {
          body { cursor: auto !important; }
        }
      `}</style>

      <MagneticCursor theme={theme} />
      <Nav theme={theme} mode={mode} setMode={setMode} route={isProjectDetail ? "projects" : route} setRoute={setRoute} />

      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {route === "home" && <Home theme={theme} mode={mode} setRoute={setRoute} />}
          {route === "about" && <About theme={theme} mode={mode} />}
          {route === "projects" && <Projects theme={theme} mode={mode} setRoute={setRoute} />}
          {route === "resume" && <Resume theme={theme} mode={mode} />}
          {isProjectDetail && <ProjectDetail id={projectId} theme={theme} mode={mode} setRoute={setRoute} />}
        </motion.div>
      </AnimatePresence>

      <SectionDivider theme={theme} />

      <Footer theme={theme} setRoute={setRoute} />
    </div>
  );
}
