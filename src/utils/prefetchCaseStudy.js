// Warms the code-split chunk for a case study before the user clicks,
// so navigation feels instant. Each thunk matches the lazy() import in
// ProjectDetail.jsx; the browser caches the module after the first call.
const LOADERS = {
  kinetic: () => import("../routes/KineticCaseStudy.jsx"),
  contrarian: () => import("../routes/ContrarianCaseStudy.jsx"),
  nellis: () => import("../routes/NellisCaseStudy.jsx"),
  herrmann: () => import("../routes/HerrmannCaseStudy.jsx"),
  remitflow: () => import("../routes/RemitflowCaseStudy.jsx"),
  vegas: () => import("../routes/VegasCaseStudy.jsx"),
};

const warmed = new Set();

export function prefetchCaseStudy(id) {
  if (!id || warmed.has(id)) return;
  const load = LOADERS[id];
  if (!load) return;
  warmed.add(id);
  load();
}
