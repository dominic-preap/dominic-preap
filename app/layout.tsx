import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { siteConfig } from '@/config/site';
import { jetbrainsMono } from '@/lib/font';
import { cn } from '@/lib/utils';

export async function generateMetadata(): Promise<Metadata> {
  const title = `${siteConfig.name} | ${siteConfig.position}`;
  const image = siteConfig.ogImage;
  const description = siteConfig.description;
  const keywords = siteConfig.keywords;

  return {
    title,
    description,
    keywords,
    authors: [{ name: title, url: siteConfig.url }],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [image],
      siteName: siteConfig.name,
      // ---
      countryName: 'Cambodia',
      url: siteConfig.url,
      emails: [siteConfig.email]
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description,
      images: [image],
      creator: '@DominicPreap'
    }
  };
}

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
        <Analytics />
      </body>
    </html>
  );
}
