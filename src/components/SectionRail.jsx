import { useEffect, useState } from "react";

// Width reserved on the left of each section so the rail never covers content.
export const RAIL_GUTTER = "max(6vw, 210px)";

/*
  A compact, fixed table of contents on the left edge (laptop and desktop only).
  It fades in once the first section reaches the viewport, fades out after the
  last one, and highlights the section currently being read.
*/
export default function SectionRail({ sections, theme, onJump }) {
  const [active, setActive] = useState(sections[0]?.[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      const els = sections.map(([id]) => document.getElementById(id)).filter(Boolean);
      if (!els.length) return;
      const first = els[0].getBoundingClientRect();
      const last = els[els.length - 1].getBoundingClientRect();
      setVisible(first.top < window.innerHeight * 0.6 && last.bottom > line);
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav aria-label="Case study sections"
      style={{
        position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 40, width: 170,
        opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", visibility: visible ? "visible" : "hidden",
        transition: "opacity .25s ease, visibility .25s ease",
      }}>
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 1 }}>
        {sections.map(([id, name], i) => {
          const on = id === active;
          return (
            <li key={id}>
              <a href={`#${id}`} data-cursor="hover" aria-current={on ? "location" : undefined}
                onClick={(e) => { e.preventDefault(); onJump(id); }}
                style={{
                  display: "flex", alignItems: "baseline", gap: 8, padding: "4px 10px",
                  borderLeft: `2px solid ${on ? theme.accent : theme.line}`,
                  color: on ? theme.ink : theme.inkMute, fontWeight: on ? 600 : 400,
                  textDecoration: "none", fontFamily: "Inter", fontSize: 12.5, lineHeight: 1.35,
                  transition: "color .2s ease, border-color .2s ease",
                }}>
                <span style={{ color: on ? theme.accent : theme.inkMute, fontSize: 11, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {name}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
