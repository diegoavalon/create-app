import type { Config } from 'tailwindcss'

import { ehiTailwindTheme } from '@medicare-tools/styles/src/tokens'

export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: ehiTailwindTheme,
  plugins: []
} satisfies Config
