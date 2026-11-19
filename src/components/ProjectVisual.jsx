import { memo } from "react";
import { motion } from "framer-motion";
import herrmannImg from "../assets/Workrooms_Cover.png?w=1200&format=webp&quality=82";
import vegasImg from "../assets/Kiyarosa_Cover.png?w=1600&format=webp&quality=92";
import contrarianImg from "../assets/Agentplace_Cover.png?w=1200&format=webp&quality=82";
import ironvaleImg from "../assets/Ironvale_Cover.png?w=1200&format=webp&quality=82";
import kpImg from "../assets/Hearth_Cover.png?w=1200&format=webp&quality=82";
import remitflowImg from "../assets/Aurelia_Cover.png?w=1200&format=webp&quality=82";

const visualCardStyle = (theme) => ({
  position: "absolute",
  background: theme.card === "#FFFFFF" ? "#FFFFFF" : "#1E1E26",
  borderRadius: 12,
  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
  overflow: "hidden",
  border: `1px solid rgba(0,0,0,0.06)`,
});

export const VisualIronvale = memo(function VisualIronvale({ theme, hover }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.img
        src={ironvaleImg}
        alt="Ironvale contractor website cover"
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
        alt="Agentplace Dashboard UI Audit cover"
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
        alt="Horizon Workrooms VR study cover"
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
        alt="Kiyarosa skincare store cover"
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
        alt="Hearth shared inbox website cover"
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
        alt="Aurelia hotel website cover"
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
  nellis: VisualIronvale,
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
