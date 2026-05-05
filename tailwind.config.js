/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BrandGold: "#D4AF37",
        SteelGrey: "#4A4A4A",
        SoftCream: "#FDFCF0",
        Obsidian: "#080808",
        Alabaster: "#F8F8F8",
        MutedSlate: "#94A3B8",
        ChampagneGold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
