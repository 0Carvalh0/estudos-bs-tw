/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      darkMode: ["selector"],
      colors: {
        "custom-purple": {
          200: "#D9C3FF",
          300: "#BFA3FF",
          400: "#A380FF",
          500: "#8A5DFF",
        },
      },
      spacing: {
        extremamentexl: "4rem",
      },
    },
  },
  plugins: [],
};

