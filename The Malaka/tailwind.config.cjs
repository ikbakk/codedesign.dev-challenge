/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter'],
        'dm-sans': ['"DM Sans"']
      }
    }
  },
  plugins: [
    require('autoprefixer'),
    require('prettier'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
}
