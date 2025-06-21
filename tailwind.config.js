/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2D7DD2',
        positiveGreen: '#8CB369',
        beigeBg: '#E7E0C9',
        borderGray: '#C5C6C7',
      },
    },
  },
  plugins: [],
}
