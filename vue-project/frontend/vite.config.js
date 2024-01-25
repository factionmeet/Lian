import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({


  // 根路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      '@components': path.resolve(__dirname, "src/components"),
      '@plugins': path.resolve(__dirname, "src/plugins"),
      '@router': path.resolve(__dirname, "src/router"),
      '@store': path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      '@views': path.resolve(__dirname, "src/views"),
      "@public":path.resolve(__dirname,"src/public")
    },
  },



  // 插件
  plugins: [vue()],

  // 服务器配置
  server: {
    host: 'localhost',
    port: 3000, // 端口号
    open: false, // 是否打开新窗口
    strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    https: false, // 是否开启https
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/restful': {
        target: 'http://localhost:9999', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '^/sdk': {
        target: 'http://localhost:8081', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },







  // 打包限制
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {

            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },





  // 全局常量
  define: {
    // BASE_URL: JSON.stringify('/api'),
    BASE_URL: JSON.stringify(''),
    //BASE_URL: JSON.stringify('http://127.0.0.1:9999/'),
    // BASE_URL: JSON.stringify('https://fastapi.zxiaosi.net/api/'),
    TIMEOUT: 10000,
    TITLE: JSON.stringify('农产品溯源系统'),
  },
  // 用于开发环境
  base:process.env.NODE_ENV === 'production' ? './' : '/',
})
