import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HowWeWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const whiteGlowRef = useRef<HTMLDivElement[]>([]);

  const boxData = [
    {
      title: "STRATEGY & PLANNING",
      desc: "WE ANALYZE YOUR GOALS AND CRAFT A TAILORED STRATEGY.",
      img: "/howicon1.png",
    },
    {
      title: "DESIGN & DEVELOPMENT",
      desc: "WE BUILD STUNNING, USER-FRIENDLY, AND OPTIMIZED WEBSITES",
      img: "/howicon2.png",
    },
    {
      title: "DESIGN & DEVELOPMENT",
      desc: "WE BUILD STUNNING, USER-FRIENDLY, AND OPTIMIZED WEBSITES",
      img: "/howicon3.png",
    },
    {
      title: "DESIGN & DEVELOPMENT",
      desc: "WE BUILD STUNNING, USER-FRIENDLY, AND OPTIMIZED WEBSITES",
      img: "/howicon4.png",
    },
  ];

  const getMarginTop = (index: number) => {
    switch (index) {
      case 1: return "lg:mt-[60px]";
      case 2: return "lg:mt-[120px]";
      case 3: return "lg:mt-[180px]";
      default: return "lg:mt-0";
    }
  };

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  const setGlowRef = (el: HTMLDivElement | null, index: number) => {
    if (el) whiteGlowRef.current[index] = el;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(cardsRef.current, { opacity: 0, y: 120 });

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 1.2, ease: "power3.out" },
    });

    cardsRef.current.forEach((card, i) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
        },
        i * 0.3
      ).to(
        whiteGlowRef.current[i],
        { opacity: 1, duration: 0.4 },
        i * 0.3 + 0.8
      );
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full bg-black flex flex-col items-center px-4 overflow-hidden">
      {/* NO PINNING - NORMAL FLOW */}
      <div className="w-full">
        <div
          ref={containerRef}
          className="w-full min-h-screen bg-black flex flex-col items-center px-4 overflow-hidden py-16"
        >

          {/* Header (always visible) */}
          <div className="flex flex-col items-center z-50 text-center">
            <div className="bg-[#0b2414] px-10 py-3 md:px-14 md:py-4 rounded-[20px] border border-[#1a3a26] mb-4">
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight">
                HOW WE WORK
              </h2>
            </div>
            <p className="text-white text-[11px] md:text-[19px] font-bold uppercase opacity-90 max-w-[720px] mx-auto">
              A SIMPLE & PROVEN PROCESS TO BUILD AND GROW DIGITAL PRODUCTS
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-6 max-w-[1300px] w-full h-full mt-8">
            {boxData.map((box, i) => (
              <div
                key={i}
                ref={(el) => setCardRef(el, i)}
                className={`relative w-full max-w-[310px] lg:w-[290px] aspect-[1.4/1] rounded-[40px] flex flex-col items-center justify-center text-center p-7 overflow-hidden border border-white/10 transition-all duration-300 ${getMarginTop(i)}`}
                style={{
                  backgroundImage: "url('/howbg.png')",
                  backgroundSize: "cover",
                  zIndex: 10 + i,
                  backgroundColor: "#050505",
                }}
              >
                {/* White Glow */}
                <div
                  ref={(el) => setGlowRef(el, i)}
                  className="absolute inset-0 rounded-[40px] border border-white/25 pointer-events-none shadow-[inset_0_0_30px_rgba(255,255,255,0.5)] opacity-0 z-20"
                />

                <div className="absolute inset-0 bg-black/80 z-0" />

                <div className="relative z-10">
                  <img
                    src={box.img}
                    alt={box.title}
                    className="w-10 h-10 mx-auto mb-3"
                    style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
                  />
                  <h3 className="text-white text-[15px] font-black mb-2 uppercase tracking-widest leading-none">
                    {box.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-bold px-2 leading-relaxed opacity-85 uppercase">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowWeWork;