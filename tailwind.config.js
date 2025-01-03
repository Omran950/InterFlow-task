/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#004956",
        mainHover: "#013b45",
        secondary: "#BAF3E6",
        secondaryHover: "#76E8CD",
        textColor: "#004D5A",
        borderColor: "#09414B",
      },
      fontFamily: {
        cairo: ["cairo"],
      },
    },
  },
  plugins: [],
};
