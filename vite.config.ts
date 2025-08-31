// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Plugin Vue 3
    vue(),

    // Compressão Gzip
    compression({
      verbose: true,
      disable: false,
      threshold: 10240, // Apenas arquivos > 10KB
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    }),

    // Compressão Brotli (melhor que gzip)
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false
    }),

    // Minificação HTML
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true
      },
      // Injeta meta tags para SEO
      inject: {
        data: {
          title: 'Portfolio',
          injectScript: `<script>console.log('App loaded')</script>`
        }
      }
    }),

    // Analisador de bundle (opcional - remover em produção)
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true
    })
  ],

  // Aliases para imports
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // CRÍTICO para GitHub Pages - usa caminhos relativos
  base: './',

  // Configurações de Build
  build: {
    // Target para browsers modernos
    target: 'esnext',

    // Minificação com Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // Remove console.log
        drop_debugger: true,     // Remove debugger
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2                // Duas passadas para melhor compressão
      },
      format: {
        comments: false,         // Remove comentários
        ascii_only: true        // Compatibilidade ASCII
      },
      mangle: {
        safari10: true          // Fix para Safari 10
      }
    },

    // Configurações do Rollup
    rollupOptions: {
      output: {
        // Code splitting inteligente
        manualChunks: (id) => {
          // Separa node_modules em vendor
          if (id.includes('node_modules')) {
            // Vue e suas dependências core
            if (id.includes('vue')) {
              return 'vue-vendor'
            }
            // Vue i18n se estiver usando
            if (id.includes('vue-i18n')) {
              return 'i18n-vendor'
            }
            // Outras bibliotecas
            return 'vendor'
          }
        },

        // Organização de arquivos de saída
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk'
          return `assets/js/${facadeModuleId}-[hash].js`
        },

        entryFileNames: 'assets/js/[name]-[hash].js',

        // Organização de assets por tipo
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name ?? 'unnamed-asset'; //assetInfo.name.split('.')
          const ext = info[info.length - 1]

          // Imagens
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }

          // Fontes
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }

          // CSS
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`
          }

          // Outros
          return `assets/[name]-[hash][extname]`
        }
      },

      // Otimização de tree-shaking
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false
      }
    },

    // CSS em arquivo único (melhor para sites pequenos)
    cssCodeSplit: false,

    // Sem source maps em produção (segurança + tamanho)
    sourcemap: false,

    // Mostra tamanho comprimido no build
    reportCompressedSize: true,

    // Aviso se chunk > 500KB
    chunkSizeWarningLimit: 500,

    // Inline de assets pequenos como base64
    assetsInlineLimit: 4096, // 4KB

    // Otimizações CSS
    cssMinify: true,

    // Limpa diretório dist antes do build
    emptyOutDir: true,

    // Polyfill dinâmico do import()
    modulePreload: {
      polyfill: true,
    },

    // Otimização de SSR (não necessário para SPA)
    ssrManifest: false,
    ssr: false
  },

  // Configurações do servidor de desenvolvimento
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    cors: true,

    // Hot Module Replacement
    hmr: {
      overlay: true
    }
  },

  // Preview do build local
  preview: {
    port: 4173,
    strictPort: false,
    open: true
  },

  // Otimizações adicionais
  optimizeDeps: {
    include: ['vue', 'vue-i18n'], // Pré-bundle de dependências
    exclude: [],
    esbuildOptions: {
      target: 'esnext',
      // Define global para compatibilidade
      define: {
        global: 'globalThis',
      }
    }
  },

  // Variáveis de ambiente
  define: {
    // Remove avisos de produção do Vue
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },

  // Configurações específicas para produção
  esbuild: {
    legalComments: 'none', // Remove comentários legais
    charset: 'utf8',
    pure: ['console.log', 'console.info', 'console.debug'],
    logLevel: 'error',
    logOverride: {
      'unsupported-css-property': 'silent'
    }
  }
})
