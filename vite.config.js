import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Catatan: Ganti 'portfolio-web' di bawah dengan nama repo GitHub Anda
// Contoh: jika repo Anda https://github.com/hanifnr/my-portfolio
//         maka base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-web/',   // <-- GANTI dengan nama repo GitHub Anda
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
