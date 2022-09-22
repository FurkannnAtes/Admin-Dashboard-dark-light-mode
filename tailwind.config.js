/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkModeBg: "#000",
        lightModeBg: "rgb(247,245,249)",
        purpleBg: "rgb(118,127,226)",
        lightBlueBg: "rgb(226,226,241)",
      },
      borderColor: {
        purpleBorder: "rgb(118,127,226)",
        lightModeBorder: "#000",
        darkModeBorder: "#FFF",
      },
      textColor: {
        purpleText: "rgb(118,127,226)",
      },
    },
  },
  plugins: [],
};
