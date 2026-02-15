import React from 'react';
import { motion } from 'framer-motion';

const SocialMedia1: React.FC = () => {
  // Array of your 6 images from the public folder
  const projectImages = [
    "/socialmedia1(1).png",
    "/socialmedia1(2).png",
    "/socialmedia1(3).png",
    "/socialmedia1(4).png",
    "/socialmedia1(5).png",
    "/socialmedia1(6).png",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0d7411]">
      
      {/* 1. TOP SPACE & HEADING SECTION */}
      <div className="pt-20 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#0d7411]"></span>
            <span className="text-[#0d7411] uppercase tracking-[0.4em] text-sm font-bold">Project Details</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Here are things <br /> <span className="text-white bg-[#0b2b1a] top-4 md:text-6xl px-6 relative">what you need</span>
          </h1>
          
          <p className="max-w-2xl text-white text-lg md:text-xl leading-relaxed top-4 relative">
            A deep dive into our visual strategy, brand alignment, and high-conversion 
            content layouts designed for modern social platforms.
          </p>
        </motion.div>
      </div>

      {/* 2. THREE-COLUMN IMAGE GRID (Total 6 Images) */}
      <div className="px-2 md:px-4 pb-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-1">
          {projectImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden bg-[#111] border border-white/5 group"
            >
              <img
                src={src}
                alt={`Social Media Work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold tracking-widest uppercase text-sm">
                  Layout 0{index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <div className="py-20 text-center border-t border-white/5">
        <button 
          onClick={() => window.close()} 
          className="px-8 py-4 bg-white text-black font-bold uppercase text-sm hover:bg-[#0d7411] hover:text-white transition-all duration-300 rounded-sm"
        >
          Let's start
        </button>
      </div>

    </div>
  );
};

export default SocialMedia1;