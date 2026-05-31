import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";
import ParticleLogo from "./ParticleLogo.jsx";

const RESUME_URL = "https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
];

export default function Nav({ theme, mode, setMode, route, setRoute }) {
  const reduced = useReducedMotion();
  const { isMobile, isTablet } = useBreakpoint();
  const [logoHovered, setLogoHovered] = useState(false);

  const padding = isMobile ? "6px 6px 6px 14px" : isTablet ? "7px 7px 7px 18px" : "8px 8px 8px 22px";
  const top = isMobile ? 14 : 22;
  const itemPadding = isMobile ? "6px 10px" : "8px 14px";
  const itemFontSize = isMobile ? 12 : isTablet ? 13 : 13.5;
  const logoFontSize = isMobile ? 22 : 24;

  return (
    <motion.nav
      initial={reduced ? false : { y: -40, opacity: 0 }}
      animate={reduced ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: "fixed", top, left: "50%", translateX: "-50%",
        zIndex: 100, display: "flex", alignItems: "center", gap: isMobile ? 4 : 8,
        padding,
        background: theme.glass,
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
        border: `1px solid ${theme.line}`,
        borderRadius: 999,
        maxWidth: "calc(100vw - 16px)",
        boxShadow: mode === "dark"
          ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      <button
        onClick={() => setRoute("home")}
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
        data-magnet="0.2"
        aria-label="Home"
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "transparent", border: "none", cursor: "pointer",
          paddingRight: isMobile ? 4 : 8,
        }}
      >
        <ParticleLogo mode={mode} size={isMobile ? 32 : 40} playOnHover={true} playOnFirstVisit={true} isHovered={logoHovered} />
      </button>
      {!isMobile && <div style={{ width: 1, height: 22, background: theme.line }} />}
      {NAV_ITEMS.map((it) => (
        <NavItem
          key={it.id}
          it={it}
          route={route}
          setRoute={setRoute}
          theme={theme}
          mode={mode}
          isMobile={isMobile}
          itemPadding={itemPadding}
          itemFontSize={itemFontSize}
        />
      ))}
      <ThemeToggle theme={theme} mode={mode} setMode={setMode} isMobile={isMobile} />
    </motion.nav>
  );
}

function NavItem({ it, route, setRoute, theme, mode, isMobile, itemPadding, itemFontSize }) {
  const [isHovered, setIsHovered] = useState(false);
  const active = route === it.id || (it.id === "projects" && route.startsWith("project:"));

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => {
          if (it.id === "resume") {
            window.open(RESUME_URL, "_blank");
          } else if (route === it.id) {
            window.lenis?.scrollTo(0);
          } else {
            setRoute(it.id);
          }
        }}
        data-magnet="0.25"
        style={{
          position: "relative",
          padding: itemPadding, borderRadius: 999, border: "none",
          background: active ? theme.ink : "transparent",
          color: active ? theme.bg : theme.inkSoft,
          fontFamily: "Inter, sans-serif", fontSize: itemFontSize, fontWeight: 500,
          cursor: "pointer", letterSpacing: "-0.01em",
          transition: "color .25s ease, background .25s ease",
          zIndex: 10,
        }}
      >
        {it.label}
      </button>

      {it.id === "projects" && !isMobile && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: 12,
                padding: "8px",
                background: theme.bg,
                border: `1px solid ${theme.line}`,
                borderRadius: 16,
                boxShadow: mode === "dark"
                  ? "0 10px 40px rgba(0,0,0,0.6)"
                  : "0 10px 40px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: 200,
                zIndex: 5,
              }}
            >
              {projects.map(p => (
                <DropdownItem
                  key={p.id}
                  p={p}
                  route={route}
                  setRoute={setRoute}
                  setIsHovered={setIsHovered}
                  theme={theme}
                  mode={mode}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function DropdownItem({ p, route, setRoute, setIsHovered, theme, mode }) {
  const [hover, setHover] = useState(false);
  const isActive = route === `project:${p.id}`;

  return (
    <button
      onClick={() => {
        if (p.pdfLink) {
          window.open(p.pdfLink, "_blank");
        } else {
          setRoute(`project:${p.id}`);
          setIsHovered(false);
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover || isActive ? theme.ink : "transparent",
        border: "none",
        padding: "10px 14px",
        borderRadius: 10,
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        transition: "all 0.2s ease",
      }}
    >
      <span style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        color: hover || isActive ? theme.bg : theme.ink,
        fontWeight: isActive ? 600 : 500,
        transition: "color 0.2s ease",
      }}>
        {p.title}
      </span>
      <span style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        color: hover || isActive
          ? (mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)")
          : theme.inkMute,
        transition: "color 0.2s ease",
      }}>
        {p.domain}
      </span>
    </button>
  );
}

function ThemeToggle({ theme, mode, setMode, isMobile }) {
  const W = isMobile ? 44 : 56;
  const H = isMobile ? 26 : 32;
  const thumb = isMobile ? 22 : 28;
  const xLight = 2;
  const xDark = W - thumb - 2;
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      data-magnet="0.4"
      data-cursor="hover"
      aria-label="Toggle theme"
      style={{
        position: "relative",
        width: W, height: H, borderRadius: 999,
        border: `1px solid ${theme.line}`,
        background: mode === "light"
          ? `linear-gradient(135deg, ${theme.pastel2}, ${theme.pastel3})`
          : `linear-gradient(135deg, #1a1a2e, #16161d)`,
        cursor: "pointer", padding: 0, overflow: "hidden",
        flexShrink: 0,
        boxShadow: `inset 0 2px 6px ${mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.5)"}`,
      }}
    >
      <motion.div
        animate={{ x: mode === "light" ? xLight : xDark, rotate: mode === "light" ? 0 : 360 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        style={{
          position: "absolute", top: (H - thumb) / 2, left: 0,
          width: thumb, height: thumb, borderRadius: 999,
          background: mode === "light"
            ? `radial-gradient(circle at 30% 30%, #FFF8C4, #FFD66B)`
            : `radial-gradient(circle at 30% 30%, #E8E5DC, #B8B5AC)`,
          boxShadow: mode === "light"
            ? "0 2px 8px rgba(255,200,80,0.5), inset -2px -2px 4px rgba(0,0,0,0.08)"
            : "0 0 12px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(0,0,0,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {mode === "light" ? <Sun size={isMobile ? 12 : 14} color="#8B5E00" /> : <Moon size={isMobile ? 12 : 14} color="#2A2A35" />}
      </motion.div>
    </button>
  );
}
