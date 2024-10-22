import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.jpeg", "**/*.gif"],

  css: {
    preprocessorOptions: {
      // Additional CSS preprocessor options here if needed
    },
  },
});
