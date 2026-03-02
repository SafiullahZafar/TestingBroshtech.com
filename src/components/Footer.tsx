import { ArrowUpCircle } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full select-none bg-black text-white pt-16 md:pt-24 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Card */}
        <div className="bg-[#1b1b1b] border border-white/5 rounded-3xl md:rounded-[40px] p-8 md:p-14 -mt-10 md:-mt-28 shadow-2xl">
          <div className="flex flex-col md:min-h-[520px]">

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

              {/* Left */}
              <div className="md:col-span-4 flex flex-col items-start">
                <h1 className="text-4xl md:text-[42px] font-medium leading-tight text-white mb-1">
                  Have a project?
                </h1>
                <h1 className="text-4xl md:text-[42px] font-bold leading-tight text-white mb-8">
                  Let's start.
                </h1>

                <div className="w-32 md:w-56 h-[2px] bg-white mb-8"></div>

                <div className="w-full max-w-md relative">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full bg-transparent border-b border-white/70 pb-4 text-white placeholder:text-gray-400 focus:outline-none text-lg"
                  />

                  <button
                    aria-label="Go to link"
                    onClick={() => navigate("/contact")}
                    className="absolute right-0 bottom-2 w-10 h-9 rounded-[5px] bg-white hover:bg-black flex items-center justify-center shadow-xl transition-all group"
                  >
                    <GoArrowUpRight className="w-5 h-5 text-[#0B6E4F] group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-12">

                {/* Explore */}
                <div className="flex flex-col items-start">
                  <h2 className="text-xl md:text-2xl font-semibold uppercase mb-6">
                    Explore
                  </h2>
                  <ul className="space-y-3 text-base md:text-xl text-gray-200">
                    <li><a href="/" className="hover:text-[#0B6E4F] transition-colors">Home</a></li>
                    <li><a href="/portfolio" className="hover:text-[#0B6E4F] transition-colors">Portfolio</a></li>
                    <li><a href="/founder" className="hover:text-[#0B6E4F] transition-colors">Founder</a></li>
                    <li><a href="/contact" className="hover:text-[#0B6E4F] transition-colors">Contact Us</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div className="flex flex-col items-start">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6">
                    Services
                  </h3>
                  <ul className="space-y-3 text-base md:text-xl text-gray-200">
                    <li><a href="/portfolio?category=Branding" className="hover:text-[#0B6E4F] transition-colors">Branding</a></li>
                    <li><a href="/portfolio?category=Social%20Media" className="hover:text-[#0B6E4F] transition-colors">Social Media</a></li>
                    <li><a href="/portfolio?category=Ui/Ux%20Designing" className="hover:text-[#0B6E4F] transition-colors">UI / UX Designing</a></li>
                    <li><a href="/portfolio?category=Web%20Development" className="hover:text-[#0B6E4F] transition-colors">Web Development</a></li>
                  </ul>
                </div>

                {/* Social */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6">
                    Quick Links
                  </h3>

                  <div className="flex gap-6 items-center">
                    <a
                      href="https://www.facebook.com/p/BroshTech-61569795868977/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <FaFacebookSquare className="w-8 h-8" />
                    </a>

                    <a
                      href="https://pk.linkedin.com/company/broshtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <FaLinkedin className="w-8 h-8" />
                    </a>

                    <a
                      href="https://www.instagram.com/broshtech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <FaSquareInstagram className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-16 flex flex-col md:flex-row justify-between gap-10">
              <div>
                <h3 className="uppercase text-lg md:text-xl font-medium tracking-widest">
                  Give Us A Call
                </h3>
                <p className="text-gray-100 text-base md:text-lg mt-2">
                  +92 317 7676560
                </p>
              </div>

           <div className="md:text-right select-none">
  <h3 className="uppercase text-lg md:text-xl font-medium tracking-widest text-white">
    Our Location
  </h3>

  <a
    href="https://www.google.com/maps/place/Mall+of+Faisalabad/@31.4382429,73.1355992,17z/data=!3m1!4b1!4m6!3m5!1s0x392268f81b2ee939:0xf63788f52a5ff58c!8m2!3d31.4382383!4d73.1381741!16s%2Fg%2F11b8_vwrrg?entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-200 text-base md:text-lg leading-tight max-w-full md:max-w-[260px] mt-2 block hover:text-[#0B6E4F] transition-colors"
  >
    113 Mall, Faisalabad
  </a>
</div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/90 mt-14 md:mt-16"></div>

            {/* Back to Top */}
            <div className="flex justify-end mt-10">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 text-xl md:text-2xl font-light hover:text-[#0B6E4F] transition-all group"
              >
                Back To Top
                <ArrowUpCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Background Image */}
        <div className="flex justify-center mt-8 md:mt-10">
          <img
            src="/fotterfotter.webp"
            alt="Footer background"
            className="w-full max-w-[1200px] h-auto object-cover"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;