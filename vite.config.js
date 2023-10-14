import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'public',    
  },
  server: {
    open: true,      
  },
  optimizeDeps: {
    include: ['main', 'cart-items'], 
  },
});