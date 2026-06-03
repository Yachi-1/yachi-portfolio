import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  X,
  RotateCcw,
  Pause,
  Type,
  Contrast,
  Circle,
  Link2,
  Focus,
  MousePointer2,
  ImageOff,
  ChevronDown,
  ChevronUp,
  Keyboard,
  ZoomIn,
} from "lucide-react";

const STORAGE_KEY = "yachi-a11y-settings";

const DEFAULT = {
  reducedMotion: false,
  readableFont: false,
  monochrome: false,
  highlightLinks: false,
  keyboardNavigation: false,
  textMagnifier: false,
  bigCursor: false,
  hideImages: false,
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT, ...JSON.parse(raw) };
  } catch { }
  return { ...DEFAULT };
}

function saveSettings(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch { }
}

// Sync all data-attributes onto <html>
function syncAttributes(s) {
  const el = document.documentElement;
  el.setAttribute("data-a11y-reduced-motion", String(s.reducedMotion));
  el.setAttribute("data-a11y-readable-font", String(s.readableFont));
  el.setAttribute("data-a11y-monochrome", String(s.monochrome));
  el.setAttribute("data-a11y-highlight-links", String(s.highlightLinks));
  el.setAttribute("data-a11y-keyboard-navigation", String(s.keyboardNavigation));
  el.setAttribute("data-a11y-text-magnifier", String(s.textMagnifier));
  el.setAttribute("data-a11y-big-cursor", String(s.bigCursor));
  el.setAttribute("data-a11y-hide-images", String(s.hideImages));
}

/* ═══════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════ */

function ToggleRow({ icon: Icon, label, active, onToggle, theme }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "12px 16px",
        border: `1px solid ${active ? theme.accent : theme.line}`,
        borderRadius: 12,
        background: active ? `${theme.accent}15` : theme.card,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <Icon size={18} color={active ? theme.accent : theme.inkMute} />
      <span
        style={{
          flex: 1,
          textAlign: "left",
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: active ? theme.ink : theme.inkSoft,
        }}
      >
        {label}
      </span>
      <div
        style={{
          width: 38,
          height: 20,
          borderRadius: 999,
          background: active ? theme.accent : theme.line,
          position: "relative",
          transition: "background 0.2s ease",
          flexShrink: 0,
        }}
      >
        <motion.div
          animate={{ x: active ? 19 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "#fff",
            position: "absolute",
            top: 1,
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </button>
  );
}

function SectionHeading({ children, theme }) {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: theme.inkMute,
        padding: "8px 0 4px",
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */

export default function AccessibilityPanel({ theme, mode }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(loadSettings);
  const [magnifierData, setMagnifierData] = useState({ text: "", x: 0, y: 0, show: false });
  const panelRef = useRef(null);

  // Persist + sync attributes
  useEffect(() => {
    saveSettings(settings);
    syncAttributes(settings);
  }, [settings]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const elements = {
      h: 'h1, h2, h3, h4, h5, h6',
      b: 'button, a',
      g: 'img, svg',
      f: 'input, textarea, select',
      m: 'nav'
    };

    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();
      const selector = elements[key];
      if (!selector) return;

      const nodes = Array.from(document.querySelectorAll(selector)).filter(node => {
        return node.offsetWidth > 0 || node.offsetHeight > 0 || node.getClientRects().length > 0;
      });
      if (nodes.length === 0) return;

      const currentIndex = nodes.indexOf(document.activeElement);
      const nextIndex = (currentIndex + 1) % nodes.length;

      nodes[nextIndex].focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Text Magnifier
  useEffect(() => {
    if (!settings.textMagnifier) {
      if (magnifierData.show) setMagnifierData(prev => ({ ...prev, show: false }));
      return;
    }

    const handleMouseMove = (e) => {
      const target = e.target;
      if (!target || !target.getBoundingClientRect) return;

      const rect = target.getBoundingClientRect();
      const screenArea = window.innerWidth * window.innerHeight;
      const targetArea = rect.width * rect.height;

      // 1. Prevent massive layout wrappers (e.g. the whole page background) from being magnified
      if (targetArea > screenArea * 0.3 || rect.width > window.innerWidth * 0.85) {
        setMagnifierData(prev => prev.show ? { ...prev, show: false } : prev);
        return;
      }

      // 2. Ignore non-text visual elements
      if (['SVG', 'PATH', 'IMG', 'CANVAS', 'HTML', 'BODY', 'VIDEO'].includes(target.tagName)) {
        setMagnifierData(prev => prev.show ? { ...prev, show: false } : prev);
        return;
      }

      // 3. Robust text extraction that bypasses 3D CSS `innerText` bugs and preserves block spacing
      const extractCleanText = (el) => {
        let txt = "";
        const traverse = (node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            txt += node.textContent;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const isBlock = ['DIV', 'P', 'LI', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BR', 'SECTION', 'ARTICLE'].includes(node.tagName);
            if (isBlock && txt.length > 0 && !txt.endsWith('\n') && !txt.endsWith(' ')) txt += '\n';
            for (let i = 0; i < node.childNodes.length; i++) traverse(node.childNodes[i]);
            if (isBlock && txt.length > 0 && !txt.endsWith('\n') && !txt.endsWith(' ')) txt += '\n';
          }
        };
        traverse(el);
        return txt.trim().replace(/\n{2,}/g, '\n');
      };

      const text = extractCleanText(target);

      // 4. Magnify if valid text exists and is a reasonable length
      if (text && text.length > 0 && text.length < 1500) {
        setMagnifierData({
          text: text,
          x: e.clientX,
          y: e.clientY,
          show: true
        });
      } else {
        setMagnifierData(prev => prev.show ? { ...prev, show: false } : prev);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [settings.textMagnifier]);

  const update = useCallback(
    (key, val) =>
      setSettings((prev) => ({ ...prev, [key]: val })),
    []
  );

  const toggle = useCallback(
    (key) =>
      setSettings((prev) => ({ ...prev, [key]: !prev[key] })),
    []
  );

  const resetAll = useCallback(() => {
    setSettings({ ...DEFAULT });
  }, []);

  const activeCount = [
    settings.reducedMotion,
    settings.readableFont,
    settings.monochrome,
    settings.highlightLinks,
    settings.keyboardNavigation,
    settings.textMagnifier,
    settings.bigCursor,
    settings.hideImages,
  ].filter(Boolean).length;

  return (
    <>

      {/* Text Magnifier Tooltip */}
      <AnimatePresence>
        {settings.textMagnifier && magnifierData.show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "fixed",
              top: magnifierData.y + 20,
              left: magnifierData.x,
              transform: "translateX(-50%)",
              background: theme.ink,
              color: theme.bg,
              padding: "16px 24px",
              borderRadius: 16,
              fontSize: 28,
              fontWeight: 600,
              fontFamily: settings.readableFont ? "'Lexend', sans-serif" : "'Inter', sans-serif",
              zIndex: 100000,
              pointerEvents: "none",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              maxWidth: "80vw",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              border: `2px solid ${theme.accent}`
            }}
          >
            {magnifierData.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        id="a11y-trigger"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility Settings"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9998,
          width: 52,
          height: 52,
          borderRadius: 999,
          border: mode === "dark" ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.08)",
          background: theme.accent,
          boxShadow:
            mode === "dark"
              ? "0 8px 32px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)"
              : "0 8px 24px rgba(255,143,163,0.35), 0 2px 8px rgba(255,143,163,0.2)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <Accessibility size={22} color="#ffffff" />
        {activeCount > 0 && (
          <div
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#ffffff",
              color: theme.accent,
              fontSize: 11,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {activeCount}
          </div>
        )}
      </motion.button>

      {/* Overlay backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 9998,
            }}
          />
        )}
      </AnimatePresence>

      {/* Panel Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="a11y-panel"
            ref={panelRef}
            initial={{ x: 340, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 340, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            style={{
              position: "fixed",
              right: 16,
              bottom: 16,
              top: 16,
              width: 320,
              zIndex: 9999,
              borderRadius: 20,
              background: theme.bg,
              border: `1px solid ${theme.line}`,
              boxShadow:
                mode === "dark"
                  ? "0 24px 80px rgba(0,0,0,0.6)"
                  : "0 24px 80px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px 20px 16px",
                borderBottom: `1px solid ${theme.line}`,
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: theme.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <Accessibility size={18} color="#ffffff" />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: theme.ink,
                  }}
                >
                  Accessibility
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    color: theme.inkSoft || theme.inkMute,
                    opacity: 0.85,
                    marginTop: 4,
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em"
                  }}
                >
                  Customize your browsing experience
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close accessibility panel"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  border: `1px solid ${theme.line}`,
                  background: theme.card,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <X size={16} color={theme.inkMute} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {/* Reset Button */}
              <button
                onClick={resetAll}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "10px",
                  borderRadius: 12,
                  border: `1px solid ${theme.line}`,
                  background: theme.card,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: theme.inkSoft,
                  marginBottom: 8,
                  transition: "all 0.2s ease",
                }}
              >
                <RotateCcw size={14} />
                Reset All Settings
              </button>

              {/* Content Adjustments */}
              <SectionHeading theme={theme}>Content</SectionHeading>

              <ToggleRow
                icon={Pause}
                label="Stop Animations"
                active={settings.reducedMotion}
                onToggle={() => toggle("reducedMotion")}
                theme={theme}
              />
              <ToggleRow
                icon={Type}
                label="Readable Font"
                active={settings.readableFont}
                onToggle={() => toggle("readableFont")}
                theme={theme}
              />

              {/* Visual Adjustments */}
              <SectionHeading theme={theme}>Visual</SectionHeading>

              <ToggleRow
                icon={ZoomIn}
                label="Text Magnifier"
                active={settings.textMagnifier}
                onToggle={() => toggle("textMagnifier")}
                theme={theme}
              />
              <ToggleRow
                icon={Circle}
                label="Monochrome"
                active={settings.monochrome}
                onToggle={() => toggle("monochrome")}
                theme={theme}
              />
              <ToggleRow
                icon={Link2}
                label="Highlight Links"
                active={settings.highlightLinks}
                onToggle={() => toggle("highlightLinks")}
                theme={theme}
              />

              {/* Navigation */}
              <SectionHeading theme={theme}>Navigation</SectionHeading>

              <ToggleRow
                icon={Keyboard}
                label="Keyboard Navigation"
                active={settings.keyboardNavigation}
                onToggle={() => toggle("keyboardNavigation")}
                theme={theme}
              />

              <ToggleRow
                icon={MousePointer2}
                label="Big Cursor"
                active={settings.bigCursor}
                onToggle={() => toggle("bigCursor")}
                theme={theme}
              />
              <ToggleRow
                icon={ImageOff}
                label="Hide Images"
                active={settings.hideImages}
                onToggle={() => toggle("hideImages")}
                theme={theme}
              />
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "12px 20px",
                borderTop: `1px solid ${theme.line}`,
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                color: theme.inkMute,
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              {activeCount} adjustment{activeCount !== 1 ? "s" : ""} active
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
