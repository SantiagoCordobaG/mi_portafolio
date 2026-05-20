export interface SocialLink {
  label: string;
  href: string;
  isVisible: boolean;
}

export const profile = {
  name: "Santiago Cordoba Garces",
  role: "Desarrollador y apasionado por pentesting",
  initials: "SCG", //Aqui quiero que se vea una foto mia, pero por ahora uso mis iniciales
  email: "cordobagarcessantiago@gmail.com",
  githubUsername: "SantiagoCordobaG",
  githubUrl: "https://github.com/SantiagoCordobaG",
  intro:
    "Construyo interfaces web limpias mientras fortalezco mis bases en ciberseguridad, redes y pensamiento tecnico.",
  about: [
    "Soy Santiago, un desarrollador en formacion con interes fuerte por el frontend moderno y el pentesting. Me gusta aprender construyendo proyectos reales, documentando lo que descubro y mejorando poco a poco mi criterio tecnico.",
    "Este portafolio es mi primera version funcional: una base clara para mostrar habilidades, proyectos y avances. La idea es que tambien me sirva como mapa para reconstruirlo desde cero y entender mejor como se organiza una aplicacion profesional con Next.js.",
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/SantiagoCordobaG",
      isVisible: true,
    },
    {
      label: "LinkedIn",
      href: "",
      isVisible: false,
    },
  ] satisfies SocialLink[],
};
