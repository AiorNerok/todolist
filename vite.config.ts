import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
// https://vite.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            widgets: resolve(__dirname, 'src/components/widgets'),
            'use-case': resolve(__dirname, 'src/components/use-case'),
            entities: resolve(__dirname, 'src/components/entities'),
            shared: resolve(__dirname, 'src/components/shared'),
            hook: resolve(__dirname, 'src/components/shared/hook'),
        },
    },
});
