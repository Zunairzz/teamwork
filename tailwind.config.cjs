/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f5f5f7',
          dark: '#050816'
        },
        surface: {
          light: '#ffffff',
          dark: '#0b1120'
        },
        accent: {
          DEFAULT: '#6366f1',
          soft: '#a5b4fc'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.35)'
      }
    }
  },
  plugins: []
};

