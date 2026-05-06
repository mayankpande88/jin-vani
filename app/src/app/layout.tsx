import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { ThemeScript } from '@/components/ThemeScript';
import { Topbar } from '@/components/Topbar';
import { Tabbar } from '@/components/Tabbar';
import { OnboardingModal } from '@/components/OnboardingModal';
import { ServiceWorker } from '@/components/ServiceWorker';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Jin-vani · Digambara Scripture Library',
    template: '%s · Jin-vani',
  },
  description:
    'A reading library for Digambara Jain texts — Bhaktamara, Tattvartha, Samayasara, Chhah Dhala, and more — in Sanskrit, Hindi, and English.',
  manifest: (process.env.NEXT_PUBLIC_BASE_PATH ?? '') + '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Jin-vani',
  },
};

export const viewport: Viewport = {
  themeColor: '#0E0B08',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <ThemeScript />
      </head>
      <body className="has-tabbar">
        <Topbar />
        {children}
        <SiteFooter />
        <Tabbar />
        <OnboardingModal />
        <ServiceWorker />
      </body>
    </html>
  );
}
