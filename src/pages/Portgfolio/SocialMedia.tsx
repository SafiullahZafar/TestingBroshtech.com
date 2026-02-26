import React from "react";

const SocialMedia: React.FC = () => {
  // Configuration
  const mainImage = "/socialmedia3.webp"; 
  const destinationPath = "/socialmedia1"; // The logic/route we will handle later

  return (
    <div className="w-full space-y-2 animate-in fade-in duration-1000 px-[10px]">

      {/* 1. TOP FEATURED SECTION - Wrapped in a link */}
      <a 
        href={destinationPath} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative w-full h-[60vh] md:h-[98vh] overflow-hidden group border-[0.5px] border-white/10 cursor-pointer"
      >
        {/* Main Image */}
        <img 
          src={mainImage} 
          alt="Featured Social Media Work" 
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Header Text */}
        <div className="absolute bottom-12 left-8 md:left-16">
          <div className="flex items-center WorkSeries gap-4 mb-4">
            <span className="w-14 h-[2px] Topper bg-[#0d7411]"></span>
            <p className="text-[#0d7411] text-[12px] font-bold Topper  uppercase tracking-[0.3em]">Work Series</p>
          </div>
          <h3 className="text-white text-2xl md:text-5xl Topper lg:text-7xl md:w-3xl font-black uppercase leading-[0.9] tracking-tighter">
            Social Media <br /> Designing & Management
          </h3>
          
          {/* Optional: Visual cue that it's clickable */}
          <p className="text-white/90 text-xs mt-4 uppercase tracking-widest group-hover:text-[#0d7411] transition-colors">
            Click to view project details
          </p>
        </div>

        {/* 🔥 Click Me Animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="click-me-text text-white text-2xl md:text-3xl font-semibold animate-pulse-hover">
            Click To Explore
          </span>
        </div>
      </a>

      {/* 2. BOTTOM GRID SECTION (Keeping commented as per your original) */}
      {/* ... grid code ... */}

      {/* Additional Styles for Hover Animation */}
      <style>{`
        .animate-pulse-hover {
          animation: pulse-hover 3s infinite;
        }

        @keyframes pulse-hover {
          0% { transform: scale(1); opacity: 0.8; }
          25% { transform: scale(1.1); opacity: 1; }
          50% { transform: scale(1); opacity: 0.8; }
          75% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        @media (max-width: 458px){
        .Topper {
  position: relative !important;
  right: 10% !important;
}
  .WorkSeries {
  position: relative !important;
  top: -210px !important;
}
        }
      `}</style>

    </div>
  );
};

export default SocialMedia;
