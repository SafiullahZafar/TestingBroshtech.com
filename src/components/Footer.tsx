import { ArrowUpCircle } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white pt-24 px-4 md:px-10 select-none relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">

        {/* Main Footer Card */}
        <div className="w-full bg-[#1b1b1b] border border-white/5 rounded-[40px] p-8 md:p-14 relative overflow-hidden z-20 shadow-2xl mt-[-120px]">

          {/* Container to push content down */}
          <div className="min-h-[520px] flex flex-col justify-end">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">

              {/* Left Section */}
              <div className="md:col-span-4 flex flex-col justify-start items-center md:items-start">
                <div className="relative w-56 h-49 -mt-1 -ml-4">
                  <img
                    src="/character.png"
                    alt="BroshTech Character"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Explore */}
              <div className="md:col-span-2 md:-ml-6.25">
                <h3 className="text-[27px] mb-2 uppercase text-white">Explore</h3>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-100 text-[20px]">About Us</a></li>
                  <li><a href="/projects" className="text-gray-100 text-[20px]">Projects</a></li>
                  <li><a href="/contact" className="text-gray-100 text-[20px]">Contact Us</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <h3 className="text-[27px] mb-1 text-white">Quick Links</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img src="/fotter1.png" alt="Facebook" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img src="/fotter2.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img src="/fotter3.png" alt="Instagram" className="w-6 h-6 object-contain" />
                  </a>
                </div>
              </div>

              {/* Right Section (Adjusted) */}
              <div className="md:col-span-4 space-y-4 md:ml-16 mb-[50px]">
                <div className="space-y-2">
                  <h3 className="text-[27px] uppercase tracking-[2px] text-white">Give Us A Call</h3>
                  <p className="text-gray-100 text-2xl">+92 317 7676560</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-[30px] uppercase text-white">Our Location</h3>
                  <p className="text-gray-100 text-[22px] leading-[1.1] max-w-[260px]">
                    113 Mall of, Zia Colony
                    Nasar Ullah Khan Town,
                    Faisalabad, 38000
                  </p>
                </div>
              </div>
            </div>

            {/* Divider moved lower */}
            <div className="w-full h-[1px] bg-white/90 mt-16 mt-6"></div>

            {/* Bottom Button moved lower */}
            <div className="flex justify-end items-center mt-8">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 text-white text-2xl font-light hover:opacity-70 transition-all group"
              >
                Back To Top
                <ArrowUpCircle className="w-7 h-7 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Background Image */}
        <div className="w-full flex justify-center mt-[60px] relative z-10 pointer-events-none">
          <img
            src="/fotterfotter.png"
            alt="Broshtech Background"
            className="w-[103%] max-w-none h-auto min-h-[1px] object-contain"
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        footer {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
