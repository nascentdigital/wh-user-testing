/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'plan-button': "text-center text-zinc-500 text-sm font-bold font-['Helvetica Now Text SA'] leading-none h-[48px] w-[134px]",
      'text-example': 'text-[100px]'
    },
  },
  plugins: [],
}
