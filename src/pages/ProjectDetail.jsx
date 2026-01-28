import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-[#1f1b14] dark:text-white">
      {/* Simplified Navbar for Detail Page (or import existing Navbar if adapted) */}
      <header className="sticky top-0 z-50 w-full border-b border-[#40392b] bg-background-dark/95 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
          <div className="flex items-center justify-between whitespace-nowrap">
            <Link to="/" className="flex items-center gap-4 text-white group">
              <div className="size-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined !text-2xl">
                  arrow_back
                </span>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Back to Portfolio
              </h2>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex mb-6 text-sm text-gray-400"
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
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-lg mx-1">
                  chevron_right
                </span>
                <span className="text-primary font-medium">
                  SIPAHADI Bengkulu
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
              <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                SIPAHADI Bengkulu
              </h1>
              <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded border border-primary/20">
                2023
              </span>
            </div>
            <p className="text-[#beb29d] text-lg font-normal leading-normal max-w-2xl">
              Sistem Pengelolaan Arsip Lembaga Pemasyarakatan — A comprehensive
              digital archive management system for correctional facilities.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal hover:bg-[#b08d4b] transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-xl">preview</span>
              <span>Live Preview</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 border border-primary text-primary text-base font-bold leading-normal hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined text-xl">code</span>
              <span>Source Code</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-[#40392b] bg-surface-dark group mb-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQOdt2Z69E58wHM0waDm5A98LMuf2IG-A00PZo_yoY8Hzkg8h-8iwOTTCeGcz-GCCi35YqphcqgziusRLYfnQhKKtwZE_m3AgYaBlF3NS4lg2XJHTDWwcyO5QMb_F7Lc4pjkx_Mz1KTr2lquTxaZcxiqXHVUooetl2ycsH4HPlGKjxxdVyG0JiFrUDYbl1Iu4peoKgiw8H1TEPeGC-clXtlEGZRt6P_xgv_XqGWyrTrFgkqdipr_3Pg3v3fPxxvU54qh9u8Uuecl4")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-surface-dark/90 backdrop-blur border border-[#40392b] rounded-lg p-3 flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-md text-primary">
              <span className="material-symbols-outlined">dashboard</span>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                Status
              </p>
              <p className="text-sm font-bold text-white">Production Ready</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <section data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px flex-1 bg-[#40392b]"></span>
                <h2 className="text-primary text-2xl font-bold tracking-tight">
                  Project Purpose
                </h2>
                <span className="h-px flex-3 bg-[#40392b] w-12"></span>
              </div>
              <div className="text-[#e0dcd5] text-lg leading-relaxed space-y-4">
                <p>
                  The Correctional Institution Archive Management System
                  (SIPAHADI) was conceptualized to solve the critical issue of
                  physical document degradation and slow retrieval times in
                  Bengkulu's correctional facilities.
                </p>
                <p>
                  Prior to this system, archive retrieval could take hours.
                  SIPAHADI digitizes the entire workflow, reducing retrieval
                  time to seconds while ensuring data integrity through strictly
                  role-based access controls.
                </p>
              </div>
            </section>

            <section data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-[#40392b]"></span>
                <h2 className="text-primary text-2xl font-bold tracking-tight">
                  Key Features
                </h2>
                <span className="h-px flex-3 bg-[#40392b] w-12"></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "shield_lock",
                    title: "Secure Access Control",
                    desc: "JWT authentication with role-based middleware for secure access.",
                  },
                  {
                    icon: "folder_managed",
                    title: "Digital Archiving",
                    desc: "Automated document scanning integration and metadata tagging.",
                  },
                  {
                    icon: "manage_search",
                    title: "Real-time Search",
                    desc: "Advanced search functionality using MongoDB indexing.",
                  },
                  {
                    icon: "analytics",
                    title: "Statistical Dashboard",
                    desc: "Visual analytics for prison population trends.",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-dark p-5 rounded-lg border border-[#40392b] hover:border-primary/50 transition-colors"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div
              className="bg-surface-dark border border-[#40392b] rounded-xl p-6 sticky top-24"
              data-aos="fade-left"
            >
              <h3 className="text-white text-xl font-bold mb-6 border-b border-[#40392b] pb-3">
                Tech Stack
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "database",
                    name: "MongoDB",
                    type: "NoSQL Database",
                    color: "text-green-500",
                  },
                  {
                    icon: "dns",
                    name: "Express.js",
                    type: "Backend Framework",
                    color: "text-white",
                  },
                  {
                    icon: "code_blocks",
                    name: "React",
                    type: "Frontend Library",
                    color: "text-blue-400",
                  },
                  {
                    icon: "terminal",
                    name: "Node.js",
                    type: "Runtime Environment",
                    color: "text-green-600",
                  },
                ].map((stack, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded bg-[#1e2a22] flex items-center justify-center border border-[#40392b] transition-colors">
                      <span
                        className={`material-symbols-outlined ${stack.color}`}
                      >
                        {stack.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        {stack.name}
                      </h4>
                      <p className="text-xs text-gray-500">{stack.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
