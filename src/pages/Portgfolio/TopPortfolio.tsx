import React from "react";

type TopPortfolioProps = {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
};

const TopPortfolio: React.FC<TopPortfolioProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = [
    // "All",
    "Branding",
    "Social Media",
    "Ui/Ux Designing",
    "Web Development",
  ];

  return (
    <section className="w-full bg-black text-white pt-24 pb-12 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* MAIN HEADING */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-10">
          <h2 className="text-[42px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-bold leading-[1] tracking-[-0.04em] text-white z-10 w-full md:w-auto lg:whitespace-nowrap">
            Explore Our Latest Portfolio
          </h2>

          <div className="flex-shrink-0">
            <img
              src="/arrowsolution.webp"
              alt="arrow solution"
              className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] object-contain opacity-20"
            />
          </div>
        </div>

        {/* CATEGORY FILTER NAVIGATION */}
        <nav className="flex justify-start flex-wrap gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-8 lg:gap-x-20 ml-0 sm:ml-1 md:ml-2 lg:ml-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex items-center group cursor-pointer border-none bg-transparent outline-none"
            >
              {/* Dot only if not All */}
              {cat !== "Branding" && (
                <div
                  className={`w-2 h-2 rounded-full mr-2 transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-white scale-125"
                      : "bg-white opacity-60"
                  }`}
                />
              )}

              <span
                className={`text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-neutral-400 group-hover:text-white"
                }`}
              >
                {cat}
              </span>
            </button>
          ))}
        </nav>

        {/* BOTTOM DIVIDER LINE */}
        <div className="w-full h-[1px] bg-white/10 mt-8 md:mt-12 lg:mt-16" />

      </div>
    </section>
  );
};

export default TopPortfolio;
