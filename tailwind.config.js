/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
  "./page/**/*.{js,ts,jsx,tsx,mdx,css}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}

