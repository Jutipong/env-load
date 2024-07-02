import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as fs from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...env };

  return defineConfig({
    plugins: [vue()],
    server: {
      port: parseInt(process.env.VITE_PORT ?? '3000'),
    },
  });
})