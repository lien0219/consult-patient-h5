import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,
    host: true
  },
  test: {
    environment: 'happy-dom'
  },
  plugins: [
    viteMockServe({
      // 在哪个文件夹下编写模拟接口的代码
      mockPath: './src/mock',
      // 在开发环境开启mock
      localEnabled: true
    }),

    createHtmlPlugin(),
    vue({
      // 开启解构Props响应式转换功能
      reactivityTransform: true
    }),
    Components({
      dts: false,
      resolvers: [VantResolver({ importStyle: false })]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
