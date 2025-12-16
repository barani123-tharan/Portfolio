import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url'; // Keep this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // Keep this resolve block
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});