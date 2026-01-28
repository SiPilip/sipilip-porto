import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center pt-10 pb-20 lg:pt-0 lg:pb-0 relative"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div
          className="flex-1 flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left animate-float"
          style={{ animationDuration: "4s" }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium tracking-wider text-primary uppercase">
                Available for work
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-lg md:text-xl font-light">
                Hello, I am Philifs Bryan Sipahutar
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                Full-Stack{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#eecf8f]">
                  MERN
                </span>{" "}
                Developer
              </h1>
            </div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body border-l-2 border-primary/20 pl-4 lg:pl-6 text-left">
              Blending modern engineering with cultural elegance. I transform
              complex problems into sophisticated, user-friendly web
              applications featuring robust architecture and elegant design
              patterns.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
            <button className="w-full sm:w-auto px-8 h-12 bg-primary text-background-dark font-bold rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(199,161,92,0.39)]">
              <span>Let's Collaborate</span>
              <span className="material-symbols-outlined text-[20px]">
                handshake
              </span>
            </button>
            <button className="w-full sm:w-auto px-8 h-12 border border-gray-600 hover:border-primary hover:text-primary text-gray-300 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 bg-background-dark/50 backdrop-blur-sm">
              <span>View Portfolio</span>
              <span className="material-symbols-outlined text-[20px]">
                visibility
              </span>
            </button>
          </div>
          <div className="pt-8 border-t border-gray-800/50 mt-4 flex flex-col items-center lg:items-start gap-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
              Tech Stack Arsenal
            </span>
            <div className="flex gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Icons would ideally use SVG components or images. Using text for now as in original HTML */}
              <div className="flex flex-col items-center gap-2 group">
                <span className="material-symbols-outlined text-3xl group-hover:text-[#4DB33D] transition-colors">
                  database
                </span>
                <span className="text-[10px] hidden group-hover:block transition-all">
                  MongoDB
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <span className="material-symbols-outlined text-3xl group-hover:text-white transition-colors">
                  dns
                </span>
                <span className="text-[10px] hidden group-hover:block transition-all">
                  Express
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <span className="material-symbols-outlined text-3xl group-hover:text-[#61DAFB] transition-colors">
                  code_blocks
                </span>
                <span className="text-[10px] hidden group-hover:block transition-all">
                  React
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <span className="material-symbols-outlined text-3xl group-hover:text-[#339933] transition-colors">
                  deployed_code
                </span>
                <span className="text-[10px] hidden group-hover:block transition-all">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end relative">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] border border-primary/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>
          <div className="relative z-10 w-full max-w-[400px] lg:max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-20"></div>
            <img
              alt="Philifs Bryan Sipahutar"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAOoo1TSIzQvo2GEA6D7IS1e98D_FYluc-XsTEVWSGPsj8foH68KUNoqOCFt1dIop5P3FzB8LHs66FLKzEB4kwQsLdhfBV50Bi_yvPNTdhod4i-4y2ajvlaq6PGkGM4q1HNCpJg6WNk7qmqI4FNF5CA-sGDhQGJRee7IzEOSZpZ-CsQWegAgRW2FXW2J301Oa1nx6tpS45g2BDndjZDTmVEXJrM4C_dKvMCKdqC1Zk0iVMtj1ukfiDurDXr_-4jzoohOFQfr0DwX0"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-background-dark/90 backdrop-blur-md rounded-xl border border-primary/20 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Verified Expert
                  </p>
                  <p className="text-xs text-gray-400">
                    5+ Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce opacity-50 z-20">
        <span className="text-[10px] uppercase tracking-widest text-primary/80">
          Scroll Down
        </span>
        <span className="material-symbols-outlined text-primary">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
};

export default Hero;
