import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useA11yReducedMotion } from "../hooks/useA11yReducedMotion.js";

export default function HeroCard({ children, staticContent, isMobile, floatDelay = 0, floatDuration = 4, parallaxY, ...props }) {
  const ref = useRef(null);
  const reduced = useA11yReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (reduced || isMobile) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ y: reduced || isMobile ? 0 : parallaxY, position: "absolute", zIndex: props.style?.zIndex, left: props.style?.left, right: props.style?.right, top: props.style?.top, bottom: props.style?.bottom }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          ...props.style,
          position: "relative", left: "auto", right: "auto", top: "auto", bottom: "auto", zIndex: "auto",
          perspective: 1000,
        }}
        {...props}
      >
        {staticContent}
        <motion.div
          style={{
            width: "100%", height: "100%",
            rotateX: reduced || isMobile ? 0 : rotateX,
            rotateY: reduced || isMobile ? 0 : rotateY,
            transformStyle: "preserve-3d",
            borderRadius: props.style?.borderRadius,
          }}
        >
          <motion.div
            animate={reduced || isMobile ? { y: 0 } : { y: [0, -10, 0] }}
            transition={reduced || isMobile ? undefined : {
              duration: floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: floatDelay
            }}
            style={{
              width: "100%", height: "100%",
              transform: "translateZ(10px)",
              borderRadius: props.style?.borderRadius,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
