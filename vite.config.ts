import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from "path";

// eslint-disable-next-line import/no-default-export -- Vite config should be default exported
export default defineConfig({
    base: '',
    plugins: [ react() ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        },
    },
    root: './src/',
    server: {
        port: 8080
    }
});
