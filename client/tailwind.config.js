/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0BCEAF",
        seconday: "#343A40",
        lightgray: "#9EA4A9",
        yellow: "#FFC107",
        red: "#DC3545",
        blue: "#17A2B8",
        paragraf: "#6c757d",
      },
      fontWeight: {
        title: 900,
        paragraph: 700,
        small: 400,
      },
    },
  },
  plugins: [],
};
