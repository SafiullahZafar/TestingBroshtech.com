export default function Mastermind() {
    return (
        <div className=" bg-black text-white flex items-center justify-center px-4 py-5">
            <div className="max-w-7xl w-full mx-auto mt-8">
                {/* Header with border */}
                <div className="mt-4 md:mt-12 text-center ml-0 md:ml-4" style={{ fontFamily: "GeneralSans, sans-serif", fontWeight: 800 }}>
                    <h1 className="
  font-bold 
  text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] 
  leading-[90%] tracking-tight pt-6
  bg-gradient-to-b 
  from-white 
  via-[#dcdcdc] 
  to-[#999999]
  bg-clip-text text-transparent
">
                        THE MASTER MIND
                    </h1>


                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[23px] mt-2 sm:mt-0 uppercase tracking-wider text-white font-medium ml-0 md:ml-3 px-4 md:px-0">
                        AT THE CORE OF BROSHTECH IS A CLEAR{" "}
                        TECHNICAL
                        VISION LED BY ITS FOUNDER AND CEO.
                    </p>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center lg:items-center justify-items-center mt-8 lg:mt-0">
                    {/* Left text box */}
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl w-full max-w-xs lg:mb-60 lg:ml-40 lg:w-62 px-4 py-2" style={{ fontFamily: "Open Sans, sans-serif" }}
                    >
                        <p className="text-[16px] lg:text-[18px] leading-6 text-left">
                            Every system we build, every product we design, and every solution we deliver follows a single principle
                        </p>
                    </div>


                    {/* Center image */}
                    <div className="flex justify-center">
                        <div className="relative w-[280px] h-[380px] lg:w-[320px] lg:h-[500px]">
                            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                                <img
                                    src="./leader.webp"
                                    alt="CEO"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right text box */}
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl w-full max-w-xs lg:w-46 flex items-center justify-center lg:mr-60 lg:mt-75">
                        <p className="text-[16px] lg:text-[18px] leading-6 font-medium text-left px-3.5 py-2"
                            style={{ fontFamily: "Open Sans, sans-serif" }}>
                            Build with purpose, structure, and long term thinking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}