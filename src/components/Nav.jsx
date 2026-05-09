import { motion, useReducedMotion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "resume", label: "Resume" },
];

export default function Nav({ theme, mode, setMode, route, setRoute }) {
  const reduced = useReducedMotion();
  return (
    <motion.nav
      initial={reduced ? false : { y: -40, opacity: 0 }}
      animate={reduced ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: "fixed", top: 22, left: "50%", translateX: "-50%",
        zIndex: 100, display: "flex", alignItems: "center", gap: 8,
        padding: "8px 8px 8px 22px",
        background: theme.glass,
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
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
      {NAV_ITEMS.map((it) => {
        const active = route === it.id;
        return (
          <button
            key={it.id}
            onClick={() => it.id === "resume" ? window.open(RESUME_URL, "_blank") : setRoute(it.id)}
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
