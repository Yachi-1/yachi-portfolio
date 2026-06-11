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

  // Extract gesture/animation props so they don't get lost in the style spread
  const {
    whileHover, whileTap, whileDrag,
    drag, dragMomentum, dragElastic, dragConstraints,
    initial, animate, transition,
    style: cardStyle = {},
    ...restProps
  } = props;

  return (
    <motion.div
      className="hero-card"
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      whileDrag={whileDrag}
      drag={drag}
      dragMomentum={dragMomentum}
      dragElastic={dragElastic}
      dragConstraints={dragConstraints}
      style={{
        y: reduced ? 0 : parallaxY,
        position: "absolute",
        zIndex: cardStyle.zIndex,
        left: cardStyle.left,
        right: cardStyle.right,
        top: cardStyle.top,
        bottom: cardStyle.bottom,
        cursor: cardStyle.cursor,
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          ...cardStyle,
          position: "relative",
          left: "auto", right: "auto", top: "auto", bottom: "auto",
          zIndex: "auto",
          perspective: 1000,
        }}
        {...restProps}
      >
        {staticContent}
        <motion.div
          style={{
            width: "100%", height: "100%",
            rotateX: reduced || isMobile ? 0 : rotateX,
            rotateY: reduced || isMobile ? 0 : rotateY,
            transformStyle: "preserve-3d",
            borderRadius: cardStyle.borderRadius,
          }}
        >
          <motion.div
            animate={reduced ? { y: 0 } : { y: [0, -10, 0] }}
            transition={reduced ? { duration: 0.3 } : {
              duration: floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: floatDelay
            }}
            style={{
              width: "100%", height: "100%",
              transform: "translateZ(10px)",
              borderRadius: cardStyle.borderRadius,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

