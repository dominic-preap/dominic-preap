import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { jetbrainsMono } from '@/lib/font';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Dominic Preap',
  description: 'Full-stack engineer — React, React Native, NestJS, GraphQL.'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn('h-full', 'antialiased', jetbrainsMono.variable)} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Dominic Preap" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
