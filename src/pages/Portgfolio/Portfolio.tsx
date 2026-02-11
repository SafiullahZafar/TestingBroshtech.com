import { useState } from 'react';
import TopPortfolio from './TopPortfolio';
import MiddlePortfolio from './Middle';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-black min-h-screen">
      <TopPortfolio 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      {/* The Grid Section */}
      <MiddlePortfolio activeCategory={activeCategory} />
    </div>
  );
};

export default Portfolio;