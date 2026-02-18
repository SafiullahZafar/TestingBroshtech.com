import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// YouTube-style Shimmer/Skeleton component
const Skeleton = () => (
  <div className="absolute inset-0 z-0 bg-[#121212] overflow-hidden">
    <motion.div
      className="w-full h-full"
      style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
      }}
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
    />
  </div>
);

const Branding1: React.FC = () => {
  const images = [
    "/branding1(1).png",
    "/branding1(2).png",
    "/branding1(3).png",
    "/branding1(4).png",
    "/branding1(7).png",
    "/branding1(5).png",
    "/branding1(6).png",
  ];

  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const handleLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="w-full bg-black min-h-screen branding-page-container overflow-x-hidden">
      {/* 1. PRELOAD CRITICAL IMAGES */}
      {images.slice(0, 4).map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}

      {/* NEW TOP SECTION: 50% BROWN / 50% CREAM */}
      <div className="w-full h-[60px] md:h-[50px] flex">
        <div className="w-1/2 h-full bg-[#5b2a10]"></div> {/* Brown Side */}
        <div className="w-1/2 h-full bg-[#fbefdb]"></div> {/* Cream Side */}
      </div>

      <div className="flex flex-col w-full p-0 m-0 gap-0">
        
        {/* TOP SECTION: 2 COLUMNS */}
        <div className="grid grid-cols-2 w-full p-0 m-0 gap-0 leading-[0] overflow-hidden">
          {[0, 1].map((idx) => (
            <div key={idx} className="img-wrapper relative w-full overflow-hidden">
              <AnimatePresence>
                {!loaded[idx] && <Skeleton />}
              </AnimatePresence>
              <img 
                src={images[idx]} 
                onLoad={() => handleLoad(idx)}
                className={`w-full h-auto block border-none branding-img transition-opacity duration-700 ${
                  loaded[idx] ? "opacity-100" : "opacity-0"
                }`} 
                alt="Branding Top"
                loading="eager" 
                fetchPriority="high"
              />
            </div>
          ))}
        </div>

        {/* FULL WIDTH SECTION */}
        {images.slice(2).map((src, index) => {
          const actualIndex = index + 2;
          const isAboveFold = actualIndex < 4;
          return (
            <motion.div
              key={actualIndex}
              initial={isAboveFold ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "400px" }}
              transition={{ duration: 0.4 }}
              className="img-wrapper w-full p-0 m-0 leading-[0] overflow-hidden relative"
            >
              <AnimatePresence>
                {!loaded[actualIndex] && <Skeleton />}
              </AnimatePresence>
              <img 
                src={src} 
                onLoad={() => handleLoad(actualIndex)}
                className={`w-full h-auto block border-none branding-img transition-opacity duration-1000 ${
                  loaded[actualIndex] ? "opacity-100" : "opacity-0"
                }`} 
                alt={`Branding Full Width ${actualIndex}`} 
                loading={isAboveFold ? "eager" : "lazy"}
                fetchPriority={isAboveFold ? "high" : "low"}
                decoding="sync"
              />
            </motion.div>
          );
        })}
      </div>

      {/* FOOTER */}
     <div className="pt-32 pb-24 flex flex-col items-center justify-center bg-black">
        <a href="/portfolio">
          <button 
            className="group relative overflow-hidden text-white border border-white/20 px-12 py-5 rounded-full transition-all duration-500 md:hover:border-white"
          >
            <span className="relative z-10 uppercase tracking-[0.3em] font-bold text-sm">
              Back To Portfolio
            </span>
            <div className="absolute inset-0 bg-white translate-y-full md:group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </a>
      </div>
    <style>{`
  /* Zero gaps ONLY for image layout section */
 /* Zero gaps ONLY for image layout section */
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
}

/* ONLY image wrappers get background + height */
.img-wrapper {
  background-color: #000;
  min-height: 100px;
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

export default Branding1;