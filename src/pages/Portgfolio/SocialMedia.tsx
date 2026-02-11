import React from "react";

const SocialMedia: React.FC = () => {
  // Main featured image (Top Big One)
  const mainImage = "/socialmedia1.png"; 
  
  // Sub images (The two big ones below)
  const subImages = [
    { id: 2, src: "/socialmedia2.png", title: "Visual Branding" },
    { id: 3, src: "/socialmedia3.png", title: "Ad Campaign" },
  ];

  return (
    <div className="w-full space-y-2 animate-in fade-in duration-1000">
      
      {/* 1. TOP BIG SECTION - 100% Width, High Impact */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden group border-[0.5px] border-white/10">
        <img 
          src={mainImage} 
          alt="Main Social Media Work" 
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
        />
        
        {/* Cinematic Gradient Overlay to match video depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        {/* Text Content - Large and Bold */}
        <div className="absolute bottom-12 left-8 md:left-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-[2px] bg-[#0d7411]"></span>
            <p className="text-[#0d7411] text-xl md:text-2xl font-bold uppercase tracking-[0.3em]">Work Series</p>
          </div>
          <h3 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Social Media <br /> Designing
          </h3>
        </div>
      </div>

      {/* 2. BOTTOM SECTION - Two Big Images Side-by-Side */}
      {/* Using grid-cols-2 to make them much wider than the previous grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {subImages.map((item) => (
          <div 
            key={item.id} 
            className="relative group overflow-hidden bg-[#111] h-[300px] md:h-[370px] lg:h-[400px] border-[0.5px] border-white/5"
          >
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Dark Overlay that fades on hover */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700" />
            <div className="absolute bottom-10 left-10">
              <p className="text-[#0d7411] text-lg font-bold uppercase tracking-widest mb-1">Module {item.id}</p>
              <h4 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;