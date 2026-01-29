/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#c7a15c",
        "background-light": "#f8f7f4", // Premium off-white
        "background-dark": "#1e1a14",
        charcoal: "#131313",
        // Semantic Colors for Theme
        "surface-light": "#ffffff", // Pure white for cards
        "surface-dark": "#1e1a14",
        "text-light": "#1a1612", // Sharp dark
        "text-dark": "#ffffff",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      backgroundImage: {
        "batik-pattern":
          "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23c7a15c\\' fill-opacity=\\'0.08\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        "mega-mendung":
          "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 50 C 20 20, 40 20, 50 50 C 60 80, 80 80, 100 50\\' stroke=\\'%23c7a15c\\' stroke-width=\\'2\\' fill=\\'none\\' opacity=\\'0.05\\' /%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
