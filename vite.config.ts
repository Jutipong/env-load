import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import * as fs from 'fs';

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());
  const env = loadEnv(mode, './env-mock')
  // const appsetting = JSON.stringify(window);
  // fs.writeFileSync('./config.json', window.appsetting =JSON.stringify(env));

  process.env = { ...process.env, ...env };

  return defineConfig({
    plugins: [vue()],
    server: {
      port: parseInt(process.env.VITE_PORT ?? '3000'),
    },
  });
})