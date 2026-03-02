/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5EDE3", // Warm Cream
        accent: "#C9A87C", // Gold/Caramel
        charcoal: "#2C2C2C", // Dark Text
        blush: "#E8D5C4", // Secondary
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
