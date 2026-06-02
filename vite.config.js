import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  //import tailwind in project
import path from 'path'        // default path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],         //setup
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
