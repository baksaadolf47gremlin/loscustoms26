/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#111111',
        card: '#141414',
        surface: '#1C1C1C',
        accent: '#E8B84B',
        'accent-light': '#FFD166',
        'accent-dark': '#C9952A',
        muted: '#6B6B6B',
        subtle: '#2A2A2A',
        light: '#F0F0F0',
        border: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(232,184,75,0.25)',
        'gold-lg': '0 0 40px rgba(232,184,75,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(232,184,75,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(232,184,75,0.5)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
