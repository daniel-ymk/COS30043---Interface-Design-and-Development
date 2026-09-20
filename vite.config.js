import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/COS30043---Interface-Design-and-Development/',
  // Build into /docs so GitHub Pages can serve it from "main" branch -> "/docs"
  build: { outDir: 'docs', emptyOutDir: true },
})
