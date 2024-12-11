import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { fileURLToPath } from 'url';
import path from 'path';
import copy from 'rollup-plugin-copy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'esm'
	},
	plugins: [
		alias({
			entries: [
				{
					find: '@utilities',
					replacement: path.resolve(__dirname, 'src/utilities')
				},
				{
					find: '@icons',
					replacement: path.resolve(__dirname, 'src/icons')
				},
				{
					find: '@components',
					replacement: path.resolve(__dirname, 'src/components')
				},
				{
					find: '@pages',
					replacement: path.resolve(__dirname, 'src/pages')
				},
				{
					find: '@tests',
					replacement: path.resolve(__dirname, 'src/tests')
				},
				{
					find: '@styles',
					replacement: path.resolve(__dirname, 'src/styles')
				},
				{
					find: '@animations',
					replacement: path.resolve(__dirname, 'src/animations')
				}
			]
		}),
		nodeResolve({
			extensions: ['.js', '.mjs', '.json', '.node'],
			preferBuiltins: true
		}),
		commonjs(),
		postcss({
			extract: true,
			minimize: true
		}),
		copy({
			targets: [
				{ src: 'src/index.html', dest: 'dist/' },
				{ src: 'src/assets', dest: 'dist/' }
			]
		})
	]
};
