import { ArrowUpCircle } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white pt-16 md:pt-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Card - Adjusted mt for mobile */}
        <div className="bg-[#1b1b1b] border border-white/5 rounded-3xl md:rounded-[40px] p-8 md:p-14 mt-[-40px] md:mt-[-120px] relative overflow-hidden shadow-2xl">
          <div className="flex flex-col justify-start md:justify-end min-h-auto md:min-h-[520px]">

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              
              {/* Left - Have a project? - FIXED ALIGNMENT */}
              <div className="md:col-span-4 flex flex-col items-start"> {/* Changed from items-center to start for consistency */}
                <h1 className="text-4xl md:text-[42px] lg:w-92 font-medium leading-tight text-white mb-1">Have a project?</h1>
                <h1 className="text-4xl md:text-[42px] font-bold leading-tight text-white mb-8">Let's start.</h1>

                <div className="w-32 md:w-54 h-0.5 md:-top-6 md:relative bg-white mb-8"></div>

                <div className="w-full max-w-md relative">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full bg-transparent border-b border-white/70 pb-4 text-white placeholder:text-gray-400 focus:outline-none text-lg"
                  />
                  <button
                    className="absolute right-0 bottom-2 w-11.5 sm:top-0 h-9.5 sm:w-7 sm:h-7 rounded-[5px] bg-white hover:bg-black flex items-center justify-center shadow-xl transition-all group"
                  >
                    <GoArrowUpRight className="w-6 h-6 text-[#0B6E4F] group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="md:col-span-8 grid grid-cols-2 lg:left-13 lg:top-2.75 md:relative md:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-14 md:gap-12">
                
                {/* Explore */}
                <div className="flex lg:relative lg:left-1.25 flex-col items-start">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6 text-white">Explore</h3>
                  <ul className="space-y-3 text-base md:text-xl text-gray-200">
                    <li><a href="/" className="hover:text-[#0B6E4F] transition-colors">Home</a></li>
                    <li><a href="/portfolio" className="hover:text-[#0B6E4F] transition-colors">Portfolio</a></li>
                    <li><a href="/founder" className="hover:text-[#0B6E4F] transition-colors">Founder</a></li>
                    <li><a href="/contact" className="hover:text-[#0B6E4F] transition-colors">Contact Us</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div className="flex flex-col items-start">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6 text-white">Services</h3>
                  <ul className="space-y-3 text-base md:text-xl text-gray-200">
                    <li><a href="/portfolio?category=Branding" className="hover:text-[#0B6E4F] transition-colors">Branding</a></li>
                    <li><a href="/portfolio?category=Social%20Media" className="hover:text-[#0B6E4F] transition-colors">Social Media</a></li>
                    <li><a href="/portfolio?category=Ui/Ux%20Designing" className="hover:text-[#0B6E4F] transition-colors">UI / UX Designing</a></li>
                    <li><a href="/portfolio?category=Web%20Development" className="hover:text-[#0B6E4F] transition-colors">Web Development</a></li>
                  </ul>
                </div>

                {/* Quick Links - VISUALLY BALANCED */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6 text-white">Quick Links</h3>
                  <div className="flex gap-6 md:gap-5 items-center">
                    <a href="https://www.facebook.com/p/BroshTech-61569795868977/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaFacebookSquare className="w-9 h-9 md:w-8 md:h-8" />
                    </a>
                    <a href="https://pk.linkedin.com/company/broshtech" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaLinkedin className="w-9 h-9 md:w-8 md:h-8" />
                    </a>
                    <a href="https://www.instagram.com/broshtech/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaSquareInstagram className="w-9 h-9 md:w-8 md:h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - FIXED TEXT SIZES */}
            <div className="mt-16 md:relative md:top-9 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
              <div>
                <h3 className="uppercase text-lg md:text-xl font-medium tracking-widest text-white">Give Us A Call</h3>
                <p className="text-gray-100 text-base md:text-lg mt-2">+92 317 7676560</p>
              </div>

              <div className="md:text-right">
                <h3 className="uppercase text-lg md:text-xl font-medium tracking-widest text-white">Our Location</h3>
                <p className="text-gray-200 text-base md:text-lg leading-tight max-w-full md:max-w-[260px] mt-2">
                  113 Mall, Faisalabad
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/90 mt-14 md:mt-16"></div>

            {/* Back to Top */}
            <div className="flex justify-end mt-10">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 text-xl md:text-2xl font-light text-white hover:text-[#0B6E4F] transition-all group"
              >
                Back To Top
                <ArrowUpCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Background Image - Adjusted to prevent overflow */}
        <div className="flex justify-center mt-8 md:mt-20">
          <img
            src="/fotterfotter.png"
            alt="Background"
            className="w-full md:w-[103%] max-w-none h-auto object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;