/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       gray: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
          300: '#d1d5db',
        },
    },
  },
  plugins: [],
}