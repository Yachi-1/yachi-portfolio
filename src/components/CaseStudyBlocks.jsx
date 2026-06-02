import Reveal from "./Reveal.jsx";

/* ─── Shared section-header style ─── */
export const SectionLabel = ({ children, theme }) => (
  <div style={{
    fontFamily: "'Caveat', cursive", fontSize: 28, color: theme.accent, marginBottom: 8,
  }}>{children}</div>
);

/* ─── Blockquote ─── */
export const Callout = ({ children, theme, isMobile }) => (
  <div style={{
    borderLeft: `3px solid ${theme.accent}`,
    paddingLeft: isMobile ? 16 : 24,
    margin: isMobile ? "28px 0 16px 0" : "40px 0 16px 0",
  }}>
    <p style={{
      fontFamily: "Inter", fontSize: isMobile ? 17 : 20,
      lineHeight: 1.55, color: theme.ink, fontWeight: 500,
      fontStyle: "italic", margin: 0, letterSpacing: "-0.01em",
    }}>{children}</p>
  </div>
);

/* ─── Icon wrapper for consistent sizing ─── */
export const IconBadge = ({ icon: Icon, theme, size = 20 }) => (
  <div style={{
    width: 44, height: 44, borderRadius: 12,
    background: `${theme.accent}15`,
    border: `1px solid ${theme.accent}25`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    <Icon size={size} color={theme.accent} strokeWidth={1.6} />
  </div>
);

/* ─── Numbered insight card with icon ─── */
export function InsightCard({ num, lead, body, theme, isMobile, icon: Icon }) {
  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      padding: isMobile ? "24px 20px" : "32px 28px",
      borderRadius: 16,
      background: theme.card,
      border: `1px solid ${theme.line}`,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    }}>
      {num && (
        <div style={{
          position: "absolute",
          bottom: -20,
          right: 10,
          fontFamily: "Inter",
          fontSize: 120,
          fontWeight: 900,
          color: theme.accent,
          opacity: 0.04,
          lineHeight: 1,
          pointerEvents: "none",
        }}>
          {String(num).padStart(2, "0")}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, position: "relative", zIndex: 1 }}>
        {Icon && <IconBadge icon={Icon} theme={theme} size={22} />}
        {num && <div style={{
          fontFamily: "'Caveat', cursive", fontSize: 20, color: theme.accent,
          lineHeight: 1,
        }}>{String(num).padStart(2, "0")}</div>}
      </div>
      <p style={{
        fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5,
        lineHeight: 1.6, color: theme.inkSoft, margin: 0, position: "relative", zIndex: 1
      }}>
        <strong style={{ color: theme.ink, fontWeight: 600 }}>{lead} </strong>{body}
      </p>
    </div>
  );
}

/* ─── Problem card with icon ─── */
export function ProblemCard({ num, heading, body, theme, isMobile, icon: Icon }) {
  return (
    <Reveal delay={num * 0.06}>
      <div 
        style={{
          position: "relative",
          padding: isMobile ? "24px 20px" : "32px 28px",
          borderRadius: 16,
          background: theme.card,
          border: `1px solid ${theme.line}`,
          height: "100%", boxSizing: "border-box",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0,0,0,0.06)";
          e.currentTarget.style.borderColor = `${theme.accent}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = theme.line;
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${theme.accent}20, ${theme.accent}, ${theme.accent}20)`,
          opacity: 0, transition: "opacity 0.4s ease"
        }} 
        className="problem-card-top-bar"
        />
        
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          {Icon && (
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: `linear-gradient(135deg, ${theme.accent}15, transparent)`,
              border: `1px solid ${theme.accent}25`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Icon size={22} color={theme.accent} strokeWidth={1.8} />
            </div>
          )}
          {num && <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 22, color: theme.accent, opacity: 0.9, lineHeight: 1
          }}>{num}</div>}
        </div>
        <h3 style={{
          fontFamily: "Inter", fontSize: isMobile ? 18 : 20,
          fontWeight: 600, color: theme.ink, margin: "0 0 14px",
          lineHeight: 1.3, letterSpacing: "-0.015em",
        }}>{heading}</h3>
        {Array.isArray(body) ? (
          <ul style={{
            fontFamily: "Inter", fontSize: isMobile ? 15 : 15.5,
            lineHeight: 1.6, color: theme.inkSoft, margin: 0,
            paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8
          }}>
            {body.map((item, i) => (
               <li key={i} style={{ paddingLeft: 4 }}>{item}</li>
            ))}
          </ul>
        ) : (
          <p style={{
            fontFamily: "Inter", fontSize: isMobile ? 15 : 15.5,
            lineHeight: 1.6, color: theme.inkSoft, margin: 0,
          }}>
            {body}
          </p>
        )}
        <style>{`
          div[style*="translateY(-6px)"] .problem-card-top-bar {
            opacity: 1 !important;
          }
        `}</style>
      </div>
    </Reveal>
  );
}

/* ─── Placeholder for missing images ─── */
export function ImagePlaceholder({ text, theme, isMobile, height = 400 }) {
  return (
    <div style={{
      width: "100%", height: height,
      background: theme.bgAlt,
      border: `1px solid ${theme.line}`,
      borderRadius: 16,
      display: "flex", alignItems: "center", justifyContent: "center",
      marginTop: 32, marginBottom: 32,
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        backgroundImage: `linear-gradient(${theme.ink} 1px, transparent 1px), linear-gradient(90deg, ${theme.ink} 1px, transparent 1px)`,
        backgroundSize: "20px 20px"
      }} />
      <div style={{
        fontFamily: "Inter", fontSize: isMobile ? 14 : 16,
        color: theme.inkMute, fontWeight: 500, letterSpacing: "0.05em",
        textTransform: "uppercase", position: "relative", zIndex: 1
      }}>
        [ Placeholder: {text} ]
      </div>
    </div>
  );
}
