/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
     
      'xl': {'min': '1001px'},
      // => @media (max-width: 1023px) { ... }

      'lg': {'max': '1000px'},
      // => @media (max-width: 767px) { ... }
      'md': {'max': '700px'},
      'sm': {'max': '400px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}