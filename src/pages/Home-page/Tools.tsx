import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Tools: React.FC = () => {
  const images = ["/whaticon2.png", "/whaticon1.png", "/whaticon3.png","/whaticon2.png","/whaticon4.png"];
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
  const pinwrapsectionRef = useRef<HTMLDivElement | null>(null);
  const isMobile = window.innerWidth <= 768;
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
const getIconProps = (pos: string, scaleFactor: number) => {
  const isMobile = window.innerWidth <= 768;

  const base = {
    middle: {
      x: isMobile ? 1 : -76,
      y: isMobile ? 97 : 31,
      scale: (isMobile ? 3.4 : 2.15) * scaleFactor,
      opacity: 1,
      zIndex: 20,
      filter: "blur(0px) grayscale(0)"
    },

    top: {
      x: isMobile ? -53 : -170,
      y: isMobile ? 10 : -93,
      scale: (isMobile ? 1.7 : 0.75) * scaleFactor,
      opacity: 0.6,
      zIndex: 10,
      filter: "blur(2px) grayscale(0.6)"
    },

    bottom: {
      x: isMobile ? -53 : -170,
      y: isMobile ? 190 : 180,
      scale: (isMobile ? 1.7 : 0.9) * scaleFactor,
      opacity: 0.6,
      zIndex: 10,
      filter: "blur(2px) grayscale(0.6)"
    },

    above: {
      x: isMobile ? -53 : -190,
      y: isMobile ? 10 : -103,
      scale: (isMobile ? 1.7 : 0.75) * scaleFactor,
      opacity: 0,
      zIndex: 10,
      filter: "blur(2px) grayscale(0.6)"
    },

    below: {
      x: isMobile ? -53 : -190,
      y: isMobile ? 190 : 200,
      scale: (isMobile ? 1.7 : 0.9) * scaleFactor,
      opacity: 0,
      zIndex: 10,
      filter: "blur(2px) grayscale(0.6)"
    },

    hidden: {
      opacity: 0,
      scale: 0,
      zIndex: 0
    }
  };

  return base[pos as keyof typeof base] || base.hidden;
};

const getTextProps = (pos: string, scaleFactor: number) => {
  const isMobile = window.innerWidth <= 768;

  const base = {
    middle: {
      x: isMobile ? 30 : 58,
      y: isMobile ? 104 : 50,
      scale: (isMobile ? 0.95 : .9) * scaleFactor,
      opacity: 1,
      zIndex: 30
    },

    top: {
      x: isMobile ? -40 : -158,
      y: isMobile ? 10 : -92,
      scale: 0.55 * scaleFactor,
      opacity: 0.6,
      zIndex: 10
    },

    bottom: {
      x: isMobile ? -40 : -158,
      y: isMobile ? 198 : 190,
      scale: 0.6 * scaleFactor,
      opacity: 0.6,
      zIndex: 10
    },

    above: {
      x: isMobile ? -40 : -258,
      y: isMobile ? -20 : -92,
      scale: 0.45 * scaleFactor,
      opacity: 0,
      zIndex: 0
    },

    below: {
      x: isMobile ? -40 : -208,
      y: isMobile ? 170 : 190,
      scale: 0.45 * scaleFactor,
      opacity: 0,
      zIndex: 0
    },

    hidden: {
      opacity: 0,
      scale: 0,
      zIndex: 0
    }
  };

  return base[pos as keyof typeof base] || base.hidden;
};

const getTitleProps = (pos: string, scaleFactor: number) => {
  const isMobile = window.innerWidth <= 768;

  return {
fontSize: (
  isMobile
    ? pos === "middle" ? 26 : 18
    : pos === "middle" ? 45 : 34
) * scaleFactor
};
};
  useEffect(() => {
    if (!sectionRef.current) return;

    const calculateScaleFactor = () => {
  if (window.innerWidth <= 480) return 0.65; // small phones
  if (window.innerWidth <= 768) return 0.8;  // tablets
  return 1; // desktop (UNCHANGED)
};


    let scaleFactor = calculateScaleFactor();

    const handleResize = () => {
      scaleFactor = calculateScaleFactor();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    iconsRef.current.forEach((icon, i) => {
      const pos = getPosition(i, 0, texts.length);
      const props = getIconProps(pos, scaleFactor);
      gsap.set(icon, props);
    });
    textsRef.current.forEach((text, i) => {
      const pos = getPosition(i, 0, texts.length);
      const props = getTextProps(pos, scaleFactor);
      gsap.set(text, props);
    });
    titlesRef.current.forEach((title, i) => {
      const pos = getPosition(i, 0, texts.length);
      const props = getTitleProps(pos, scaleFactor);
      gsap.set(title, props);
    });
    const tl = gsap.timeline();
    const numSteps = texts.length;
    for (let step = 1; step < numSteps; step++) {
      iconsRef.current.forEach((icon, i) => {
        const pos = getPosition(i, step, numSteps);
        const props = getIconProps(pos, scaleFactor);
        tl.to(icon, { ...props, duration: 1, ease: "power2.inOut" }, step - 1);
      });
      textsRef.current.forEach((text, i) => {
        const pos = getPosition(i, step, numSteps);
        const props = getTextProps(pos, scaleFactor);
        tl.to(text, { ...props, duration: 1, ease: "power2.inOut" }, step - 1);
      });
      titlesRef.current.forEach((title, i) => {
        const pos = getPosition(i, step, numSteps);
        const props = getTitleProps(pos, scaleFactor);
        tl.to(title, { ...props, duration: 1, ease: "power2.inOut" }, step - 1);
      });
    }

 if (!isMobile) {
  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top top",
    end: `+=${(numSteps - 1) * 100}%`,
    pin: pinwrapsectionRef.current,
    scrub: 1,
    snap: 1 / (numSteps - 1),
    animation: tl,
    anticipatePin: 1,
  });
}
if (isMobile) {
  let currentStep = 0;

  const rotateItems = () => {
    currentStep = (currentStep + 1) % numSteps;

    iconsRef.current.forEach((icon, i) => {
      const pos = getPosition(i, currentStep, numSteps);
      const props = getIconProps(pos, scaleFactor);
      gsap.to(icon, { ...props, duration: 0.8, ease: "power2.inOut" });
    });

    textsRef.current.forEach((text, i) => {
      const pos = getPosition(i, currentStep, numSteps);
      const props = getTextProps(pos, scaleFactor);
      gsap.to(text, { ...props, duration: 0.8, ease: "power2.inOut" });
    });

    titlesRef.current.forEach((title, i) => {
      const pos = getPosition(i, currentStep, numSteps);
      const props = getTitleProps(pos, scaleFactor);
      gsap.to(title, { ...props, duration: 0.8, ease: "power2.inOut" });
    });
  };

  const interval = setInterval(rotateItems, 2500); // change every 2.5 sec

  return () => clearInterval(interval);
}

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  return (
    <section ref={sectionRef} className="relative w-full lg:-top-6 h-auto bg-black overflow-hidden py-12 sm:py-16">
      <div ref={pinwrapsectionRef} className="relative h-100vh lg:-top-13 sm:min-h-screen w-full">

        {/* HEADING */}
        <div
          className="absolute top-3 -right-5 sm:top-2 sm:right-0 z-20 text-white font-bold uppercase tracking-tight px-6 py-2 sm:px-10 sm:py-3 rounded-l-3xl border border-white/10"
          style={{
            background: "rgba(12, 55, 33, 1)",
            fontSize: "clamp(1.8rem, 6vw, 3.75rem)",
            width: "clamp(260px, 62vw, 760px)",
            boxSizing: "border-box",
            fontFamily: "Inter, sans-serif"
          }}
        >
          WHAT WE DO
        </div>
        {/* HALF CIRCLE */}
        <div className="relative z-10 h-[50svh] sm:h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-row items-center Tops justify-between w-full max-w-7xl gap-4 sm:gap-8 md:gap-15 lg:gap-25">
           <div className="absolute sm:relative half-circle top-0 sm:top-4 md:top-10 left-0 sm:left-auto z-40 opacity-80 pointer-events-none">
          <img src="/whathalfcircle.png" alt="Decoration" className="w-[250px] Width sm:w-[980px] md:w-[820px] lg:w-[950px] right-12 relative Top h-auto" />
        </div>
            {/* ICONS - always left side */}
            <div className="relative w-[35%] sm:w-[32%] md:w-[30%] Rights h-[200px] sm:h-[400px] md:h-[400px] flex items-center justify-center shrink-0 md:pt-[30px] md:-translate-x-5">
              {Array.from({ length: texts.length }).map((_, i) => {
                const src = images[i % images.length];
                return (
                  <div
                    key={`icon-${i}`}
                    ref={(el) => { if (el) iconsRef.current[i] = el; }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img
                      src={src}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                      alt="service icon"
                    />
                  </div>
                );
              })}
            </div>

            {/* TEXT - always right side */}
            <div
              className="relative w-[65%] sm:w-[68%] md:w-[70%] Rights h-[360px] sm:h-[400px] md:h-[420px] flex items-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {texts.map((item, i) => (
                <div
                  key={item.id}
                  ref={(el) => { if (el) textsRef.current[i] = el; }}
                  className="absolute w-full pl-1 sm:pl-2 md:pl-0"
                >
                  <h3
                    ref={(el) => { if (el) titlesRef.current[i] = el; }}
                    className="text-white tracking-tighter leading-none m-0 p-0 font-bold uppercase"
                  >
                    {item.title}
                  </h3>

                  <p className="text-white/90 font-medium text-xs sm:text-sm md:text-[14px] TopDesc sm:-top-4 relative w-[320px] sm:w-[350px] lg:w-[450px] uppercase mt-3 sm:mt-4 md:mt-5 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* IMPORTANT FIX - NO WHITE TOP/BOTTOM */
        html, body, #__next {
          background: #000 !important;
          overflow-x: hidden !important;
        }
        .Rights{
        right: 35% !important;
        }
        .hidden-text {
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        @media (max-width: 990px) {
          .Rights{
            right: 31% !important;
      }
        }
      @media (max-width: 798px) {
        .Width{
          // width: 1000px !important;}
      }
        @media (max-width: 768px) {
          /* Force row layout on mobile */
          .flex.flex-row {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
  //           .half-circle {
    top: auto !important;      /* remove top */
    bottom: 0px !important;   /* move to bottom */
    left: 0 !important;
  }
  .Rights{
    left: -50% !important;
    }
          /* Scale down proportionally */
          section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .TopDesc{
          top: -5px !important;
          position: relative !important;
          width: 500px !important;
          }

          /* Adjust widths */
          .w-\\[35\\%\\] {
            width: 35% !important;
          }

          .w-\\[65\\%\\] {
            width: 65% !important;
          }

          /* Smaller icons */
          img.w-12 {
            width: clamp(36px, 12vw, 48px) !important;
            height: clamp(36px, 12vw, 48px) !important;
          }

          /* Smaller text */
          h3 {
            font-size: clamp(1.4rem, 7vw, 2.2rem) !important;
            line-height: 1.1 !important;
          }

          p.text-xs {
            font-size: clamp(0.65rem, 3.5vw, 0.875rem) !important;
            line-height: 1.5 !important;
            margin-top: clamp(8px, 2.5vw, 14px) !important;
            // max-width: clamp(200px, 90%, 320px) !important;
          }

          /* Heading adjustments */
          .absolute.top-3.right-3 {
            top: 12px !important;
            right: 12px !important;
            padding: 8px 16px !important;
          }

          /* Half circle */
          .absolute.top-0 {
            top: 110px !important;
          }
        }
          @media (max-width: 640px) {
          .Rights{
            left: -6% !important;}
                /* Half circle */
          .absolute.top-0 {
            top: 50px !important;
          }
              .TopDesc{
          top: -5px !important;
          position: relative !important;
          width: 300px !important;
          }

          }
           

        @media (max-width: 480px) {
          .w-\\[35\\%\\] {
            width: 32% !important;
          }
          .w-\\[65\\%\\] {
            width: 68% !important;
          }
            .half-circle {
  //   bottom: 0px !important;   /* even lower on small phones */
    width: 185px !important; 
  //   position: relative !important;
  }
  .Rights{
    left: -1% !important;}
          .Tops{
          top: -60px !important;      /* remove top */
          position: relative !important;
          }
                  .TopDesc{
          top: -5px !important;
          position: relative !important;
          width: 250px !important;
          }

          img.w-12 {
            width: 32px !important;
            height: 32px !important;
          }
          h3 {
            font-size: 1.2rem !important;
          }
            /* Half circle */
          .absolute.top-0 {
            top: 150px !important;
          }
          p {
            font-size: 1.35rem !important;
            max-width: 320px !important;
          }
        }

        /* General beauty enhancements */
        section {
          transition: all 0.3s ease;
        }
        h3, p {
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default Tools;