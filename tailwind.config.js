/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { "libre-baskerville": ["Libre Baskerville", "serif"] },
      fontSize: {
        "custom-xxx-s": "0.563rem",
        "custom-xx-s": "0.75rem",
        "custom-x-s": "0.813rem",
        "custom-s": "0.875rem",
        "custom-m": "0.938rem",
        "custom-l": "1.125rem",
        "custom-x-l": "1.5rem",
        "custom-xx-l": "3.5rem",
        "custom-xxx-l": "6.25rem",
        "custom-xxxx-l": "12.5rem",
      },
      colors: {
        primary: "#F3F3F3",
        secondary: "#E5E5E5",
        tertiary: "#7D7D7D",
      },
    },
  },
  plugins: [],
};
