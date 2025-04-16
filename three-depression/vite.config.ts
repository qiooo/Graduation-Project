import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 添加Three.js的全局变量配置
  define: {
    'process.env': {}
  }
})