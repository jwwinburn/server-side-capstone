/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#5680E9",
                   
          "secondary": "#84CEEB",
                   
          "accent": "#5AB9EA",
                   
          "neutral": "#8860D0",
                   
          "base-100": "#C1C8E4",
                   
          "info": "#2697E8",
                   
          "success": "#72EECD",
                   
          "warning": "#F9D266",
                   
          "error": "#F7755E",
                   },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'Poppins Pro'],
      'Roboto': ['Roboto']
    },
    extend: {},
  },
  plugins:[require("daisyui")],
}