/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:()=>({
        'custom-background':"url('./src/assets/pexels-felix-mittermeier-1146134.jpg')"
      })
    },
  },
  plugins: [],
}

