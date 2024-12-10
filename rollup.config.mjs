import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'esm'
	},
	plugins: [
		alias({
			entries: [
				{ find: '@utilities', replacement: './src/utilities' },
				{ find: '@icons', replacement: './src/icons' },
				{ find: '@components', replacement: './src/components' },
				{ find: '@pages', replacement: './src/pages' },
				{ find: '@tests', replacement: './src/tests' }
			]
		}),
		nodeResolve(),
		commonjs(),
		{
			name: 'file-extract',
			resolveId(source) {
				if (source.includes('.svg')) {
					return source.replace(/^@/, './src/');
				}
			}
		}
	]
};
