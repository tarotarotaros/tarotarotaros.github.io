import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pagesで<username>.github.ioの場合は'/'、<username>.github.io/<repo-name>の場合は'/<repo-name>/'に変更
})
