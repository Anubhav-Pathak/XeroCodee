/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Hero-Pattern.png')"
      },
      backgroundColor: {
        'hero-pattern': "rgba(194, 218, 251, 0.90)"
      },
      borderRadius: {
        "curved": "0px 35px 35px 35px"
      },
      colors: {
        primary: { DEFAULT: "#1F64FF", HOVER: "#000" },
        secondary: "#FFFFFF",
        neutral: "rgba(0, 0, 34, 0.50)",
        accent: "#FFC000",
      }
    },
  },
  plugins: [require("daisyui")],
}
