/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          300: '#4F372F',
          900: '#36231c',
        },
        'gray': {
          70: '#F8F9FA',
          250: '#eeeeee',
          350: '#8A94A4',
          550: '#464646',
          850: '#2C2C2C',
          870: '#121212'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },
      height: {
        13: '3.25rem',
        37: '9.375rem'
      },
      inset: {
        13: '3.25rem'
      },
      maxWidth: {
        'xxs': '14.5rem'
      },
      padding: {
        '2.7': '0.688rem',
        '3.3': '0.813rem',
      },
      margin: {
        '1.3': '0.313rem'
      }
    },
  },
  plugins: [],
}

