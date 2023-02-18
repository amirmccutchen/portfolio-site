module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'darkblue': '#18181b',
				'bluebutton': '#3770FF'
			},
			fontFamily: {
				inter: ['inter', 'serif'],
				sen: ['Sen', 'sans-serif'],
			},
		},
	},
	plugins: [],
};