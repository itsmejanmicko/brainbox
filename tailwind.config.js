/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        primary:"#020617"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}

