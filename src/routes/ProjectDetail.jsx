import { lazy, Suspense } from "react";

// Projects with a case study; every other project page is intentionally blank
// for now (only the nav and footer show).
const CASE_STUDIES = {
  contrarian: lazy(() => import("./AgentplaceCaseStudy.jsx")),
  remitflow: lazy(() => import("./AureliaCaseStudy.jsx")),
  vegas: lazy(() => import("./KiyarosaCaseStudy.jsx")),
};

export default function ProjectDetail({ id, theme, mode, setRoute }) {
  const CaseStudy = CASE_STUDIES[id];
  if (!CaseStudy) return <div style={{ minHeight: "100vh" }} />;
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <CaseStudy theme={theme} mode={mode} setRoute={setRoute} />
    </Suspense>
  );
}
