import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Branding from "./Branding";
import SocialMedia from "./SocialMedia";
import UIUx from "./UIUx";
import WebDevelopment from "./WebDevelopment";
 "./WebDevelopment";

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
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2"
            >
              <Branding />
              <SocialMedia />
              <UIUx />
              <WebDevelopment />
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

          {/* UI/UX DESIGNING */}
          {activeCategory === "Ui/Ux Designing" && (
            <motion.div
              key="uiux"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <UIUx />
            </motion.div>
          )}

          {/* WEB DEVELOPMENT */}
          {activeCategory === "Web Development" && (
            <motion.div
              key="webdev"
              variants={slideUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <WebDevelopment />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MiddlePortfolio;