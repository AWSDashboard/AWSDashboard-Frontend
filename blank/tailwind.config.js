/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/next/app/**/*.{js,jsx,ts,tsx}',
    './apps/next/pages/**/*.{js,jsx,ts,tsx}',
    './apps/expo/app/**/*.{js,jsx,ts,tsx}',
    './packages/app/**/*.{js,jsx,ts,tsx}', // ¡Aquí vive tu código compartido!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}