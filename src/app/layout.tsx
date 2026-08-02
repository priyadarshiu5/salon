import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Styllex Beauty Parlour — Premium Salon in Gaya | Hair, Makeup, Bridal & Spa",
  description:
    "Styllex Beauty Parlour is Gaya's premier beauty salon offering hair styling, Indian bridal makeup, HD makeup, facials, nail art, and spa services.",
  keywords:
    "Styllex Beauty Parlour Gaya, beauty salon in Gaya, bridal makeup Gaya, hair styling, nail art, facial, spa",
  openGraph: {
    title: "Styllex Beauty Parlour — Premium Salon in Gaya",
    description:
      "Experience luxury beauty services in Gaya including bridal makeup, hair styling, nail art, facials, and spa treatments.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
