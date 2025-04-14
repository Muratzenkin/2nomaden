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
    },
  },
  plugins: [],
};

export default config;
