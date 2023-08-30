/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Branco-gelo1': '#F9F8FE',
        'Cinza-Escuro': '#1F1F1F',
        'Cinza-Escuro2':'#474747',
        'Cinza-light':'#666666',
        'Cinza-light2':'#8F8F8F',
        'Cinza-Branco':'#CCCCCC',
        'Branco-Cinza':'#F5F5F5',
        'Branco':'#FFFFFF',
        'Rosa': '#C92071',
        'Lilás':'#B5B6F2',
        'Roxo':'#991956',
        'Rosa-Claro':'#EE4266',
        'Verde':'#52CA76',
        'Amarelo':'#F6AA1C',
        'Rosa-Fade':'#EDABCA',
        'Lilás-Fade':'#EFEFFF',
      },
    },
  },
  plugins: [],
}

