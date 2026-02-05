import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

const CLOSED_HEIGHT = 110; // 🔒 height before opening
const OPEN_HEIGHT = 220;   // 🔓 height after opening (same for all)

const WhyChooseUs: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const accordionRef = useRef<HTMLDivElement>(null);

    const points = [
        {
            title: 'Custom Web Platforms & Scalable Systems',
            desc: 'At BroshTech, We Help Businesses Grow With Powerful Digital Solutions, Combining Creativity, Technology, And Strategy.',
        },
        {
            title: 'Partner For Long-Term Products',
            desc: 'Our Client-Focused Approach Ensures Scalable Results, Strong Online Presence, And Long-Term Success From Planning To Execution.',
        },
        {
            title: 'Top-Rated Web & Digital Solutions Agency',
            desc: 'We pride ourselves on delivering industry-leading results that empower your brand to lead the market.',
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
                setOpenIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center bg-black w-full min-h-screen px-6 py-20 overflow-x-hidden select-none">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-11 items-start">

                {/* Left side */}
                <div className="w-full lg:flex-[0.9] flex flex-col justify-between py-2 lg:-mt-10 lg:-mr-14">
                    <h2
                        className="text-[30px] md:text-[47px] text-white leading-[1.0] tracking-tight mb-3 font-extrabold"
                    >
                        Why Choose <br />
                        <span className="bg-[#0e3025] px-6 py-1.5 rounded-sm inline-block my-2">
                            BroshTech
                        </span>
                        <br /> Your Digital Growth <br /> Partner?
                    </h2>
                    {/* Divider */}
                    <div className="text-white tracking-[0.1em] md:mb-4 text-xl font-bold opacity-90">
                        -----------------------------------
                    </div>
                    <p className="text-white text-[17px] leading-tight max-w-[463px]">
                        At BroshTech, We Help Businesses Grow With Powerful Digital Solutions,
                        Combining Creativity, Technology, And Strategy. Our Client-Focused
                        Approach Ensures Scalable Results, Strong Online Presence, And
                        Long-Term Success From Planning To Execution.
                    </p>
                </div>

                {/* Right side */}
                <div
                    ref={accordionRef}
                    className="w-full lg:flex-[1.1] flex flex-col gap-7 lg:-mt-10"
                >
                    {points.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="w-full rounded-[15px] overflow-hidden transition-all duration-500 ease-in-out"
                                style={{
                                    height: isOpen ? OPEN_HEIGHT : CLOSED_HEIGHT, // 🔥 THIS IS THE KEY
                                    backgroundColor: isOpen ? '#0b3326' : '#071d17',
                                    border: '1.5px solid #16ff88',
                                    boxShadow: isOpen
                                        ? '0 0 25px rgba(22,255,136,0.25)'
                                        : 'none',
                                }}
                            >
                                {/* Header */}
                                <div
                                    className="flex justify-between items-center px-7 h-[110px] cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-white font-bold text-[18px] md:text-[22px] pr-6 leading-tight">
                                        {item.title}
                                    </span>
                                    <span className="text-[#16ff88] text-4xl font-light">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="px-7 pb-6">
                                    <div
                                        className={`transition-all duration-500 ease-in-out ${isOpen
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 translate-y-4'
                                            }`}
                                    >
                                        <p className="text-white/90 text-[14px] md:text-[16px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
