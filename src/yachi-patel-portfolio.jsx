import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import { themes } from "./theme.js";
import MagneticCursor from "./components/MagneticCursor.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/SectionDivider.jsx";
import Home from "./routes/Home.jsx";

const About = lazy(() => import("./routes/About.jsx"));
const Projects = lazy(() => import("./routes/Projects.jsx"));
const Resume = lazy(() => import("./routes/Resume.jsx"));
const ProjectDetail = lazy(() => import("./routes/ProjectDetail.jsx"));

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    (typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches)
  );
}

function useLenis() {
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
    };
  }, []);
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

export default function YachiPortfolio() {
  const [mode, setMode] = useState("light");
  const [route, setRoute] = useState("home");
  const theme = themes[mode];

  useLenis();
  useFonts();
  useHideCursor();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
        overflow: "hidden",
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
        route={isProjectDetail ? "projects" : route}
        setRoute={setRoute}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={null}>
            {route === "home" && <Home theme={theme} mode={mode} setRoute={setRoute} />}
            {route === "about" && <About theme={theme} mode={mode} />}
            {route === "projects" && <Projects theme={theme} mode={mode} setRoute={setRoute} />}
            {route === "resume" && <Resume theme={theme} mode={mode} />}
            {isProjectDetail && (
              <ProjectDetail id={projectId} theme={theme} mode={mode} setRoute={setRoute} />
            )}
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <SectionDivider theme={theme} />

      <Footer theme={theme} setRoute={setRoute} />
    </div>
  );
}
