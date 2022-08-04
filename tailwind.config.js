/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14759e",

          secondary: "#E8F2F6",

          accent: "#14759e",

          neutral: "#E8F2F6",

          "base-100": "#FFFFFF",

          info: "#1a96cb",

          success: "#36D399",

          warning: "#E8F2F6",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
