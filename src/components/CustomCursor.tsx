import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return; // desktop only

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outerX = mouseX;
    let outerY = mouseY;

    const trailCount = 10;
    const trails: { x: number; y: number; el: HTMLDivElement }[] = [];

    // Create trail elements and append behind cursor
    for (let i = 0; i < trailCount; i++) {
      const el = document.createElement("div");
      el.className = "cursor-trail";
      el.style.position = "fixed";
      el.style.left = "0px";
      el.style.top = "0px";
      el.style.transform = `translate(-50%, -50%) scale(${1 - i / (trailCount * 1.8)})`;
      el.style.opacity = "0";
      el.style.zIndex = String(10000 - i); // behind cursor
      document.body.appendChild(el);
      trails.push({ x: mouseX, y: mouseY, el });
    }

    let lastMove = Date.now();
    let isIdle = false;
    const idleDelay = 420;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = Date.now();

      // show trails when moving
      if (isIdle) {
        isIdle = false;
        trails.forEach((t, i) => {
          t.el.style.transition = "opacity 220ms ease-out, transform 120ms ease-out";
          t.el.style.opacity = `${Math.max(0.08, 1 - (i + 1) / (trailCount * 1.1))}`;
        });
        outer.style.opacity = "1";
        inner.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", handleMove, { passive: true });

    const animate = () => {
      // Outer lags behind mouse (slower)
      outerX += (mouseX - outerX) * 0.18;
      outerY += (mouseY - outerY) * 0.18;

      // Inner (small dot) follows more directly (little smoothing)
      const innerX = mouseX;
      const innerY = mouseY;
      if (inner) inner.style.transform = `translate(${innerX - 6}px, ${innerY - 6}px)`;

      if (outer) outer.style.transform = `translate(${outerX - 12}px, ${outerY - 12}px)`;

      // Trail follows the outer position in sequence
      let prevX = outerX;
      let prevY = outerY;
      trails.forEach((t, i) => {
        const lerp = 0.18 - i * 0.012; // decreasing lerp so each is slower
        t.x += (prevX - t.x) * Math.max(0.02, lerp);
        t.y += (prevY - t.y) * Math.max(0.02, lerp);
        const scale = 1 - i / (trailCount * 1.6);
        t.el.style.transform = `translate(${t.x - 8}px, ${t.y - 8}px) scale(${scale})`;
        // Slightly dim later trails
        t.el.style.opacity = t.el.style.opacity || `${Math.max(0.06, 1 - (i + 1) / (trailCount * 1.05))}`;
        prevX = t.x;
        prevY = t.y;
      });

      // Idle check: fade trails when mouse stops
      if (!isIdle && Date.now() - lastMove > idleDelay) {
        isIdle = true;
        trails.forEach((t) => {
          t.el.style.transition = "opacity 600ms ease-out";
          t.el.style.opacity = "0";
        });
        outer.style.transition = "opacity 400ms ease-out";
        outer.style.opacity = "0.35";
      }

      requestAnimationFrame(animate);
    };

    // Start with trails hidden
    trails.forEach((t) => (t.el.style.opacity = "0"));
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMove);
      trails.forEach((t) => t.el.remove());
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden>
      <div ref={innerRef} className="inner" />
      <div ref={outerRef} className="outer" />
    </div>
  );
};

export default CustomCursor;
