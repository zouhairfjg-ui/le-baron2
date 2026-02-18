
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
          }
        }
      },
      animation: {
        "bounce-slow": "bounce-slow 3s infinite"
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
