/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C336C',
        secondary : '#DC3C22',
        third: '#2C2D34',
      }

    },
  },
  plugins: [],
}

