import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Anil Khemchand & Associates LLP | Chartered Accountants',
    template: '%s | Anil Khemchand & Associates LLP',
  },
  description: 'Professional auditing, taxation, and consulting services for global businesses. Led by Anil Khemchand & Associates LLP, adhering to the highest professional standards.',
  keywords: ['Anil Khemchand', 'Anil Khemchand & Associates LLP', 'Chartered Accountant', 'Audit', 'Taxation', 'GST Advisory', 'Financial Consulting', 'Mumbai Accountants', 'ICAI Compliant'],
  authors: [{ name: 'Anil Khemchand & Associates LLP' }],
  creator: 'Anil Khemchand & Associates LLP',
  metadataBase: new URL('https://anilkhemchand.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anilkhemchand.com',
    title: 'Anil Khemchand & Associates LLP | Chartered Accountants',
    description: 'Professional auditing, taxation, and consulting services for global businesses.',
    siteName: 'Anil Khemchand & Associates LLP',
    images: [
      {
        url: 'https://picsum.photos/seed/anil-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'Anil Khemchand & Associates LLP Office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Khemchand & Associates LLP | Chartered Accountants',
    description: 'Professional auditing, taxation, and consulting services.',
    images: ['https://picsum.photos/seed/anil-twitter/1200/600'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
