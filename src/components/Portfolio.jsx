import React from "react";

const Portfolio = () => {
  return (
    <section
      className="flex-1 flex flex-col items-center w-full px-4 sm:px-6 md:px-10 py-8 md:py-24 bg-background-dark"
      id="work"
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest">
              Portfolio
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Selected Works
            </h1>
            <p className="text-gray-400 text-lg font-normal leading-relaxed mt-2">
              A collection of high-performance web and mobile applications built
              with the MERN stack. Focused on scalability, performance, and
              modern user experience.
            </p>
          </div>
        </div>
        {/* Filter Tabs (Visual only for now) */}
        <div
          className="flex flex-wrap gap-6 md:gap-10 border-b border-white/10 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button className="group flex flex-col items-center justify-center border-b-[3px] border-primary pb-3 px-2">
            <span className="text-white text-sm font-bold tracking-[0.015em]">
              All Projects
            </span>
          </button>
          <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-white/10 transition-all pb-3 px-2">
            <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium tracking-[0.015em]">
              Web Apps
            </span>
          </button>
          <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-white/10 transition-all pb-3 px-2">
            <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium tracking-[0.015em]">
              Mobile
            </span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Item 1 */}
          <div
            className="group relative flex flex-col bg-[#121212] rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(200,163,92,0.15)] hover:-translate-y-1"
            data-aos="fade-up"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60 z-10"></div>
              <img
                alt="Diskominfo Palembang"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1N7vbO7Mo2xuSmUB2EpbO8e5qLbQPgsfgxbJSYx9FK8gs0RHySmssT3b6iqIk_kWMbiZriy8CkK8kgPgKABGq9rw0Sc_VmxHCJocioP2JmvB7Q60xvQ_fjA9YBlU3n8ac8mSBQhkbytLOjz2luRiZKWu0n0pkBjXgz_nV0F7oImGfKv6d6vFfYr_s4nfigCb7ephM3DRcVcrn5n3bVxaYekdePvJfHTXtRYMquvA0Ivv-dS0YMiLGHRIDNU0lQuUCZpFjS_-YqRA"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Web App
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Diskominfo Palembang
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Government information portal optimization
                  </p>
                </div>
                <a
                  href="#"
                  className="size-8 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-gray-400 text-xs font-mono">
                  React
                </span>
                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-gray-400 text-xs font-mono">
                  Node.js
                </span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="group relative flex flex-col bg-[#121212] rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(200,163,92,0.15)] hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60 z-10"></div>
              <img
                alt="LPPM Unsri"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfnRkrqlgKiM4r6Gywg7BFcVJU8FZjmAVFVjCNMfZvfQExxK-qnIXi9z_GQD66L_rm8NLdwsKcYLJoTx5FIbMtyra3ZLwhu5YV2SuZBHExLdmBsFT6zpx3YlRvPHiYtle8MOk3qhiKJFoA21mS7K7u8BmZzwybwGAnRQ-fmKZejtIOUFUJQhSaM_rMy1PORGt338eXzqPpE8sO_xe_PBpg_4ONXmOGfKEXzTqNwRxqyW-wB2b48YMoF_PmdX094iX3zxKWtkyf6As"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Web System
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    LPPM Unsri
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Academic research management system
                  </p>
                </div>
                <a
                  href="#"
                  className="size-8 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-gray-400 text-xs font-mono">
                  MongoDB
                </span>
                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-gray-400 text-xs font-mono">
                  Express
                </span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className="group relative flex flex-col bg-[#121212] rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(200,163,92,0.15)] hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60 z-10"></div>
              <img
                alt="SIPAHADI Bengkulu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADWM1bb50zLHr1g6Fl4RxzicF9Evea8E8kSV99JKZyQ26yne9aQxZ2YhoYkAGDvLH8_VVLFMB5y-_1FLx-oDPDVNFln33ej9Nhn28k3FXRdwV-3NOl1_Mm5xnouTK2piDOeGMZCOfK21EwuUhj-vhN4sdPWylC2yVav1_Cn9ZK1xA320ht6oqepeLlQezpUG0ZMFoA0PPd3yQWAJ__ZxpYuQ1DKOkMLLoSpPc2PFiLtMAG5Jb46E8ThhVVXzRGxZseSF1QQ4qlPUY"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Visualization
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    SIPAHADI Bengkulu
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Regional visualization tool
                  </p>
                </div>
                <a
                  href="#"
                  className="size-8 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-gray-400 text-xs font-mono">
                  Mapbox
                </span>
                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-gray-400 text-xs font-mono">
                  React
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
