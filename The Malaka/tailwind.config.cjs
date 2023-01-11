/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter'],
        'dm-sans': ['"DM Sans"']
      },
      colors: {
        primary: '#00BAC7',
        secondary: '#2F364B',
        dark: '#272D3E',
        'dark-muted': '#272D3E/80',
        'white-muted': '#FFFFFF/80',
        base: '#EDFCFD'
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
