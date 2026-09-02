import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C2025',
        'deep-charcoal': '#111315',
        timber: '#8A552F',
        'wood-brown': '#6E4123',
        bronze: '#A56A35',
        canvas: '#F3F0EB',
        'warm-grey': '#D8D3CC',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
} satisfies Config
