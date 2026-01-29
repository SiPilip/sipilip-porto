import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-auto" id="contact">
      <div className="h-1 w-full bg-gradient-to-r from-white via-primary to-white dark:from-background-dark dark:via-primary dark:to-background-dark"></div>
      <div className="relative bg-white dark:bg-background-dark pt-20 pb-10 px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        {/* Batik Overlay would generally be a background image here */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Mari Bangun Sesuatu yang Luar Biasa
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            Punya ide proyek? Mari diskusikan bagaimana kita bisa bekerja sama.
          </p>
          <form className="max-w-xl mx-auto bg-gray-50 dark:bg-surface-dark/80 p-8 rounded-2xl border border-gray-200 dark:border-white/5 backdrop-blur-md shadow-2xl transition-colors duration-300">
            <div className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-primary uppercase tracking-wider mb-1"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white dark:bg-[#1a1612] border border-gray-300 dark:border-[#40392b] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-primary uppercase tracking-wider mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white dark:bg-[#1a1612] border border-gray-300 dark:border-[#40392b] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-primary uppercase tracking-wider mb-1"
                >
                  Detail Proyek
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Ceritakan tentang proyek Anda..."
                  className="w-full bg-white dark:bg-[#1a1612] border border-gray-300 dark:border-[#40392b] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary hover:bg-primary-dark text-white dark:text-background-dark font-bold py-4 rounded-lg mt-4 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                Kirim Pesan
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto border-t border-gray-200 dark:border-[#40392b] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <p>© 2024 Philifs Bryan Sipahutar. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              LinkedIn{" "}
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              GitHub{" "}
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              Twitter{" "}
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
