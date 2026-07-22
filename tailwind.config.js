/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red:        '#ff3131',
          'red-dark': '#983b3b',
          'red-mid':  '#c84645',
          navy:       '#09152e',
          'navy-mid': '#272f44',
          'navy-light':'#535774',
          purple:     '#4d568d',
          'purple-muted': '#686f9a',
        },
        surface: {
          DEFAULT: '#272f44',
          dark:    '#09152e',
          darker:  '#060d1e',
        },
        cream: '#F5F0E8',
        'cream-muted': '#686f9a',
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans:  ['Josefin Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra:  '0.5em',
      },
      transitionTimingFunction: {
        'expo-out':    'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      animation: {
        'fade-in':   'fadeIn 0.6s ease-out forwards',
        'fade-up':   'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeUp:  { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        lineGrow:{ from: { scaleX: '0' }, to: { scaleX: '1' } },
      },
    },
  },
  plugins: [],
}
