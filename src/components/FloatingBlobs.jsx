import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useA11yReducedMotion } from "../hooks/useA11yReducedMotion.js";

export default function FloatingBlobs({ theme }) {
  const reduced = useA11yReducedMotion();
  const containerRef = useRef(null);
  // Only animate while the blobs are actually on screen — no off-screen churn.
  const inView = useInView(containerRef, { margin: "100px" });
  const animate = reduced || !inView;
  const blobs = [
    { c: theme.pastel1, top: "10%", left: "8%", size: 280, dur: 18 },
    { c: theme.pastel2, top: "55%", left: "78%", size: 340, dur: 22 },
    { c: theme.pastel5, top: "75%", left: "12%", size: 220, dur: 20 },
    { c: theme.pastel3, top: "20%", left: "65%", size: 200, dur: 24 },
  ];
  return (
    <div ref={containerRef} aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={animate ? undefined : { x: [0, 30, -20, 0], y: [0, -25, 20, 0] }}
          transition={animate ? undefined : { duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: b.top, left: b.left,
            width: b.size, height: b.size, borderRadius: "50%",
            background: b.c,
            filter: "blur(28px)",
            opacity: 0.55,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      ))}
    </div>
  );
}
