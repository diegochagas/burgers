/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2.5': '40px'
      },
      colors: {
        'brown': {
          300: '#4F372F',
          900: '#36231c',
        },
        'gray': {
          70: '#F8F9FA',
          250: '#eeeeee',
          280: '#dadada',
          350: '#8A94A4',
          550: '#464646',
          560: '#5F5F5F',
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
        '4.5': '1.125rem',
        13: '3.25rem',
        17: '4.688rem',
        21: '5.313rem',
        37: '9.375rem'
      },
      inset: {
        13: '3.25rem'
      },
      maxWidth: {
        '4/5': '80%',
        'xxs': '14.5rem'
      },
      padding: {
        '2.7': '0.688rem',
        '3.3': '0.813rem',
      },
      margin: {
        '1.3': '0.313rem'
      },
      screens: {
        'max-md': {'max': '767px'},
      },
      width: {
        '4.5': '1.125rem',
        17: '4.688rem',
      }
    },
  },
  plugins: [],
}

