import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0' // or use your local IP address like '192.168.1.2'
  },
  plugins: [react()],
})
