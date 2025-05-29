// tailwind.config.js
module.exports = {
  darkMode: 'class',  // ✅ THIS IS REQUIRED FOR MANUAL DARK MODE TOGGLING
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'pink-violet-white': 'linear-gradient(135deg, #ffb6c1, #b19cd9, #ffffff)',
      },
      animation: {
        'gradient-bg': 'gradientBG 15s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
