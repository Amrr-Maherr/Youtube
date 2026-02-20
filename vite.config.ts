import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,svg,png,webp}'],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,png,webp}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: false,
        type: 'module',
      },
      manifest: {
        name: 'YouTube Clone - Video Streaming Platform',
        short_name: 'YouTube',
        description: 'A modern, full-featured YouTube clone built with React, TypeScript, and Tailwind CSS',
        theme_color: '#FF0000',
        background_color: '#0F0F0F',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: '/vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ],
        categories: ['video', 'entertainment', 'social'],
        shortcuts: [
          {
            name: 'Home',
            short_name: 'Home',
            url: '/',
            description: 'Go to homepage'
          },
          {
            name: 'Shorts',
            short_name: 'Shorts',
            url: '/shorts',
            description: 'Browse Shorts'
          },
          {
            name: 'Subscriptions',
            short_name: 'Subscriptions',
            url: '/subscriptions',
            description: 'View your subscriptions'
          },
          {
            name: 'Library',
            short_name: 'Library',
            url: '/library',
            description: 'View your liked videos'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
