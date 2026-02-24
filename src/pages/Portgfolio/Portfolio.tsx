import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import TopPortfolio from './TopPortfolio';
import MiddlePortfolio from './Middle';

const Portfolio = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Branding");

  // Read category from URL query parameter or location state
  useEffect(() => {
    const queryCategory = searchParams.get('category');
    if (queryCategory) {
      setActiveCategory(queryCategory);
    } else if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [searchParams, location.state]);

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