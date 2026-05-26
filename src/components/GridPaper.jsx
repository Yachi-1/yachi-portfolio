export default function GridPaper({ theme, noMask = false }) {
  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      backgroundImage: `
        linear-gradient(${theme.grid} 1px, transparent 1px),
        linear-gradient(90deg, ${theme.grid} 1px, transparent 1px)
      `,
      backgroundSize: "44px 44px",
      maskImage: noMask ? "none" : "radial-gradient(ellipse at center, black 40%, transparent 85%)",
      WebkitMaskImage: noMask ? "none" : "radial-gradient(ellipse at center, black 40%, transparent 85%)",
      pointerEvents: "none",
      zIndex: 0,
    }} />
  );
}
