/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#1A1A1A',
        accent: '#E8B84B',
        'accent-dark': '#C9952A',
        surface: '#242424',
        muted: '#6B6B6B',
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'custom': '2.5rem',
      }
    },
  },
  plugins: [],
}
