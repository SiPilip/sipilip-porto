import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import portfolioData from "../data/portfolio.json";

// Helper map for Tech Stack icons/colors
const techConfig = {
  React: { icon: "code_blocks", color: "text-blue-500" },
  "Node.js": { icon: "terminal", color: "text-green-600" },
  MongoDB: { icon: "database", color: "text-green-500" },
  "Express.js": { icon: "dns", color: "text-gray-500 dark:text-white" },
  Mapbox: { icon: "map", color: "text-blue-400" },
  "Tailwind CSS": { icon: "style", color: "text-cyan-500" },
  Laravel: { icon: "code", color: "text-red-500" },
  "Vue.js": { icon: "code_blocks", color: "text-green-500" },
  "PHP Native": { icon: "php", color: "text-purple-500" },
  "CodeIgniter 4": { icon: "fire_hydrant", color: "text-orange-500" },
  Bootstrap: { icon: "style", color: "text-purple-600" },
  MySQL: { icon: "database", color: "text-blue-600" },
  PostgreSQL: { icon: "database", color: "text-blue-400" },
  Redis: { icon: "database", color: "text-red-500" },
  jQuery: { icon: "javascript", color: "text-blue-500" },
  "Next.js": { icon: "layers", color: "text-gray-800 dark:text-white" },
  Strapi: { icon: "api", color: "text-blue-600" },
  Golang: { icon: "code", color: "text-cyan-600" },
  default: { icon: "memory", color: "text-gray-500" },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background-dark text-gray-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
          <Link to="/" className="text-primary hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#40392b] bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
          <div className="flex items-center justify-between whitespace-nowrap">
            <Link
              to="/"
              className="flex items-center gap-4 text-gray-900 dark:text-white group"
            >
              <div className="size-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined !text-2xl">
                  arrow_back
                </span>
              </div>
              <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Kembali ke Portofolio
              </h2>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex mb-6 text-sm text-gray-500 dark:text-gray-400"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg mr-2">
                  home
                </span>
                Beranda
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-lg mx-1">
                  chevron_right
                </span>
                <span className="text-primary font-medium">
                  {project.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Heading & Actions */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                {project.title}
              </h1>
              <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded border border-primary/20">
                {project.year}
              </span>
            </div>
            {project.client && (
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">
                  business_center
                </span>
                {project.client}
              </div>
            )}
            <p className="text-gray-600 dark:text-[#beb29d] text-lg font-normal leading-normal max-w-2xl">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white dark:text-background-dark text-base font-bold leading-normal hover:bg-[#b08d4b] transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-xl">preview</span>
              <span>Pratinjau</span>
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 border border-primary text-primary text-base font-bold leading-normal hover:bg-primary/10 transition-all"
            >
              <span className="material-symbols-outlined text-xl">code</span>
              <span>Kode Sumber</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#40392b] bg-white dark:bg-surface-dark group mb-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-background-dark/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 dark:bg-surface-dark/90 backdrop-blur border border-gray-200 dark:border-[#40392b] rounded-lg p-3 flex items-center gap-3 shadow-lg">
            <div className="bg-primary/20 p-2 rounded-md text-primary">
              <span className="material-symbols-outlined">dashboard</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                Kategori
              </p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {project.category}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Description Section */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px flex-1 bg-gray-200 dark:bg-[#40392b]"></span>
                <h2 className="text-primary text-2xl font-bold tracking-tight">
                  Deskripsi Proyek
                </h2>
                <span className="h-px flex-3 bg-gray-200 dark:bg-[#40392b] w-12"></span>
              </div>
              <div className="text-gray-700 dark:text-[#e0dcd5] text-lg leading-relaxed space-y-4 whitespace-pre-line">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Features Section */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-gray-200 dark:bg-[#40392b]"></span>
                <h2 className="text-primary text-2xl font-bold tracking-tight">
                  Fitur Utama
                </h2>
                <span className="h-px flex-3 bg-gray-200 dark:bg-[#40392b] w-12"></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-surface-dark p-5 rounded-lg border border-gray-200 dark:border-[#40392b] hover:border-primary/50 transition-all shadow-sm dark:shadow-none flex items-start gap-4"
                  >
                    <div className="bg-primary/10 min-w-10 h-10 rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                        {feature}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Section */}
            {project.images && project.images.length > 0 && (
              <section data-aos="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px flex-1 bg-gray-200 dark:bg-[#40392b]"></span>
                  <h2 className="text-primary text-2xl font-bold tracking-tight">
                    Galeri
                  </h2>
                  <span className="h-px flex-3 bg-gray-200 dark:bg-[#40392b] w-12"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden border border-gray-200 dark:border-[#40392b] hover:border-primary/50 transition-all group shadow-sm dark:shadow-none"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#40392b] rounded-xl p-6 sticky top-24 shadow-lg dark:shadow-none"
              data-aos="fade-left"
            >
              <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-6 border-b border-gray-200 dark:border-[#40392b] pb-3">
                Tech Stack
              </h3>
              <div className="space-y-4">
                {project.techStack.map((stackName, idx) => {
                  const tech = techConfig[stackName] || techConfig.default;
                  return (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded bg-gray-50 dark:bg-[#1e2a22] flex items-center justify-center border border-gray-200 dark:border-[#40392b] transition-colors">
                        <span
                          className={`material-symbols-outlined ${tech.color}`}
                        >
                          {tech.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-sm">
                          {stackName}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
