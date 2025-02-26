import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    host: true,
    port: 5173,
    proxy: {
      '/api': 'https://konvictsstorebackend.onrender.com',
    },
    watch: {
      usePolling: true,
    },
    cors: true,
  },
  optimizeDeps: {
    include: ['axios', 'swiper'],
  },
  build: {
    rollupOptions: {
      // external: ['@phosphor-icons/react'],
    },
  },
});
