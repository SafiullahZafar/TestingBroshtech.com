import React from "react";
import { motion } from "framer-motion";

const Branding1: React.FC = () => {
  const images = [
    "/branding1(1).webp",
    "/branding1(2).webp",
    "/branding1(3).webp",
    "/branding1(4).webp",
    "/branding1(7).webp",
    "/branding1(5).webp",
    "/branding1(6).webp",
  ];

  return (
    <div className="w-full bg-black min-h-screen branding-page-container">
      {/* 1. PRELOAD CRITICAL IMAGES */}
      {images.slice(0, 4).map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}

      <div className="flex flex-col w-full p-0 m-0">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-2 w-full p-0 m-0 gap-0 leading-[0] overflow-hidden">
          <div className="w-full">
            <img 
              src={images[0]} 
              className="w-full h-auto block border-none branding-img" 
              alt="Branding Top Left"
              loading="eager" 
              fetchPriority="high"
            />
          </div>
          
          <div className="w-full">
            <img 
              src={images[1]} 
              className="w-full h-auto block border-none branding-img" 
              alt="Branding Top Right" 
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* FULL WIDTH SECTION */}
        {images.slice(2).map((src, index) => {
          const isAboveFold = index < 2;
          return (
            <motion.div
              key={index}
              initial={isAboveFold ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "400px" }}
              transition={{ duration: 0.3 }}
              className="w-full p-0 m-0 leading-[0] overflow-hidden"
            >
              <img 
                src={src} 
                className="w-full h-auto block border-none branding-img" 
                alt={`Branding Full Width ${index + 3}`} 
                loading={isAboveFold ? "eager" : "lazy"}
                fetchPriority={isAboveFold ? "high" : "low"}
                decoding="sync"
              />
            </motion.div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="py-24 flex flex-col items-center justify-center bg-black">
        <a href="/portfolio">
          <button className="group relative overflow-hidden text-white border border-white/20 px-12 py-5 rounded-full transition-all duration-500 hover:border-white">
            <span className="relative z-10 uppercase tracking-[0.3em] font-bold text-sm">
              Back To Portfolio
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </a>
      </div>

      <style>{`
        /* FIX: Only apply black background to branding images, not the logo */
        .branding-img {
          display: block !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          background-color: black; 
          content-visibility: auto;
        }

        /* Essential reset for this page without affecting global nav */
        .branding-page-container {
          margin: 0;
          padding: 0;
        }

        button:hover span {
          color: black !important;
        }
      `}</style>
    </div>
  );
};

export default Branding1;