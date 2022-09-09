/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configured so that I have added the paths to all of my template files:
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
