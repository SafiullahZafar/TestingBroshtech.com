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
    "All",
    "Branding",
    "Social Media",
    "Ui/Ux Designing",
    "Web Design",
  ];

  return (
    <section className="w-full bg-black text-white pt-24 pb-12 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-full mx-auto relative">

        {/* MAIN HEADING */}
        <div className="flex flex-col md:flex-row justify-between items-start relative mb-10">
          <h2 className="text-[42px] sm:text-[50px] md:text-[60px] md:relative md:top-20 lg:text-[72px] md:right-12 w-full md:w-[90%] font-bold leading-[0.95] tracking-[-0.04em] text-[#0d7411] z-10">
            Explore Our Latest Portfolio
          </h2>

          <div className="absolute right-0 top-[-20px] md:left-16 md:relative md:top-0">
            <img
              src="/arrowsolution.png"
              alt="arrow solution"
              className="w-[120px] sm:w-[140px] md:w-[200px] lg:w-[170px] object-contain opacity-20"
            />
          </div>
        </div>

        {/* CATEGORY FILTER NAVIGATION */}
        <nav className="flex justify-center flex-wrap gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-28">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex items-center group cursor-pointer border-none bg-transparent outline-none"
            >
              {/* Dot only if not All */}
              {cat !== "All" && (
                <div
                  className={`w-2 h-2 rounded-full mr-2 transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-white scale-125"
                      : "bg-white opacity-60"
                  }`}
                />
              )}

              <span
                className={`text-[13px] sm:text-[16px] md:text-[20px] transition-all duration-300 ${
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
        <div className="w-full h-[1px] bg-white/10 mt-8 md:mt-16" />

      </div>
    </section>
  );
};

export default TopPortfolio;
