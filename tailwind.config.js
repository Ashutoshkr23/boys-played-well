/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'blue-1': '0 0px 30px rgba(61, 116, 167, 0.5)',
        'blue-2': '0 0px 30px rgba(61, 116, 167, 0.3)',
        'orange-1': '0 0px 30px rgba(236, 129, 64, 0.5)',
        'orange-2': '0 0px 30px rgba(227, 101, 101, 0.5)',
        'green-1': '0 0px 30px rgba(0, 153, 102, 0.5)',
        'green-2': '0 0px 30px rgba(76, 137, 104, 0.5)',
        'text': '0 0px 6px rgba(255, 147, 87, 1)',

      }
      },
    },
  plugins: [],
}
