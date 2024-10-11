import type { Config } from 'tailwindcss';

const config: Config = {
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
      },
      container: {
        center: true,
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
