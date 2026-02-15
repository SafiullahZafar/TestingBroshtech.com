import { ArrowUpCircle } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white py-16 px-6 overflow-hidden">
      {/* Main Footer Card */}
      <div className="max-w-7xl mx-auto bg-[#111111] rounded-3xl p-8 md:p-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Section - Project Start */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Have a project?
              <br />
              Let's start.
            </h3>
            {/* Input with bottom border only */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-0 border-b-2 border-gray-700 pb-3 pr-12 focus:outline-none focus:border-green-500 transition-colors"
              />
              {/* Green arrow button positioned at the end, slightly overlapping the line */}
              <Link
                to="/contact"
                className="absolute right-0 bottom-2 bg-green-500 rounded-full p-2 hover:bg-green-600 transition-colors"
              >
                <GoArrowUpRight className="w-5 h-5 text-black" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-gray-400 hover:text-white transition-colors">
                  Founder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/branding" className="text-gray-400 hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux" className="text-gray-400 hover:text-white transition-colors">
                  UI / UX
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-gray-400 mb-2">Give Us A Call</p>
            <Link to="tel:+923177676560" className="text-xl font-semibold hover:text-green-500 transition-colors">
              +92 317 7676560
            </Link>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Our Location</p>
            <Link
              to="https://maps.google.com/?q=113+Mall+Faisalabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:text-green-500 transition-colors"
            >
              113 Mall, Faisalabad
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Back to Top */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2024 All rights reserved</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-green-500/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;