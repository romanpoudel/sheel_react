import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: './dist',
    assetsDir: 'assets', // Specifies the directory name for assets in the build output
    assetsInlineLimit: 4096, // The maximum size of files to inline in the build output (in bytes)
    cssCodeSplit: true, // Enable CSS code splitting
    sourcemap: true, // Generate source maps for the build output
  },
})
