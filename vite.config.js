import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",           // ✅ Ensures Vite finds `index.html` at root
  build: {
    outDir: "dist",    // ✅ Correct output directory for Vercel
    rollupOptions: {
      input: "index.html", // ✅ Explicitly set entry point
    },
  },
});
