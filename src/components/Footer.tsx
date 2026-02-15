import { ArrowUpCircle } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white pt-16 md:pt-24 px-4 md:px-10 select-none relative footer-main">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative footer-container">

        {/* Main Footer Card */}
        <div className="w-full bg-[#1b1b1b] border border-white/5 rounded-[40px] p-6 md:p-14 relative overflow-hidden z-20 shadow-2xl footer-card mt-[-80px] md:mt-[-120px]">
          <div className="min-h-[400px] md:min-h-[520px] flex flex-col justify-end footer-card-inner">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 footer-grid">

              {/* Left Section - Project Start */}
              <div className="md:col-span-4 flex flex-col justify-start items-center md:items-start footer-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">Have a project?</h1>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Let's start.</h1>
                <div className="w-32 md:w-50 h-0.5 bg-white mb-6 md:-top-3 md:relative md:mb-8"></div>

                <div className="w-full max-w-md relative">
                  {/* Input with bottom border only */}
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full bg-transparent border-b-1 border-white/90 pb-3 md:pb-1 text-white placeholder-gray-200 focus:outline-none text-base md:text-lg"
                  />

                  {/* Green arrow button positioned at the end, slightly overlapping the line */}
                  <button
                    className="group absolute right-0 bottom-0 sm:translate-y-3/4 translate-x-0 md:translate-x-2 w-10 h-6 md:w-7 md:h-7 rounded-sm md:-top-6 bg-white hover:bg-black flex items-center justify-center shadow-lg transition-colors"
                    aria-label="Submit email"
                  >
                    <GoArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#0B6E4F] group-hover:text-white transition-colors" />
                  </button>

                </div>
              </div>

              {/* Explore */}
              <div className="md:col-span-2 md:relative md:left-22 footer-explore">
                <h3 className="text-xl md:text-[27px] mb-2 uppercase text-white footer-section-title">Explore</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="/" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Home</a></li>
                  <li><a href="/portfolio" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Portfolio</a></li>
                  <li><a href="/founder" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Founder</a></li>
                  <li><a href="/contact" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Contact Us</a></li>
                </ul>
              </div>

              {/* Services */}
              <div className="md:col-span-2 md:relative md:left-32 footer-services">
                <h3 className="text-xl md:text-[27px] mb-2 uppercase text-white footer-section-title">Services</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="/branding1" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Branding</a></li>
                  <li><a href="/socialmedia1" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Social Media Marketing</a></li>
                  <li><a href="/uiux" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">UI / UX</a></li>
                  <li><a href="/webdevelopment" className="text-gray-100 text-base md:text-[20px] hover:text-[#0B6E4F] transition">Web Development</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2 md:relative md:left-47 footer-quick-links">
                <h3 className="text-xl md:text-[27px] mb-1 text-white footer-section-title">Quick Links</h3>
                <div className="flex gap-3 md:gap-4">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img src="/fotter1.png" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6 object-contain footer-social-icon" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img src="/fotter2.png" alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6 object-contain footer-social-icon" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img src="/fotter3.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6 object-contain footer-social-icon" />
                  </a>
                </div>
              </div>

            </div>
            {/* Contact Section */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start mt-6 md:mt-10 gap-6 md:gap-0 footer-contact-section">

              <div className="flex flex-col items-start text-left space-y-1 md:space-y-1 w-full md:w-auto">
                <h3 className="text-xl md:text-[21px] uppercase tracking-[1px] text-white footer-section-title">
                  Give Us A Call
                </h3>
                <p className="text-gray-100 text-lg md:text-[16px] footer-contact">
                  +92 317 7676560
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-1 md:space-y-2 w-full md:w-auto">
                <h3 className="text-xl md:text-[21px] uppercase text-white footer-section-title">
                  Our Location
                </h3>
                <p className="text-gray-200 text-base md:text-[16px] leading-[1.1] max-w-[260px] footer-address">
                  113 Mall, Faisalabad
                </p>
              </div>

            </div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-white/90 mt-6 md:mt-10 footer-divider"></div>

            {/* Back to Top */}
            <div className="flex justify-end items-center mt-4 md:mt-6 footer-backtop">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 md:gap-3 text-white text-lg md:text-2xl font-light hover:opacity-70 transition-all group backtop-btn"
              >
                Back To Top
                <ArrowUpCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Background Image */}
        <div className="w-full flex justify-center mt-8 md:mt-[60px] relative z-10 pointer-events-none footer-bg-wrapper">
          <img
            src="/fotterfotter.png"
            alt="Broshtech Background"
            className="w-[103%] max-w-none h-auto object-contain footer-bg-image"
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        footer {
          font-family: 'Inter', sans-serif;
        }

        @media (max-width: 767px) {
          .footer-main {
            padding-top: 6rem !important;
          }
          .footer-card {
            margin-top: -60px !important;
            border-radius: 24px !important;
            padding: 1.5rem !important;
          }
          .footer-card-inner {
            min-height: 300px !important;
          }
          .footer-section-title {
            font-size: 1.3rem !important;
          }
          .footer-contact, .footer-address {
            font-size: 1.1rem !important;
          }
          .footer-social-icon {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
          .footer-backtop {
            margin-top: 1.5rem !important;
          }
          .backtop-btn {
            font-size: 1.2rem !important;
          }
          .footer-bg-wrapper {
            margin-top: 2rem !important;
          }
          .footer-contact-section {
            margin-top: 1.5rem !important;
          }
          .footer-divider {
            margin-top: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .footer-card {
            padding: 1rem !important;
            border-radius: 20px !important;
          }
          .footer-section-title {
            font-size: 1.1rem !important;
          }
          .footer-contact, .footer-address {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 