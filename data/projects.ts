export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

// Edita este arreglo para agregar, quitar o cambiar tus proyectos.
export const projects: Project[] = [
  {
    title: "Portafolio personal",
    description:
      "Primera version de mi sitio personal, construido con Next.js, TypeScript y Tailwind CSS para presentar mi perfil, proyectos y aprendizajes.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    githubUrl: "https://github.com/SantiagoCordobaG/portfolio-personal",
    demoUrl: "#inicio",
  },
  {
    title: "Laboratorio de pentesting",
    description:
      "Coleccion de practicas para documentar pruebas de reconocimiento, enumeracion y analisis basico de seguridad en entornos controlados.",
    technologies: ["Linux", "Networking", "Bash", "Pentesting"],
    githubUrl: "https://github.com/SantiagoCordobaG/pentest-lab",
    demoUrl: "#proyectos",
  },
  {
    title: "Gestor de tareas seguro",
    description:
      "Aplicacion de ejemplo pensada para practicar interfaces limpias, manejo de formularios y buenas practicas basicas de seguridad frontend.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "UX"],
    githubUrl: "https://github.com/SantiagoCordobaG/secure-task-manager",
    demoUrl: "#proyectos",
  },
];
