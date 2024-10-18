import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector', // or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        inner: 'inset 2px 2px 4px rgba(0, 0, 0, 0.6)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bamboo: {
          50: '#e5f2c9',
          200: '#b6d96c',
          400: '#7fa643',
          600: '#3c5940',
          800: '#23260c',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding for all breakpoints
          // sm: '1rem', // Padding for the sm breakpoint
          // md: '1rem', // Padding for the md breakpoint
          // lg: '0', // Padding for the lg breakpoint
          // xl: '0', // Padding for the xl breakpoint
          // '2xl': '0', // Padding for the 2xl breakpoint
        },
        screens: {
          sm: '100%', // Override for sm breakpoint
          md: '768px', // Override for md breakpoint
          lg: '1024px', // Override for lg breakpoint
          xl: '1024px', // Override for xl breakpoint
          '2xl': '1024px', // Override for 2xl breakpoint
        },
      },
    },
  },
  plugins: [],
};
export default config;
