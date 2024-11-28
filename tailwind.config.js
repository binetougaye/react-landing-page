/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '600px', // Ajoutez une classe avec une largeur spécifique
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(115deg, #f56565 0%, #febebe 100%)', // Couleurs définies en hexadécimal
      },
      colors: {
        'custom-rgb-1': 'rgb(56,178, 172)',
        'custom-rgb-2': 'rgb(76, 81, 191)',
        'custom-rgb-3': 'rgb(245, 101, 101)',
        'custom-color': 'rgb(56,178, 172)',
        'custom-color-2': 'rgb(76, 81, 191)',
        'custom-color-3': 'rgb(245, 101, 101)'/// Ajouter votre couleur RGB ici
      },

    },
  },
  plugins: [],
}