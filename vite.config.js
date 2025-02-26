import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    host: true, // 'true' faz o Vite ser acessível na rede local
    port: 5173, // Defina a porta que você deseja, caso queira usar outra porta
    proxy: {
      // Caso queira fazer um proxy para seu backend (se estiver rodando na mesma máquina)
      '/api': 'http://localhost:5001', // Ajuste conforme o seu backend
    },
    watch: {
      usePolling: true, // Ajuda a detectar mudanças de arquivo
    },
    cors: true, // Permite requisições CORS de qualquer origem (ajuste conforme necessário)
  },
  optimizeDeps: {
    include: ['axios', 'swiper'], // Adicione outras dependências que precisam ser otimizadas
  },
});
