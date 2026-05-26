import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const SIZES = {
  default: { ring: 36, dot: 6 },
  hover: { ring: 64, dot: 8 },
  view: { ring: 92, dot: 0 },
  drag: { ring: 80, dot: 0 },
};

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    (typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches)
  );
}

export default function MagneticCursor({ theme }) {
  const reduced = useReducedMotion();
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(isTouchDevice());
  }, []);

  if (touch) return null;
  return <CursorImpl theme={theme} reduced={reduced} />;
}

function CursorImpl({ theme, reduced }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = reduced
    ? { stiffness: 1000, damping: 100 }
    : { stiffness: 350, damping: 28, mass: 0.4 };
  const dotSpringConfig = reduced
    ? { stiffness: 1000, damping: 100 }
    : { stiffness: 800, damping: 35 };

  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  // Refs hold state shared across rAF callbacks
  const rafScheduled = useRef(false);
  const lastEvent = useRef({ x: 0, y: 0 });
  const activeMagnet = useRef(null);
  const magnetRect = useRef(null);
  const magnetStrength = useRef(0.35);

  useEffect(() => {
    const refreshRect = () => {
      if (activeMagnet.current && activeMagnet.current.isConnected) {
        magnetRect.current = activeMagnet.current.getBoundingClientRect();
      } else {
        activeMagnet.current = null;
        magnetRect.current = null;
      }
    };

    const setActiveMagnet = (el) => {
      if (el === activeMagnet.current) return;
      activeMagnet.current = el;
      if (el) {
        magnetRect.current = el.getBoundingClientRect();
        magnetStrength.current = parseFloat(el.dataset.magnet) || 0.35;
        setVariant(el.dataset.cursor || "hover");
        setLabel(el.dataset.cursorLabel || "");
      } else {
        magnetRect.current = null;
        setVariant("default");
        setLabel("");
      }
    };

    const flush = () => {
      rafScheduled.current = false;
      const { x: ex, y: ey } = lastEvent.current;
      let x = ex;
      let y = ey;
      const r = magnetRect.current;
      if (r) {
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const s = magnetStrength.current;
        x = ex + (cx - ex) * s;
        y = ey + (cy - ey) * s;
      }
      cursorX.set(x);
      cursorY.set(y);
    };

    const onMove = (e) => {
      lastEvent.current.x = e.clientX;
      lastEvent.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      if (!rafScheduled.current) {
        rafScheduled.current = true;
        requestAnimationFrame(flush);
      }
    };

    const onOver = (e) => {
      const magnet = e.target?.closest?.("[data-magnet]") || null;
      setActiveMagnet(magnet);
    };

    const onOut = (e) => {
      // Only clear when leaving the magnet itself (relatedTarget outside)
      if (
        activeMagnet.current &&
        !activeMagnet.current.contains(e.relatedTarget)
      ) {
        setActiveMagnet(null);
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onScroll = () => refreshRect();
    const onResize = () => refreshRect();

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [cursorX, cursorY]);

  const s = SIZES[variant] || SIZES.default;

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          translateX: ringX, translateY: ringY,
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{ width: s.ring, height: s.ring, x: -s.ring / 2, y: -s.ring / 2 }}
          transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 25 }}
          style={{
            borderRadius: 999,
            border: variant === "view" ? "1px solid rgba(0,0,0,0.08)" : `1.5px solid ${theme.ink}`,
            background: variant === "view" ? "rgba(255, 255, 255, 0.9)" : "transparent",
            color: variant === "view" ? "#111" : theme.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.05em", textTransform: "uppercase",
            mixBlendMode: variant === "default" ? "difference" : "normal",
            backdropFilter: variant === "view" ? "blur(4px)" : "none",
            WebkitBackdropFilter: variant === "view" ? "blur(4px)" : "none",
          }}
        >
          {label}
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          translateX: dotX, translateY: dotY,
          opacity: visible && s.dot > 0 ? 1 : 0,
        }}
      >
        <div style={{
          width: s.dot, height: s.dot, marginLeft: -s.dot / 2, marginTop: -s.dot / 2,
          borderRadius: 999, background: theme.ink,
          mixBlendMode: "difference",
        }} />
      </motion.div>
    </>
  );
}
