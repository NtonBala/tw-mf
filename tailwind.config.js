/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey 1000ms linear infinite",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
    require("./plugins/buttonPlugin"),
    require("./plugins/diagonalRadius"),
  ],
};
