/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a", // This makes 'bg-dark' work
        primary: "#6366f1",
        secondary: "#ec4899",
      },
    },
  },
  // 🛑 IMPORTANT: ADD THE PLUGIN HERE 🛑
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}