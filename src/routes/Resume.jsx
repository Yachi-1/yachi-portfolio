import { Download, Eye } from "lucide-react";
import FloatingBlobs from "../components/FloatingBlobs.jsx";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

const RESUME_URL = "https://drive.google.com/file/d/1kDuE4GTIChyBL2oi2pAQ3h94ZFRwhSXp/view?usp=sharing";
const RESUME_PREVIEW_URL = "https://drive.google.com/file/d/1kDuE4GTIChyBL2oi2pAQ3h94ZFRwhSXp/preview";

export default function Resume({ theme, mode }) {
  const { isMobile } = useBreakpoint();
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: isMobile ? "100px 4vw 60px" : "130px 6vw 100px",
      position: "relative", overflow: "hidden",
    }}>
      <FloatingBlobs theme={theme} />

      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", zIndex: 1, width: "100%" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: isMobile ? 22 : 28, color: theme.accent, marginBottom: 8 }}>
              the takeaway ✦
            </div>
            <h1 style={{
              fontFamily: "Inter", fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 500, letterSpacing: isMobile ? "-0.03em" : "-0.04em",
              color: theme.ink,
              margin: 0, lineHeight: 1, marginBottom: 16,
            }}>
              Want the full details?
            </h1>
            <p style={{
              fontFamily: "Inter",
              fontSize: isMobile ? 16 : 19,
              color: theme.inkSoft,
              lineHeight: 1.5, margin: 0,
            }}>
              Preview my resume below or download a copy.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{
            borderRadius: isMobile ? 14 : 20, overflow: "hidden",
            border: `1px solid ${theme.line}`,
            background: theme.card,
            boxShadow: mode === "dark"
              ? "0 30px 80px rgba(0,0,0,0.5)"
              : "0 30px 80px rgba(0,0,0,0.08)",
          }}>
            <div style={{
              padding: isMobile ? "10px 12px" : "12px 18px",
              display: "flex", alignItems: "center", gap: 8,
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
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                {isMobile ? "Resume.pdf" : "Yachi-Patel-Resume.pdf"}
              </div>
              {!isMobile && <Eye size={14} color={theme.inkMute} />}
              <button
                onClick={() => window.open(RESUME_URL, "_blank")}
                title="Download PDF"
                aria-label="Download resume PDF"
                style={{
                  background: `linear-gradient(135deg, ${theme.pastel1}, ${theme.pastel5})`,
                  border: "none", cursor: "pointer",
                  width: isMobile ? 36 : 28,
                  height: isMobile ? 36 : 28,
                  borderRadius: isMobile ? 10 : 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginLeft: 4,
                  flexShrink: 0,
                }}
              >
                <Download size={isMobile ? 16 : 14} color={theme.ink} />
              </button>
            </div>
            <div style={{
              aspectRatio: isMobile ? undefined : "8.5/11",
              height: isMobile ? "70vh" : undefined,
              position: "relative",
              background: mode === "dark" ? "#1a1a22" : "#f5f5f5"
            }}>
              <iframe
                src={RESUME_PREVIEW_URL}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: 0 }}
                title="Resume Preview"
                loading="lazy"
                allow="autoplay"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
