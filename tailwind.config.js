/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3d00b7",

          secondary: "#f7f8fa",

          accent: "#868686",

          neutral: "#565656",

          "base-100": "#FFFFFF",

          info: "#4f4f52",

          success: "#2639ed",

          warning: "#007ab9",

          errorr: "#14c8b0",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
