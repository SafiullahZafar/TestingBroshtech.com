import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Branding1: React.FC = () => {
  const images = [
    "/branding1(1).png",
    "/branding1(2).png",
    "/branding1(3).png",
    "/branding1(4).png",
    "/branding1(5).png",
    "/branding1(6).png",
    "/branding1(7).png",
  ];

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Zero gap, zero padding container */}
      <div className="flex flex-col w-full p-0 m-0">
        
        {/* TOP SECTION: Branding1(1) and Branding1(2) */}
        {/* grid-cols-2 used without md: prefix so it stays side-by-side on mobile */}
        <div className="grid grid-cols-2 w-full p-0 m-0 gap-0 leading-[0] overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <img 
              src={images[0]} 
              className="w-full h-auto block border-none" 
              alt="Branding Top Left" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <img 
              src={images[1]} 
              className="w-full h-auto block border-none" 
              alt="Branding Top Right" 
            />
          </motion.div>
        </div>

        {/* FULL WIDTH SECTION: Images 3 to 7 */}
        {images.slice(2).map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full p-0 m-0 leading-[0] overflow-hidden"
          >
            <img 
              src={src} 
              className="w-full h-auto block border-none" 
              alt={`Branding Full Width ${index + 3}`} 
            />
          </motion.div>
        ))}
      </div>

      {/* FOOTER: Back to Portfolio Button */}
      <div className="py-24 flex flex-col items-center justify-center bg-black">
        <Link to="/portfolio">
          <button 
            className="group relative overflow-hidden text-white border border-white/20 px-12 py-5 rounded-full transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10 uppercase tracking-[0.3em] font-bold text-sm">
              Back To Portfolio
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </Link>
      </div>

      <style>{`
        /* Essential to kill any browser-added white space */
        img {
          display: block !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          outline: none !important;
        }
        body {
          margin: 0;
          padding: 0;
          background-color: black;
        }
        button:hover span {
          color: black !important;
        }
      `}</style>
    </div>
  );
};

export default Branding1;