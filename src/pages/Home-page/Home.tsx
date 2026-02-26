import { useState, type FC } from "react"
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  setMousePos({ x, y });
};
const navigate = useNavigate();

const openCategory = (category: string) => {
  navigate(`/portfolio?category=${encodeURIComponent(category)}`);
};
const handleMouseLeave = () => {
  setMousePos({ x: 0, y: 0 });
};

const getStyle = (intensity: number) => ({
  transform: `translate(${mousePos.x * intensity}px, ${mousePos.y * intensity}px)`,
  transition: "transform 0.2s ease-out",
});

  return (
    <section className=" Height w-full  bg-black text-white flex items-center max-md:items-center ml-0 lg:ml-0"
      onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
    >
      {/* MAIN WRAPPER */}
      <div
        className="
          flex flex-col lg:flex-row md:flex-row
          lg:items-center md:items-center items-start
          justify-between
          max-w-[100vw] mx-auto w-full
          px-4
          lg:pl-0 lg:pr-0
          xl:pl-0 xl:pr-0
          2xl:pl-0
          pt-25 lg:pt-1 Aligment
          gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex-1
             lg:text-left
            z-10 left-content
            lg:px-7 py-3
          "
        >
          <h1
            className="
              text-[24px] sm:text-[28px] md:text-[39px] lg:text-[51px]
              leading-tight z-30
              tracking-tight px-4 lg:px-4 md:px-5 title TopforHome
            "
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
          >
            Hi I’am BROSH
            <span className="block">Your Web & Software</span>
            <span className="block">Builder</span>
          </h1>

          {/* STARS */}
          <div className="flex justify-start z-30 towardstars  lg:justify-start mt-1 lg:-space-x-6 md:-space-x-7 sm:-space-x-4 -space-x-4  stars">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/Star 1.png"
                alt="star"
                className="w-[61px] TopforHome h-[64px] max-md:w-[44px] max-md:h-[46px]"
              />
            ))}
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              text-[13px] TopforHome sm:text-[16px]
              w-full z-30
              leading-tight
              mt-1 px-0 lg:px-5 md:px-5
              mx-auto lg:mx-0 desc towarddec
            "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            I design and build reliable, high-performance web applications and software systems with clean architecture, modern technologies, and long-term scalabilitty in mind.
          </p>

          {/* BUTTON */}
          <div className="flex  TopforHomeLeft toward justify-start md:px-2.5 lg:px-0 lg:justify-start mt-6 ml-2 lg:ml-4 button-wrapper">
            <button
              className="
                flex Botton buttons items-center gap-1
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
    sm:w-[360px] md:w-[360px]
    lg:w-[520px] xl:w-[620px] 2xl:w-[700px]
    h-[260px] sm:h-[320px] md:h-[380px]
    lg:h-[520px] xl:h-[620px] 2xl:h-[700px]
    mx-auto lg:mx-0 
    mt-12 md:-mt-8 lg:mt-4 video
  "
>
  {/* lg:left-[2%] sm:left-[0.5%] */}
  {/* --- Floating Labels Start --- */}
  
  {/* Top Left Label */}
 <div
  className="absolute top-[23%] lg:top-[30%] Development z-10 cursor-pointer"
  style={getStyle(40)}
  onClick={() => openCategory("Web Development")}
>
  <span className="bg-white/15  text-white hover:bg-[#064e08] hover:text-white  px-2 py-1 rounded-md shadow-lg text-sm md:text-sm">
    Web Development
  </span>
</div>

{/* Social Media */}
<div
  className="absolute bottom-[13%] lg:bottom-[20%] socialmedia left-[2%] z-10 cursor-pointer"
  style={getStyle(-60)}
  onClick={() => openCategory("Social Media")}
>
  <span className="bg-white/15 text-white hover:bg-[#064e08] hover:text-white px-2 py-1 rounded-md shadow-lg text-sm md:text-sm">
    Social Media
  </span>
</div>

{/* Branding */}
<div
  className="absolute top-[50%] right-[0%] Branding lg:top-[50%] lg:right-[9%] z-10 cursor-pointer"
  style={getStyle(30)}
  onClick={() => openCategory("Branding")}
>
  <span className="bg-white/15 text-white hover:bg-[#064e08] hover:text-white px-2 py-1 rounded-md shadow-lg text-sm md:text-sm">
    Branding
  </span>
</div>
  {/* --- Video Component --- */}
  <video
    src="/character animation final_2.mp4"
    className="w-full h-full Motion object-cover rounded-lg"
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
          margin: 0;
          width: 40vw !important;
          max-width: 100% !important;
        }
          @media (min-width: 1020px) and (max-width: 1250px) {
          .Aligment {
            padding-top: calc(var(--spacing) * 20) !important;
          }
      }
        @media (max-width: 767px) {
          .left-content {
            display: contents !important;
          }
          .title {
            order: 1 !important;
            right: 0 !important;
            .Paddle {
    padding-inline: calc(var(--spacing) * 20) /* 0rem = 0px */;
}
            top:3vh !important;
            position: relative !important;
          }
          .video {
            order: 2 !important;
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
            height: auto !important;
            width: 355px !important;
            height: 388px !important;
            top: -30px !important;
            position: relative !important;
          }
            .Development{
             left:9vw !important;
            }
            .Branding{
             right:-11vw !important;
            }
            .socialmedia{
             left:9vw !important;
            }
          .stars {
          
            order: 3 !important;
            justify-content: start !important;
            margin-top: -3rem !important; 
          }
          .desc {
            order: 4 !important;
            margin-top: 0.5rem !important;
            font-size: 0.70rem !important;
            line-height: 1.3 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            
            width: 60vh !important; /* <-- ADDED */
            max-width: 100% !important; /* <-- ADDED */
          }
         
          .button-wrapper {
            order: 5 !important;
            margin-top: 1.5rem !important;
            justify-content: center !important;
          }
          buttons {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
            top:10px !important;
          }
          button img {
            height: 1.25rem !important;
            width: 1.5rem !important;
            position: relative !important;
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
          //        .towarddec{
          //   top:-140px !important;
          //   position: relative !important;
          // }
          //        .toward{
          //   top:-110px !important;
          //   position: relative !important;
          // }
          //        .towardstars{
          //   top:0px !important;
          //   position: relative !important;
          // }
             .Motion{
             left:9vw !important;
             position: relative !important;
             }
        }

        @media (max-width: 480px) {
        // .TopforHome{
        // left:12px
        // }
        .TopforHome{
        margin:0px !important;
        padding:0px !important;
        left:0px !important;
        right:0px !important;
        }
          .title {
            top: 20px !important;
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
             .Development{
             left:8vw !important;
            }
            .Branding{
             right:-9vw !important;
            }
            .socialmedia{
             left:8vw !important;
            }
             .Motion{
             left:9vw !important;
             position: relative !important;
             }
          .Botton {
            font-size: 0.8rem !important;
            top: -9px !important;
            left:-11px !important;
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
            // height: 600px !important;
            // top: 117px !important;
            position: relative !important;
            }
          .video {
            width: 295px !important;
            height: 308px !important;
            top: -23px !important;
            left: 10x !important;
            position: relative !important;
          }
            .stars {
            right:9px !important;
            position: relative !important;
            margin-top: -1.5rem !important; 
          }
          .stars img {
            position: relative !important;
            width: 32px !important;
            height: 36px !important;
            right: 110px !important;
          }
                .towarddec{
            top:0px !important;
            position: relative !important;
          }
                 .toward{
            top:0px !important;
            position: relative !important;
          }
                 .towardstars{
            top:0px !important;
            padding:0px !important;
            position: relative !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
