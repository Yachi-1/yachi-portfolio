export default function SectionDivider({ theme }) {
  return (
    <div style={{ padding: "0 6vw" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${theme.line} 15%, ${theme.line} 85%, transparent)`,
        }} />
      </div>
    </div>
  );
}
