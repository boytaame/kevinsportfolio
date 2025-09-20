import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project site at https://boytaame.github.io/kevinsportfolio/
  // Use the repository name as the base path
  base: '/kevinsportfolio/',
  plugins: [react()],
})