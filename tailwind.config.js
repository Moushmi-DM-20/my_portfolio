/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#d03d36',
          50: '#fdf3f2',
          100: '#fce5e3',
          200: '#facfcb',
          300: '#f4aaa2',
          400: '#ea786e',
          500: '#d03d36',
          600: '#b82f29',
          700: '#922626',
          800: '#751e1e',
          900: '#5a1717',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
