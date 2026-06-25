import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { seo } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.baseUrl),
  title: {
    default: "Golden Years Senior Residence | Calidad de Vida",
    template: "%s | Golden Years Senior Residence"
  },
  description: seo.description,
  openGraph: {
    title: "Golden Years Senior Residence",
    description: seo.description,
    siteName: seo.siteName,
    images: ["/assets/brand/hero-facility.jpg"],
    locale: "es_CR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Years Senior Residence",
    description: seo.description,
    images: ["/assets/brand/hero-facility.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SeniorCare",
    name: "Golden Years Senior Residence",
    url: seo.baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sarchí",
      addressRegion: "Alajuela",
      addressCountry: "CR"
    },
    sameAs: ["https://wa.me/message/JXUNFBJZJRA6P1"]
  };

  return (
    <html lang="es-CR">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
