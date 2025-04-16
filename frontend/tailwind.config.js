/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@radix-ui/**/*",
  ],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      colors: {
        brand: {
          primary: "#000d6b",
          background: "#0b0b0b",
          accent: "#7dd3fc",
          highlight: "#ec4899",
          text: "#f1f5f9",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
