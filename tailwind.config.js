/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ATL': ['ATL', 'sans-serif'],
      
    },
  
  screens: {
    'mobile': '300px',

    'tablet': '640px',

    'laptop': '1200px',


    'desktop': '1400px',

  },
},
  plugins: [],
}
