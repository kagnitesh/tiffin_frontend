/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "classic-black": "#0a0a0a", // dark black
        "classic-grey": "#2a2a2a", // lighter shade of black for surfaces
        "classic-accent": "#ffffff", // white for contrasting text
        "primary": '#347928',    // Green shade
        "secondary": '#C0EBA6',   // Light green shade
        "light-yellow": "#FFF6E8"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    typography,
  ],
};
