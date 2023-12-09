import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import { ViteGhPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  base: '/stromcheck/',
  css: {
    postcss,
  },
  plugins: [react(), ViteGhPages],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
