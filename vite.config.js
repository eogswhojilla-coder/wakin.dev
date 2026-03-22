import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // build folder for deployment
    rollupOptions: {
      input: path.resolve(__dirname, 'resources/js/app.jsx'), // your main React file
    },
  },
});