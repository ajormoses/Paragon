/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFEFF",
        primaryPurple: "#5241C6",
        textColor1: "#5342C8",
        textColor2: "#4FD22E",
      },
      fontFamily: {
        headerfont: ["Lexend", "sans-serif"],
      },
      width: {
        container: "90%",
      },
      height: {
        bgheight: "760px",
        articlethree: "450px",
        line: "200px",
      },
      screens: {
        xs: "320px",

        sm: "500px",

        md: "700px",

        lg: "1000px",

        xl: "1200px",

        x: "1400px",
      },
    },
  },
  plugins: [],
};
