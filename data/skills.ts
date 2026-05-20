export type SkillCategoryName = "Frontend" | "Backend" | "Herramientas" | "Otros";

export interface SkillCategory {
  category: SkillCategoryName;
  skills: string[];
}

// Mantener las habilidades en datos hace que el componente sea mas facil de leer.
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "APIs REST", "Bases de datos", "Autenticacion basica"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Terminal", "NPM"],
  },
  {
    category: "Otros",
    skills: ["Pentesting", "Redes", "Aprendizaje continuo", "Documentacion tecnica"],
  },
];
