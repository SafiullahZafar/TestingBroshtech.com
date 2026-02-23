import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const styles = ` 
  .menu-item {
    // cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
  }

  .menu-item:hover { 
    background-color: rgba(255, 255, 255, 0.15);
  }

  .mobile-menu-item {
    // cursor: pointer;
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
  // const [isVisible, setIsVisible] = useState(true);
  // const lastScrollY = useRef(0);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
  //       setIsVisible(false);
  //       setIsMobileMenuOpen(false);
  //     } else if (currentScrollY < lastScrollY.current) {
  //       setIsVisible(true);
  //     }

  //     lastScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Founder", path: "/founder" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <style>{styles}</style>

      {/* <nav
        className={`fixed top-0 left-0 w-full z-50 navbar-transition pt-5 ${
          isVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      > */}
      <nav className="absolute top-0 left-0 w-full z-50 pt-5">
        <div
          className="flex items-center max-w-[1140px] w-full sm:px-8 px-3 py-3 rounded-[10px] mx-auto nav-bar"
          style={{
            backgroundColor: isDesktop
              ? "rgba(60, 60, 60, 0.9)"
              : "rgba(30, 30, 30, 0.9)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* LOGO - LEFT */}
          <a href="/" className="flex items-center gap-2">
            <img src="/html-logo.png" alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>

          {/* DESKTOP MENU - RIGHT */}
          <ul className="hidden md:flex items-center Right gap-4 text-white text-[14px] font-medium ml-auto desktop-menu">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`menu-item ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden ml-auto relative mobile-hamburger">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <Menu className="w-8 h-8 text-white" />
              )}
            </button>

            {isMobileMenuOpen && (
              <ul className="absolute right-0 mt-2 w-[200px] bg-white/10 rounded-2xl shadow-lg backdrop-blur-md mobile-dropdown">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`mobile-menu-item block ${
                        location.pathname === item.path ? "active" : ""
                      }`}
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

      <style>{`
      .navbar-hidden {
  transform: translateY(-150%);
}

        @media (max-width: 767px) {
          .nav-bar {
            background-color: rgba(30, 30, 30, 0.8) !important;
            top: 10px !important;
            position:relative !important;
            border-radius: 10px !important;
            padding: 0.4rem 0.8rem !important;
            justify-content: flex-start !important;
            align-items: center !important;
            gap: 0.5rem !important;
            width: 340px !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
            margin-left: 0.1rem !important;
            gap: 0.1rem !important;
            font-size: 0.8rem !important;
          }
          .Right {
          left: 32px !important;
          position: relative !important;
          }
          .menu-item {
            padding: 0.2rem 0.3rem !important;
            border-radius: 0.4rem !important;
          }
        }
      `}</style>
    </>
  );
};