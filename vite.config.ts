import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
    }),
    scriptSetup(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    Components({
      /* options */
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@API': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@ASS': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@VIE': fileURLToPath(new URL('./src/views', import.meta.url)),
    },
  },
})
