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
      img: "/howicon1.webp",
    },
    {
      title: "UI & UX DESIGN",
      desc: "WE DESIGN CLEAN, INTUITIVE, AND ENGAGING DIGITAL EXPERIENCES",
      img: "/howicon2.webp",
    },
    {
      title: "WEB DEVELOPMENT",
      desc: "WE CREATE FAST, SCALABLE, AND RELIABLE MODERN WEB SOLUTIONS",
      img: "/howicon3.webp",
    },
    {
      title: "SEO OPTIMIZATION",
      desc: "WE IMPROVE RANKINGS, DRIVE TRAFFIC, AND GROW YOUR ONLINE PRESENCE",
      img: "/howicon4.webp",
    },
  ];

  const getMarginTop = (index: number) => {
    switch (index) {
      case 1: return "md:mt-[100px]";
      case 2: return "md:mt-[190px]";
      case 3: return "md:mt-[290px]";
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

    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      // Desktop: keyframes-based, appear early (trigger at 95%), smooth
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        card.classList.remove("howwork-card-visible");
        whiteGlowRef.current[i]?.classList.remove("howwork-glow-visible");

        ScrollTrigger.create({
          trigger: card,
          start: "top 95%",
          end: "top 30%",
          onEnter: () => {
            card.classList.add("howwork-card-visible");
            whiteGlowRef.current[i] && (whiteGlowRef.current[i].classList.add("howwork-glow-visible"));
          },
          onLeaveBack: () => {
            card.classList.remove("howwork-card-visible");
            whiteGlowRef.current[i]?.classList.remove("howwork-glow-visible");
          },
        });
      });
    } else {
      // Mobile: unchanged - original GSAP animation
      // gsap.set(cardsRef.current, { opacity: 0, y: 120 });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        card.classList.remove("howwork-card-visible");
        whiteGlowRef.current[i]?.classList.remove("howwork-glow-visible");

        ScrollTrigger.create({
          trigger: card,
          start: "top 95%",
          end: "top 30%",
          onEnter: () => {
            card.classList.add("howwork-card-visible");
            whiteGlowRef.current[i] && (whiteGlowRef.current[i].classList.add("howwork-glow-visible"));
          },
          onLeaveBack: () => {
            card.classList.remove("howwork-card-visible");
            whiteGlowRef.current[i]?.classList.remove("howwork-glow-visible");
          },
        });
      });
    }

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section aria-labelledby="how-we-work-title" className="w-full bg-black flex flex-col items-center px-4 ">
      {/* NO PINNING - NORMAL FLOW */}
      <div className="w-full">
        <div
          ref={containerRef}
          className="w-full min-h-auto Minh md:min-h-[688px] bg-black flex flex-col items-center px-4 overflow-visible py-16 md:py-12 md:pt-10"
        >

          {/* Header (always visible) */}
          <div className="flex flex-col items-center z-30 text-center header-container">
            <div className="bg-[#0b2414] px-10 py-3 md:px-14 md:py-4 rounded-[10px] border border-[#1a3a26] mb-4 header-bg">
              <h2 id="how-we-work-title" className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight header-title">
                HOW WE WORK
              </h2>
            </div>
            <p className="text-white text-[11px] Text md:text-[19px] font-bold uppercase opacity-90 max-w-[720px] mx-auto header-desc">
              A SIMPLE & PROVEN PROCESS TO BUILD AND GROW DIGITAL PRODUCTS
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-start justify-center gap-4 lg:gap-6 max-w-[1300px] w-full h-full mt-8 md:mt-4 cards-container">
            {boxData.map((box, i) => (
              <div
                key={i}
                ref={(el) => setCardRef(el, i)}
                className={`relative w-full max-w-[310px] lg:w-[290px] aspect-[1.4/1] rounded-[20px] lg:rounded-[30px] flex flex-col items-center justify-center text-center p-7 overflow-hidden transition-all duration-300 ${getMarginTop(i)} card card-${i + 1}`}
                style={{
                  backgroundImage: "url('/howbg.webp')",
                  backgroundSize: "cover",
                  zIndex: 10 + i,
                  backgroundColor: "#050505",
                }}
              >
                {/* White Glow */}
                <div
                aria-hidden="true"
                  ref={(el) => setGlowRef(el, i)}
                  className="absolute inset-0 rounded-[13px] lg:rounded-[10px] pointer-events-none shadow-[inset_0_0_30px_rgba(255,255,255,0.5)] opacity-0 z-20 glow"
                />

                <div className="absolute inset-0 bg-black/80 z-0 bg-overlay" />

                <div className="relative z-10 card-content">
                  <img
                    src={box.img}
                    alt={box.title}
                    aria-hidden="true"
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
        @keyframes howworkCardSlideUp {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes howworkGlowFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .card:not(.howwork-card-visible) {
  opacity: 0;
  transform: translateY(80px);
}

.card.howwork-card-visible {
  animation: howworkCardSlideUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.glow:not(.howwork-glow-visible) {
  opacity: 0;
}

.glow.howwork-glow-visible {
  animation: howworkGlowFade 0.6s 0.3s ease-out forwards;
}

        @media (max-width: 777px) {
          /* Vertical stack for mobile */
          .cards-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
            margin-top: 1.5rem !important;
          }
          .card {
            max-width: 210px !important;
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
          .Minh {
            min-height: 830px !important;
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
          .Minh {
            min-height: 710px !important;
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
          .Minh {
            min-height: 620px !important;
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
          .Minh {
            min-height: 625px !important;
            padding-bottom: -0px !important;
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
    </section>
  );
};

export default HowWeWork;