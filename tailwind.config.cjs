/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#F2F2F2'
      },
      boxShadow: {
        's1': '0 2px 20px hsla(0, 0%, 0%, 0.06)'
      },
      outlineColor: {
        a: '#676FA3',
        b: '#FFE69A',
        c: '#FFD24C'
      }
    }
  },
  plugins: []
};
