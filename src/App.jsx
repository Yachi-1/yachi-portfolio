import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

import { themes } from "./theme.js";
import MagneticCursor from "./components/MagneticCursor.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Resume from "./routes/Resume.jsx";
import ProjectDetail from "./routes/ProjectDetail.jsx";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    (typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches)
  );
}

function useLenis(lenisRef) {
  useEffect(() => {
    if (isTouchDevice()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.lenis = lenis; // Also expose to window for easier access if needed

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
      lenis.destroy();
      lenisRef.current = null;
      window.lenis = null;
    };
  }, [lenisRef]);
}

function useFonts() {
  useEffect(() => {
    if (document.getElementById("yachi-fonts-extra")) return;
    const link = document.createElement("link");
    link.id = "yachi-fonts-extra";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap";
    document.head.appendChild(link);
  }, []);
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
  const reduced = useReducedMotion();

  const lenisRef = useRef(null);
  useLenis(lenisRef);
  useFonts();
  useHideCursor();
  useTitle(route);

  const prevRoute = useRef(route);

  useEffect(() => {
    if (prevRoute.current === route) {
      return;
    }
    prevRoute.current = route;
    
    // Immediate scroll reset on route change
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [route]);

  const isProjectDetail = route.startsWith("project:");
  const projectId = isProjectDetail ? route.split(":")[1] : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.bg,
        color: theme.ink,
        fontFamily: "Inter, sans-serif",
        transition: "background .6s ease, color .6s ease",
        overflowX: "hidden",
      }}
    >

      <style>{`
        ::selection { background: ${theme.accent}; color: white; }
        button:focus-visible, a:focus-visible { outline: 2px solid ${theme.accent}; outline-offset: 3px; border-radius: 6px; }
      `}</style>

      <MagneticCursor theme={theme} />
      <Nav
        theme={theme}
        mode={mode}
        setMode={setMode}
        route={route}
        setRoute={setRoute}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={reduced ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {route === "home" && <Home theme={theme} mode={mode} setRoute={setRoute} />}
            {route === "about" && <About theme={theme} mode={mode} />}
            {route === "projects" && <Projects theme={theme} mode={mode} setRoute={setRoute} />}
            {route === "resume" && <Resume theme={theme} mode={mode} />}
            {isProjectDetail && (
              <ProjectDetail id={projectId} theme={theme} mode={mode} setRoute={setRoute} />
            )}
        </motion.div>
      </AnimatePresence>

      <SectionDivider theme={theme} />

      <Footer theme={theme} mode={mode} setRoute={setRoute} />
    </div>
  );
}
