import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhatWeDo: React.FC = () => {
  const images = ["/whaticon1.png", "/whaticon2.png", "/whaticon3.png"];
  const texts = [
    { 
      id: "t1", 
      title: "BRANDING", 
      desc: "WE CRAFT DISTINCTIVE BRAND IDENTITIES THAT COMMUNICATE CLARITY, CREDIBILITY, AND CHARACTER. FROM VISUAL LANGUAGE TO BRAND STRATEGY, WE HELP" 
    },
    { 
      id: "t2", 
      title: "UI/UX DESIGN", 
      desc: "WE CRAFT DISTINCTIVE BRAND IDENTITIES THAT COMMUNICATE CLARITY, CREDIBILITY, AND CHARACTER. FROM VISUAL LANGUAGE TO BRAND STRATEGY, WE HELP" 
    },
    { 
      id: "t3", 
      title: "WEB DEVELOPMENT", 
      desc: "WE CRAFT DISTINCTIVE BRAND IDENTITIES THAT COMMUNICATE CLARITY, CREDIBILITY, AND CHARACTER. FROM VISUAL LANGUAGE TO BRAND STRATEGY, WE HELP" 
    },
    { 
      id: "t4", 
      title: "APP DESIGN", 
      desc: "WE CRAFT DISTINCTIVE BRAND IDENTITIES THAT COMMUNICATE CLARITY, CREDIBILITY, AND CHARACTER. FROM VISUAL LANGUAGE TO BRAND STRATEGY, WE HELP" 
    },
    { 
      id: "t5", 
      title: "SEO OPTIMIZATION", 
      desc: "WE CRAFT DISTINCTIVE BRAND IDENTITIES THAT COMMUNICATE CLARITY, CREDIBILITY, AND CHARACTER. FROM VISUAL LANGUAGE TO BRAND STRATEGY, WE HELP" 
    }
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const textsRef = useRef<HTMLDivElement[]>([]);

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
        return { 
          x: 0, y: 0, 
          scale: 1.5, 
          opacity: 1, 
          zIndex: 20, 
          filter: "blur(0px) brightness(1.2) drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))" 
        };
      case "top":
        return { 
          x: 0, y: -180, 
          scale: 0.7, 
          opacity: 0.4, 
          zIndex: 10, 
          filter: "blur(3px) brightness(0.7)" 
        };
      case "bottom":
        return { 
          x: 0, y: 180, 
          scale: 0.7, 
          opacity: 0.4, 
          zIndex: 10, 
          filter: "blur(3px) brightness(0.7)" 
        };
      case "above":
        return { 
          x: 0, y: -180, 
          scale: 0.5, 
          opacity: 0, 
          zIndex: 5, 
          filter: "blur(5px)" 
        };
      case "below":
        return { 
          x: 0, y: 180, 
          scale: 0.5, 
          opacity: 0, 
          zIndex: 5, 
          filter: "blur(5px)" 
        };
      default:
        return { 
          x: 0, y: 0, 
          scale: 0, 
          opacity: 0, 
          zIndex: 0, 
          filter: "blur(0px)" 
        };
    }
  };

  const getTextProps = (pos: string) => {
    switch (pos) {
      case "middle":
        return { 
          x: 0, y: 0, 
          scale: 1, 
          opacity: 1, 
          zIndex: 30 
        };
      case "top":
        return { 
          x: 0, y: -200, 
          scale: 0.5, 
          opacity: 0.3, 
          zIndex: 10 
        };
      case "bottom":
        return { 
          x: 0, y: 200, 
          scale: 0.5, 
          opacity: 0.3, 
          zIndex: 10 
        };
      case "above":
        return { 
          x: 0, y: -200, 
          scale: 0.3, 
          opacity: 0, 
          zIndex: 0 
        };
      case "below":
        return { 
          x: 0, y: 200, 
          scale: 0.3, 
          opacity: 0, 
          zIndex: 5 
        };
      default:
        return { 
          x: 0, y: 0, 
          scale: 0.5, 
          opacity: 0, 
          zIndex: 0 
        };
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Initial setup
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

    // Create timeline
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
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* CIRCULAR GRADIENT BACKGROUND */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(6, 78, 59, 0.8) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* WHAT WE DO HEADER */}
      <div className="absolute top-8 right-0 z-30">
        <div 
          className="px-12 py-4 rounded-l-2xl"
          style={{
            background: 'linear-gradient(90deg, rgba(6, 78, 59, 0.95) 0%, rgba(6, 78, 59, 1) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          <h2 className="text-white text-4xl font-bold tracking-tight uppercase">
            WHAT WE DO
          </h2>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 px-8">
          
          {/* LEFT SIDE - ICONS IN CIRCLE */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Circular container reference */}
              <div 
                className="absolute w-[350px] h-[350px] rounded-full border-2 border-emerald-500/20"
                style={{
                  boxShadow: '0 0 60px rgba(16, 185, 129, 0.1)',
                }}
              />
              
              {/* Animated icons */}
              {Array.from({ length: texts.length }).map((_, i) => {
                const src = images[i % images.length];
                return (
                  <div
                    key={`icon-${i}`}
                    ref={(el) => { if (el) iconsRef.current[i] = el; }}
                    className="absolute"
                  >
                    <div className="relative">
                      <img 
                        src={src} 
                        alt={`Icon ${i + 1}`}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div className="relative flex items-center justify-start">
            <div className="relative w-full h-[400px]">
              {texts.map((item, i) => (
                <div
                  key={item.id}
                  ref={(el) => { if (el) textsRef.current[i] = el; }}
                  className="absolute w-full top-1/2 -translate-y-1/2"
                >
                  <div className="space-y-4">
                    <h3 className="text-white text-5xl font-bold uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed max-w-md uppercase tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        html, body {
          background: #000 !important;
          overflow-x: hidden !important;
        }

        @media (max-width: 768px) {
          .grid-cols-1.md\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem 1.5rem !important;
          }

          .absolute.top-8.right-0 {
            top: 1rem !important;
            right: 0 !important;
          }

          .absolute.top-8.right-0 > div {
            padding: 0.75rem 1.5rem !important;
          }

          .absolute.top-8.right-0 h2 {
            font-size: 1.75rem !important;
          }

          .w-\\[400px\\].h-\\[400px\\] {
            width: 280px !important;
            height: 280px !important;
          }

          .w-\\[350px\\].h-\\[350px\\] {
            width: 240px !important;
            height: 240px !important;
          }

          .w-20.h-20 {
            width: 3rem !important;
            height: 3rem !important;
          }

          h3 {
            font-size: 2rem !important;
          }

          p {
            font-size: 0.75rem !important;
          }

          .absolute.left-0 {
            width: 400px !important;
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;