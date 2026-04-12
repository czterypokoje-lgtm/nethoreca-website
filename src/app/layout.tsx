import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { organizationSchema, localBusinessSchema } from "@/lib/structured-data";

// Optimized font loading - subset and swap for faster rendering
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-ibm",
});

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nethoreca.pl'),
  title: {
    default: 'NetHoreca - Tekstylia Hotelowe, Chemia Ecolab, Selpak Professional | Wynajem i Sprzedaż',
    template: '%s | NetHoreca'
  },
  description: 'Kompleksowe rozwiązania dla hoteli - profesjonalne tekstylia hotelowe (ręczniki, pościel, szlafroki), chemia Ecolab, produkty papierowe Selpak Professional i dozowniki. Wynajem i sprzedaż. 500+ hoteli w Polsce.',
  keywords: [
    'tekstylia hotelowe',
    'ręczniki hotelowe',
    'pościel hotelowa',
    'wynajem tekstyliów hotelowych',
    'chemia Ecolab',
    'środki czystości dla hoteli',
    'partner Ecolab Polska',
    'wyposażenie hoteli',
    'szlafroki hotelowe',
    'obrusy hotelowe',
    'sprzęt sprzątający',
    'wózki Mobilette',
    'mopy Rasant',
    'Selpak Professional',
    'dozowniki papierowe',
    'papier toaletowy hotelowy',
    'pralnia dla hoteli',
    'wynajem pościeli',
    'housekeeping hotelowy',
  ],
  authors: [{ name: 'NetHoreca' }],
  creator: 'NetHoreca',
  publisher: 'NetHoreca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://nethoreca.pl',
    languages: {
      'pl': 'https://nethoreca.pl',
      'x-default': 'https://nethoreca.pl',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://nethoreca.pl',
    siteName: 'NetHoreca',
    title: 'NetHoreca - Tekstylia Hotelowe, Chemia Ecolab, Selpak Professional',
    description: 'Kompleksowe rozwiązania dla hoteli - tekstylia, chemia Ecolab, Selpak Professional, sprzęt. 500+ hoteli w Polsce. Wynajem i sprzedaż.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NetHoreca - Kompleksowe rozwiązania dla hoteli w Polsce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NetHoreca - Tekstylia Hotelowe, Chemia Ecolab, Selpak Professional',
    description: 'Kompleksowe rozwiązania dla hoteli - tekstylia, chemia Ecolab, Selpak, sprzęt. 500+ hoteli w Polsce.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={ibmPlexSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//nethoreca.pl" />
      </head>
      <body className={ibmPlexSans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

