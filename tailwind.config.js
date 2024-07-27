/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        american: ['"American Captain Patrius 02 FRE"', "sans-serif"]
      },
      /* Colors used in the project */
      colors: {
        'primary': '#2B85FF',
        'secondary': '#EF863E',
        'tertiary': '#F56565',
        'quaternary': '#48BB78',
        'quinary': '#4299E1',
        'senary': '#ECC94B',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1025px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '549px'},
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

