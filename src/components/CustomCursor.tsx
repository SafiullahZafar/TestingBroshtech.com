import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cleanup: (() => void) | null = null;

    const initCursor = () => {
      if (window.innerWidth < 1024) return;

      const inner = innerRef.current;
      const outer = outerRef.current;
      if (!inner || !outer) return;

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let outerX = mouseX;
      let outerY = mouseY;

      const trailCount = 7;
      const trails: { x: number; y: number; el: HTMLDivElement }[] = [];

      for (let i = 0; i < trailCount; i++) {
        const el = document.createElement("div");
        el.className = "cursor-trail";
        el.style.position = "fixed";
        el.style.left = "0px";
        el.style.top = "0px";
        el.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px) scale(${1 - i / (trailCount * 1.8)})`;
        el.style.opacity = "0";
        el.style.zIndex = String(10000 - i);
        document.body.appendChild(el);
        trails.push({ x: mouseX, y: mouseY, el });
      }

      let lastMove = Date.now();
      let isIdle = false;
      const idleDelay = 420;

      const updateCursor = (x: number, y: number) => {
        mouseX = x;
        mouseY = y;
        lastMove = Date.now();
        isIdle = false;
      };

      const handleMove = (e: MouseEvent) => {
        updateCursor(e.clientX, e.clientY);

        trails.forEach((t, i) => {
          t.el.style.opacity = `${Math.max(0.08, 1 - (i + 1) / (trailCount * 1.1))}`;
        });

        outer.style.opacity = "1";
        inner.style.opacity = "1";
      };

      document.addEventListener("mousemove", handleMove, { passive: true });

      updateCursor(mouseX, mouseY);

      let animationFrame: number;

      const animate = () => {
        outerX += (mouseX - outerX) * 0.45;
        outerY += (mouseY - outerY) * 0.45;

        inner.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
        outer.style.transform = `translate(${outerX - 12}px, ${outerY - 12}px)`;

        let prevX = outerX;
        let prevY = outerY;

        trails.forEach((t, i) => {
          const lerp = 0.45 - i * 0.02;
          t.x += (prevX - t.x) * Math.max(0.02, lerp);
          t.y += (prevY - t.y) * Math.max(0.02, lerp);

          const scale = 1 - i / (trailCount * 1.6);
          t.el.style.transform = `translate(${t.x - 8}px, ${t.y - 8}px) scale(${scale})`;

          prevX = t.x;
          prevY = t.y;
        });

        if (!isIdle && Date.now() - lastMove > idleDelay) {
          isIdle = true;
          trails.forEach((t) => {
            t.el.style.opacity = "0";
          });
          outer.style.opacity = "0.35";
        }

        animationFrame = requestAnimationFrame(animate);
      };

      animate();

      cleanup = () => {
        document.removeEventListener("mousemove", handleMove);
        cancelAnimationFrame(animationFrame);
        trails.forEach((t) => t.el.remove());
      };
    };

    const handleResize = () => {
      if (cleanup) cleanup();
      initCursor();
    };

    initCursor();
    window.addEventListener("resize", handleResize);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", handleResize);
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