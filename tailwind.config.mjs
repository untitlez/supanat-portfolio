/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "2345A7",
          secondary: "FF7053",
          accent: "#FED43D",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "FF7053",
          accent: "#FED43D",
        },
      },
    ],
  },
};
