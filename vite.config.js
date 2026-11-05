import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CSS Modules работают из коробки: любой файл *.module.css
// base — сайт на GitHub Pages открывается из подпапки /Samolet_project/
export default defineConfig({
  base: '/Samolet_project/',
  plugins: [react()],
});
