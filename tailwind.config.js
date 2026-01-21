/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sony-black': '#0A0A0C',
        'sony-dark': '#0A0A0C',
        'accent-blue': '#0050FF',
        'accent-cyan': '#00D6FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
