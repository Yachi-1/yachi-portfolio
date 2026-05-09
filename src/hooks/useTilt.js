import { useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useTilt(strength = 0.3, springConfig = { stiffness: 250, damping: 18 }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const onEnter = useCallback(() => {
    if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
  }, []);

  const onMove = useCallback((e) => {
    const r = rectRef.current;
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  }, [x, y, strength]);

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x: sx, y: sy, onEnter, onMove, onLeave };
}
