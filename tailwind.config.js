/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {     
          from : { transform: 'translateX(100 %)' },
          to :{  transform: 'translateX(-100 %)' }
       }
      },
       animation: {
        wiggle: 'wiggle 15s linear infinite',
      }
      },
    },
  plugins: [],
}
