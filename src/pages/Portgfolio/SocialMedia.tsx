import React from "react";

const SocialMedia: React.FC = () => {
  // Configuration based on your video/image requirements
  const mainImage = "/socialmedia2.png"; 
  const subImages = [
    { id: 2, src: "/socialmedia1.png", title: "Visual Branding" },
    { id: 3, src: "/socialmedia3.png", title: "Digital Campaign" },
  ];

  return (
    /* px-[10px] matches the specific margin you requested from the video */
    <div className="w-full space-y-2 animate-in fade-in duration-1000 px-[10px]">
      
      {/* 1. TOP FEATURED SECTION - Massive and Wide */}
      <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden group border-[0.5px] border-white/10">
        <img 
          src={mainImage} 
          alt="Featured Social Media Work" 
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />
        
        {/* Gradient Overlay for the cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {/* Header Text: Work Series */}
        <div className="absolute bottom-12 left-8 md:left-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-[2px] bg-[#0d7411]"></span>
            <p className="text-[#0d7411] text-xl font-bold uppercase tracking-[0.3em]">Work Series</p>
          </div>
          <h3 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Social Media <br /> Designing & Management
          </h3>
        </div>
      </div>

      {/* 2. BOTTOM GRID SECTION - Two Big Images Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {subImages.map((item) => (
          <div 
            key={item.id} 
            className="relative group overflow-hidden bg-[#111] h-[500px] md:h-[750px] border-[0.5px] border-white/5"
          >
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700" />
            <div className="absolute bottom-10 left-10">
              <p className="text-[#0d7411] text-lg font-bold uppercase tracking-widest mb-1">Module 0{item.id}</p>
              <h4 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;