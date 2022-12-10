/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        "25vw": "25vw",
        "50vw": "50vw",
        "75vw": "75vw",
      },
      height: {
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh",
      },
    },
  },
  plugins: [],
};
