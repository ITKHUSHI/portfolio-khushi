/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bloom: "bloom 2s ease-out forwards",
        growStem: "growStem 2s ease-in-out 1s forwards",    
        rotate :"rotate 1s linear ",
        progressLine:" animate 1.5s 0.5s cubic-bezier(1,0,0.5, 1) forwards"
      
      
      },
      keyframes:{
       
        bloom: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        growStem: {
          "0%": { height: "0px", opacity: "0" },
          "100%": { height: "100px", opacity: "1" },
        },
      }
    },
  
  plugins: [],
}
});

