import { Download, Eye } from "lucide-react";
import FloatingBlobs from "../components/FloatingBlobs.jsx";
import Reveal from "../components/Reveal.jsx";

const RESUME_URL = "https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/view?usp=sharing";
const RESUME_PREVIEW_URL = "https://drive.google.com/file/d/1PVTsGVL1kLe4wHbP0_QZFdnPf30uMVoZ/preview";

export default function Resume({ theme, mode }) {
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

        <Reveal delay={0.2}>
          <div style={{
            borderRadius: 20, overflow: "hidden",
            border: `1px solid ${theme.line}`,
            background: theme.card,
            boxShadow: mode === "dark"
              ? "0 30px 80px rgba(0,0,0,0.5)"
              : "0 30px 80px rgba(0,0,0,0.08)",
          }}>
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
                onClick={() => window.open(RESUME_URL, "_blank")}
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
            <div style={{ aspectRatio: "8.5/11", position: "relative", background: mode === "dark" ? "#1a1a22" : "#f5f5f5" }}>
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
