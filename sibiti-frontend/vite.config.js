// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: true,
  },
  build: {
    target: 'esnext',
  },
  plugins: [react(),
    // Plugin untuk mengatur default Content-Type menjadi application/x-www-form-urlencoded
    {
      name: 'set-content-type',
      transformIndexHtml(html) {
        return html.replace('<head>', '<head><meta http-equiv="Content-Type" content="application/x-www-form-urlencoded">');
      },
    },
  ],
});
