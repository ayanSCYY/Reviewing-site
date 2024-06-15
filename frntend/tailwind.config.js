/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        '1stpage':"url('/src/assets/mvi/dune/1.jpg')",
        'menu':"url('/src/assets/mvi/dune/Group 5.png')",
        'tag':"url('/src/assets/mvi/dune/R4REVIEw.png')",
        'login':"url('/src/assets/mvi/dune/login.png')",
        'paul':"url('/src/assets/mvi/dune/2ndimg.png')",
        '2ndpage':"url('/src/assets/mvi/dune/2.jpg')",
        '2ndpage1':"url('/src/assets/mvi/dune/2-1.jpg')",
        '2ndpage2':"url('/src/assets/mvi/dune/2-2.jpg')",
        '2ndpage3':"url('/src/assets/mvi/dune/2-3.jpg')",
        
        
        'D':"url('/src/assets/D.png')",
        'U':"url('/src/assets/U.png')",
        'N':"url('/src/assets/N.png')",
        'E':"url('/src/assets/E.png')",
        'part2':"url('/src/assets/part 2.png')",

    },

    screens:{
      '>md,<lg':"840px"
    }
  },
  plugins: [],
}}
