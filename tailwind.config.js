/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "'Poppins', sans-serif"
      },
      colors:{
        customorange: "#ea801f",
        customblue: "#046ba2",
      },
      screens: {
        'sm': '640px',   // Small screens and up
        'md': '768px',   // Medium screens and up
        'msd': '860px',
        'mxl': '1000px',
        'lg': '1024px',  // Large screens and up
        'xl': '1280px',  // Extra large screens and up
        '2xl': '1536px', // 2XL screens and up
        'xsm': '480px',  // Screens at least 480px wide
        'xsmm': '430px',  // Screens at least 430px wide
        'mxsm': '390px',
        'xsl': '360px'
        
      },
      animation: {
        slideDown: 'slideDown 0.6s ease-in-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
