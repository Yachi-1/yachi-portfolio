import { memo } from "react";
import { motion } from "framer-motion";
import herrmannImg from "../assets/Herrmann_Cover.png?w=1200&format=webp&quality=80";
import vegasImg from "../assets/Vegas_Tickets_Cover.png?w=1200&format=webp&quality=80";
import contrarianImg from "../assets/Contrarian_Thinking_Cover.png?w=1200&format=webp&quality=80";
import nellisImg from "../assets/Nellis_Auction_Cover.png?w=1200&format=webp&quality=80";
import kpImg from "../assets/KP_Cover.png?w=1200&format=webp&quality=80";
import remitflowImg from "../assets/Remit_Flow_Cover.png?w=1200&format=webp&quality=80";

const visualCardStyle = (theme) => ({
  position: "absolute",
  background: theme.card === "#FFFFFF" ? "#FFFFFF" : "#1E1E26",
  borderRadius: 12,
  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
  overflow: "hidden",
  border: `1px solid rgba(0,0,0,0.06)`,
});

export const VisualNellis = memo(function VisualNellis({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={nellisImg}
        alt="Nellis Auction Cover"
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1.01 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transformOrigin: "center center",
          willChange: "transform"
        }}
      />
    </div>
  );
});

export const VisualContrarian = memo(function VisualContrarian({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={contrarianImg}
        alt="Contrarian Thinking Cover"
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1.01 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transformOrigin: "center center",
          willChange: "transform"
        }}
      />
    </div>
  );
});

export const VisualHerrmann = memo(function VisualHerrmann({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={herrmannImg}
        alt="Herrmann Brand Book Cover"
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1.01 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transformOrigin: "center center",
          willChange: "transform"
        }}
      />
    </div>
  );
});

export const VisualVegas = memo(function VisualVegas({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={vegasImg}
        alt="Vegas Tickets Cover"
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1.01 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transformOrigin: "center center",
          willChange: "transform"
        }}
      />
    </div>
  );
});



export const VisualKinetic = memo(function VisualKinetic({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={kpImg}
        alt="Kinetic Potential Cover"
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1.01 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transformOrigin: "center center",
          willChange: "transform"
        }}
      />
    </div>
  );
});

export const VisualRemitflow = memo(function VisualRemitflow({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={remitflowImg}
        alt="Global Payout Cover"
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1.01 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transformOrigin: "center center",
          willChange: "transform"
        }}
      />
    </div>
  );
});

const VISUALS = {
  nellis: VisualNellis,
  contrarian: VisualContrarian,
  herrmann: VisualHerrmann,
  vegas: VisualVegas,
  kinetic: VisualKinetic,
  remitflow: VisualRemitflow,
};

export default function ProjectVisual({ project, theme, hover }) {
  const Comp = VISUALS[project.id];
  return Comp ? <Comp theme={theme} hover={hover} /> : null;
}
