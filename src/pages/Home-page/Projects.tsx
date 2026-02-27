import React, { useEffect, useRef, useState } from "react";

export const Projects: React.FC = () => {
  const icons = [
    "/sucessicon1.webp",
    "/sucessicon2.webp",
    "/sucessicon3.webp",
    "/sucessicon4.webp",
    "/sucessicon5.webp",
    "/sucessicon6.webp",
    "/sucessicon7.webp",
    "/sucessicon8.webp",
    "/sucessicon9.webp",
    "/sucessicon10.webp",
    "/sucessicon11.webp",
    "/sucessicon12.webp",
    "/sucessicon13.webp",
    "/sucessicon14.webp",
    "/sucessicon15.webp",
    "/sucessicon16.webp",
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const subtextRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState({
    header: false,
    divider: false,
    subtext: false,
    grid: false,
  });

  // const speed = 0.4;

  /* ===============================
     DESKTOP ONLY SCROLL ANIMATION
  =============================== */
  useEffect(() => {
    // ✅ Disable animation on mobile
    if (window.innerWidth < 1) {
      setVisible({
        header: true,
        divider: true,
        subtext: true,
        grid: true,
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const type = entry.target.getAttribute("data-section");

          if (!type) return;

          setVisible((prev) => ({
            ...prev,
            [type]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0,
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    if (subtextRef.current) observer.observe(subtextRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  /* ===============================
        ICON STRIP AUTO SCROLL
  =============================== */
  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (!el) return;

  //   const singleWidth = el.scrollWidth / 3;
  //   el.scrollLeft = singleWidth;

  //   let rafId: number;

  //   const autoScroll = () => {
  //     el.scrollLeft += speed;

  //     if (el.scrollLeft >= singleWidth * 2) {
  //       el.scrollLeft -= singleWidth;
  //     }
  //     if (el.scrollLeft <= 0) {
  //       el.scrollLeft += singleWidth;
  //     }

  //     rafId = requestAnimationFrame(autoScroll);
  //   };

  //   rafId = requestAnimationFrame(autoScroll);

  //   return () => cancelAnimationFrame(rafId);
  // }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Adjust speed relative to screen width for smooth motion on all laptops
    const adjustedSpeed = Math.max(0.4, window.innerWidth / 2500);

    let rafId: number;

    const startScroll = () => {
      const singleWidth = el.scrollWidth / 3;
      el.scrollLeft = singleWidth;

      const autoScroll = () => {
        el.scrollLeft += adjustedSpeed;

        if (el.scrollLeft >= singleWidth * 2) {
          el.scrollLeft -= singleWidth;
        }
        if (el.scrollLeft <= 0) {
          el.scrollLeft += singleWidth;
        }

        rafId = requestAnimationFrame(autoScroll);
      };

      rafId = requestAnimationFrame(autoScroll);
    };

    // Wait for all images to load to calculate scrollWidth correctly
    const images = Array.from(el.querySelectorAll("img"));
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) startScroll();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === images.length) startScroll();
        };
      }
    });

    if (loadedCount === images.length) startScroll();

    // Cleanup on unmount
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section aria-labelledby="projects-title" className="w-full bg-black flex md:h-auto flex-col md:mb-[104px] md:mt-9 items-center justify-center gap-1 px-2">

      {/* ===== ANIMATION STYLE (Desktop Only Effect) ===== */}
      <style>{`
        .scroll-hidden {
          opacity: 0;
          transform: translateY(120px) scale(0.7) rotateX(20deg);
          transition: 
            opacity 0.6s ease-in,
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-show {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0deg);
          transition: 
            opacity 0.8s ease-out,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>

      {/* Header */}
      <h1
        ref={headerRef}
        data-section="header"
        className={`bg-[#0b2b1a] header-box z-30 text-white text-2xl md:text-5xl font-bold rounded-[9px] px-12 py-4 shadow-2xl tracking-tight ${visible.header ? "scroll-show" : "scroll-hidden"
          }`}
      >
        Our Successful Project
      </h1>

      {/* Divider */}
      <div
        ref={dividerRef}
        aria-hidden="true"
        data-section="divider"
        className={`text-white Topsemi tracking-[0.1em] text-xl md:0 md:mt-2 font-bold opacity-90 ${visible.divider ? "scroll-show" : "scroll-hidden"
          }`}
      >
        {window.innerWidth < 768
          ? "-------------------"
          : "-------------------------------------------"}
      </div>

      {/* Subtext */}
      <div
        ref={subtextRef}
        data-section="subtext"
        className={`text-white text-sm Top md:text-3xl font-extralight mb-10 ${visible.subtext ? "scroll-show" : "scroll-hidden"
          }`}
      >
        Projects With Top Ratings!
      </div>

      {/* Project Grid */}
      <div
        ref={gridRef}
        data-section="grid"
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12 project-grid ${visible.grid ? "scroll-show" : "scroll-hidden"
          }`}
      >
        {["/2.webp", "/3.webp", "/1.webp"].map((src, i) => (
          <div
            key={i}
            className="list-none group transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src={src}
              width={1200}
              height={800}
              className={`w-full h-auto object-contain project-img rounded-xl shadow-lg group-hover:shadow-[0_20px_50px_rgba(0,255,100,0.2)] transition-all duration-500 ${i === 2 ? "third-img" : ""
                }`}
              loading="lazy"
              decoding="async"
              alt={`Featured project showcase ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* ICON STRIP */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap iconwidth overflow-x-scroll px-2 w-full icon-strip"
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

        {[...icons, ...icons, ...icons, ...icons, ...icons, ...icons].map((icon, index) => {
          // const isSpecial = index % icons.length === 6;

          return (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-100 shadow-lg active:scale-100"
              style={{
                // width: isSpecial ? "112.6px" : "95px",
                // height: isSpecial ? "112.6px" : "95px",
                width: "85px",
                // height: "80px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={icon}
                alt={`tech-icon-${(index % icons.length) + 1}`}
                className="w-full h-full object-contain p-2"
                style={{ borderRadius: "10px" }}
              />
            </div>
          );
        })}
      </div>

      {/* CUSTOM CSS for mobile/small screens only */}
      <style>{`
        @media (max-width: 767px) {
          /* Make header smaller */
          .bg-\\[\\#0b2b1a\\] {
            font-size: 1.5rem !important;
            padding: 0.5rem 2rem !important;
            border-radius: 1rem !important;
          }

          /* Divider shorter */
          .text-white.tracking-\\[0\\.1em\\] {
            font-size: 1rem !important;
            letter-spacing: 0.05em !important;
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
          }
            .divider {
    width: 220px; /* 🔥 shorter ONLY on mobile */
  }
          /* Subtext smaller */
          .text-white.text-xl {
            font-size: 1.2rem !important;
            margin-bottom: 1rem !important;
          }

          /* Project grid: two on top, one below centered */
          .project-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
            padding: 0 0.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          .project-grid > div:nth-child(1),
          .project-grid > div:nth-child(2) {
            transform: rotate(0deg) !important; /* slight tilt like in image */
          }
         .project-grid > div:nth-child(3) {
  width: 100% !important;
  left: 97px !important;
  position: relative !important;
}
          .project-grid img {
            border-radius: 0.5rem !important;
            box-shadow: 0 4px 12px rgba(0,255,0,0.1) !important;
          }

          /* Icon strip: smaller icons */
          .icon-strip {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
            gap: 0.5rem !important;
          }
          .icon-strip > div {
            width: 48px !important;
            height: 48px !important;
            border-radius: 6px !important;
          }
          .icon-strip img {
            padding: 0.25rem !important;
          }
            .third-img {
    width: 100% !important;
    transform: scale(1) !important;
    top: 21px !important;
    position: relative !important;
    // margin-left: 10% !important;
  }
          .project-img{
            width: 100% !important;}
        }

        @media (max-width: 480px) {
          .bg-\\[\\#0b2b1a\\] {
            font-size: 1.2rem !important;
            padding: 0.4rem 0.8rem !important;
          }
             .header-box {
    border-radius: 4px !important; /* sharper corners */
    width: 260px !important; /* shrink to fit text */
    content-center !important; /* center text */
      text-align: center !important;
    /* 👇 OPTIONAL but recommended */
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
    xt-white.text-sm {
            font-size: 3rem !important;
          }
             /* Subtext smaller */
          .Top{
            top: -25px !important;
            position: relative !important;
          }
          .project-grid > div:nth-child(3) {
            width: 100% !important;
            left: 60px !important;
  position: relative !important;
          }
           .Topsemi{
            top: -8px !important;
            position: relative !important;
          }
          .icon-strip > div {
            width: 50px !important;
            height: 120px !important;
            top: px !important;
            position: relative !important;
          }
            .project-img{
            width: 100% !important;}
        }
        }
      `}</style>
    </section>
  );
};

export default Projects;
