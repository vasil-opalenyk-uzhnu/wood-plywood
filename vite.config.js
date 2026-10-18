import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use '@/app/styles/helpers' as *;",
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./src/shared/assets/icons', import.meta.url))],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: {
        plugins: [{ name: 'convertColors', params: { currentColor: true } }],
      },
    }),
  ],
});
