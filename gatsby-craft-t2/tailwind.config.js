const colors = {
  brand: {
    one: '#2B5F7B',
    two: '#F1682B',
  },
};

const fonts = {
  sans: ['Asap Condensed', 'sans-serif'],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fonts,
    extend: {
      colors,
      borderRadius: {
        md: '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
