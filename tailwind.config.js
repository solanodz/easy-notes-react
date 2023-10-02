/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  "darkMode": "class",
  theme: {
    extend: {},
    colors: {
      "transparente": "transparent",
      "blanco": "#ffffff",
      "negro": "#000000",
      "celeste": "#00A3FF",
      "celesteClaro": "#12374C",
      "gris": "#2f2f2f",
      "grisClaro": "#9f9f9f",
      "bordes": "#2d2d2d",
      "rojo": "#dc2626"
    },
    fontFamily: {
      "titulos": "Poppins",
      "negro": "IBM Plex Sans",
    }
  },
  plugins: [nextui()],
}

