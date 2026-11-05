import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CSS Modules работают из коробки: любой файл *.module.css
export default defineConfig({
  plugins: [react()],
});
