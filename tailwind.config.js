module.exports = {
	purge: {
		enabled: false,
		content: [
			'./src/**/*.html',
			'./src/**/*.vue',
			'./src/**/*.js',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
}
