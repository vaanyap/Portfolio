import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

const conditionalPlugins: [string, Record<string, any>][] = [];

if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

export default defineConfig({
  base: "/Portfolio/",  // Ensure this matches the subdirectory for GitHub Pages
  build: {
    // Ensure all assets and chunk files are properly output with hashed names
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",  // Ensures hashed names for assets
        chunkFileNames: "assets/[name]-[hash].js",  // For JS chunks as well
        entryFileNames: "assets/[name]-[hash].js",  // For entry points
      },
    },
  },
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    tempo(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
