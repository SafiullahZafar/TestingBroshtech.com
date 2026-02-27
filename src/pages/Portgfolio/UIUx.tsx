type UIProject = {
  id: number;
  name: string;
  role: string;
  image: string;
  link: string;
};

const uiData: UIProject[] = [
  {
    id: 1,
    name: "Saleem Enterprises",
    role: "Product Designer focused on intuitive user experiences",
    image: "/ui1.webp",
    link: "https://www.figma.com/proto/e0ZACWvNUx5WbwqFQc5iV8/ProvenPrepCenter?node-id=250-832",
  },
  // {
  //   id: 2,
  //   name: "Alex Morgan",
  //   role: "UI/UX Designer building modern interfaces",
  //   image: "/ui2.jpg",
  //   link: "https://www.figma.com/proto/YOUR_SECOND_LINK",
  // },
  // {
  //   id: 3,
  //   name: "Emma Stone",
  //   role: "Creative Designer for digital products",
  //   image: "/ui3.jpg",
  //   link: "https://www.figma.com/proto/YOUR_THIRD_LINK",
  // },
];


const UIUx = () => {
  return (
    <div className="w-full max-h-screen bg-black flex items-center justify-center lg:p-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        {uiData.map((item) => (
       <a
  key={item.id}
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="relative w-[280px] md:w-[420px] h-[420px] md:h-[600px] rounded-[1px] overflow-hidden group block"
>

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 duration-300"
            />

            {/* Glass Blur Overlay */}
            {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div> */}

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20">
                <h3 className="text-white text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {item.role}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-end mt-4">
                

                  <button className="bg-white text-black text-sm px-4 py-1 rounded-full font-medium hover:scale-105 transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* Outer Soft Shadow */}
            <div className="absolute inset-0 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] pointer-events-none"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UIUx;
