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
    case 1: return "md:mt-[60px]";
    case 2: return "md:mt-[120px]";
    case 3: return "md:mt-[180px]";
    default: return "md:mt-0";
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
    <div className="w-full bg-black flex flex-col items-center px-4 ">
      {/* NO PINNING - NORMAL FLOW */}
      <div className="w-full">
        <div
          ref={containerRef}
          className="w-full min-h-screen bg-black flex flex-col items-center px-4 overflow-visible py-16"
        >

          {/* Header (always visible) */}
          <div className="flex flex-col items-center z-50 text-center header-container">
            <div className="bg-[#0b2414] px-10 py-3 md:px-14 md:py-4 rounded-[20px] border border-[#1a3a26] mb-4 header-bg">
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight header-title">
                HOW WE WORK
              </h2>
            </div>
            <p className="text-white text-[11px] Text md:text-[19px] font-bold uppercase opacity-90 max-w-[720px] mx-auto header-desc">
              A SIMPLE & PROVEN PROCESS TO BUILD AND GROW DIGITAL PRODUCTS
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-start justify-center gap-4 lg:gap-6 max-w-[1300px] w-full h-full mt-8 cards-container">
            {boxData.map((box, i) => (
              <div
                key={i}
                ref={(el) => setCardRef(el, i)}
                className={`relative w-full max-w-[310px] lg:w-[290px] aspect-[1.4/1] rounded-[20px] lg:rounded-[30px] flex flex-col items-center justify-center text-center p-7 overflow-hidden transition-all duration-300 ${getMarginTop(i)} card card-${i+1}`}
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
                  className="absolute inset-0 rounded-[13px] lg:rounded-[10px] pointer-events-none shadow-[inset_0_0_30px_rgba(255,255,255,0.5)] opacity-0 z-20 glow"
                />

                <div className="absolute inset-0 bg-black/80 z-0 bg-overlay" />

                <div className="relative z-10 card-content">
                  <img
                    src={box.img}
                    alt={box.title}
                    className="w-7 h-7 lg:w-10 lg:h-10 mx-auto mb-3 card-img"
                  />
                  <h3 className="text-white text-[10px] lg:text-[14px] font-black mb-2 uppercase tracking-widest leading-none card-title">
                    {box.title}
                  </h3>
                  <p className="text-gray-400 text-[7px] lg:text-[10px] font-bold px-2 leading-relaxed opacity-85 uppercase card-desc">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        @media (max-width: 777px) {
          /* Vertical stack for mobile */
          .cards-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
            margin-top: 1.5rem !important;
          }
          .card {
            max-width: 240px !important;
            border-radius: 4px !important;
            padding: 1.2rem !important;
            aspect-ratio: 1.6/1 !important; /* flatter like in image */
            background-blend-mode: multiply !important;
          }
          .card-content {
            text-align: left !important;
            padding-left: 0.5rem !important;
          }
          .card-img {
            width: 1.8rem !important;
            height: 1.8rem !important;
            margin-bottom: 0.5rem !important;
          }
          .card-title {
            font-size: 0.95rem !important;
            margin-bottom: 0.3rem !important;
          }
          .card-desc {
            font-size: 0.65rem !important;
            line-height: 1.2 !important;
            padding: 0 !important;
          }
          .bg-overlay {
            background: rgba(0,0,0,0.65) !important;
          }
          .glow {
            shadow: inset 0 0 20px rgba(255,255,255,0.35) !important;
          }
          .border {
            border-color: rgba(255,255,255,0.15) !important;
          }
                /* Stagger positioning like image */
.card-1 {
  position: absolute;
  top: 10% !important;
  right: 65% !important;
}

.card-2 {
  position: absolute;
  top: 271% !important;
  right: 42% !important;
}

.card-3 {
  position: absolute;
  top: 538% !important;
  left: 43% !important;
}

.card-4 {
  position: absolute;
  top: 799% !important;
  left: 65% !important;
}
          /* Reduce section height */
          .min-h-screen {
            min-height: 100vh !important;
            padding-bottom: 2rem !important;
          }
          .header-title {
            font-size: 2rem !important;
          }
          .header-desc {
            font-size: 0.7rem !important;
            max-width: 90% !important;
          }
          .header-bg {
            padding: 0.6rem 1.2rem !important;
          }
        }

        @media (min-width: 768px) {
          /* Desktop remains same */
          .cards-container {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
        }

         @media (max-width: 610px) { 
          .card {
            max-width: 150px !important;
            overflow: visible !important;
            border-radius: 10px !important;
            padding: 1.2rem !important;
            top: -1px !important;
            aspect-ratio: 1.6/1 !important; /* flatter like in image */
            background-blend-mode: multiply !important;
          }
          .Text {
            font-size: 21px !important;
          }
          .card-content {
            text-align: left !important;
            padding-left: 0rem !important;
          }
          .card-img {
            width: 1.2rem !important;
            height: 1.2rem !important;
            margin-bottom: 0.45rem !important;
          }
          .Cardrounded{
            border-radius: 4px !important;
          }
          .card-title {
            font-size: 0.49rem !important;
            margin-bottom: 0.3rem !important;
          }
          .card-desc {
            font-size: 0.58rem !important;
            line-height: 1.0 !important;
            padding: 0 !important;
          }
          .bg-overlay {
            background: rgba(0,0,0,0.65) !important;
          }
          .glow {
            shadow: inset 0 0 20px rgba(255,255,255,0.35) !important;
          }
          .cards-wrapper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          /* Stagger positioning like image */
.card-1 {
  position: absolute;
  top: 10% !important;
  right: 70% !important;
}

.card-2 {
  position: absolute;
  top: 199% !important;
  right: 49% !important;
}

.card-3 {
  position: absolute;
  top: 404% !important;
  left: 44% !important;
}

.card-4 {
  position: absolute;
  top: 615% !important;
  left: 65% !important;
}

          /* Reduce section height */
          .min-h-screen {
            min-height: 90vh !important;
            padding-bottom: 2rem !important;
          }
          .header-title {
            font-size: 2rem !important;
          }
          .header-desc {
            font-size: 0.7rem !important;
            max-width: 90% !important;
          }
          .header-bg {
            padding: 0.6rem 1.2rem !important;
          }
        

         @media (max-width: 510px) { 
          .card {
            max-width: 150px !important;
            overflow: visible !important;
            border-radius: 10px !important;
            padding: 1.2rem !important;
            top: -5px !important;
            aspect-ratio: 1.6/1 !important; /* flatter like in image */
            background-blend-mode: multiply !important;
          }
          .Text {
            font-size: 21px !important;
          }
          .card-content {
            text-align: left !important;
            padding-left: 0rem !important;
          }
          .card-img {
            width: 0.9rem !important;
            height: 0.9rem !important;
            margin-bottom: 0.45rem !important;
          }
          .Cardrounded{
            border-radius: 4px !important;
          }
          .card-title {
            font-size: 0.48rem !important;
            margin-bottom: 0.3rem !important;
          }
          .card-desc {
            font-size: 0.38rem !important;
            line-height: 1.2 !important;
            padding: 0 !important;
          }
          .bg-overlay {
            background: rgba(0,0,0,0.65) !important;
          }
          .glow {
            shadow: inset 0 0 20px rgba(255,255,255,0.35) !important;
          }
          .cards-wrapper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          /* Stagger positioning like image */
.card-1 {
  position: absolute;
  top: 20% !important;
  right: 65% !important;
}

.card-2 {
  position: absolute;
  top: 185% !important;
  right: 43% !important;
}

.card-3 {
  position: absolute;
  top: 364% !important;
  left: 44% !important;
}

.card-4 {
  position: absolute;
  top: 545% !important;
  left: 65% !important;
}

          /* Reduce section height */
          .min-h-screen {
            min-height: 80vh !important;
            padding-bottom: 2rem !important;
          }
          .header-title {
            font-size: 2rem !important;
          }
          .header-desc {
            font-size: 0.7rem !important;
            max-width: 90% !important;
          }
          .header-bg {
            padding: 0.6rem 1.2rem !important;
          }
        }
        @media (max-width: 420px) { 
          .card {
            max-width: 120px !important;
            overflow: visible !important;
            border-radius: 10px !important;
            padding: 1.2rem !important;
            top: -65px !important;
            aspect-ratio: 1.6/1 !important; /* flatter like in image */
            background-blend-mode: multiply !important;
          }
          .card-content {
            text-align: left !important;
            padding-left: 0rem !important;
          }
          .card-img {
            width: 0.9rem !important;
            height: 0.9rem !important;
            margin-bottom: 0.45rem !important;
          }
          .Cardrounded{
            border-radius: 14px !important;
          }
          .card-title {
            font-size: 0.48rem !important;
            margin-bottom: 0.3rem !important;
          }
          .card-desc {
            font-size: 0.38rem !important;
            line-height: 1.2 !important;
            padding: 0 !important;
          }
          .bg-overlay {
            background: rgba(0,0,0,0.65) !important;
          }
          .glow {
            shadow: inset 0 0 20px rgba(255,255,255,0.35) !important;
          }
          .cards-wrapper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          /* Stagger positioning like image */
.card-1 {
  position: absolute;
  top: 5% !important;
  right: 65% !important;
}

.card-2 {
  position: absolute;
  top: 185% !important;
  right: 41% !important;
}

.card-3 {
  position: absolute;
  top: 364% !important;
  left: 44% !important;
}

.card-4 {
  position: absolute;
  top: 545% !important;
  left: 65% !important;
}

          /* Reduce section height */
          .min-h-screen {
            min-height: 90vh !important;
            padding-bottom: 2rem !important;
          }
          .header-title {
            font-size: 2rem !important;
          }
          .header-desc {
            font-size: 0.7rem !important;
            max-width: 90% !important;
          }
          .header-bg {
            padding: 0.6rem 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HowWeWork;