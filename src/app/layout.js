import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL('https://dammamtobahrain.com'),
  title: {
    default: "Dammam to Bahrain Taxi | Luxury Transport & Airport Transfers",
    template: "%s | Dammam into Bahrain Taxi"
  },
  description: "Reliable executive taxi service connecting Saudi Arabia (Dammam, Khobar, Jubail) and Bahrain. 24/7 airport transfers, business travel, and family transport.",
  keywords: ["taxi dammam to bahrain", "khobar to bahrain taxi", "bahrain airport transfer", "saudi bahrain causeway taxi", "vip taxi saudi arabia", "jubail to bahrain"],
  alternates: {
    canonical: './',
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
  openGraph: {
    title: 'Dammam to Bahrain Taxi | Premium Cross-Border Service',
    description: 'Book your private ride from Dammam, Khobar, or Jubail to Bahrain. Luxury cars, professional drivers, and seamless causeway crossing.',
    url: 'https://dammamtobahrain.com',
    siteName: 'Dammam to Bahrain Taxi',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
