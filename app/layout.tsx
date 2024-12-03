import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context/theme-context';
import { SiteNav } from '@/components/site-nav/site-nav';

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
          <SiteNav />
          {children}
        </div>
      </body>
    </ThemeProvider>
  );
}
