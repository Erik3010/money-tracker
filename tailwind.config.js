/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
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
      animation: {
        "fade-in": "fadeIn 0.15s ease-in-out",
        "fade-out": "fadeOut 0.15s ease-in-out",
        "zoom-in": "zoomIn 0.15s ease-in-out, fadeIn 0.15s ease-in-out",
        "zoom-out": "zoomOut 0.15s ease-in-out, fadeOut 0.15s ease-in-out",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        fadeOut: { from: { opacity: 1 }, to: { opacity: 0 } },
        zoomIn: {
          from: { scale: "0.95" },
          to: { scale: "1" },
        },
        zoomOut: {
          from: { scale: "1" },
          to: { scale: "0.95" },
        },
      },
    },
  },
  plugins: [],
};
