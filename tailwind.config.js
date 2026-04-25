/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
       maxWidth: {
        '1400': '1400px',
      },transitionTimingFunction: {
      'jump' : 'cubic-bezier(0.95, 0.05, 0.795, 0.035)'
      },
    },
  },
  plugins: [],
}

