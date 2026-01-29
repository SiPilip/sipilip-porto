import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-[#40392b]/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
              sipilip
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize"
            >
              Tentang
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize"
            >
              Portofolio
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize"
            >
              Kontak
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 group mr-2"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[22px] transform group-hover:rotate-180 transition-transform duration-500">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <a
              className="hidden md:flex items-center justify-center gap-2 h-10 px-6 bg-primary hover:bg-white text-white dark:text-background-dark font-bold text-sm rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(199,161,92,0.3)] hover:shadow-[0_0_25px_rgba(199,161,92,0.5)]"
              href="https://api.whatsapp.com/send/?phone=%2B6285380557667&text=Halo!&type=phone_number&app_absent=0"
              target="_blank"
            >
              <span>Kolaborasi</span>
              <span className="material-symbols-outlined text-lg">
                handshake
              </span>
            </a>
            <button
              className="md:hidden p-2 text-gray-900 dark:text-white hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-gray-200 dark:border-[#40392b]/30">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize block"
            >
              Tentang
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize block"
            >
              Portofolio
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize block"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize block"
            >
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
