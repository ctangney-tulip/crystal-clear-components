import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default defineConfig({
  plugins: [
    alias({
      entries: [
        {
          find: '@components',
          replacement: `${path.resolve(__dirname, './src/components/')}`,
        },
        {
          find: '@styles',
          replacement: path.resolve(__dirname, './src/styles/'),
        },
        {
          find: '@utils',
          replacement: path.resolve(__dirname, './src/utils/'),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
    },
  },
});
