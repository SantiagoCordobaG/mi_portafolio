import type { Metadata } from "next";
import "./globals.css";

// Metadata basica para SEO y tarjetas al compartir el sitio.
export const metadata: Metadata = {
  title: "Santiago Cordoba Garces | Portafolio",
  description:
    "Portafolio personal de Santiago Cordoba Garces, desarrollador y apasionado por pentesting.",
  keywords: [
    "Santiago Cordoba Garces",
    "desarrollador frontend",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "pentesting",
    "portafolio",
  ],
  openGraph: {
    title: "Santiago Cordoba Garces | Portafolio",
    description:
      "Proyectos, habilidades y experiencia de Santiago Cordoba Garces en desarrollo web y pentesting.",
    type: "website",
    locale: "es_CO",
  },
  verification: {
    google: "VpLHgWVdDFxDrvT_6HG77znmrjFhlTpLakn9QipxyO0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}