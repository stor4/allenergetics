/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      green: '#0f8040',
      gray: '#bababa',
      grayHome: '#fafafa',
      textGray: '333333',
    },
    screens: {
      'mobile' : '480px',
      'tablet' : '768px',
      'desktop' : '1280px',
      'full-screen' : '1920px'
    }
  },
  plugins: [],
}

