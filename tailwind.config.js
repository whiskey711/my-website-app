/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        "bungee": ['Bungee', 'cursive'],
        'impact': ['Maximum Impact', 'sans-serif']
      },
      colors: {
        "oxford-blue": "#14213D",
        "orange-peel": "#FCA311",
        "platinum": "#E5E5E5",
        "jet-black": "#353535",
        "current-green": "#3C6E71",
        "indigo-dye": "#284B63",
        "space-cadet": "#2B2D42",
        "cool-gray": "#8D99AE",
        "anti-flash-white": "#EDF2F4",
        "phantone-red": "#EF233C",
        "fire-engine-red": "#D90429"
      },
      animation: {
        slidein: "slide 0.7s ease-in",
        wiggle: "wiggle 1s ease-in-out infinite"
      },
      keyframes: {
        slide: {
          "0%": {transform: "translateX(20px)"},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ]
}
