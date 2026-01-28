import React from "react";

const Services = () => {
  return (
    <section
      className="relative py-20 px-6 lg:px-8 max-w-7xl mx-auto w-full bg-background-dark text-white"
      id="skills"
    >
      {/* Expertise / Skills Section */}
      <div
        className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            Available for new projects
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Technical <span className="text-primary">Expertise</span> &amp;
            Services
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Professional portfolio showcasing full-stack capabilities. I craft
            scalable web applications using the MERN stack with a focus on
            performance, clean code, and elegant UI.
          </p>
        </div>
        {/* Skills Chips */}
        <div className="lg:w-1/2 w-full bg-surface-dark/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              terminal
            </span>
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "javascript", label: "JavaScript (ES6+)" },
              { icon: "data_object", label: "React.js" },
              { icon: "dns", label: "Node.js" },
              { icon: "robot_server", label: "Express" },
              { icon: "database", label: "MongoDB" },
              { icon: "layers", label: "Next.js" },
              { icon: "palette", label: "Tailwind CSS" },
              { icon: "api", label: "RESTful APIs" },
              { icon: "hub", label: "GraphQL" },
            ].map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 rounded-lg bg-[#40392b] hover:bg-primary hover:text-background-dark border border-white/5 px-4 py-2 transition-all duration-300 cursor-default"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="w-full bg-surface-dark/30 rounded-3xl p-8 lg:p-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              Services Offered
            </h2>
            <p className="text-gray-400">
              Comprehensive development solutions tailored to your needs.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
            View full pricing
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="group relative bg-surface-dark p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">
                web
              </span>
            </div>
            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined text-3xl">
                devices
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Custom Web Apps
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Tailor-made web applications built with React and Next.js,
              focusing on responsive design and seamless user experience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span> SPA
                &amp; PWA Development
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Dashboard Interfaces
              </li>
            </ul>
          </div>
          {/* Service Card 2 */}
          <div className="group relative bg-surface-dark p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">
                settings_system_daydream
              </span>
            </div>
            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined text-3xl">
                settings_suggest
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Internal Systems
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Robust backend solutions and internal tools designed to streamline
              business operations and data management.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span> Admin
                Panels
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Database Architecture
              </li>
            </ul>
          </div>
          {/* Service Card 3 */}
          <div className="group relative bg-surface-dark p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">
                integration_instructions
              </span>
            </div>
            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined text-3xl">api</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              API Development
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Secure and scalable RESTful and GraphQL APIs to power your
              applications and integrate third-party services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Microservices
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Third-party Integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
