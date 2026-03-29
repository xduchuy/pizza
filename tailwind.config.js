/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#120A07',
        surface: '#23130D',
        tomato: '#B3311F',
        oven: '#D96A1D',
        cheese: '#F2C14E',
        crust: '#F7E7CE',
        crustDark: '#7A4A2A',
        basil: '#5E8B4A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
