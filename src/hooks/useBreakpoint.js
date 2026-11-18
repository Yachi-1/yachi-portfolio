import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 719px)";
const TABLET_QUERY = "(min-width: 720px) and (max-width: 1024px)";
const LAPTOP_QUERY = "(min-width: 1025px) and (max-width: 1439px)";

function getBreakpoint() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "desktop";
  }
  if (window.matchMedia(MOBILE_QUERY).matches) return "mobile";
  if (window.matchMedia(TABLET_QUERY).matches) return "tablet";
  if (window.matchMedia(LAPTOP_QUERY).matches) return "laptop";
  return "desktop";
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const mobileMql = window.matchMedia(MOBILE_QUERY);
    const tabletMql = window.matchMedia(TABLET_QUERY);
    const laptopMql = window.matchMedia(LAPTOP_QUERY);
    const update = () => setBreakpoint(getBreakpoint());

    mobileMql.addEventListener("change", update);
    tabletMql.addEventListener("change", update);
    laptopMql.addEventListener("change", update);
    return () => {
      mobileMql.removeEventListener("change", update);
      tabletMql.removeEventListener("change", update);
      laptopMql.removeEventListener("change", update);
    };
  }, []);

  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";
  const isLaptop = breakpoint === "laptop";
  const isDesktop = breakpoint === "desktop" || breakpoint === "laptop";
  const isLargeDesktop = breakpoint === "desktop";
  const isMobileOrTablet = isMobile || isTablet;

  return {
    breakpoint,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isLargeDesktop,
    isMobileOrTablet,
  };
}
