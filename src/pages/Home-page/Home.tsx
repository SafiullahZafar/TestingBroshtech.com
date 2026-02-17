import { useState, type FC } from "react"

const Home: FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  setMousePos({ x, y });
};

const handleMouseLeave = () => {
  setMousePos({ x: 0, y: 0 });
};

const getStyle = (intensity: number) => ({
  transform: `translate(${mousePos.x * intensity}px, ${mousePos.y * intensity}px)`,
  transition: "transform 0.2s ease-out",
});

  return (
    <section className="h-screen Height w-full bg-black text-white flex items-center max-md:items-center ml-3 lg:ml-16"
      onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
    >
      {/* MAIN WRAPPER */}
      <div
        className="
          flex flex-col lg:flex-row
          items-center
          justify-between
          max-w-7xl mx-auto w-full
          px-4
          lg:pl-8 lg:pr-2
          xl:pl-5 xl:pr-6
          2xl:pl-8
          pt-20 lg:pt-10
          gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex-1
             lg:text-left
            z-10 left-content
          "
        >
          <h1
            className="
              text-[35px] sm:text-[42px] lg:text-[51px]
              leading-tight z-30
              tracking-tight px-0 lg:px-4 title
            "
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
          >
            Hi i’am brosh
            <span className="block">Your Web & Software</span>
            <span className="block">Builder</span>
          </h1>

          {/* STARS */}
          <div className="flex justify-start z-30 lg:justify-start mt-1 lg:-space-x-6 -space-x-2 stars">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/Star 1.png"
                alt="star"
                className="w-[61px] h-[64px] max-md:w-[44px] max-md:h-[46px]"
              />
            ))}
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              text-[15px] sm:text-[16px]
              w-full z-30
              leading-tight
              mt-1 px-0 lg:px-5
              mx-auto lg:mx-0 desc
            "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            I design and build reliable, high-performance web applications and software systems with clean architecture, modern technologies, and long-term scalabilitty in mind.
          </p>

          {/* BUTTON */}
          <div className="flex Left justify-start lg:justify-start mt-6 ml-2 lg:ml-4 button-wrapper">
            <button
              className="
                flex Botton items-center gap-1
                rounded-lg
                font-medium 
                px-1 py-1
                md:px-3 md:py-2
                transition-opacity
                hover:opacity-90
              "
              style={{
                fontFamily: "Inter, sans-serif",
                background: `
                  linear-gradient(110deg, rgb(8, 134, 84), rgb(8, 59, 39) 93%),
                  url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Schedule a Free Consultation
              <img
                src="/character.png"
                className="h-7 w-8"
                alt="icon"
              />
            </button>
          </div>
        </div>

        {/* RIGHT VIDEO */}
       <div
  className="
    relative
    flex-shrink-0
    w-full
    sm:w-[360px] md:w-[420px]
    lg:w-[520px] xl:w-[620px] 2xl:w-[700px]
    h-[260px] sm:h-[320px] md:h-[420px]
    lg:h-[520px] xl:h-[620px] 2xl:h-[700px]
    mx-auto lg:mx-0
    mt-12 lg:mt-0 video
  "
>
  {/* --- Floating Labels Start --- */}
  
  {/* Top Left Label */}
  <div
  className="absolute top-[30%] left-[-5%] z-10"
  style={getStyle(40)}
><a href="/portfolio">
    <span className="bg-white/15 text-white hidden sm:block hover:bg-[#064e08] hover:text-white px-2 py-1 rounded-md shadow-lg text-sm md:text-sm">
      Web Development
    </span>
    </a>
  </div>

  {/* Middle Left Label */}
  <div
  className="absolute bottom-[20%] left-[2%] z-10"
  style={getStyle(-60)}
> <a href="/portfolio">
    <span className="bg-white/15 text-white hidden sm:block hover:bg-[#064e08] hover:text-white px-2 py-1 rounded-md shadow-lg text-sm md:text-sm">
      Social Media
    </span>
    </a>
  </div>

  {/* Right Side Label */}
  <div
  className="absolute top-[50%] right-[9%] z-10"
  style={getStyle(30)}
>
  <a href="/portfolio">
    <span className="bg-white/15 text-white hidden sm:block hover:bg-[#064e08] hover:text-white px-2 py-1 rounded-md shadow-lg text-sm md:text-sm">
      Branding
    </span>
    </a>
  </div>

  {/* --- Video Component --- */}
  <video
    src="/character animation final_2.mp4"
    className="w-full h-full object-cover rounded-lg"
    autoPlay
    muted
    playsInline
    controls={false}
    loop={false}
  />
</div>
      </div>

      {/* CUSTOM CSS */}
      <style>{`
        .desc {
          width: 100% !important;
          max-width: 100% !important;
        }

        @media (max-width: 767px) {
          .left-content {
            display: contents !important;
          }
          .title {
            order: 1 !important;
            right: 50px !important;
            position: relative !important;
          }
          .video {
            order: 2 !important;
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
            height: auto !important;
            width: 600px !important; /* smaller like in image */
            top: -30px !important;
            position: relative !important;
          }
          .stars {
            order: 3 !important;
            justify-content: center !important;
            margin-top: 0.5rem !important; 
          }
          .desc {
            order: 4 !important;
            margin-top: 0.5rem !important;
            font-size: 0.85rem !important;
            line-height: 1.3 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            width: 100% !important; /* <-- ADDED */
            max-width: 100% !important; /* <-- ADDED */
          }
          .button-wrapper {
            order: 5 !important;
            margin-top: 1.5rem !important;
            justify-content: center !important;
          }
          button {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
          }
          button img {
            height: 1.25rem !important;
            width: 1.5rem !important;
          }
          /* Wrapper */
          .flex.flex-col.lg\\:flex-row {
            padding-top: 4rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            gap: 0 !important; /* controlled by orders */
          }
          /* Section */
          section {
            margin-left: 0 !important;
            padding: 0 0.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .title {
            top: -15px !important;
            right: 41px !important;
            position: relative !important;
            font-size: 1.6rem !important;
          }
          .desc {
            font-size: 0.8rem !important;
            top: -169px !important;
            right: 26px !important;
            position: relative !important;
            width: 310px !important; /* <-- changed */
          }
          .Botton {
            font-size: 0.8rem !important;
            top: -176px !important;
            position: relative !important;
            width: 240px !important;
          }
          .Left {
          margin-left: 0 !important;  
          padding: 0 !important;
          right: 47px !important;
          position: relative !important;
          }
          .Height{
            height: 600px !important;
            top: 117px !important;
            position: relative !important;
            }
          .video {
            width: 550px !important;
            top: -63px !important;
            right: 19px !important;
            position: relative !important;
          }
          .stars img {
            top: -160px !important;
            position: relative !important;
            width: 32px !important;
            height: 36px !important;
            right: 110px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
