import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	mode: "jit",
	theme: {
		extend: {
			animation: {
				aurora: "aurora 60s linear infinite",
				fadein: "fadein 2s linear",
			},
			keyframes: {
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
				fadein: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

	addBase({
		":root": newVars,
	});
}

export default config;
