import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export default function DiscussionComponent() {
    const navigate = useNavigate();
  return (
    <div className="w-full bg-black py-20 px-4 md:px-10 flex justify-center items-center overflow-hidden discussion-component">
      {/* Container Card - Matches the exact dark shade and rounded corners */}
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[40px] border border-white/5 py-12 md:py-32 md:px-6 flex flex-col items-center justify-center text-center shadow-2xl discussion-card">
        
        {/* GREEN CIRCULAR LINE SVG - Perfectly centered background */}
        <div className="absolute inset-0 z-0 flex items-center justify-start md:-translate-x-4 lg:translate-y-12 pointer-events-none opacity-60">
          <img 
            src="/circular.svg" 
            alt="decoration" 
            className="w-full h-auto max-w-[60%] object-contain"
          />
        </div>
        {/* TEXT CONTENT - Responsive & High Accuracy */}
        <div className="relative z-10 w-full max-w-3xl top-5">
          <h2 className="text-white text-3xl  sm:text-4xl md:text-4xl font-semibold tracking-tight leading-[1] mb-10">
            Let’s Discuss Make <br className="hidden md:block" /> Something Cool Together
          </h2>
          
          <button  type="button"
                    onClick={() => navigate("/contact")} 
                    className="group flex Top items-center gap-1 text-gray-100 hover:cursor-pointer hover:text-white transition-all duration-300 mx-auto text-[13px] uppercase tracking-[0.1em] font-regular -top-7 left-3 lg:-top-2 relative">
            Talk To Us 
            <BsArrowRightShort className="text-3xl group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

<style>{`
  /* SCALE WHOLE COMPONENT ON SMALL SCREENS */
  @media (max-width: 460px) {
    .discussion-component {
      transform: scale(0.85);
      transform-origin: top center;
    }

    /* DECREASE HEIGHT ON MOBILE */
    .discussion-card {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }
  }

  @media (max-width: 380px) {
    .Top{
      top: -20px !important;
      position: relative !important;
   }
    .discussion-component {
      transform: scale(0.78);
      transform-origin: top center;
    }
  }

  @media (max-width: 320px) {
     .Top{
      top: -20px !important;
      position: relative !important;
   }
    .discussion-component {
      transform: scale(0.70);
      transform-origin: top center;
    }
  }
`}</style>
