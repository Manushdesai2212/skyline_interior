/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        bg: '#FBF4EA',
        'bg-dark': '#1C1610',
        surface: '#FFFFFF',
        'surface-dark': '#241C15',
        'text-primary': '#2E2117',
        'text-primary-dark': '#F2E8DA',
        'text-muted': '#6E5F4F',
        'text-muted-dark': '#B8A890',
        'accent-primary': '#C2754F',
        'accent-primary-dark': '#D98C63',
        'accent-secondary': '#8A9466',
        'accent-secondary-dark': '#9CAB7A',
        'accent-tertiary': '#D9A878',
        'accent-tertiary-dark': '#C9985F',
        'border': '#E8DCC8',
        'border-dark': '#3A2E22',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(194, 117, 79, 0.1)',
        'lg': '0 10px 15px rgba(194, 117, 79, 0.1)',
        'xl': '0 20px 25px rgba(194, 117, 79, 0.1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
