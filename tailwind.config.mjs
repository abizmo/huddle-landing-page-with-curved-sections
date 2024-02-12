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
    extend: {
      backgroundImage: {
        'top-desktop-footer': "url('/images/bg-footer-top-desktop.svg')",
        'top-mobile-footer': "url('/images/bg-footer-top-mobile.svg')",
        'top-desktop-1': "url('/images/bg-section-top-desktop-1.svg')",
        'bottom-desktop-1': "url('/images/bg-section-bottom-desktop-1.svg')",
        'top-desktop-2': "url('/images/bg-section-top-desktop-2.svg')",
        'bottom-desktop-2': "url('/images/bg-section-bottom-desktop-2.svg')",
        'top-mobile-1': "url('/images/bg-section-top-mobile-1.svg')",
        'bottom-mobile-1': "url('/images/bg-section-bottom-mobile-1.svg')",
        'top-mobile-2': "url('/images/bg-section-top-mobile-2.svg')",
        'bottom-mobile-2': "url('/images/bg-section-bottom-mobile-2.svg')"
      },
      screens: {
        mxmd: { max: '768px' }
      }
    }
  },
  plugins: []
}
