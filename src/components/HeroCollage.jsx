import { useMemo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint.js";

export default function HeroCollage({ theme, mode }) {
  const { isMobile } = useBreakpoint();

  const cardDefs = useMemo(() => (
    isMobile ? [
      { id: "wave",   x: -110, y: -110, rot: -8, w: 150, h: 90,  z: 3, kind: "annotation" },
      { id: "thumb1", x:  90,  y: -100, rot: 6,  w: 150, h: 110, z: 4, kind: "thumb", color: theme.pastel2, label: "Nellis" },
      { id: "thumb2", x: -110, y:  70,  rot: -5, w: 140, h: 100, z: 5, kind: "thumb", color: theme.pastel1, label: "Contrarian" },
      { id: "blob3d", x:  100, y:  80,  rot: 0,  w: 100, h: 100, z: 2, kind: "blob" },
      { id: "ui",     x:  20,  y:  140, rot: 4,  w: 170, h: 70,  z: 4, kind: "ui" },
      { id: "note",   x: -50,  y: -180, rot: -3, w: 130, h: 70,  z: 5, kind: "note" },
    ] : [
      { id: "wave",   x: -270, y: -140, rot: -8, w: 220, h: 140, z: 3, kind: "annotation" },
      { id: "thumb1", x:  240, y: -160, rot: 6,  w: 240, h: 170, z: 4, kind: "thumb", color: theme.pastel2, label: "Nellis · Auction" },
      { id: "thumb2", x: -340, y:  90,  rot: -5, w: 230, h: 160, z: 5, kind: "thumb", color: theme.pastel1, label: "Contrarian · Dashboard" },
      { id: "blob3d", x:  320, y:  110, rot: 0,  w: 160, h: 160, z: 2, kind: "blob" },
      { id: "ui",     x:  90,  y:  180, rot: 4,  w: 230, h: 90,  z: 4, kind: "ui" },
      { id: "note",   x: -120, y: -210, rot: -3, w: 170, h: 90,  z: 5, kind: "note" },
    ]
  ), [theme, isMobile]);

  return (
    <div style={{
      position: "relative",
      width: isMobile ? "min(340px, 92vw)" : "100%",
      height: isMobile ? 380 : 520,
      margin: "0 auto",
      display: "flex", alignItems: "center", justifyContent: "center",
      pointerEvents: "auto",
    }}>
      {cardDefs.map((c, i) => (
        <DraggableCard key={c.id} def={c} theme={theme} mode={mode} delay={0.6 + i * 0.08} disableDrag={isMobile} />
      ))}
    </div>
  );
}

function DraggableCard({ def, theme, mode, delay, disableDrag }) {
  const x = useMotionValue(def.x);
  const y = useMotionValue(def.y);
  const rot = useMotionValue(def.rot);
  const dragging = useRef(false);

  const content = renderContent(def, theme, mode);

  return (
    <motion.div
      drag={!disableDrag}
      dragMomentum={true}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 220, bounceDamping: 16 }}
      onDragStart={() => { dragging.current = true; }}
      onDragEnd={() => { dragging.current = false; }}
      whileHover={disableDrag ? undefined : { scale: 1.04, zIndex: 20 }}
      whileTap={disableDrag ? { scale: 0.97, rotate: def.rot + 2 } : undefined}
      whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
      initial={{ opacity: 0, scale: 0.6, x: def.x, y: def.y, rotate: def.rot }}
      animate={{ opacity: 1, scale: 1, x: def.x, y: def.y, rotate: def.rot }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        width: def.w, height: def.h,
        zIndex: def.z,
        cursor: disableDrag ? "default" : "grab",
        x, y, rotate: rot,
      }}
      data-magnet="0.15"
      data-cursor="drag"
      data-cursor-label="Drag"
    >
      {content}
    </motion.div>
  );
}

function renderContent(def, theme, mode) {
  if (def.kind === "thumb") {
    return (
      <div style={{
        width: "100%", height: "100%",
        background: `linear-gradient(135deg, ${def.color}, ${theme.pastel5})`,
        borderRadius: 14, overflow: "hidden", position: "relative",
        padding: 14, display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(0,0,0,0.18)" }} />)}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <div style={{ height: 8, width: 60, borderRadius: 4, background: "rgba(0,0,0,0.25)" }} />
          <div style={{ height: 8, width: 30, borderRadius: 4, background: "rgba(0,0,0,0.15)" }} />
          <div style={{ height: 8, width: 80, borderRadius: 4, background: "rgba(0,0,0,0.18)" }} />
        </div>
        <div style={{
          fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
          color: "rgba(0,0,0,0.7)", letterSpacing: "0.03em", textTransform: "uppercase",
        }}>{def.label}</div>
      </div>
    );
  }
  if (def.kind === "ui") {
    return (
      <div style={{
        width: "100%", height: "100%",
        background: theme.card, borderRadius: 14,
        border: `1px solid ${theme.line}`,
        padding: 14, display: "flex", alignItems: "center", gap: 12,
        boxShadow: mode === "dark" ? "0 12px 40px rgba(0,0,0,0.5)" : "0 12px 40px rgba(0,0,0,0.08)",
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: `linear-gradient(135deg, ${theme.pastel4}, ${theme.pastel2})`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Sparkles size={18} color={theme.ink} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: theme.ink }}>
            Research Insight
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, color: theme.inkMute, marginTop: 2 }}>
            Mixed-methods · 24 interviews
          </div>
        </div>
        <div style={{
          padding: "4px 8px", borderRadius: 999,
          background: theme.pastel3, fontFamily: "Inter", fontSize: 10, fontWeight: 600,
          color: "#7A5500",
        }}>+18%</div>
      </div>
    );
  }
  if (def.kind === "note") {
    return (
      <div style={{
        width: "100%", height: "100%",
        background: theme.pastel3,
        borderRadius: 4,
        padding: "12px 16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        fontFamily: "'Caveat', cursive", fontSize: 22,
        color: "#5A4500", lineHeight: 1.1,
        display: "flex", alignItems: "center",
      }}>
        design with intention ✦
      </div>
    );
  }
  if (def.kind === "annotation") {
    return (
      <div style={{
        width: "100%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Caveat', cursive", fontSize: 28,
        color: theme.ink,
      }}>
        <svg width="100%" height="100%" viewBox="0 0 260 140" style={{ overflow: "visible" }}>
          <text x="20" y="40" fontFamily="Caveat, cursive" fontSize="26" fill={theme.ink}>thinking deeply</text>
          <text x="40" y="76" fontFamily="Caveat, cursive" fontSize="26" fill={theme.accent}>building intentionally</text>
          <path d="M 30 92 Q 80 110 140 100" stroke={theme.ink} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 138 100 L 130 96 M 138 100 L 134 108" stroke={theme.ink} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  }
  if (def.kind === "blob") {
    return (
      <div style={{
        width: "100%", height: "100%", borderRadius: "50%",
        background: `radial-gradient(circle at 35% 30%, ${theme.pastel5}, ${theme.pastel1} 60%, ${theme.accent})`,
        boxShadow: `0 20px 60px ${theme.pastel1}88, inset -10px -20px 40px rgba(0,0,0,0.12), inset 10px 10px 30px rgba(255,255,255,0.4)`,
      }} />
    );
  }
  return null;
}
