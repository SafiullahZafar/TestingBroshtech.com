import React from 'react';

type WebDevelopmentProject = {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  path: string;
};

const webDevData: WebDevelopmentProject[] = [
  { id: 1, title: "Dubai Travel", subTitle: "Web Development", image: "/webdevelopment1.jpeg", path: "https://got-dubai.vercel.app/" },
  { id: 2, title: "Bareeze Fashion", subTitle: "Web Development", image: "/webdevelopment2.png", path: "https://bareeze-store.vercel.app/" },
  { id: 3, title: "Waaris Clothing", subTitle: "Web Development", image: "/1.png", path: "https://www.waaris.store/" },
];

const WebDevelopment: React.FC = () => {
  return (
    <div className="w-full animate-in fade-in duration-1000 flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {webDevData.map((project) => (
            <a
              href={project.path}
              key={project.id}
              className="block cursor-pointer relative group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden bg-[#000] w-full h-[240px] md:h-[280px] lg:h-[320px]">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay - lighter to show more image */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" /> */}

                {/* Project Text - Bottom Center */}
                <div className="absolute bottom-0 left-0 lg:left-6 right-0 flex flex-col items-center p-5 md:p-6 text-center">
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tighter leading-none mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-6 h-[1.5px] bg-[#0d7411]"></span>
                    <p className="text-[#0d7411] text-xs md:text-sm font-bold uppercase tracking-widest">
                      {project.subTitle}
                    </p>
                  </div>
                </div>

                {/* 🔥 Click Me (Appears only on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="click-me-text text-white text-lg md:text-xl font-semibold animate-pulse-hover">
                    Click TO Explore
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Styles for Hover Animation */}
      <style>{`
        .animate-pulse-hover {
          animation: pulse-hover 5s infinite;
        }

        @keyframes pulse-hover {
          0% { transform: scale(1); opacity: 0.8; }
          25% { transform: scale(1.1); opacity: 1; }
          50% { transform: scale(1); opacity: 0.8; }
          75% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default WebDevelopment;