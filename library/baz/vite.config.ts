import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [
          'baz',
      ].map(path => resolve(__dirname, `src/${path}.ts`)),
      formats: ['es'],
    },
  },
  resolve: {
    alias: {
      src: resolve('src/'),
    },
  },
  plugins: [
    dts({tsconfigPath: 'tsconfig.json'}),
  ],
});
