import { useEffect, useLayoutEffect, useState, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { themes } from "./theme.js";
import MagneticCursor from "./components/MagneticCursor.jsx";
import AccessibilityPanel from "./components/AccessibilityPanel.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

import Home from "./routes/Home.jsx";

// Only Home ships in the initial bundle; other pages load on demand and are
// prefetched in the background once the browser is idle, so navigation stays instant.
const loadAbout = () => import("./routes/About.jsx");
const loadProjects = () => import("./routes/Projects.jsx");
const loadResume = () => import("./routes/Resume.jsx");
const loadProjectDetail = () => import("./routes/ProjectDetail.jsx");
const About = lazy(loadAbout);
const Projects = lazy(loadProjects);
const Resume = lazy(loadResume);
const ProjectDetail = lazy(loadProjectDetail);

function usePrefetchRoutes() {
  useEffect(() => {
    const prefetch = () => {
      loadProjects();
      loadAbout();
      loadResume();
      loadProjectDetail();
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(prefetch, 1500);
    return () => clearTimeout(t);
  }, []);
}
import { useA11yReducedMotion } from "./hooks/useA11yReducedMotion.js";
import { resetScroll, scrollToTop } from "./utils/scroll.js";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    (typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches)
  );
}

const KEYBOARD_LINE = 120;

// Gives the keyboard the same glide as the wheel, since Lenis only handles wheel input.
function getKeyboardTarget(e, lenis) {
  if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return null;

  const el = e.target instanceof Element ? e.target : null;
  if (el?.closest("input, textarea, select, [contenteditable='true'], [data-lenis-prevent]")) return null;

  const page = window.innerHeight * 0.85;
  const from = lenis.targetScroll;
  switch (e.key) {
    case "ArrowDown": return e.shiftKey ? null : from + KEYBOARD_LINE;
    case "ArrowUp": return e.shiftKey ? null : from - KEYBOARD_LINE;
    case "PageDown": return from + page;
    case "PageUp": return from - page;
    case "Home": return 0;
    case "End": return lenis.limit;
    case " ":
      // Space activates a focused control rather than scrolling.
      if (el?.closest("button, a, summary, [role='button'], [role='link'], [tabindex]")) return null;
      return from + (e.shiftKey ? -page : page);
    default: return null;
  }
}

function useLenis(lenisRef, reduced) {
  useEffect(() => {
    if (reduced) return;

    // Touch input keeps the device's native momentum; Lenis only eases wheel,
    // keyboard and programmatic scrolling, so it is safe on touch and hybrid devices.
    // lerp-based easing follows consecutive wheel/trackpad ticks continuously,
    // which feels smoother than a fixed-duration tween restarted on every tick.
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      allowNestedScroll: true,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    const onKeyDown = (e) => {
      const top = getKeyboardTarget(e, lenis);
      if (top === null) return;
      e.preventDefault();
      if (e.key === "End") {
        // Lazy media can grow the page mid-scroll, so keep going until the true bottom.
        const toBottom = () => lenis.scrollTo(lenis.limit, {
          onComplete: () => {
            if (lenis.limit - lenis.animatedScroll > 1) toBottom();
          },
        });
        toBottom();
        return;
      }
      lenis.scrollTo(Math.max(0, Math.min(top, lenis.limit)));
    };
    window.addEventListener("keydown", onKeyDown);

    let rafId = 0;
    let running = true;

    const tick = (time) => {
      if (!running) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("keydown", onKeyDown);
      lenis.destroy();
      lenisRef.current = null;
      window.lenis = null;
    };
  }, [lenisRef, reduced]);
}

function useHideCursor() {
  useEffect(() => {
    if (isTouchDevice()) return;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, []);
}

function useTitle(route) {
  useEffect(() => {
    const titles = {
      home: "Yachi Patel · Home",
      about: "Yachi Patel · About",
      projects: "Yachi Patel · Projects",
      resume: "Yachi Patel · Resume",
    };
    if (route.startsWith("project:")) {
      const id = route.split(":")[1];
      const formatTitle = (str) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      document.title = `Yachi Patel · ${formatTitle(id)}`;
    } else {
      document.title = titles[route] || "Yachi Patel · Portfolio";
    }
  }, [route]);
}

const KNOWN_ROUTES = ["home", "about", "projects", "resume"];

// Shown for any URL that doesn't match a page, instead of an empty screen.
function NotFound({ theme, setRoute }) {
  return (
    <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: "160px 6vw 80px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", margin: 0, color: theme.ink }}>
        Page not found
      </h1>
      <p style={{ fontSize: 16, color: theme.inkSoft, margin: 0 }}>This page doesn't exist or has moved.</p>
      <button
        onClick={() => setRoute("home")}
        data-cursor="hover"
        style={{ padding: "12px 24px", borderRadius: 999, border: "none", background: theme.accent, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}
      >
        Back to home
      </button>
    </div>
  );
}

let isFirstPage = true;

// Mounts with each page, after the old one has faded out, so the old page never
// visibly jumps. The first page is skipped so a reload keeps its scroll position.
function RouteScrollReset() {
  useLayoutEffect(() => {
    if (isFirstPage) {
      isFirstPage = false;
      return;
    }
    resetScroll();
  }, []);
  return null;
}

export default function App() {
  const [mode, setMode] = useState("light");
  const [route, setRoute] = useState(() => {
    const path = window.location.pathname.substring(1);
    return path || "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      setRoute(path || "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (route === "home") {
      if (window.location.pathname !== "/") {
        window.history.pushState(null, '', "/");
      }
    } else {
      if (window.location.pathname !== `/${route}`) {
        window.history.pushState(null, '', `/${route}`);
      }
    }
  }, [route]);

  const theme = themes[mode];
  const reduced = useA11yReducedMotion();

  const lenisRef = useRef(null);
  useLenis(lenisRef, reduced);
  usePrefetchRoutes();
  useHideCursor();
  useTitle(route);

  // Every link goes through here: the current page glides to the top, and any
  // other route swaps in via AnimatePresence, with RouteScrollReset handling scroll.
  const navigate = (next) => {
    if (next === route) scrollToTop();
    else setRoute(next);
  };

  const isProjectDetail = route.startsWith("project:");
  const projectId = isProjectDetail ? route.split(":")[1] : null;

  return (
    <MotionConfig reducedMotion={reduced ? "always" : "never"}>
      <div
        style={{
          minHeight: "100vh",
          background: theme.bg,
          color: theme.ink,
          fontFamily: "Inter, sans-serif",
          transition: "background .6s ease, color .6s ease",
          overflowX: "clip",
        }}
      >

        <style>{`
          ::selection { background: ${theme.accent}; color: white; }
          button:focus-visible, a:focus-visible { outline: 2px solid ${theme.accent}; outline-offset: 3px; border-radius: 6px; }
        `}</style>

        <MagneticCursor theme={theme} />
        <AccessibilityPanel theme={theme} mode={mode} />
        <Nav
          theme={theme}
          mode={mode}
          setMode={setMode}
          route={route}
          setRoute={navigate}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? false : { opacity: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.12, ease: "easeOut" }}
          >
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <RouteScrollReset />
              {route === "home" && <Home theme={theme} mode={mode} setRoute={navigate} />}
              {route === "about" && <About theme={theme} mode={mode} />}
              {route === "projects" && <Projects theme={theme} mode={mode} setRoute={navigate} />}
              {route === "resume" && <Resume theme={theme} mode={mode} setRoute={navigate} />}
              {isProjectDetail && (
                <ProjectDetail id={projectId} theme={theme} mode={mode} setRoute={navigate} />
              )}
              {!KNOWN_ROUTES.includes(route) && !isProjectDetail && (
                <NotFound theme={theme} setRoute={navigate} />
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>

        <SectionDivider theme={theme} />

        <Footer theme={theme} mode={mode} setRoute={navigate} />
      </div>
    </MotionConfig>
  );
}
