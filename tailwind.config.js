/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}', "./node_modules/tailwind-datepicker-react/dist/**/*.js", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    /*eslint-env node*/
    require('flowbite/plugin')
]
}

