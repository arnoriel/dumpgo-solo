import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#F4F0E9',
        surface:      '#FFFFFF',
        ink:          '#1A1714',
        'ink-muted':  '#6B6560',
        'ink-faint':  '#A09890',
        amber:        '#E07A2F',
        'amber-dark': '#C4671F',
        'amber-soft': '#FBF0E3',
        border:       '#E4DDD2',
        navy:         '#1E2D4E',
        'wa-green':   '#25D366',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}

export default config
