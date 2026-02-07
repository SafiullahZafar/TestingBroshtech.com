import React from "react";

export default function MiddleTeam() {
  return (
    <section className="relative bg-black py-12 px-4 md:py-24 lg:py-32 middle-team">
      {/* Title + ourteam.png image positioned like overlay text background */}
      <div className="relative z-10 text-center mb-12 md:mb-24 lg:mb-48">
        <div className="relative inline-block ">
          <img
            src="/ourteam.png"
            alt="OUR TEAM background"
            className="w-full max-w-[80vw] md:max-w-[60vw] auto-show lg:max-w-[700px] mx-auto  opacity-100"
          />
        </div>

        <p className=" text-base md:text-lg lg:text-lg auto-show text-[#717171] max-w-3xl mx-auto px-4 leading-relaxed">
          Brosh tech is built by a focused team delivering smart technology through collaboration and shared vision.
        </p>
      </div>

      {/* Team grid with vertical divider */}
      <div className="relative max-w-5xl mx-auto team-grid">
        {/* Vertical line - centered only on md+ */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-cover bg-repeat-y hidden md:block"
          style={{ backgroundImage: "url('/line.png')" }}
        />

        {/* Member 1 – Image LEFT | Text RIGHT */}
        <div className="relative flex flex-col md:flex-row fade-up items-center md:items-start justify-between mb-14 md:mb-1 gap-6 md:gap-0">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 lg:pr-12">
            <div className="relative group  ">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="/team1.png"
                alt="Zaniya"
                className="relative w-32 h-52 md:w-60 md:h-68 lg:w-60 lg:h-70 relative object-cover rounded-[9px] shadow-2xl transition-all duration-400 group-hover:scale-[1.04] group-hover:-translate-y-2"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 lg:pl-12 lg:top-28 relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
              Zaniya
            </h3>
            <p className="text-sm md:text-base lg:text-[16px] md:w-[400px] text-[#C3BFBF] max-w-md mx-auto md:mx-0 leading-tight md:-top-3 relative">
              Innovative, smooth, and highly animated websites that user experiences and deliver seamless digital masterpieces.
            </p>
          </div>
        </div>

        {/* Member 2 – Text LEFT | Image RIGHT */}
        <div className="relative flex flex-col fade-up md:flex-row-reverse items-center md:items-start justify-between mb-14 md:mb-20 lg:mb-1 gap-6 md:gap-0">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-8 lg:pl-12">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="/team2.png"
                alt="Hamaza"
                className="relative w-32 h-52 md:w-60 md:h-72 lg:w-60 lg:h-70 object-cover rounded-[9px] shadow-2xl transition-all duration-400 group-hover:scale-[1.04] group-hover:-translate-y-2"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right md:pr-8 lg:pr-12 lg:top-28 relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
              Saad
            </h3>
            <p className="text-sm md:text-base lg:text-[16px] md:w-[400px] text-[#C3BFBF] max-w-md mx-auto md:mx-0 md:ml-auto leading-tight md:-top-3 relative">
              Creative, smooth, and highly animated websites that user experiences and deliver seamless digital masterpieces.
            </p>
          </div>
        </div>

        {/* Member 3 – Image LEFT | Text RIGHT */}
        <div className="relative flex flex-col fade-up md:flex-row items-center md:items-start justify-between mb-1 md:mb-20 lg:mb-24 gap-6 md:gap-0">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 lg:pr-12">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="/team3.png"
                alt="Hamaza"
                className="relative w-32 h-52 md:w-60 md:h-80 lg:w-60 lg:h-60 object-cover rounded-[9px] shadow-2xl transition-all duration-400 group-hover:scale-[1.04] group-hover:-translate-y-2"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 lg:pl-12 lg:top-28 relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
              Zohaib
            </h3>
            <p className="text-sm md:text-base lg:text-[16px] md:w-[400px] text-[#C3BFBF] max-w-md mx-auto md:mx-0 leading-tight md:-top-3 relative">
              Innovative, smooth, and highly animated websites that user experiences and deliver seamless digital masterpieces.
            </p>
          </div>
        </div>

        {/* Member 4 – Text LEFT | Image RIGHT */}
        {/* <div className="relative flex flex-col fade-up md:flex-row-reverse items-center md:items-start justify-between gap-6 md:gap-0">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-8 lg:pl-12">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="/team4.png"
                alt="Hamaza"
                className="relative w-52 h-72 md:w-60 md:h-80 lg:w-72 lg:h-96 object-cover rounded-[9px] shadow-2xl transition-all duration-400 group-hover:scale-[1.04] group-hover:-translate-y-2"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right md:pr-8 lg:pr-12 lg:top-28 relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
              Hamaza
            </h3>
            <p className="text-sm md:text-base lg:text-[16px] md:w-[400px] text-[#C3BFBF] max-w-md mx-auto md:mx-0 md:ml-auto leading-tight md:-top-3 relative">
              Creative, smooth, and highly animated websites that user experiences and deliver seamless digital masterpieces.
            </p>
          </div>
        </div> */}
      </div>

      {/* CUSTOM CSS */}
      <style>{`
        @media (max-width: 760px) {
          /* Keep same desktop layout on mobile */
          .middle-team .team-grid {
            max-width: 100% !important;
          }

          /* Show vertical line on mobile */
          .middle-team .team-grid > div.absolute {
            display: block !important;
          }

          /* Force desktop layout for each row */
          .middle-team .team-grid .flex-col {
            flex-direction: row !important;
          }

          /* Fix alignment for mobile */
          .middle-team .team-grid .md\\:flex-row-reverse {
            flex-direction: row-reverse !important;
          }

          /* Make sure text & image stay side-by-side */
          .middle-team .team-grid .w-full.md\\:w-1\\/2 {
            width: 40% !important;
          }

          /* Fix top offsets */
          .middle-team .team-grid .lg\\:top-8 {
            top: 0 !important;
          }

          /* Prevent stacking */
          .middle-team .team-grid .flex-col {
            gap: 0 !important;
          }

          /* SMALLER TEXT ON MOBILE */
          .middle-team .team-grid h3 {
            font-size: 18px !important; /* smaller name */
          }
          .middle-team .team-grid p {
            font-size: 11px !important; /* smaller paragraph */
            line-height: 1.2 !important;
          }

          /* Make text fit next to image */
          .middle-team .team-grid .md\\:w-1\\/2 {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
