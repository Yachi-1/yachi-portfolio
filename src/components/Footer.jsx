import { motion } from "framer-motion";
import { Mail, Linkedin, Heart } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

const RESUME_URL = "https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing";

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "resume", label: "Resume" },
];

export default function Footer({ theme, setRoute }) {
  const { isMobile, isTablet } = useBreakpoint();
  return (
    <footer style={{
      padding: isMobile ? "60px 4vw 40px" : "100px 6vw 50px",
      borderTop: `1px solid ${theme.line}`,
      background: theme.bg,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{
          marginTop: isMobile ? 30 : 60, display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1.4fr 1fr 1fr" : "1.4fr 1fr 1fr",
          gap: isMobile ? 32 : 40, alignItems: "start",
        }}>
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

          <div>
            <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: theme.inkMute, textTransform: "uppercase", marginBottom: 18 }}>
              Quick links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {QUICK_LINKS.map(l => (
                <button
                  key={l.id}
                  onClick={() => l.id === "resume" ? window.open(RESUME_URL, "_blank") : setRoute(l.id)}
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

        <div style={{
          marginTop: isMobile ? 50 : 80, paddingTop: 24,
          borderTop: `1px solid ${theme.line}`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.inkSoft, display: "inline-flex", alignItems: "center", gap: 8 }}>
            Made with <Heart size={16} fill={theme.accent} color={theme.accent} /> by Yachi
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute }}>
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
