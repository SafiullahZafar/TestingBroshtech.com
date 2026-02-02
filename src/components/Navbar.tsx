import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const styles = ` 
  .menu-item {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
  }

  .menu-item:hover { 
    background-color: rgba(255, 255, 255, 0.15);
  }



  .mobile-menu-item {
    cursor: pointer;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    text-align: center;
    color: white;
  }

  .mobile-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .mobile-menu-item.active {
    background-color: rgba(229, 133, 73, 0.2);
  }
 
  .navbar-transition {
    transition: transform 0.3s ease-in-out;
  }

  .navbar-hidden {
    transform: translateY(-150%);
  }

  .navbar-visible {
    transform: translateY(0);
  }
`;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Agar scroll down ho raha hai aur 80px se zyada scroll ho gaya hai
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } 
      // Agar scroll up ho raha hai
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      // Jab scroll ruk jaye to navbar show karo
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Solution", path: "/solution" },
    { name: "Founder", path: "/founder" },
  ];

  const mobileItems = [...menuItems, { name: "Contact Us", path: "/contact" }];

  return (
    <>
      <style>{styles}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 navbar-transition pt-5 ${
          isVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <div
          className="flex items-center justify-between max-w-6xl w-full sm:px-8 px-3 py-4 md:rounded-3xl mx-auto"
          style={{
            backgroundColor: isDesktop ? "#ffffff42" : "rgba(30, 30, 30, 0.85)",
            fontFamily: "General Sans, sans-serif",
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/html-logo.png" alt="Logo" className="w-11" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 text-white text-[18px] font-medium absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Button */}
          <Link 
            to="/contact" 
            className="hidden md:flex items-center text-white text-[18px] font-medium menu-item"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <Menu className="w-8 h-8 text-white" />
              )}
            </button>

            {/* Mobile menu under icon */}
            {isMobileMenuOpen && (
              <ul className="absolute right-0 mt-2 w-[200px] bg-white/10 rounded-2xl shadow-lg backdrop-blur-md">
                {mobileItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`mobile-menu-item block ${location.pathname === item.path ? "active" : ""}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};