/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        'custom-pink': '#FF00B8',
      },
      backgroundImage: {
        'custom-corner-gradient': 'radial-gradient(at top left, rgba(255, 0, 184, 0.3), rgba(255, 255, 255, 0.3))',      },
      spacing: {
        '333': '333px',
        '279': '279px',
        '259': '259px',
        '626': '626px',
      },
      
    },
  },
  plugins: [],
}