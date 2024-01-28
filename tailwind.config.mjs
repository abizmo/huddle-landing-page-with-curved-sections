/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: {
        400: 'hsl(322, 100%, 66%)',
        200: 'hsl(322, 100%, 78%)'
      },
      secondary: {
        400: 'hsl(0, 100%, 63%)'
      },
      neutral: {
        700: 'hsl(192, 100%, 9%)',
        200: 'hsl(207, 100%, 98%)'
      }
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      heading: ['"Poppins"', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
