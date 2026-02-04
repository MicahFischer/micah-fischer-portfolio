/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        'soft-xl': '0 24px 60px -30px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};
