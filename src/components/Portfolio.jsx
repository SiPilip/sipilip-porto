import React from "react";
import portfolioData from "../data/portfolio.json";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section
      className="flex-1 flex flex-col items-center w-full px-4 sm:px-6 md:px-10 py-8 md:py-24 bg-background-light dark:bg-background-dark transition-colors duration-300"
      id="work"
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest">
              Portofolio
            </p>
            <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Karya Pilihan
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed mt-2">
              Beragam solusi digital yang telah terimplementasi di berbagai
              instansi dan bisnis. Berfokus pada fungsionalitas, keamanan, dan
              pengalaman pengguna yang optimal.
            </p>
          </div>
        </div>
        {/* Filter Tabs (Visual only for now) */}
        <div
          className="flex flex-wrap gap-6 md:gap-10 border-b border-gray-200 dark:border-white/10 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button className="group flex flex-col items-center justify-center border-b-[3px] border-primary pb-3 px-2">
            <span className="text-gray-900 dark:text-white text-sm font-bold tracking-[0.015em]">
              Semua Proyek
            </span>
          </button>
          <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-gray-300 dark:hover:border-white/10 transition-all pb-3 px-2">
            <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-sm font-medium tracking-[0.015em]">
              Aplikasi Web
            </span>
          </button>
          <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-gray-300 dark:hover:border-white/10 transition-all pb-3 px-2">
            <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-sm font-medium tracking-[0.015em]">
              Mobile
            </span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-white dark:bg-charcoal rounded-xl overflow-hidden border border-gray-200 dark:border-[#40392b] shadow-md dark:shadow-none hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(200,163,92,0.15)] hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 dark:from-[#121212] z-10"></div>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.heroImage}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    {project.client && (
                      <div className="flex items-center gap-1 mb-2">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          business_center
                        </span>
                        <span className="text-gray-400 dark:text-gray-300 text-xs font-bold uppercase tracking-wider">
                          {project.client}
                        </span>
                      </div>
                    )}
                    <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={`/project/${project.slug}`}
                    className="size-8 rounded-full border border-gray-200 dark:border-[#40392b] flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-gray-100 dark:hover:bg-[#40392b] group-hover:text-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">
                      arrow_outward
                    </span>
                  </Link>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded text-gray-600 dark:text-gray-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded text-gray-600 dark:text-gray-400 text-xs font-mono">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
