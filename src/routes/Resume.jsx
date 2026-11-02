import { Download } from "lucide-react";
import FloatingBlobs from "../components/FloatingBlobs.jsx";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

export default function Resume({ theme, mode }) {
  const { isMobile } = useBreakpoint();
  const isDark = mode === "dark";

  return (
    <div style={{
      minHeight: "100vh",
      padding: isMobile ? "90px 4vw 80px" : "120px 6vw 120px",
      position: "relative",
      overflow: "hidden",
    }}>
      <FloatingBlobs theme={theme} />

      <style>{`
        /* Disable print */
        @media print {
          body, html, * {
            display: none !important;
            visibility: hidden !important;
          }
        }
        /* Disable callouts & dragging */
        .resume-view-container {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>

      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", zIndex: 1, width: "100%" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 36 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 28, color: theme.accent, marginBottom: 8 }}>
              the takeaway ✦
            </div>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(34px, 5vw, 68px)",
              fontWeight: 500, letterSpacing: isMobile ? "-0.03em" : "-0.04em",
              color: theme.ink,
              margin: 0, lineHeight: 1, marginBottom: 14,
            }}>
              Want the full details?
            </h1>
            <p style={{
              fontFamily: "Inter",
              fontSize: isMobile ? 15 : 18,
              color: theme.inkSoft,
              lineHeight: 1.5, margin: 0,
            }}>
              Browse my resume below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Centered download button */}
            <div style={{
              width: "100%",
              maxWidth: 960,
              display: "flex",
              justifyContent: "center",
              marginBottom: isMobile ? 16 : 22,
            }}>
              <a
                href="/Yachi-Patel-Resume.pdf"
                download="Yachi-Patel-Resume.pdf"
                title="Download Resume PDF"
                aria-label="Download Resume PDF"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: isMobile ? "9px 18px" : "10px 22px",
                  borderRadius: 999,
                  color: isDark ? "#FFFFFF" : "#1F2937",
                  background: isDark ? "rgba(255,255,255,0.08)" : "#FFFFFF",
                  border: isDark ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(0,0,0,0.12)",
                  boxShadow: isDark
                    ? "0 4px 16px rgba(0,0,0,0.3)"
                    : "0 4px 18px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? 13 : 14,
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.accent;
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark ? "#FFFFFF" : "#1F2937";
                  e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Download size={15} />
                <span>Download Resume PDF</span>
              </a>
            </div>

            {/* Frameless Floating Resume Sheet */}
            <div
              className="resume-view-container"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                width: "100%",
                maxWidth: 960,
                background: "#FFFFFF",
                borderRadius: isMobile ? 8 : 12,
                overflow: "hidden",
                border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.09)",
                boxShadow: isDark
                  ? "0 30px 80px rgba(0,0,0,0.65), 0 4px 16px rgba(0,0,0,0.3)"
                  : "0 25px 70px rgba(0,0,0,0.1), 0 4px 14px rgba(0,0,0,0.04)",
              }}
            >
              <img
                src="/resume-preview.png"
                alt="Yachi Patel Resume"
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  pointerEvents: "none",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
