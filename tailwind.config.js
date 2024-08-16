/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.75rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}

