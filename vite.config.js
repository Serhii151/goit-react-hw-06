import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Serhii151.github.io/goit-react-hw-06/',
  build: {
    sourcemap: true,
  }
});
