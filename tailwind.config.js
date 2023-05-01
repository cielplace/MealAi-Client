/** @type {import('tailwindcss').Config} */

export default {
	purge: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"gray-1": "#272520",
				"gray-2": "#3C3932",
				"gray-3": "#53514C",
				"gray-4": "#6B6A67",
				"gray-5": "#878681",
				"gray-6": "#A6A4A0",
				"gray-7": "#D3D3D3",
				"gray-8": "#EAE9E9",
				"gray-9": "#F5F5F5",
				"primary-1": "#008B47",
				"primary-2": "#6BB64A",
				"secondary-1": "#F8CD24",
				"bg-1": "#EDFBF4",
				"bg-2": "#FEF5D3",
				"system-success": "#36D399",
				"system-error": "#F87272",
			},
			height: {
				"90": "90px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
