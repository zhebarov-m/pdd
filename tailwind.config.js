/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: true,
    screens: {
      'mob-s': '320px',
      // => @media (min-width: 320px) { ... }

      'mob-m': '375px',
      // => @media (min-width: 375px) { ... }

      'mob-l': '425px',
      // => @media (min-width: 425px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'laptop-m': '1080px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

