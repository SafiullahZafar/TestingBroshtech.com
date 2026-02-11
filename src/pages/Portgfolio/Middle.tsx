import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Branding from "./Branding";
import SocialMedia from "./SocialMedia";
import Photography from "./Photography";
import Webdesign from "./Webdesign";

type MiddlePortfolioProps = {
  activeCategory: string;
};

const MiddlePortfolio: React.FC<MiddlePortfolioProps> = ({ activeCategory }) => {
  // Animation settings for the "Slide from Bottom" effect
  const slideUpVariants = {
    initial: { opacity: 0, y: 50 }, // Start 50px lower
    animate: { opacity: 1, y: 0 },   // Slide to its spot
    exit: { opacity: 0, y: -20 },   // Slide slightly up as it leaves
  };

  return (
    <div className="w-full min-h-[60vh] pb-20 px-[10px] bg-black">
      <div className="w-full mx-auto"> 
        <AnimatePresence mode="wait">
          {/* ALL CATEGORIES */}
          {activeCategory === "All" && (
            <motion.div
              key="all"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Professional "Cubic Bezier" ease
              className="flex flex-col gap-2"
            >
              <Branding />
              <SocialMedia />
              <Photography />
              <Webdesign />
            </motion.div>
          )}

          {/* BRANDING */}
          {activeCategory === "Branding" && (
            <motion.div
              key="branding"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Branding />
            </motion.div>
          )}

          {/* SOCIAL MEDIA */}
          {activeCategory === "Social Media" && (
            <motion.div
              key="social"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SocialMedia />
            </motion.div>
          )}

          {/* PHOTOGRAPHY */}
          {activeCategory === "Photography" && (
            <motion.div
              key="photo"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Photography />
            </motion.div>
          )}

          {/* WEB DESIGN */}
          {activeCategory === "Web Design" && (
            <motion.div
              key="web"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Webdesign />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MiddlePortfolio;