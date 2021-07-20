module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bms:
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        signIn:
        {
          DEFAULT: '#F84464',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FED7DE',
          300: '#FCA6B5',
          400: '#FA758D',
          500: '#F84464',
          600: '#F6133B',
          700: '#CE082B',
          800: '#9D0621',
          900: '#6C0417'
        },
        exnav :"#222539",
        premier :"#2b3148"

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
