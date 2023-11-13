/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif"
      },
      colors: {
        "primary-color": "#27374d",
        "secondary-color": "#526d82",
        "tertiary-color": "#9db2bf",
        "quaternary-color": "#dde6ed",
        "gray-color": "#828282",
        "card-color": "#212121",
        "menu-color": "#172554"
      },
      backgroundImage: {
        "open-menu": "url('./assets/menu.svg')",
        "close-menu": "url('./assets/menu.svg')"
      }
    },
  },
  plugins: [],
}

