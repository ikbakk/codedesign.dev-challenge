/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        'x-10': {
          transform: 'rotateX(45deg)'
        }
      },
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
      },
      clipPath: {
        polygon1: '0% 0%, 100% 0%, 100% 80%, 0% 100%'
      },
      boxShadow: {
        bottom: '0px 64px 77px -36px rgba(0,186,199,1)'
      }
    }
  },
  plugins: [
    require('autoprefixer'),
    require('prettier'),
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwind-clip-path')
  ]
}
