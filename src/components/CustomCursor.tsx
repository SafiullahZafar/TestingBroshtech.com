// import { useEffect, useRef } from "react";

// const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement | null>(null);
//   const innerRef = useRef<HTMLDivElement | null>(null);
//   const outerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     if (window.innerWidth < 1024) return; // desktop only

//     const inner = innerRef.current;
//     const outer = outerRef.current;
//     if (!inner || !outer) return;

//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;
//     let outerX = mouseX;
//     let outerY = mouseY;

//     const trailCount = 7;
//     const trails: { x: number; y: number; el: HTMLDivElement }[] = [];

//     // Create trail elements and append behind cursor
//     for (let i = 0; i < trailCount; i++) {
//       const el = document.createElement("div");
//       el.className = "cursor-trail";
//       el.style.position = "fixed";
//       el.style.left = "0px";
//       el.style.top = "0px";
//       el.style.transform = `translate(-50%, -50%) scale(${1 - i / (trailCount * 1.8)})`;
//       el.style.opacity = "0";
//       el.style.zIndex = String(10000 - i); // behind cursor
//       document.body.appendChild(el);
//       trails.push({ x: mouseX, y: mouseY, el });
//     }

//     let lastMove = Date.now();
//     let isIdle = false;
//     const idleDelay = 420;

//     const handleMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       lastMove = Date.now();

//       // show trails when moving
//       if (isIdle) {
//         isIdle = false;
//         trails.forEach((t, i) => {
//           t.el.style.transition = "opacity 220ms ease-out, transform 120ms ease-out";
//           t.el.style.opacity = `${Math.max(0.08, 1 - (i + 1) / (trailCount * 1.1))}`;
//         });
//         outer.style.opacity = "1";
//         inner.style.opacity = "1";
//       }
//     };

//     document.addEventListener("mousemove", handleMove, { passive: true });

//     const animate = () => {
//       // Outer lags behind mouse (slower)
//       outerX += (mouseX - outerX) * 0.30;
//       outerY += (mouseY - outerY) * 0.30;

//       // Inner (small dot) follows more directly (little smoothing)
//       const innerX = mouseX;
//       const innerY = mouseY;
//       if (inner) inner.style.transform = `translate(${innerX - 6}px, ${innerY - 6}px)`;

//       if (outer) outer.style.transform = `translate(${outerX - 12}px, ${outerY - 12}px)`;

//       // Trail follows the outer position in sequence
//       let prevX = outerX;
//       let prevY = outerY;
//       trails.forEach((t, i) => {
//         const lerp = 0.35 - i * 0.02; // decreasing lerp so each is slower
//         t.x += (prevX - t.x) * Math.max(0.02, lerp);
//         t.y += (prevY - t.y) * Math.max(0.02, lerp);
//         const scale = 1 - i / (trailCount * 1.6);
//         t.el.style.transform = `translate(${t.x - 8}px, ${t.y - 8}px) scale(${scale})`;
//         // Slightly dim later trails
//         t.el.style.opacity = t.el.style.opacity || `${Math.max(0.06, 1 - (i + 1) / (trailCount * 1.05))}`;
//         prevX = t.x;
//         prevY = t.y;
//       });

//       // Idle check: fade trails when mouse stops
//       if (!isIdle && Date.now() - lastMove > idleDelay) {
//         isIdle = true;
//         trails.forEach((t) => {
//           t.el.style.transition = "opacity 600ms ease-out";
//           t.el.style.opacity = "0";
//         });
//         outer.style.transition = "opacity 400ms ease-out";
//         outer.style.opacity = "0.35";
//       }

//       requestAnimationFrame(animate);
//     };

//     // Start with trails hidden
//     trails.forEach((t) => (t.el.style.opacity = "0"));
//     animate();

//     return () => {
//       document.removeEventListener("mousemove", handleMove);
//       trails.forEach((t) => t.el.remove());
//     };
//   }, []);

//   return (
//     <div ref={cursorRef} className="custom-cursor" aria-hidden>
//       <div ref={innerRef} className="inner" />
//       <div ref={outerRef} className="outer" />
//     </div>
//   );
// };

// export default CustomCursor;


// import { useEffect, useRef } from "react";

// const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement | null>(null);
//   const innerRef = useRef<HTMLDivElement | null>(null);
//   const outerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const initializeCursor = () => {
//       if (window.innerWidth < 1024) return; // desktop only

//       const inner = innerRef.current;
//       const outer = outerRef.current;
//       if (!inner || !outer) return;

//       let mouseX = window.innerWidth / 2;
//       let mouseY = window.innerHeight / 2;
//       let outerX = mouseX;
//       let outerY = mouseY;

//       const trailCount = 5;
//       const trails: { x: number; y: number; el: HTMLDivElement }[] = [];

//       for (let i = 0; i < trailCount; i++) {
//         const el = document.createElement("div");
//         el.className = "cursor-trail";
//         el.style.position = "fixed";
//         el.style.left = "0px";
//         el.style.top = "0px";
//         el.style.transform = `translate(-50%, -50%) scale(${1 - i / (trailCount * 1.8)})`;
//         el.style.opacity = "0";
//         el.style.zIndex = String(10000 - i);
//         document.body.appendChild(el);
//         trails.push({ x: mouseX, y: mouseY, el });
//       }

//       let lastMove = Date.now();
//       let isIdle = false;
//       const idleDelay = 420;

//       const updateCursor = (x: number, y: number) => {
//         mouseX = x;
//         mouseY = y;
//         lastMove = Date.now();

//         if (isIdle) {
//           isIdle = false;
//           trails.forEach((t, i) => {
//             t.el.style.transition = "opacity 220ms ease-out, transform 120ms ease-out";
//             t.el.style.opacity = `${Math.max(0.08, 1 - (i + 1) / (trailCount * 1.1))}`;
//           });
//           outer.style.opacity = "1";
//           inner.style.opacity = "1";
//         }
//       };

//       // Trigger initial move at center
//       const triggerInitialMove = () => updateCursor(mouseX, mouseY);

//       const handleMove = (e: MouseEvent) => updateCursor(e.clientX, e.clientY);
//       const handleEnter = (e: MouseEvent) => updateCursor(e.clientX, e.clientY);

//       document.addEventListener("mousemove", handleMove, { passive: true });
//       document.addEventListener("mouseenter", handleEnter, { passive: true });

//       const handleVisibility = () => {
//         if (document.visibilityState === "visible") {
//           outerX = mouseX;
//           outerY = mouseY;
//           triggerInitialMove();
//         }
//       };
//       document.addEventListener("visibilitychange", handleVisibility);

//       const animate = () => {
//         outerX += (mouseX - outerX) * 0.3;
//         outerY += (mouseY - outerY) * 0.3;

//         if (inner) inner.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
//         if (outer) outer.style.transform = `translate(${outerX - 12}px, ${outerY - 12}px)`;

//         let prevX = outerX;
//         let prevY = outerY;
//         trails.forEach((t, i) => {
//           const lerp = 0.35 - i * 0.02;
//           t.x += (prevX - t.x) * Math.max(0.02, lerp);
//           t.y += (prevY - t.y) * Math.max(0.02, lerp);
//           const scale = 1 - i / (trailCount * 1.6);
//           t.el.style.transform = `translate(${t.x - 8}px, ${t.y - 8}px) scale(${scale})`;
//           t.el.style.opacity = t.el.style.opacity || `${Math.max(0.06, 1 - (i + 1) / (trailCount * 1.05))}`;
//           prevX = t.x;
//           prevY = t.y;
//         });

//         if (!isIdle && Date.now() - lastMove > idleDelay) {
//           isIdle = true;
//           trails.forEach((t) => {
//             t.el.style.transition = "opacity 600ms ease-out";
//             t.el.style.opacity = "0";
//           });
//           outer.style.transition = "opacity 400ms ease-out";
//           outer.style.opacity = "0.35";
//         }

//         requestAnimationFrame(animate);
//       };

//       trails.forEach((t) => (t.el.style.opacity = "0"));
//       triggerInitialMove();
//       animate();

//       return () => {
//         document.removeEventListener("mousemove", handleMove);
//         document.removeEventListener("mouseenter", handleEnter);
//         document.removeEventListener("visibilitychange", handleVisibility);
//         trails.forEach((t) => t.el.remove());
//       };
//     };

//     // Initialize on mount
//     let cleanup: (() => void) | undefined = initializeCursor();

//     // Re-initialize on resize from mobile → desktop
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         if (cleanup) cleanup();
//         cleanup = initializeCursor();
//       }
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       if (cleanup) cleanup();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div ref={cursorRef} className="custom-cursor" aria-hidden>
//       <div ref={innerRef} className="inner" />
//       <div ref={outerRef} className="outer" />
//     </div>
//   );
// };

// export default CustomCursor;










import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeCursor = () => {
      if (window.innerWidth < 1024) return; // desktop only

      const inner = innerRef.current;
      const outer = outerRef.current;
      if (!inner || !outer) return;

      // Initial cursor position at center
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let outerX = mouseX;
      let outerY = mouseY;

      const trailCount = 7;
      const trails: { x: number; y: number; el: HTMLDivElement }[] = [];

      // Create trail elements and append to body
      for (let i = 0; i < trailCount; i++) {
        const el = document.createElement("div");
        el.className = "cursor-trail";
        el.style.position = "fixed";
        el.style.left = "0px";
        el.style.top = "0px";

        // Start trail exactly at cursor center
        el.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px) scale(${1 - i / (trailCount * 1.8)})`;
        el.style.opacity = `${Math.max(0.08, 1 - (i + 1) / (trailCount * 1.1))}`;
        el.style.zIndex = String(10000 - i);

        document.body.appendChild(el);
        trails.push({ x: mouseX, y: mouseY, el });
      }

      let lastMove = Date.now();
      let isIdle = false;
      const idleDelay = 420;

      // Update cursor position
      const updateCursor = (x: number, y: number) => {
        mouseX = x;
        mouseY = y;
        lastMove = Date.now();

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

      const handleMove = (e: MouseEvent) => updateCursor(e.clientX, e.clientY);
      const handleEnter = (e: MouseEvent) => updateCursor(e.clientX, e.clientY);

      document.addEventListener("mousemove", handleMove, { passive: true });
      document.addEventListener("mouseenter", handleEnter, { passive: true });

      // When tab regains visibility
      const handleVisibility = () => {
        if (document.visibilityState === "visible") {
          outerX = mouseX;
          outerY = mouseY;
          updateCursor(mouseX, mouseY); // immediately reset trail
        }
      };
      document.addEventListener("visibilitychange", handleVisibility);

      const animate = () => {
        // Smooth outer cursor
        outerX += (mouseX - outerX) * 0.3;
        outerY += (mouseY - outerY) * 0.3;

        if (inner) inner.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
        if (outer) outer.style.transform = `translate(${outerX - 12}px, ${outerY - 12}px)`;

        let prevX = outerX;
        let prevY = outerY;
        trails.forEach((t, i) => {
          const lerp = 0.35 - i * 0.02;
          t.x += (prevX - t.x) * Math.max(0.02, lerp);
          t.y += (prevY - t.y) * Math.max(0.02, lerp);
          const scale = 1 - i / (trailCount * 1.6);
          t.el.style.transform = `translate(${t.x - 8}px, ${t.y - 8}px) scale(${scale})`;
          t.el.style.opacity = t.el.style.opacity || `${Math.max(0.06, 1 - (i + 1) / (trailCount * 1.05))}`;
          prevX = t.x;
          prevY = t.y;
        });

        // Idle fade
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

      // Trigger trail immediately at page load
      animate();

      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseenter", handleEnter);
        document.removeEventListener("visibilitychange", handleVisibility);
        trails.forEach((t) => t.el.remove());
      };
    };

    // Initialize cursor on mount
    let cleanup = initializeCursor();

    // Re-initialize on resize (mobile → desktop)
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        if (cleanup) cleanup();
        cleanup = initializeCursor();
      }
    };
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