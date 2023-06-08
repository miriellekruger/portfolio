/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background1: "#F8F4E3",
        dark1: "#392F5A",
        dark1_lighter: "#5B42A6",
        dark2: "#1B512D",
        background2: "#E2EFDE",
        background2_d: "#A5E895",
        link_hover: "#FF66E3",
        link: "#7B287D",
      },
      fontFamily: {
        "altFont": ['var(--font-noto)'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


// #3D348B
// #7678ed
// #f7b801
// #F18701
// #F35B04
// #2CEAA3
// #7CFEF0