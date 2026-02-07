import React from 'react';

const TeamTop: React.FC = () => {
  return (
    <div 
      className="relative w-full min-h-[200px] md:min-h-[300px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/teamtop.png')" }}
    >
      {/* Main Content Container - Centered to match image */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Your existing content styled for exact match */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
          Our Team
        </h1>
        <div className="flex items-center gap-2 mt-2">
           <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
             BROSHTECH
           </span>
           <span className="text-gray-500">|</span>
           <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-white uppercase tracking-[0.2em]">
             OUR TEAM
           </span>
        </div>
        
        {/* Keeping your original paragraph logic hidden/accessible if needed */}
        <p className="sr-only">
          Building the future together with passion and precision.
        </p>
      </div>

      {/* Character Image positioned in the right corner */}
      <div className="absolute bottom-4 right-4 sm:right-8 md:right-12 z-20 pointer-events-none">
        <img 
          src="/teamcharacter.png" 
          alt="Team Character" 
          className="w-24 sm:w-32 md:w-48 lg:w-56 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default TeamTop;