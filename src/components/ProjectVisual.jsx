import { memo } from "react";
import { motion } from "framer-motion";

const visualCardStyle = (theme) => ({
  position: "absolute",
  background: theme.card === "#FFFFFF" ? "#FFFFFF" : "#1E1E26",
  borderRadius: 12,
  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
  overflow: "hidden",
  border: `1px solid rgba(0,0,0,0.06)`,
});

export const VisualNellis = memo(function VisualNellis({ theme, hover }) {
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
});

export const VisualContrarian = memo(function VisualContrarian({ theme, hover }) {
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
});

export const VisualHerrmann = memo(function VisualHerrmann({ theme, hover }) {
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
});

export const VisualVegas = memo(function VisualVegas({ theme, hover }) {
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
});

export const VisualFloat = memo(function VisualFloat({ theme, hover }) {
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
});

export const VisualKinetic = memo(function VisualKinetic({ theme, hover }) {
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
});

export const VisualPenny = memo(function VisualPenny({ theme, hover }) {
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
});

export const VisualGlobal = memo(function VisualGlobal({ theme, hover }) {
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
});

const VISUALS = {
  nellis: VisualNellis,
  contrarian: VisualContrarian,
  herrmann: VisualHerrmann,
  vegas: VisualVegas,
  "float-draw": VisualFloat,
  kinetic: VisualKinetic,
  pennyjuice: VisualPenny,
  globalpayout: VisualGlobal,
};

export default function ProjectVisual({ project, theme, hover }) {
  const Comp = VISUALS[project.id];
  return Comp ? <Comp theme={theme} hover={hover} /> : null;
}
