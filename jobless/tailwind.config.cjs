/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins']
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
