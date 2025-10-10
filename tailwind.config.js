/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        bgDark: "#0a0f1a",
        nodePrimary: "#00fff2",
        nodeAccent: "#6f00ff",
        nodeSoft: "#38bdf8",
        textLight: "#f8fafc",
        textSub: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono:["Fira Code", "monospace"],
      } 
    },
  
  plugins: [],
}
});

