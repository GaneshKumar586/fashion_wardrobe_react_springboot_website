/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
        custom: ['Open Sans', 'sans-serif'],  // Custom font
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}