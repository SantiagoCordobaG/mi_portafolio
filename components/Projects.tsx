import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Proyectos reales desplegados y orientados a resolver problemas."
          description="Aquí destaco soluciones que conectan desarrollo web con necesidades concretas de negocios, operación e inventario. La idea es mostrar trabajo aplicado, no solo ejercicios."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
