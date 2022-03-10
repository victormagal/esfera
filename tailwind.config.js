const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}"
  ],
  theme: {
    colors: {
      'dark-blue': '#00293D',
      'baby-blue': '#CFEBFF',
      'gray': '#343434',
      'gold': '#B8924D',
      'white': 'white',
      'red': 'red',
      'baby-red': '#F7A8A8'
    },
    extend: {
      fontFamily: {
        'sans': ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
