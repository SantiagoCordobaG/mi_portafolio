import { Project } from "@/types/site";

export const projects: Project[] = [
  {
    title: "Skyware",
    description:
      "Skyware es un emprendimiento personal enfocado en desarrollar páginas web y soluciones digitales para negocios pequeños. Busca ayudar a clientes que necesitan presencia digital, catálogos, menús, toma de pedidos por WhatsApp, ubicación del negocio y automatización de tareas repetitivas.",
    problem:
      "Falta de presencia digital, desorden en pedidos por WhatsApp y exceso de tareas manuales.",
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    demoUrl: "https://skyware-seven.vercel.app/#inicio",
    labels: ["Emprendimiento personal", "Web para negocios", "Solución digital"],
    features: [
      "Presentación clara de servicios y propuesta de valor.",
      "Rutas de contacto rápidas para clientes pequeños.",
      "Base para digitalizar menús, catálogos y pedidos por WhatsApp.",
    ],
    // note: "Desarrollado por mí con apoyo de IA.",
    preview:
      "Landing orientada a negocios pequeños con foco en presencia digital, automatización ligera y contacto directo.",
    // icon: "globe",
    theme: "cyan",
    imageUrl: "/projects/SkywareEjemplo.webp",
    imageAlt: "Captura de Skyware",
  },
  {
    title: "Manjares Inventario",
    description:
      "Manjares Inventario es un MVP web para la gestión operativa de inventario y trazabilidad de tortas mediante códigos QR. Está pensado para controlar producción, vencimientos, traslados, ventas, stock y movimientos entre puntos de venta.",
    problem:
      "Control individual de productos, organización de inventario, trazabilidad y reducción de errores en negocios de pastelería o múltiples puntos de venta.",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://manjares-inventario.vercel.app/",
    labels: ["Inventario", "Trazabilidad QR", "MVP operativo"],
    features: [
      "CRUD, gestión de stock y control por roles.",
      "Dashboard, autenticación básica y trazabilidad por QR.",
      "Seguimiento de producción, vencimientos y movimientos.",
    ],
    preview:
      "Aplicación web enfocada en inventario real, trazabilidad y operación diaria para múltiples puntos de venta.",
    // icon: "qrCode",
    theme: "emerald",
    imageUrl: "/projects/ManjaresInventario.webp",
    imageAlt: "Captura de Manjares Inventario",
  },
  {
    title: "Brasa Viva",
    description:
      "Página de ejemplo para restaurantes con identidad visual completa, carta de menú, carrito y mensaje listo para enviar por WhatsApp con los datos del pedido.",
    problem:
      "Digitalizar el menú, ordenar pedidos y facilitar el contacto sin depender de procesos manuales o conversaciones desestructuradas.",
    technologies: ["React", "Vite", "Tailwind CSS", "WhatsApp API UX"],
    demoUrl: "https://brasa-viva-brown.vercel.app/",
    labels: ["Restaurantes", "Menú digital", "Pedidos por WhatsApp"],
    features: [
      "Menú visual con experiencia moderna.",
      "Carrito simple con resumen de pedido.",
      "Mensaje listo para enviar por WhatsApp.",
    ],
    preview:
      "Ejemplo visual para restaurantes que quieren vender mejor con carta digital y flujo de pedido más claro.",
    // icon: "sparkles",
    theme: "amber",
    imageUrl: "/projects/BrasaVIvaEjemplo.webp",
    imageAlt: "Captura de Brasa Viva",
  },
  {
    title: "Alto Cali Hotel",
    description:
      "Página informativa para un hotel, creada como proyecto de Skyware. Permite mostrar información del negocio, facilitar reservas por WhatsApp, contacto por correo y ubicación mediante Google Maps.",
    problem:
      "Centralizar información del hotel y facilitar contacto, reservas y ubicación desde un solo sitio web.",
    technologies: ["React", "Vite", "Tailwind CSS", "Google Maps"],
    demoUrl: "https://alto-cali-hotel.vercel.app/",
    labels: ["Hotel", "Reservas", "Proyecto Skyware"],
    features: [
      "Página informativa y presentación del negocio.",
      "Reserva o contacto directo por WhatsApp y correo.",
      "Ubicación integrada mediante Google Maps.",
    ],
    preview:
      "Sitio informativo pensado para mejorar la presencia online de un hotel y simplificar sus canales de reserva.",
    // icon: "briefcase",
    theme: "sky",
    imageUrl: "/projects/AltoCaliEjemplo.webp",
    imageAlt: "Captura de Alto Cali Hotel",
  },
];
