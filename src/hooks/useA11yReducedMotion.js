import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function useA11yReducedMotion() {
  const osReduced = useReducedMotion();
  const [a11yReduced, setA11yReduced] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    const check = () => setA11yReduced(el.getAttribute("data-a11y-reduced-motion") === "true");
    
    // Initial check
    check();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === "data-a11y-reduced-motion") {
          check();
        }
      });
    });

    observer.observe(el, { attributes: true, attributeFilter: ["data-a11y-reduced-motion"] });
    return () => observer.disconnect();
  }, []);

  return osReduced || a11yReduced;
}
