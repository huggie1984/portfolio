import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context/theme-context';
import { DarkModeToggle } from '@/components/dark-mode-toggle/dark-mode-toggle';
import { Toolbox } from '@/components/icons/Toolbox';
import { Food } from '@/components/icons/Food';
import { Home } from '@/components/icons/Home';
import { Github } from '@/components/icons/Github';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Matthew Huggett's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <body
        className={`text-bamboo-800 dark:text-white bg-bamboo-50 dark:bg-bamboo-800 py-4 sm:py-8 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
          <nav className="flex gap-6 flex-wrap items-center justify-center">
            <DarkModeToggle />
            <Link
              href="/"
              className="flex items-center gap-2 link-dark dark:link-light"
            >
              <Home />
              <span className="hidden sm:block">Home</span>
            </Link>
            <Link
              href="/git-projects"
              className="flex items-center gap-2 link-dark dark:link-light"
            >
              <Github />
              <span className="hidden sm:block">Projects</span>
            </Link>
            <Link
              href="/recipe-blog"
              className="flex items-center gap-2 link-dark dark:link-light"
            >
              <Food />
              <span className="hidden sm:block">Recipe blog</span>
            </Link>
            <Link
              href="/toolbox"
              className="flex items-center gap-2 link-dark dark:link-light"
            >
              <Toolbox />
              <span className="hidden sm:block">Toolbox</span>
            </Link>
          </nav>
          {children}
        </div>
      </body>
    </ThemeProvider>
  );
}
