import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context/theme-context';

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
        className={`text-teal-950 dark:text-cyan-50 bg-cyan-50 dark:bg-teal-950 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </ThemeProvider>
  );
}
