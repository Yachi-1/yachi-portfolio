import { motion } from "framer-motion";
import { useTilt } from "../hooks/useTilt.js";

export default function MagneticButton({ children, onClick, theme, primary, label, big, ...rest }) {
  const { ref, x, y, onEnter, onMove, onLeave } = useTilt(0.3);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnet="0.4"
      data-cursor="hover"
      data-cursor-label={label || ""}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "relative",
        x, y,
        padding: big ? "20px 36px" : "14px 26px",
        borderRadius: 999,
        background: primary ? theme.ink : "transparent",
        color: primary ? theme.bg : theme.ink,
        border: primary ? "none" : `1.5px solid ${theme.ink}`,
        fontFamily: "Inter, sans-serif",
        fontSize: big ? 18 : 14,
        fontWeight: 600,
        letterSpacing: "-0.01em",
        cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 10,
        ...rest.style,
      }}
    >
      {children}
    </motion.button>
  );
}
