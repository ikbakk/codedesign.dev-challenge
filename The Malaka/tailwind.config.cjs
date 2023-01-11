/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
