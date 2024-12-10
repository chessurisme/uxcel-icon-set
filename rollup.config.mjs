import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { fileURLToPath } from 'url';
import path from 'path';

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
				}
			]
		}),
		nodeResolve({
			extensions: ['.js', '.mjs', '.json', '.node'],
			preferBuiltins: true
		}),
		commonjs()
	]
};
