import type { FC } from "react";

const Home: FC = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white flex items-center max-md:items-center ml-3 lg:ml-16">
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
            flex-1 max-w-xl
            text-center lg:text-left
            z-10
          "
        >
          <h1
            className="
              text-[35px] sm:text-[42px] lg:text-[51px]
              leading-tight
              tracking-tight px-0 lg:px-4
            "
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
          >
            Hi i’am brosh
            <span className="block">Your Web & Software</span>
            <span className="block">Builder</span>
          </h1>

          {/* STARS */}
          <div className="flex justify-center lg:justify-start mt-1 lg:-space-x-6">
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
              leading-snug
              mt-1 px-0 lg:px-5
              max-w-lg
              mx-auto lg:mx-0 
            "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We craft high-performing websites and digital solutions that blend
            strategy, design, and technology — built for where your business is
            going next.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start mt-6 ml-2 lg:ml-4">
            <button
              className="
                flex items-center gap-3
                px-6 py-3
                rounded-lg
                font-medium 
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
            flex-shrink-0
            w-full
            sm:w-[360px] md:w-[420px]
            lg:w-[520px] xl:w-[620px] 2xl:w-[700px]

            h-[260px] sm:h-[320px] md:h-[420px]
            lg:h-[520px] xl:h-[620px] 2xl:h-[700px]

            mx-auto lg:mx-0
            mt-12 lg:mt-0
          "
        >
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
    </section>
  );
};

export default Home;
