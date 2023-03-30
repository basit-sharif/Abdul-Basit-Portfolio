/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fullBackground:"#337CE5",
        subHeading:"#7A879B",
        heading:"#4F5864",
        darkBackgroundBottom:'#0F172A',
        darkBackgroundTop:'#17324F',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
