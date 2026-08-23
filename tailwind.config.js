module.exports = {
  content: ["./*.html", "./insights/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        brand: {
          ink: '#17233F',
          inkHover: '#0F1830',
          inkElevated: '#202E52',
          paper: '#F1EAD9',
          paperMuted: '#EAE1CC',
          card: '#FBF8F1',
          brass: '#A9823C',
          rule: '#E4DCC6',
          muted: '#71695A',
          text: '#2E2B22',
          positive: '#4B6858',
          caution: '#8C7A4A',
          negative: '#9B5A45',
        },
      },
    },
  },
};
