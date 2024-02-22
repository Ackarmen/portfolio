import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const supreme = localFont({
  src: [
    { path: '../assets/fonts/Supreme/Fonts/WEB/fonts/Supreme-Medium.woff2' },
  ],
  variable: '--font-supreme',
});

const bespokeStencil = localFont({
  src: [
    {
      path: '../assets/fonts/BespokeStencil/Fonts/WEB/fonts/BespokeStencil-Medium.woff2',
    },
  ],
  variable: '--font-bespokeStencil',
});

export const metadata: Metadata = {
  title: 'Sofiane Lyafori - Frontend developer | Personal Portfolio',
  description:
    'Explore my personal portfolio, showcasing a Frontend Developer specializing in React JS (Next.js) and TypeScript. Discover projects and skills in modern web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${supreme.variable} ${bespokeStencil.variable} !scroll-smooth`}
    >
      <body className="font-supreme bg-gray-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-[#1e253a] dark:text-neutral-200 dark:text-opacity-90">
        <div className="absolute w-full h-[275rem] bg-[radial-gradient(#5eead4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_97%,transparent_100%)] dark:bg-[radial-gradient(#134e4a_1px,transparent_1px)] -z-10"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Analytics />
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
