/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#07111f',
          900: '#0b1628',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45, 212, 191, 0.18), 0 24px 80px -28px rgba(45, 212, 191, 0.35)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.85)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-dot': 'pulseDot 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
