import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useA11yReducedMotion } from "../hooks/useA11yReducedMotion.js";

export default function Reveal({ children, delay = 0, y = 30, className, style }) {
  const ref = useRef(null);
  // Remove the -10% margin which causes issues on mobile if elements are tall or viewports are small
  const inView = useInView(ref, { once: true, margin: "0px 0px -10px 0px" });
  const reduced = useA11yReducedMotion();

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
