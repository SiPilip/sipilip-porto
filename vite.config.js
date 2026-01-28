import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6000,
    host: "0.0.0.0", // Sangat penting agar bisa diakses via IP VPS
  },
  plugins: [react()],
});
