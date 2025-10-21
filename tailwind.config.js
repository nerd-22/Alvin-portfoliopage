/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  content: [
    "./index.html",           // Include your main HTML
    "./*.{html,js}",          // Include any HTML/JS files in root
    "./src/**/*.{html,js}"    // Include all files inside src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
