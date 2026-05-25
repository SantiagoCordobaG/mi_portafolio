import type { Metadata } from "next";
import SpotlightCursor from "@/components/SpotlightCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Córdoba Garcés | Técnico en sistemas",
  description:
    "Portafolio de Santiago Córdoba Garcés, técnico en sistemas en formación tecnológica con enfoque en desarrollo web, soporte TI, mantenimiento y ciberseguridad básica.",
  keywords: [
    "Santiago Córdoba Garcés",
    "técnico en sistemas",
    "tecnólogo en sistemas",
    "soporte TI",
    "mantenimiento de equipos",
    "desarrollo web",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "pentesting básico",
    "portafolio",
  ],
  openGraph: {
    title: "Santiago Córdoba Garcés | Técnico en sistemas",
    description:
      "Perfil profesional, proyectos reales y áreas de enfoque de Santiago Córdoba Garcés en sistemas, desarrollo web y soporte técnico.",
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
      <body className="antialiased">
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
