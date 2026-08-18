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
        <Script id="lead-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              if (typeof gtag === 'undefined') return;
              var page = window.location.pathname;

              var wa = e.target.closest('a[href*="wa.me"]');
              if (wa) {
                gtag('event', 'whatsapp_click', {
                  event_category: 'Lead',
                  event_label: wa.textContent.trim().slice(0, 50) || 'WhatsApp Button',
                  page_location: page
                });
              }

              var tel = e.target.closest('a[href^="tel:"]');
              if (tel) {
                gtag('event', 'phone_click', {
                  event_category: 'Lead',
                  event_label: tel.textContent.trim().slice(0, 50) || 'Phone Button',
                  page_location: page
                });
              }

              var tracked = e.target.closest('[data-track]');
              if (tracked) {
                gtag('event', tracked.getAttribute('data-track'), {
                  event_category: 'Lead',
                  event_label: tracked.getAttribute('data-track-label') || tracked.textContent.trim().slice(0, 50),
                  page_location: page
                });
              }
            });
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
