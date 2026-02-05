import React, { useEffect, useRef } from "react";

export const Projects: React.FC = () => {
  // NOW: 16 icons
  const icons = [
    "/sucessicon1.png",
    "/sucessicon2.png",
    "/sucessicon3.png",
    "/sucessicon4.png",
    "/sucessicon5.png",
    "/sucessicon6.png",
    "/sucessicon7.png",
    "/sucessicon8.png",
    "/sucessicon9.png",
    "/sucessicon10.png",
    "/sucessicon11.png",
    "/sucessicon12.png",
    "/sucessicon13.png",
    "/sucessicon14.png",
    "/sucessicon15.png",
    "/sucessicon16.png",
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const speed = 0.4; // auto scroll speed (unchanged)

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // We render icons 3 times → middle copy trick
    const singleWidth = el.scrollWidth / 3;
    el.scrollLeft = singleWidth;

    let rafId: number;

    const autoScroll = () => {
      el.scrollLeft += speed;

      // Infinite loop correction
      if (el.scrollLeft >= singleWidth * 2) {
        el.scrollLeft -= singleWidth;
      }
      if (el.scrollLeft <= 0) {
        el.scrollLeft += singleWidth;
      }

      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full bg-black flex flex-col md:mb-[124px] items-center justify-center gap-1 px-4">
      {/* Header Button */}
      <div className="bg-[#0b2b1a] text-white text-2xl md:text-5xl font-bold rounded-2xl px-12 py-4 shadow-2xl tracking-tight">
        Our Successful Project
      </div>

      {/* Divider */}
      <div className="text-white tracking-[0.1em] text-xl font-bold opacity-90">
        -------------------------------------------
      </div>

      {/* Subtext */}
      <p className="text-white text-xl md:text-3xl font-extralight mb-10 opacity-100">
        Projects With Top Ratings!
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12 px-4">
        {["/1.png", "/2.png", "/3.png"].map(
          (src, i) => (
            <div
              key={i}
              className="group transition-all duration-500 hover:-translate-y-3"
            >
              <img
                src={src}
                className="w-full h-auto object-contain rounded-xl shadow-lg group-hover:shadow-[0_20px_50px_rgba(0,255,100,0.2)] transition-all duration-500"
                alt={`P${i + 1}`}
              />
            </div>
          )
        )}
      </div>

      {/* ICON STRIP */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-scroll px-2 max-w-[875px] w-full"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Render icons 3 times for infinite loop */}
        {[...icons, ...icons, ...icons].map((icon, index) => {
          // keep your “special” sizing logic if you want
          const isSpecial = index % icons.length === 6;

          return (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg active:scale-95"
              style={{
                width: isSpecial ? "112.6px" : "95px",
                height: isSpecial ? "112.6px" : "95px",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={icon}
                alt={`tech-icon-${(index % icons.length) + 1}`}
                className="w-full h-full object-contain p-2"
                style={{ borderRadius: "20px" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
