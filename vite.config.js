import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow network access
    port: 5173, // optional, or whatever port you use
    allowedHosts: [
      'b07c7aa023b4.ngrok-free.app', // your ngrok host
      '.ngrok-free.app' // optional: allow all ngrok hosts
    ],
  },
});

