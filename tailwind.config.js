const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      "transparente": "transparent",
      "blanco": "#ffffff",
      "textos": "#1C211F",
      "verdeClaro": "#9FE4CB",
      "verdeOscuro": "#00AD6F",
      "secundario": "#a1a1a1",
      "rojo": "#E46262"
    },
    fontFamily: {
      "titulos": "Poppins",
      "textos": "IBM Plex Sans",
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}

