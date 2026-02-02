import type { FC } from 'react';

const Home: FC = () => {
  return (
    <section className="min-h-screen w-full text-white bg-black flex items-center">
      <div
        className="
          flex items-center justify-center
          max-w-7xl mx-auto w-full px-0 
          flex-col lg:flex-row ml-25 mt-20
          gap-12 lg:gap-0 
          relative
          overflow-hidden
        "
      >
        {/* Left Side */}
        <div className="flex-1 max-w-xl text-left sm:text-center lg:text-left z-10">
          <h1
            className="
              text-[35px] sm:text-[42px] lg:text-[44px] ml-0 md:ml-3
              leading-tight tracking-tight px-4 sm:px-0
            "
            style={{ fontFamily: "GeneralSans, sans-serif", fontWeight: 800 }}
          >
            Designing Digital
            <span className="block">Experiences That</span>
            <span className="block">Move Brands <br /> Forward</span>
          </h1>

          <div className="flex justify-center lg:justify-start mt-3">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="/Star 1.png" alt="star" className="w-[41px] h-[51px]" />
            ))}
          </div>

          <p
            className="
              mt-3 sm:mt-3 text-[15px] sm:text-[16px]
              leading-relaxed ml-4
              mx-3 lg:mx-4 
              max-w-lg
            "
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <h1 className='md:w-[390px]'>
            We craft high-performing websites and digital solutions that blend strategy, design, and technology — built for where your business is going next.
            </h1>
          </p>

          <div className="flex justify-start sm:justify-center lg:justify-start ml-4">
            <button
              className="mt-8 flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90"
              style={{
                fontFamily: "Open Sans, sans-serif",
                background: `
                  linear-gradient(110deg, rgb(8, 134, 84), rgb(8, 59, 39) 93%),
                  url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              Schedule a Free Consultation
              <img src="/character.png" className="h-7 w-8" alt="icon" />
            </button>
          </div>
        </div>

        {/* Right Side – VIDEO */}
        <div className="flex-shrink-0 w-full sm:w-[360px] md:w-[420px] lg:w-[512px] xl:w-[650px] 2xl:w-[700px] h-[300px] sm:h-[360px] md:h-[420px] lg:h-[512px] xl:h-[600px] 2xl:h-[700px] lg:translate-x-28 xl:translate-x-32 2xl:translate-x-36">
          <video
            src="/character animation final_2.mp4" // <-- apna video yaha lagao
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            muted
            playsInline
            controls={false}
            loop={false} // sirf ek dafa play
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
