/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:()=>({
        'custom-background-1':"url('/src/assets/pexels-felix-mittermeier-1146134.jpg')",
        'custom-background-2':"url('/src/assets/wallpaperflare.com_wallpaper (2).jpg')",
        'custom-background-3':"url('/src/assets/wallpaperflare.com_wallpaper (1).jpg')",
        'custom-background-4':"url('/src/assets/wallpaperflare.com_wallpaper (3).jpg')",
      })
    },
  },
  plugins: [],
}

