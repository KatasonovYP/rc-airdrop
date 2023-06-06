import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import wasm from 'vite-plugin-wasm';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		wasm(),
		react(),
		tsconfigPaths(),
		visualizer({
			template: 'treemap',
			open: true,
			gzipSize: true,
			brotliSize: true,
			filename: 'analyse.html',
		}),
	],
});
