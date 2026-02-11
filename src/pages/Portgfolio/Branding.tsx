import React from 'react';

type BrandingProject = {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  path: string;
};

const brandingData: BrandingProject[] = [
  { id: 1, title: "Backlot", subTitle: "Brand Design", image: "/branding1.png", path: "/branding1" },
  { id: 2, title: "Dome AI", subTitle: "Brand Design", image: "/branding2.jpg", path: "/branding2" },
  { id: 3, title: "Sargodha", subTitle: "Brand Design", image: "/branding3.jpg", path: "/branding3" },
];

const Branding: React.FC = () => {
  return (
    <div className="w-full animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {brandingData.map((project) => (
          <a
            href={project.path}
            key={project.id}
            className="block cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative group overflow-hidden bg-[#111] w-full h-[500px] md:h-[650px] lg:h-[800px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-10 md:p-14">
                <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[2px] bg-[#0d7411]"></span>
                  <p className="text-[#0d7411] text-xl md:text-2xl font-bold uppercase tracking-widest">
                    {project.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Branding;
