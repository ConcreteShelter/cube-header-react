import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: './src/index.js', // Path to your main file
            name: 'CubeHeaderReact',
            fileName: (format) => `cube-header-react.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react-redux', 'react-router-dom', '@react-keycloak/web'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-redux': 'ReactRedux',
                    'react-router-dom': 'ReactRouterDOM',
                    '@react-keycloak/web': 'ReactKeycloakWeb',
                },
            },
        },
    },
});
