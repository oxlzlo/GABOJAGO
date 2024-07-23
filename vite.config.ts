import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteCompression({
      // 압축 알고리즘 지정, 기본적으로는 'gzip'을 사용
      algorithm: 'gzip',
      // 압축된 파일의 확장자를 '.gz'로 설정
      ext: '.gz',
      filter: /\.(js|css|html|svg)$/, // 원하는 파일 형식을 지정
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
