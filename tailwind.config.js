export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          surface2: '#334155',
          text: '#f1f5f9',
          textSecondary: '#cbd5e1',
        }
      }
    },
  },
  plugins: [],
}

