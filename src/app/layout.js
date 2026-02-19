import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import StickyCTA from "@/components/sections/StickyCTA";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

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
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "varu9i55m1");
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTFGEH023H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GTFGEH023H');
          `}
        </Script>
        <Navbar />
        <Breadcrumbs />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
