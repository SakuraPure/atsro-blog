const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1A1A1A',
        'card-dark': '#111111',
        'card-light': '#E5E5E5',
        'text-dark-primary': '#FFFFFF',
        'text-dark-secondary': '#CCCCCC',
        'text-light-primary': '#000000',
        'text-light-secondary': '#666666',
      },
      boxShadow: {
        'metal': '0 0 1px rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.4)',
        'metal-hover': '0 0 1px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0',
      'md': '0',
      'lg': '0',
      'xl': '0',
      '2xl': '0',
      '3xl': '0',
      'full': '0',
    },
  },
  plugins: [
    typography(),
  ],
}