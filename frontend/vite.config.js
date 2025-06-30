import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // or any other port you use
    allowedHosts: [
      '4d27-160-30-28-34.ngrok-free.app' // ⬅️ your ngrok domain here
    ]
  }
})
