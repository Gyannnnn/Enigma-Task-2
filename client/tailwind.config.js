/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '80vh':'60vh',
      },
      colors:{
        custombg:'#f8fafc'
      },
      gridTemplateColumns: {
        'custom': 'repeat(3, minmax(250px, 1fr))',
      },
      gridTemplateColumns2: {
        'custom2': 'repeat(2, minmax(250px, 1fr))',
      },
      gridTemplateColumns3: {
        'custom3': 'repeat(1, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
}