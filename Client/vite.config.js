import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600 },
  server: {
    port: 3001,
    open: true,
    proxy: {
      '/graphql': {
        target: ' process.env.VITE_API_URL' || 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
