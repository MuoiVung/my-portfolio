/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff014f",
        secondary: {
          '100': "#F0F2F5",
          '200': "#CED0D4",
          '300': '#E4E6EA',
          '400': '#c4cfde',
          '500': '#7c838e',
        },
        'light-gray': '#878e99',
        tertiary: "#0d1013",
        'bg-1': "#212428",
        'black-600': '#191B1E'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        '1': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
        '2': 'inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225',
        'inner': ' 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;'
      },
      borderColor: {
        'black-500': '#1a1d23',
      },
      backgroundImage: {
        social: "linear-gradient(to right bottom, #212428, #16181c)",
        'bg-2': "linear-gradient(145deg, #1e2024, #23272b)",
        'bg-3': "linear-gradient(to right bottom, #212428, #16181c)"
      }
    },
  },
  plugins: [],
};