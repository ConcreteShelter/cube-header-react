import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts', // Path to the main file of your library
      name: 'CubeHeaderReact',
      fileName: (format) => `cube-header-react.${format}.ts`, // Output file names
    },
    emptyOutDir: true, // Clears the output directory before building
    rollupOptions: {
      input: './src/index.ts', // Specify the entry point explicitly
      external: ['react', 'react-dom'], // Exclude react and react-dom from the build
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
