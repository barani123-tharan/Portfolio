<<<<<<< HEAD
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
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 736c236537ee1e19d2ce090ebfab12a833b0c9bb
