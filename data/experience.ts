export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "Formacion" | "Proyecto" | "Practica" | "Logro";
}

// Puedes mezclar estudios, cursos, trabajos, proyectos y logros personales.
export const experienceItems: ExperienceItem[] = [
  {
    period: "Actualidad",
    title: "Aprendizaje en desarrollo web y ciberseguridad",
    organization: "Ruta personal",
    description:
      "Construccion de bases solidas en frontend moderno mientras practico fundamentos de pentesting en laboratorios controlados.",
    type: "Formacion",
  },
  {
    period: "2026",
    title: "Portafolio web personal",
    organization: "Proyecto propio",
    description:
      "Creacion de una primera version profesional para presentar habilidades, proyectos y objetivos de aprendizaje.",
    type: "Proyecto",
  },
  {
    period: "2025 - 2026",
    title: "Practicas con Linux, redes y seguridad",
    organization: "Laboratorios personales",
    description:
      "Exploracion de comandos, servicios, reconocimiento basico, documentacion de hallazgos y mejora de criterio tecnico.",
    type: "Practica",
  },
];
