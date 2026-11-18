import { useState, useEffect } from "react";

const isReduced = () =>
  typeof document !== "undefined" &&
  document.documentElement.getAttribute("data-a11y-reduced-motion") === "true";

// Animations are stopped only by the accessibility panel's "Stop animations"
// toggle (not by the OS-level prefers-reduced-motion setting).
export function useA11yReducedMotion() {
  const [a11yReduced, setA11yReduced] = useState(isReduced);

  useEffect(() => {
    const el = document.documentElement;
    const check = () => setA11yReduced(isReduced());
    check();

    const observer = new MutationObserver(check);
    observer.observe(el, { attributes: true, attributeFilter: ["data-a11y-reduced-motion"] });
    return () => observer.disconnect();
  }, []);

  return a11yReduced;
}
