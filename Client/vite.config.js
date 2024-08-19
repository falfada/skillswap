import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/graphql': {
        target: 'process.env.VITE_API_URL',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
