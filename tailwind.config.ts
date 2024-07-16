import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'bottom-zinc-400': '0 5px 0 0 #94a3b8',
        'bottom-violet-950': '0 5px 0 0 #2e1065',
        'bottom-emerald-700': '0 5px 0 0 #047857',
      },
      spacing: {
        '05': '0.125rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extends: {
      translate: ['active'],
    }
  },
  plugins: [],
}
export default config