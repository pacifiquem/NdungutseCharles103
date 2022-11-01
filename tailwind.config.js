/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			xs: "340px",
			phone: "400px",
			tablet: "640px",
			md: "750px",
			xtab: "960px",
			laptop: "1100px",
			desktop: "1280px",
		},
		fontFamily: {
			'oxa': ['Oxanium', 'sans-serif'],
			'roboto': ['Roboto', 'sans-serif'],
			'rokkit': ['Rokkit', 'sans-serif'],
			'poppin': ['Poppins', 'sans-serif'],
		}
	},
	plugins: [],
};
