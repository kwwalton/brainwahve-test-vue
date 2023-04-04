/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      lightgray: {
        900: '#D5DAE0'
      },
      gray: {
        800: '#363C41'
      },
      primary: {
        50: '#EBE4EA',
        800: '#57144C'
      },
      error: {
        800: '#C81642',
        900: '#BD0039'
      }
    },
    extend: {
      backgroundImage: {
        'contact-sales-cta': "url('./assets/lookout.png')"
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: []
}
