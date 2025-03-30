import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/oscode-app/', // Add this line
  plugins: [react()],
})
