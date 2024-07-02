import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());
  const env = loadEnv(mode, './env-mock')
  process.env = { ...process.env, ...env };

  return defineConfig({
    plugins: [vue()],
    server: {
      port: parseInt(process.env.VITE_PORT ?? '3000'),
    },
  });
})