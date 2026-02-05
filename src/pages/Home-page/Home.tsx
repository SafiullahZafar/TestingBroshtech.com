import type { FC } from 'react';

const Home: FC = () => {
  return (
    <section className="min-h-screen w-full  text-white bg-black flex items-center max-md:items-start">
      <div
        className="
          flex items-center justify-center
          max-w-7xl mx-auto w-full
          flex-col lg:flex-row
          ml-25 mt-20
          gap-12 lg:gap-0
          relative
          overflow-visible
          translate-y-28
          lg:-translate-y-9
          max-md:ml-0
          max-md:mt-16
          max-md:px-4
        "
      >
        {/* LEFT */}
        <div
          className="
            flex-1 max-w-xl
            text-left sm:text-center lg:text-left
            z-50
            lg:-translate-x-2 2xl:translate-x-44

            max-md:text-center
            max-md:translate-x-0
          "
        >
          <h1
            className="
              text-[35px] sm:text-[42px] lg:text-[51px]
              leading-14 tracking-tight
              px-4 sm:px-0
            "
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
          >
            Hi i’am brosh
            <span className="block">Your Web & Software</span>
            <span className="block">Builder</span>
          </h1>

          {/* STARS */}
          <div className="flex justify-center lg:justify-start lg:-space-x-6 leading-tight">
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
          <div
            className="
              text-[15px] sm:text-[16px]
              leading-tight
              mt-4
              lg:mt-0
              mx-auto lg:mx-4
              max-w-lg
            "
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
          >
            <p className="md:w-[390px] max-md:w-full">
              We craft high-performing websites and digital solutions that blend
              strategy, design, and technology — built for where your business is going next.
            </p>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start mt-6">
            <button
              className="flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90"
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
              <img src="/character.png" className="h-7 w-8" alt="icon" />
            </button>
          </div>
        </div>

        {/* RIGHT – VIDEO */}
        <div
          className="
            flex-shrink-0 w-full
            sm:w-[360px] md:w-[420px]
            lg:w-[512px] xl:w-[650px] 2xl:w-[700px]
            h-[260px] sm:h-[320px] md:h-[420px]
            lg:h-[512px] xl:h-[600px] 2xl:h-[700px] -translate-y-30

            lg:translate-x-28 xl:translate-x-[79px] 2xl:translate-x-36
            lg:translate-y-[-46px]

            max-md:translate-x-0
            max-md:mt-12
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
