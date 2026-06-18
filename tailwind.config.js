/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Archivo Black', 'Space Grotesk', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#FFFFFF',
        'bg-dark': '#0A0A0A',
        surface: '#FFFFFF',
        'surface-dark': '#161616',
        'text-primary': '#0A0A0A',
        'text-primary-dark': '#F5F5F5',
        'text-muted': '#3A3A3A',
        'text-muted-dark': '#A8A8A8',
        'accent-primary': '#FF5A1F',
        'accent-primary-dark': '#FF7A40',
        'accent-secondary': '#E8FF3D',
        'accent-secondary-dark': '#E8FF3D',
        'accent-tertiary': '#3D5AFE',
        'accent-tertiary-dark': '#5C76FF',
        'border': '#0A0A0A',
        'border-dark': '#F5F5F5',
      },
      borderRadius: {
        DEFAULT: '0',
        '2xl': '0',
        '3xl': '0',
      },
      boxShadow: {
        'sm': '3px 3px 0 var(--border-color)',
        'md': '4px 4px 0 var(--border-color)',
        'lg': '6px 6px 0 var(--border-color)',
        'xl': '8px 8px 0 var(--border-color)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
