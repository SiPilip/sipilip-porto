import React from "react";

const Services = () => {
  return (
    <section
      className="relative py-20 px-6 lg:px-8 max-w-7xl mx-auto w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300"
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
            Tersedia untuk proyek baru
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            <span className="text-primary">Keahlian</span> Teknis &amp; Layanan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
            Portofolio profesional yang menampilkan kemampuan full-stack. Saya
            menyusun aplikasi web berskala besar menggunakan MERN stack dengan
            fokus pada performa, kode yang bersih, dan UI yang elegan.
          </p>
        </div>
        {/* Skills Chips */}
        <div className="lg:w-1/2 w-full bg-white dark:bg-surface-dark/50 p-8 rounded-2xl border border-gray-200 dark:border-white/5 backdrop-blur-sm shadow-xl dark:shadow-none transition-colors duration-300">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">
              terminal
            </span>
            Teknologi Inti
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
                className="group flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-[#40392b] hover:bg-primary hover:text-white dark:hover:text-background-dark border border-gray-200 dark:border-white/5 px-4 py-2 transition-all duration-300 cursor-default"
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
        className="w-full bg-gray-100 dark:bg-surface-dark/30 rounded-3xl p-8 lg:p-12 transition-colors duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Layanan Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Solusi pengembangan komprehensif yang disesuaikan dengan kebutuhan
              Anda.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
            Lihat harga lengkap
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="group relative bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-none">
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
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Web App Kustom
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Aplikasi web yang dibuat khusus menggunakan React dan Next.js,
              berfokus pada desain responsif dan pengalaman pengguna yang mulus.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Pengembangan SPA &amp; PWA
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Antarmuka Dashboard
              </li>
            </ul>
          </div>
          {/* Service Card 2 */}
          <div className="group relative bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-none">
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
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Sistem Internal
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Solusi backend yang kuat dan alat internal yang dirancang untuk
              merampingkan operasional bisnis dan manajemen data.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span> Panel
                Admin
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Arsitektur Database
              </li>
            </ul>
          </div>
          {/* Service Card 3 */}
          <div className="group relative bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-none">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">
                integration_instructions
              </span>
            </div>
            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined text-3xl">api</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Pengembangan API
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              RESTful dan GraphQL API yang aman dan dapat diskalakan untuk
              memperkuat aplikasi Anda serta integrasi pihak ketiga.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Microservices
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                Integrasi Pihak Ketiga
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
