/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald: ['Oswald'],
        kelly: ['Kelly Slab']
      },
      backgroundImage: {
        'bannerbg' : "url('./src/assets/images/banner-bg.jpg')",
        'menubg' : "url('./src/assets/images/menu-bg.png')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light","black"],
  },
}