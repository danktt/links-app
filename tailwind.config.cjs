/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E29212",
          secondary: "#1183a2",
          accent: "#37cdbe",
          neutral: "#000",
          "base-100": "#2a303c",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
