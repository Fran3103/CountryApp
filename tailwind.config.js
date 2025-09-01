import { blue } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors:{
    //  //dark mode
    //  DarkBlue: 'hsl(209, 23%, 22%)',
    //  bgVeryDarkBlue : 'hsl(207, 26%, 17%)',
    //  //ligth mode
    //  VeryDarkBlue: 'hsl(200, 15%, 8%)',
    //  DarkGray: 'hsl(0, 0%, 52%)',
      
    //  bgLightGray: 'hsl(0, 0%, 98%)',
    //  white:'hsl(0, 0%, 100%)'
    
        blue:{
            default:'hsl(200, 15%, 8%)',
          
            gray: 'hsl(0, 0%, 52%)',
            dark: 'hsl(209, 23%, 22%)',
            
            white: 'hsl(0, 0%, 100%)'
        },

        bgBlue: {
            default: 'hsl(0, 0%, 98%)',
            dark:'hsl(207, 26%, 17%)',
        }


    
    },
    extend: {},
  },
  plugins: [],
}