import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Surgiheal/", // 👈 ADD THIS LINE — use your exact repo name (case-sensitive)
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react"],
          services: [
            "./src/pages/services/Surgery.jsx",
            "./src/pages/services/LaserSurgery.jsx",
            "./src/pages/services/Gynecology.jsx",
            "./src/pages/services/Urology.jsx",
            "./src/pages/services/Gastroenterology.jsx",
            "./src/pages/services/Oncology.jsx",
            "./src/pages/services/Orthopedics.jsx",
            "./src/pages/services/EmergencyCare.jsx",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
