/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#166534',
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
