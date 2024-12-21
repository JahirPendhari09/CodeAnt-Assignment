/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: '0 0 24px 0 rgba(8, 23, 53, 0.16)', 
      },
      // Add custom colors
      colors: {
        slate: {
          100: '#0049C6',
          200: '#1570EF',
          300: '#EFF8FF',
          400: '#B2DDFF',
          500: '#FAFAFA'
        },
      },
    },
  },
  plugins: [],
};
