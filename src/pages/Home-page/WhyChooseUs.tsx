import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

const WhyChooseUs: FC = () => {
  const getHeights = () => {
    if (window.innerWidth <= 480) {
      return { closed: 55, open: 135 };
    }
    if (window.innerWidth <= 580) {
      return { closed: 65, open: 145 };
    }
    if (window.innerWidth <= 768) {
      return { closed: 95, open: 190 };
    }
    return { closed: 110, open: 220 };
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [heights, setHeights] = useState(getHeights());

  const points = [
    {
      id: 'custom-web',
      title: 'Custom Web Platforms & Scalable Systems',
      desc: 'At BroshTech, We Help Businesses Grow With Powerful Digital Solutions, Combining Creativity, Technology, And Strategy.',
    },
    {
      id: 'partner-long',
      title: 'Partner For Long-Term Products',
      desc: 'Our Client-Focused Approach Ensures Scalable Results, Strong Online Presence, And Long-Term Success From Planning To Execution.',
    },
    {
      id: 'top-rated',
      title: 'Top-Rated Web & Digital Solutions Agency',
      desc: 'We pride ourselves on delivering industry-leading results that empower your brand to lead the market.',
    },
  ];

  useEffect(() => {
    const resize = () => setHeights(getHeights());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accordionRef.current && !accordionRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleAccordion = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="why-container" aria-labelledby="why-title-id">
      <div className="why-wrapper">

        {/* LEFT */}
        <div className="why-left relative">
          <h2 className="why-title">
            Why Choose <br />
            <span className="why-highlight">BroshTech</span><br />
            Your Digital Growth <br /> Partner?
          </h2>

          <div className="why-divider">
            {window.innerWidth < 768 ? "------------------" : "-------------------------------------------"}
          </div>

          <p className="why-desc">
            {window.innerWidth < 450
              ? `At BroshTech, We Help Businesses Grow With Powerful Digital Solutions, Combining Creativity, Technology, And Strategy.`
              : `At BroshTech, We Help Businesses Grow With Powerful Digital Solutions, Combining Creativity, Technology, And Strategy. Our Client Focused Approach Ensures Scalable Results, Strong Online Presence, And Long Term Success From Planning To Execution.`}
          </p>
        </div>

        {/* RIGHT */}
        <div ref={accordionRef} className="why-right relative">
          {points.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="accordion-box"
                style={{
                  height: isOpen ? heights.open : heights.closed,
                  background: isOpen ? "#0b3326" : "#0e3025",
                }}
              >
                {/* Header */}
                <button
                  type="button"
                  className="accordion-header w-full text-left flex justify-between items-center"
                  aria-expanded={isOpen}
                  aria-controls={`content-${item.id}`}
                  id={`header-${item.id}`}
                  onClick={() => toggleAccordion(i)}
                >
                  <span className="accordion-title">{item.title}</span>
                  <span className="accordion-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Body */}
                <div
                  id={`content-${item.id}`}
                  role="region"
                  aria-labelledby={`header-${item.id}`}
                  className={`accordion-body Font ${isOpen ? "open" : ""}`}
                  hidden={!isOpen}
                >
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .why-container {
          background: black;
          height:auto;
          padding: 6rem 2rem;
          display: flex;
          justify-content: center;
          overflow-x: hidden;
        }

        .why-wrapper {
          max-width: 1200px;
          width: 100%;
          display: flex;
          gap: 3rem;
        }

        .why-left { flex: 1; }
        .why-right { flex: 1.05; display: flex; flex-direction: column; gap: 1.1rem; }

        .why-title {
          font-size: 47px;
          color: white;
          font-weight: 800;
          line-height: 1;
        }

        .why-highlight {
          background: #0e3025;
          padding: 6px 22px;
          display: inline-block;
        }

        .why-divider {
          color: white;
          margin: 1rem 0;
          letter-spacing: 0.01em;
          font-size: 24px;
          font-weight: 700;
          top: -16px;
          position: relative;
        }

        .why-desc {
          color: white;
          font-size: 17px;
          max-width: 460px;
          top: -30px;
          position: relative;
        }

        .accordion-box {
          border: 1.5px solid #16ff88;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        /* CENTER ALIGN TEXT & ICON */
        .accordion-header {
          height: 110px;
          padding: 0 1.4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .accordion-title {
          color: white;
          font-size: 22px;
          font-weight: 700;
          display: flex;
          align-items: center;
        }

        .accordion-icon {
          color: #16ff88;
          font-size: 38px;
          display: flex;
          align-items: center;
        }

        .accordion-body {
          opacity: 0;
          transform: translateY(8px);
          transition: 0.3s;
          padding: 0 1.4rem;
        }

        .accordion-body.open {
          opacity: 1;
          transform: translateY(0);
        }

        .accordion-body p {
          color: rgba(255,255,255,0.9);
          font-size: 16px;
        }

        /* ===== TABLET (layout SAME) ===== */
        @media (max-width: 768px) {
          .why-container { padding: 4rem 1.5rem; height: auto !important;}
          .why-wrapper { gap: 2rem; }
          .why-title { font-size: 36px; }
          .why-desc { font-size: 15px; }
          .accordion-header { height: 92px; }
          .accordion-title { font-size: 18px; }
          .accordion-icon { font-size: 30px; }
          .accordion-body p { font-size: 14px; }
        }

        @media (max-width: 580px) {
          .why-container { padding: 3rem 1rem; height: auto !important; top: 15px !important; position: relative !important;}
          .why-wrapper { gap: 1.5rem; }
          .why-divider { top: -18px !important; font-size: 16px !important; position: relative !important; }
          .why-title { font-size: 20px !important; }
          .why-desc { font-size: 9px !important; top: -30px; position: relative !important;}
          .why-highlight { padding: 4px 14px; }
          .accordion-header { height: 61px; padding: 0 1rem; }
          .accordion-title { font-size: 9px; display: flex; align-items: center; }
          .accordion-icon { font-size: 16px; display: flex; align-items: center; }
          .accordion-body p { font-size: 8.25px !important; }
        }

        @media (max-width: 420px) {
          .why-container { padding: 3rem 1rem; height: auto !important; }
          .why-wrapper { gap: 1.5rem; }
          .why-divider { font-size: 14px !important; top: -18px !important; position: relative !important; }
          .why-title { font-size: 20px !important; }
          .why-desc { font-size: 9px !important; top: -30px; position: relative !important;}
          .why-highlight { padding: 4px 14px; }
          .accordion-header { height: 52px; padding: 0 1rem; }
          .accordion-title { font-size: 9px; display: flex; align-items: center; }
          .accordion-icon { font-size: 15px; display: flex; align-items: center; }
          .accordion-body p { font-size: 8.25px !important; }
        }

        @media (min-width: 380px) and (max-width: 480px) {
          .accordion-header { height: 52px; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;