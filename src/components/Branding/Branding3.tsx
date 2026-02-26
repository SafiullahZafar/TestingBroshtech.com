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

const Branding3: React.FC = () => {
  const images = [
    "/branding3(1).webp",
    "/branding3(2).webp",
    "/branding3(3).webp",
    "/branding3(5).webp",
    "/branding3(4).webp",
  ];

  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const handleLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const renderImageBlock = (src: string, index: number) => {
    const isAboveFold = index < 2;

    return (
      <motion.div
        key={index}
        initial={isAboveFold ? { opacity: 1 } : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="img-wrapper p-0 m-0 leading-[0] overflow-hidden relative w-full"
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
        {/* All images stacked vertically and connected */}
        {images.map((src, idx) => renderImageBlock(src, idx))}
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
          height: auto;
          margin-bottom: -1px;
        }

        .img-wrapper {
          background-color: #000;
          width: 100%;
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

export default Branding3;
