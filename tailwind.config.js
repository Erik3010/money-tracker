/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },
      colors: {
        blue: {
          50: "#dceefb",
          100: "#b6e0fe",
          200: "#84c5f4",
          300: "#62b0e8",
          400: "#4098d7",
          500: "#2680c2",
          600: "#186faf",
          700: "#0f609b",
          800: "#0a558c",
          900: "#003e6b",
        },
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};

