import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    sourcemap:true
  },
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./node_modules/"),
      "@src": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
