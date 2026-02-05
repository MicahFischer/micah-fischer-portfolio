/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        'soft-xl': '0 20px 45px -30px rgba(17, 17, 17, 0.22)',
        'soft-lg': '0 16px 36px -26px rgba(17, 17, 17, 0.18)'
      }
    }
  },
  plugins: []
};
