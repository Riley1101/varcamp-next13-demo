/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#131127",
        "theme-primary": "#f056c8",
        "theme-primary-opaque": "#f056c71a",
        "theme-accent": "#88ced3",
        "theme-accent-opaque": "#88ced309",
        "theme-body": "#cbd5e1",
      },
    },
  },
  plugins: [],
};
