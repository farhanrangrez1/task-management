import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/geo': {
        target: 'https://project-management-geo.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/geo/, '')
      },
      '/api/task': {
        target: 'https://projectmanagement-employe-1.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/task/, '')
      }
    }
  }
})