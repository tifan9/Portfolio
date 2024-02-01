/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      screen:{
        "sm":"480px"
      }
    },
  },
  plugins: [],
}

