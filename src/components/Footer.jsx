import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Heart } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import ParticleLogo from "./ParticleLogo.jsx";

const RESUME_URL = "https://drive.google.com/file/d/1kDuE4GTIChyBL2oi2pAQ3h94ZFRwhSXp/view?usp=sharing";

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
];

function makeHoverHandlers(theme) {
  return {
    onMouseEnter: (e) => {
      e.currentTarget.style.color = theme.accent;
      e.currentTarget.style.transform = "translateX(4px)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.color = theme.ink;
      e.currentTarget.style.transform = "translateX(0)";
    },
    onMouseDown: (e) => {
      e.currentTarget.style.color = theme.pastel1;
    },
    onMouseUp: (e) => {
      e.currentTarget.style.color = theme.accent;
    },
  };
}

export default function Footer({ theme, mode, setRoute }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hoverHandlers = makeHoverHandlers(theme);
  const [logoHovered, setLogoHovered] = useState(false);

  const linkBaseStyle = {
    fontFamily: "Inter",
    fontSize: isMobile ? 16 : 15,
    color: theme.ink,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: isMobile ? "6px 0" : 0,
    transition: "color 0.2s ease, transform 0.2s ease",
  };

  const buttonBaseStyle = {
    background: "none",
    border: "none",
    padding: isMobile ? "6px 0" : 0,
    fontFamily: "Inter",
    fontSize: isMobile ? 16 : 15,
    color: theme.ink,
    textAlign: isMobile ? "center" : "left",
    cursor: "pointer",
    transition: "color 0.2s ease, transform 0.2s ease",
  };

  return (
    <footer style={{
      padding: isMobile ? "60px 4vw 40px" : "100px 6vw 50px",
      borderTop: `1px solid ${theme.line}`,
      background: theme.bg,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{
          marginTop: isMobile ? 20 : 60,
          display: isMobile ? "flex" : "grid",
          flexDirection: isMobile ? "column" : undefined,
          gridTemplateColumns: isMobile ? undefined : "1.4fr 1fr 1fr",
          gap: isMobile ? "40px" : 40,
          alignItems: isMobile ? "center" : "start",
          textAlign: isMobile ? "center" : "left",
        }}>
          <div style={{ gridColumn: isMobile ? "1 / -1" : "auto", display: isMobile ? "flex" : "block", flexDirection: isMobile ? "column" : undefined, alignItems: isMobile ? "center" : undefined }}>
            <button 
              aria-label="Home"
              style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start", alignItems: "center", gap: 10, marginBottom: isMobile ? 24 : 16, cursor: "pointer", background: "transparent", border: "none", padding: 0 }}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              onClick={() => {
                setRoute("home");
                window.lenis?.scrollTo(0);
              }}
            >
              <ParticleLogo mode={mode || "light"} size={isMobile ? 54 : 48} playOnHover={true} isHovered={logoHovered} />
            </button>
            <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 14.5, color: theme.inkSoft, lineHeight: 1.6, maxWidth: 360, margin: 0, textAlign: isMobile ? "center" : "left" }}>
              Product designer. Currently shaping the next chapter of human-centered AI.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: theme.inkMute, textTransform: "uppercase", marginBottom: isMobile ? 20 : 18 }}>
              Quick links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 10, alignItems: isMobile ? "center" : "flex-start" }}>
              {QUICK_LINKS.map(l => (
                <button
                  key={l.id}
                  onClick={() => {
                    if (l.id === "resume") {
                      window.open(RESUME_URL, "_blank");
                    } else {
                      setRoute(l.id);
                      window.lenis?.scrollTo(0);
                    }
                  }}
                  data-magnet="0.2"
                  style={buttonBaseStyle}
                  {...hoverHandlers}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: theme.inkMute, textTransform: "uppercase", marginBottom: isMobile ? 20 : 18 }}>
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 10, alignItems: isMobile ? "center" : "flex-start" }}>
              <a
                href="mailto:yachi883@gmail.com"
                data-magnet="0.2"
                style={linkBaseStyle}
                {...hoverHandlers}
              >
                <Mail size={isMobile ? 16 : 14} /> Email
              </a>
              <a
                href="https://linkedin.com/in/yachi-patel/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnet="0.2"
                style={linkBaseStyle}
                {...hoverHandlers}
              >
                <Linkedin size={isMobile ? 16 : 14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: isMobile ? 60 : 80, paddingTop: 24,
          borderTop: `1px solid ${theme.line}`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          textAlign: isMobile ? "center" : "left",
          gap: isMobile ? 8 : 12,
        }}>
          <div style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 15, color: theme.inkSoft, display: "inline-flex", alignItems: "center", gap: 6 }}>
            Made with <Heart size={isMobile ? 14 : 15} fill={theme.accent} color={theme.accent} /> by Yachi
          </div>
          <div style={{ fontFamily: "Inter", fontSize: isMobile ? 12 : 13, color: theme.inkMute }}>
            © 2026 Yachi Patel. All rights reserved.
          </div>
        </div>

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
