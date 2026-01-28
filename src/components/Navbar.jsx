import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/80 border-b border-[#40392b]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              Philifs.dev
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {["about", "work", "skills", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center gap-2 h-10 px-6 bg-primary hover:bg-white text-background-dark font-bold text-sm rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(199,161,92,0.3)] hover:shadow-[0_0_25px_rgba(199,161,92,0.5)]">
              <span>Hire Me</span>
              <span className="material-symbols-outlined text-lg">
                arrow_outward
              </span>
            </button>
            <button
              className="md:hidden p-2 text-white hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-dark border-b border-[#40392b]/30">
          <nav className="flex flex-col p-4 space-y-4">
            {["about", "work", "skills", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-pointer capitalize block"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
