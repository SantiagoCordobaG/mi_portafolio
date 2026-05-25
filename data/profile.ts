import { PracticeStatus, SocialLink } from "@/types/site";

export const profile = {
  name: "Santiago Córdoba Garcés",
  headline:
    "Técnico en sistemas enfocado en desarrollo web, soporte TI y motivado por pentesting.",
  initials: "SCG",
  avatar: "/Yoyoyo.webp",
  cvUrl: "/Santiago-Cordoba-Garces-CV.txt",
  intro:
    "Construyo páginas web y soluciones digitales. Al mismo tiempo fortalezco mis bases en soporte técnico, mantenimiento, sistemas, ciberseguridad y automatización. Actualmente me formo como tecnólogo y estoy disponible para prácticas laborales.",
  heroBadges: [
    "Disponible para prácticas",
    "Desarrollo web",
    "Soporte TI",
    "Mantenimiento",
    "Pentesting básico",
  ],
  about: [
    "Soy Santiago, técnico en sistemas y estudiante en formación tecnológica. Me motiva entender cómo funcionan los sistemas y crear soluciones útiles para personas y negocios. Me interesan el desarrollo web, el soporte técnico, el mantenimiento, la ciberseguridad básica y la automatización con Arduino.",
    "Aprendo construyendo proyectos reales y documentando mis avances. Busco aplicar lo que aprendo en soluciones prácticas, desde páginas web para negocios hasta inventarios, soporte básico y pruebas en entornos controlados.",
  ],
  quickFacts: [
    {
      label: "Formación actual",
      value: "Tecnólogo en sistemas en proceso",
    },
    {
      label: "Disponibilidad",
      value: "Habilitado para prácticas laborales y oportunidades iniciales",
    },
    {
      label: "Intereses",
      value: "Web, soporte TI, mantenimiento, automatización y ciberseguridad básica",
    },
  ],
  practiceStatus: {
    title: "Disponible para prácticas laborales y oportunidades de crecimiento",
    description:
      "Busco una oportunidad para aportar en soporte, desarrollo web o tareas operativas de sistemas mientras sigo fortaleciendo mis bases técnicas.",
    points: [
      {
        title: "Listo para aprender en contexto real",
        description:
          "Estoy en formación como tecnólogo en sistemas y listo para asumir procesos, documentación y mejora continua.",
        icon: "badgeCheck",
      },
      {
        title: "Aporte práctico desde el primer día",
        description:
          "Puedo apoyar en desarrollo web, soporte técnico básico, mantenimiento, instalación de software y organización digital.",
        icon: "briefcase",
      },
      {
        title: "Interés técnico amplio",
        description:
          "Mi ruta combina páginas web, mantenimiento, automatización, Linux y ciberseguridad básica en entornos controlados.",
        icon: "cpu",
      },
      {
        title: "Enfoque honesto y profesional",
        description:
          "Prefiero mostrar progreso real y ganas de mejorar antes que exagerar experiencia o conocimientos.",
        icon: "shield",
      },
    ],
  } satisfies PracticeStatus,
  emails: [
    "cordobagarcessantiago@gmail.com",
    "digitalskyware@gmail.com",
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/SantiagoCordobaG",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santiago-c%C3%B3rdoba-902549410/",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
};
