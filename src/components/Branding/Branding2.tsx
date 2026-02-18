import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// YouTube-style Shimmer/Skeleton component
const Skeleton = () => (
  <div className="absolute inset-0 z-0 bg-[#121212] overflow-hidden">
    <motion.div
      className="w-full h-full"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
      }}
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
    />
  </div>
);

const Branding2: React.FC = () => {
  const images = [
    "/branding2(1).webp",
    "/branding2(2).jpeg",
    "/branding2(3).png", // Image 3
    "/branding2(4).png", // Image 4
    "/branding2(5).webp",
    "/branding2(6).webp",
    "/branding2(7).webp",
    "/branding2(8).webp",
  ];

  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const handleLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const renderImageBlock = (
    src: string,
    index: number,
    isHalf: boolean = false
  ) => {
    const isAboveFold = index < 2;

    return (
      <motion.div
        key={index}
        initial={isAboveFold ? { opacity: 1 } : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`img-wrapper p-0 m-0 leading-[0] overflow-hidden relative ${
          isHalf ? "responsive-half" : "w-full"
        }`}
      >
        <AnimatePresence>
          {!loaded[index] && <Skeleton />}
        </AnimatePresence>

        <img
          src={src}
          onLoad={() => handleLoad(index)}
          className={`block border-none branding-img transition-opacity duration-1000 ${
            loaded[index] ? "opacity-100" : "opacity-0"
          }`}
          alt={`Branding Section ${index + 1}`}
          loading={isAboveFold ? "eager" : "lazy"}
          fetchPriority={isAboveFold ? "high" : "low"}
          decoding={isAboveFold ? "sync" : "async"}
        />
      </motion.div>
    );
  };

  return (
    <div className="w-full bg-black min-h-screen branding-page-container overflow-x-hidden">
      {images.slice(0, 2).map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}

      <div className="flex flex-col w-full p-0 m-0 gap-0">
        {renderImageBlock(images[0], 0)}
        {renderImageBlock(images[1], 1)}

        {/* RESPONSIVE CONTAINER: Stack on mobile, Side-by-side on Desktop */}
        <div className="flex flex-col md:flex-row w-full p-0 m-0 items-stretch half-parent">
          {renderImageBlock(images[2], 2, true)}
          {renderImageBlock(images[3], 3, true)}
        </div>

        {images.slice(4).map((src, idx) =>
          renderImageBlock(src, idx + 4)
        )}
      </div>

      <div className="pt-32 pb-24 flex flex-col items-center justify-center bg-black">
        <a href="/portfolio">
          <button className="group relative overflow-hidden text-white border border-white/20 px-12 py-5 rounded-full transition-all duration-500 md:hover:border-white">
            <span className="relative z-10 uppercase tracking-[0.3em] font-bold text-sm">
              Back To Portfolio
            </span>
            <div className="absolute inset-0 bg-white translate-y-full md:group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </a>
      </div>

      <style>{`
        .branding-page-container > div:first-child,
        .branding-page-container > div:first-child div {
          margin: 0 !important;
          padding: 0 !important;
        }

        .branding-img {
          display: block !important;
          border: none !important;
          background-color: black;
          width: 100%;
          margin-bottom: -1px;
        }

        .img-wrapper {
          background-color: #000;
          min-height: 200px;
          width: 100%;
        }

        /* Responsive Logic for Images 3 & 4 */
        .responsive-half {
          width: 100%; /* Default mobile: Full Width */
        }

        @media (min-width: 768px) {
          .half-parent {
            height: 75vh; /* Desktop Height for the side-by-side section */
          }
          .responsive-half {
            width: 50% !important; /* Desktop: Half Width */
            height: 100%;
          }
          .responsive-half img {
            height: 100%;
            object-fit: cover;
          }
        }

        @media (max-width: 767px) {
          .half-parent {
            height: auto;
          }
          .responsive-half {
            height: auto;
          }
        }

        @media (min-width: 768px) {
          button:hover span {
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Branding2;