import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url'; // <-- NEW IMPORT

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // <-- NEW RESOLVE CONFIGURATION
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});