/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b4d8",
        secondary: "#0077b6",
        text: "#03045e",
        basic: "#90e0ef",
        important: "#caf0f8",
      },
    },
  },
  plugins: [],
};
