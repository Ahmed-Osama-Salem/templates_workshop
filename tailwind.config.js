/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          light: '#f4f0ed',
          'light-100': '#8f8692',
          mid: '#4d504a',
          'mid-100': '#4d504a',
        },
        orange: {
          baby: '#fabdaa',
          light: '#f5d371',
        },
        blue: {
          baby: '#9edef9',
        },
      },
      fontFamily: {
        'Nanum-Myeongjo': 'Nanum Myeongjo',
        Satisfy: 'Satisfy',
      },
    },
  },
  plugins: [],
};
