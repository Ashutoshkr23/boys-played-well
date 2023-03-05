/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'blue-1': '0 0px 30px rgba(61, 116, 167, 0.5)',
        'orange-1': '0 0px 30px rgba(236, 129, 64, 0.5)',
        'green-1': '0 0px 30px rgba(0, 153, 102, 0.5)',
      }
      },
    },
  plugins: [],
}
