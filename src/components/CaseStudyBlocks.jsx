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
      padding: isMobile ? "24px 20px" : "32px 28px",
      borderRadius: 14,
      background: theme.bgAlt,
      border: `1px solid ${theme.line}`,
      height: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        {Icon && <IconBadge icon={Icon} theme={theme} />}
        {num && <div style={{
          fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent,
          lineHeight: 1,
        }}>{String(num).padStart(2, "0")}</div>}
      </div>
      <p style={{
        fontFamily: "Inter", fontSize: isMobile ? 15 : 16.5,
        lineHeight: 1.6, color: theme.inkSoft, margin: 0,
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
      <div style={{
        padding: isMobile ? "24px 20px" : "32px 28px",
        borderRadius: 14,
        background: theme.card,
        border: `1px solid ${theme.line}`,
        height: "100%", boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          {Icon && <IconBadge icon={Icon} theme={theme} />}
          {num && <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 18, color: theme.accent,
            lineHeight: 1,
          }}>{num}</div>}
        </div>
        <h3 style={{
          fontFamily: "Inter", fontSize: isMobile ? 17 : 19,
          fontWeight: 600, color: theme.ink, margin: "0 0 12px",
          lineHeight: 1.3, letterSpacing: "-0.015em",
        }}>{heading}</h3>
        <p style={{
          fontFamily: "Inter", fontSize: isMobile ? 14 : 15,
          lineHeight: 1.6, color: theme.inkSoft, margin: 0,
        }}>
          {body}
        </p>
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
