import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Tools: React.FC = () => {
  const images = ["/whaticon1.png", "/whaticon2.png", "/whaticon3.png"];
  const texts = [
    { id: "t1", title: "BRANDING", desc: "We craft distinctive brand identities that communicate clarity, credibility, and character. From visual language to brand strategy, we help " },
    { id: "t2", title: "UI/UX DESIGN", desc: "We craft distinctive brand identities that communicate clarity, credibility, and character. From visual language to brand strategy, we help " },
    { id: "t3", title: "WEB DEVELOPMENT", desc: "We craft distinctive brand identities that communicate clarity, credibility, and character. From visual language to brand strategy, we help " },
    { id: "t4", title: "APP DESIGN", desc: "We craft distinctive brand identities that communicate clarity, credibility, and character. From visual language to brand strategy, we help " },
    { id: "t5", title: "SEO OPTIMIZATION", desc: "We craft distinctive brand identities that communicate clarity, credibility, and character. From visual language to brand strategy, we help " }
  ];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const textsRef = useRef<HTMLDivElement[]>([]);
  const titlesRef = useRef<HTMLHeadingElement[]>([]);

  const getPosition = (i: number, current: number, total: number) => {
    let diff = i - current;
    diff = (diff % total + total) % total;
    if (diff > total / 2) diff -= total;
    switch (diff) {
      case 0: return "middle";
      case -1: return "top";
      case 1: return "bottom";
      case -2: return "above";
      case 2: return "below";
      default: return "hidden";
    }
  };

  const getIconProps = (pos: string) => {
    switch (pos) {
      case "middle":
        return { x: 0, y: -85, scale: 2.15, scaleX: 1, opacity: 1, zIndex: 20, filter: "blur(0px) grayscale(0)" };
      case "top":
        // Top item stays at same Y position but fades
        return { x: -140, y: -256, scale: 0.75, scaleX: 0.85, opacity: 0.3, zIndex: 10, filter: "blur(6px) grayscale(0.9)" };
      case "bottom":
        return { x: -130, y: 106, scale: 0.9, scaleX: 0.85, opacity: 1, zIndex: 10, filter: "blur(4px) grayscale(0.8)" };
      case "above":
        // Above stays at top position but completely hidden
        return { x: -100, y: -216, scale: 0.6, scaleX: 0.75, opacity: 0, zIndex: 5, filter: "blur(8px) grayscale(1)" };
      case "below":
        return { x: -100, y: 108, scale: 0.9, scaleX: 0.75, opacity: 0, zIndex: 5, filter: "blur(8px) grayscale(0.9)" };
      default:
        return { x: 0, y: 0, scale: 0, scaleX: 1, opacity: 0, zIndex: 0, filter: "blur(0px) grayscale(0)" };
    }
  };

  const getTextProps = (pos: string) => {
    switch (pos) {
      case "middle":
        return { x: 28, y: -45, scale: 1, scaleX: 1, opacity: 1, zIndex: 30, filter: "blur(0px)" };

      case "top":
        // Top text stays at same Y position but fades
        return { x: -258, y: -202, scale: 0.55, scaleX: 0.85, opacity: 0.60, zIndex: 10, filter: "blur(0px)" };

      case "bottom":
        return { x: -208, y: 140, scale: 0.65, scaleX: 0.85, opacity: 0.60, zIndex: 10, filter: "blur(0px)" };

      case "above":
        // Above stays at top position but completely hidden
        return { x: -208, y: -172, scale: 0.45, scaleX: 0.75, opacity: 0, zIndex: 0, filter: "blur(8px)" };

      case "below":
        return { x: -208, y: 472, scale: 0.65, scaleX: 0.75, opacity: 0, zIndex: 5, filter: "blur(8px)" };

      default:
        return { x: 0, y: 0, scale: 0.5, scaleX: 1, opacity: 0, zIndex: 0, filter: "blur(0px)" };
    }
  };

  const getTitleProps = (pos: string) => {
    return { fontSize: pos === "middle" ? 65 : 34 };
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    iconsRef.current.forEach((icon, i) => {
      const pos = getPosition(i, 0, texts.length);
      const props = getIconProps(pos);
      gsap.set(icon, props);
    });

    textsRef.current.forEach((text, i) => {
      const pos = getPosition(i, 0, texts.length);
      const props = getTextProps(pos);
      gsap.set(text, props);
    });

    titlesRef.current.forEach((title, i) => {
      const pos = getPosition(i, 0, texts.length);
      const props = getTitleProps(pos);
      gsap.set(title, props);
    });

    const tl = gsap.timeline();
    const numSteps = texts.length;

    for (let step = 1; step < numSteps; step++) {
      iconsRef.current.forEach((icon, i) => {
        const pos = getPosition(i, step, numSteps);
        const props = getIconProps(pos);
        tl.to(icon, { ...props, duration: 1, ease: "power2.inOut" }, step - 1);
      });

      textsRef.current.forEach((text, i) => {
        const pos = getPosition(i, step, numSteps);
        const props = getTextProps(pos);
        tl.to(text, { ...props, duration: 1, ease: "power2.inOut" }, step - 1);
      });

      titlesRef.current.forEach((title, i) => {
        const pos = getPosition(i, step, numSteps);
        const props = getTitleProps(pos);
        tl.to(title, { ...props, duration: 1, ease: "power2.inOut" }, step - 1);
      });
    }
    
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${(numSteps - 1) * 100}%`,
      pin: sectionRef.current,
      scrub: 1,
      snap: 1 / (numSteps - 1),
      animation: tl,
      anticipatePin: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden py-16">
      {/* HEADING */}
      <div
        className="absolute top-2 right-0 z-20 text-white text-[65px] font-bold px-10 py-0 rounded-l-3xl border border-white/10 uppercase tracking-tight"
        style={{
          background: "rgba(12, 55, 33, 1)",
          width: "calc(min(65vw, 790px) - 20px)",
          boxSizing: "border-box",
        }}
      >
        WHAT WE DO
      </div>

      {/* HALF CIRCLE */}
      <div className="absolute md:top-8 z-40 w-72 md:w-[350px] opacity-80">
        <img src="/whathalfcircle.png" alt="Decoration" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-15 md:gap-25 h-screen">
        {/* ICONS */}
        <div className="relative w-full md:w-[30%] h-[400px] flex items-center justify-center md:pt-[30px] md:-translate-x-10">
          {Array.from({ length: texts.length }).map((_, i) => {
            const src = images[i % images.length];
            return (
              <div
                key={`icon-${i}`}
                ref={(el) => { if (el) iconsRef.current[i] = el; }}
                className="absolute"
              >
                <img src={src} className="w-16 h-16" />
              </div>
            );
          })}
        </div>

        {/* TEXT */}
        <div className="relative w-full font-bold md:w-[70%] h-[420px] top-24">
          {texts.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { if (el) textsRef.current[i] = el; }}
              className="absolute w-full"
            >
              <h3
  ref={(el) => { if (el) titlesRef.current[i] = el; }}
  className="text-white tracking-tighter leading-20 m-0 p-0"
>
  {item.title}
</h3>

<p className="text-white font-medium text-[18px] max-w-[500px] uppercase m-0 p-0 leading-snug">
  {item.desc}
</p>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* IMPORTANT FIX - NO WHITE TOP/BOTTOM */
        html, body, #__next {
          background: #000 !important;
          overflow-x: hidden !important;
        }

        .hidden-text {
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        @media (max-width: 768px) {
          section {
            padding-top: 18px !important;
            padding-bottom: 18px !important;
          }
          .absolute.top-6.right-0 {
            top: 12px !important;
            right: 0 !important;
            padding: 10px 12px !important;
            font-size: 2.1rem !important;
            width: 92vw !important;
          }
          .flex.flex-col.md\\:flex-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
            padding-left: 18px !important;
          }
          .relative.w-full.md\\:w-\\[30\\%\\] {
            width: 220px !important;
            height: 220px !important;
            left: 0 !important;
            transform: none !important;
          }
          .absolute.top-16.md\\:top-10 {
            width: 220px !important;
            left: 0px !important;
            top: 150px !important;
            transform: none !important;
          }
          .relative.w-full.md\\:w-\\[30\\%\\] img {
            width: 46px !important;
            height: 46px !important;
          }
          .relative.w-full.font-bold.md\\:w-\\[70\\%\\] {
            width: 100% !important;
            height: auto !important;
            top: 0 !important;
            margin-top: 280px !important;
            padding-left: 18px !important;
          }
          h3 {
            font-size: 1.8rem !important;
          }
          .text-gray-100 {
            font-size: 0.8rem !important;
          }
          .flex.flex-col.md\\:flex-row {
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Tools;