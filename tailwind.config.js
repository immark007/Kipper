/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: '#0F172A', // Substitua pelo seu código hexadecimal
        titleGray: '#475569', // Substitua pelo seu código hexadecimal
        borderColor: '#5222D0', // Substitua pelo seu código hexadecimal
        customColor: '#34D399' // Adicione outras cores personalizadas conforme necessário
      },
    },
  },
  plugins: [],
}

