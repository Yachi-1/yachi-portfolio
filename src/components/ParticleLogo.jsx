import { useEffect, useRef } from "react";

export default function ParticleLogo({ mode, size = 40, playOnHover = false, isHovered = false, playOnFirstVisit = false }) {
  const canvasRef = useRef(null);
  const hoverState = useRef({ playing: false, start: 0 });
  
  useEffect(() => {
    if (playOnFirstVisit) {
      if (!sessionStorage.getItem("yp_logo_played_session")) {
        hoverState.current.playing = true;
        hoverState.current.start = performance.now();
        sessionStorage.setItem("yp_logo_played_session", "true");
      }
    }
  }, [playOnFirstVisit]);

  useEffect(() => {
    if (playOnHover && isHovered && !hoverState.current.playing) {
      hoverState.current.playing = true;
      hoverState.current.start = performance.now();
    }
  }, [isHovered, playOnHover]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let animationFrameId;
    let paused = false;      // true when off-screen or tab hidden
    let idleRendered = false; // true once the at-rest frame is drawn (hover variant)
    let W = 0, H = 0, DPR = 1;
    
    let particles = [];
    let N = 0;
    
    const PHASE = {
      sphereHold: 1000,
      form: 800,
      textHold: 1500,
      disperse: 800,
    };
    const CYCLE = PHASE.sphereHold + PHASE.form + PHASE.textHold + PHASE.disperse;
    let t0 = performance.now();
    
    const smooth = t => t * t * (3 - 2 * t);
    const ease   = t => 1 - Math.pow(1 - t, 3);
    const clamp  = (v, a, b) => Math.max(a, Math.min(b, v));
    
    function palette() {
      return mode === "light"
        ? { r: 255, g: 143, b: 163, depthLift: 60 }
        : { r: 255, g: 122, b: 149, depthLift: 90 };
    }
    
    function sampleImage(img, size) {
      if (!size || size <= 0) return [];
      
      const sampleRes = 120; // High resolution for crisp sampling
      const off = document.createElement("canvas");
      off.width = sampleRes; off.height = sampleRes;
      const o = off.getContext("2d");
      
      const padding = sampleRes * 0.05;
      const drawSize = sampleRes * 0.9;
      o.drawImage(img, padding, padding, drawSize, drawSize);
    
      const data = o.getImageData(0, 0, sampleRes, sampleRes).data;
      
      const step = 1; // Dense sampling
      const pts = [];
      const scaleToSize = size / sampleRes;
      
      for (let y = 0; y < sampleRes; y += step) {
        for (let x = 0; x < sampleRes; x += step) {
          const idx = (y * sampleRes + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];
          
          // Only pick opaque pixels that are NOT the off-white background
          if (a > 128 && (r < 240 || g < 240 || b < 240)) {
            pts.push({
              x: (x - sampleRes / 2 + (Math.random() - 0.5) * 0.5) * scaleToSize,
              y: (y - sampleRes / 2 + (Math.random() - 0.5) * 0.5) * scaleToSize,
              r, g, b
            });
          }
        }
      }
      return pts;
    }
    
    function fibonacciSphere(count, radius) {
      const pts = [];
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = golden * i;
        pts.push({
          x: Math.cos(theta) * r * radius,
          y: y * radius,
          z: Math.sin(theta) * r * radius,
        });
      }
      return pts;
    }
    
    let sourceImg = null;
    let cleanTextCanvas = null;

    function buildCleanImage(img) {
      const off = document.createElement("canvas");
      off.width = img.width; 
      off.height = img.height;
      const o = off.getContext("2d");
      o.drawImage(img, 0, 0);
      
      const imgData = o.getImageData(0, 0, img.width, img.height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        const a = data[i+3];
        // Make the off-white background transparent
        if (a > 128 && r >= 240 && g >= 240 && b >= 240) {
          data[i+3] = 0;
        }
      }
      o.putImageData(imgData, 0, 0);
      cleanTextCanvas = off;
    }

    function build() {
      if (!sourceImg) return;
      const cssSize = size;
      const textPts = sampleImage(sourceImg, cssSize);
      N = textPts.length;
      const radius = cssSize * 0.40;
      const spherePts = fibonacciSphere(N, radius);
    
      const radiusScale = Math.max(0.6, size / 160);
    
      particles = textPts.map((tp, i) => ({
        tx: tp.x, ty: tp.y,
        tr: tp.r, tg: tp.g, tb: tp.b,
        sx: spherePts[i].x,
        sy: spherePts[i].y,
        sz: spherePts[i].z,
        delay: Math.random() * 0.45,
        baseR: (0.8 + Math.random() * 0.7) * radiusScale,
        flicker: Math.random() * Math.PI * 2,
      }));
    }
    
    function resize() {
      const cssSize = size;
      if (!cssSize || cssSize <= 0) return false;
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = cssSize; H = cssSize;
      canvas.width = cssSize * DPR;
      canvas.height = cssSize * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
      return true;
    }
    
    function morphAmount(now) {
      let t = (now - t0) % CYCLE;
      if (t < PHASE.sphereHold) return 0;
      t -= PHASE.sphereHold;
      if (t < PHASE.form) return ease(t / PHASE.form);
      t -= PHASE.form;
      if (t < PHASE.textHold) return 1;
      t -= PHASE.textHold;
      return 1 - ease(t / PHASE.disperse);
    }
    
    function morphAmountHover(now) {
      if (!hoverState.current.playing) return 1; // stay at text image
      let t = now - hoverState.current.start;
      if (t < 0) return 1;
      if (t < PHASE.disperse) {
        return 1 - ease(t / PHASE.disperse); // disperse to sphere
      }
      t -= PHASE.disperse;
      if (t < PHASE.sphereHold) {
        return 0; // spin as sphere
      }
      t -= PHASE.sphereHold;
      if (t < PHASE.form) {
        return ease(t / PHASE.form); // form back to image
      }
      hoverState.current.playing = false;
      return 1;
    }
    
    function frame(now) {
      // Skip all work while off-screen / tab hidden, or while the hover logo is
      // at rest and its static frame has already been drawn. Keep a cheap rAF
      // alive to resume instantly when state changes.
      const playing = playOnHover ? hoverState.current.playing : true;
      if (paused || (!playing && idleRendered)) {
        animationFrameId = requestAnimationFrame(frame);
        return;
      }

      const m = playOnHover ? morphAmountHover(now) : morphAmount(now);
      const rot = now * 0.0006; // even faster rotation
      const tilt = 0.42;
      const cosR = Math.cos(rot), sinR = Math.sin(rot);
      const cosT = Math.cos(tilt), sinT = Math.sin(tilt);
      const focal = W * 1.4;
      const cx = W / 2, cy = H / 2;
      const pal = palette();
    
      ctx.clearRect(0, 0, W, H);
      
      const imgFade = Math.max(0, (m - 0.8) / 0.2); // 0 to 1 as m goes 0.8 -> 1.0
      const particleAlphaMultiplier = 1 - imgFade; // Fade out particles
    
      for (let i = 0; i < N; i++) {
        const p = particles[i];
    
        let x = p.sx * cosR - p.sz * sinR;
        let z = p.sx * sinR + p.sz * cosR;
        let y = p.sy * cosT - z * sinT;
        z = p.sy * sinT + z * cosT;
    
        const scale = focal / (focal + z);
        const projX = cx + x * scale;
        const projY = cy + y * scale;
    
        const local = clamp((m - p.delay) / (1 - 0.45), 0, 1);
        const mm = smooth(local);
    
        const drawX = projX + (cx + p.tx - projX) * mm;
        const drawY = projY + (cy + p.ty - projY) * mm;
    
        const depth = clamp((z + W * 0.4) / (W * 0.8), 0, 1);
        const sphereAlpha = 0.25 + depth * 0.75;
        const alpha = (sphereAlpha + (1 - sphereAlpha) * mm) * particleAlphaMultiplier;
        const lift = (1 - depth) * pal.depthLift * (1 - mm);
    
        const flick = 0.85 + 0.15 * Math.sin(now * 0.004 + p.flicker);
        const r = p.baseR * (0.7 + 0.5 * (depth * (1 - mm) + mm)) * (0.9 + 0.2 * mm);
        
        // Color blending
        const baseR = pal.r - lift|0;
        const baseG = pal.g - lift*0.4|0;
        const baseB = pal.b - lift*0.2|0;
        
        const finalR = baseR + (p.tr - baseR) * mm;
        const finalG = baseG + (p.tg - baseG) * mm;
        const finalB = baseB + (p.tb - baseB) * mm;
    
        ctx.beginPath();
        ctx.fillStyle = `rgba(${finalR|0}, ${finalG|0}, ${finalB|0}, ${alpha * flick})`;
        ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
        ctx.fill();
      }
      
      if (imgFade > 0 && cleanTextCanvas) {
        ctx.globalAlpha = imgFade;
        const padding = W * 0.05;
        const drawSize = W * 0.9;
        ctx.drawImage(cleanTextCanvas, padding, padding, drawSize, drawSize);
        ctx.globalAlpha = 1.0;
      }

      // At rest, the next frame can short-circuit until hover re-triggers it.
      idleRendered = !playing;
      animationFrameId = requestAnimationFrame(frame);
    }
    
    let imgOk = false;
    let started = false;
    function tryBuild() {
      if (!imgOk) return;
      if (resize() && !started) {
        started = true;
        animationFrameId = requestAnimationFrame(frame);
      }
    }

    const img = new Image();
    img.onload = () => {
      sourceImg = img;
      buildCleanImage(img);
      imgOk = true;
      tryBuild();
    };
    img.src = "/favicon.png";

    // Pause the loop when the logo scrolls out of view or the tab is hidden.
    let onScreen = true, tabHidden = false;
    const updatePaused = () => { paused = !onScreen || tabHidden; };
    const io = new IntersectionObserver(
      ([entry]) => { onScreen = entry.isIntersecting; updatePaused(); },
      { rootMargin: "100px" }
    );
    io.observe(canvas);
    const onVisibility = () => { tabHidden = document.visibilityState === "hidden"; updatePaused(); };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mode, size, playOnHover]);

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
