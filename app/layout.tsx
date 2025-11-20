import type { Metadata } from "next";
import { Geist, Geist_Mono, Carattere } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const carattere = Carattere({
  weight: "400",
  variable: "--font-carattere",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Alejandra & Mauro - Boda 22 de Mayo 2026",
  description:
    "Te invitamos a celebrar nuestro amor. Reserva la fecha: 22 de Mayo, 2026",
  openGraph: {
    title: "Alejandra & Mauro - Boda 22 de Mayo 2026",
    description:
      "Te invitamos a celebrar nuestro amor. Reserva la fecha: 22 de Mayo, 2026",
    images: [
      {
        url: "/history4.jpg",
        width: 1200,
        height: 630,
        alt: "Alejandra, Mauro y Balú",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandra & Mauro - Boda 22 de Mayo 2026",
    description:
      "Te invitamos a celebrar nuestro amor. Reserva la fecha: 22 de Mayo, 2026",
    images: ["/history4.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${carattere.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
