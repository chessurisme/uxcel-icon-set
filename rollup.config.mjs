import alias from '@rollup/plugin-alias';

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
		})
	]
};
