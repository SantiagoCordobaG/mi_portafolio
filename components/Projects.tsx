import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Primeros proyectos para mostrar progreso real."
          description="Una seleccion inicial de trabajos para practicar estructura, diseño, documentacion y pensamiento tecnico."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/[0.05]"
            >
              <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-amber-200/10 px-3 py-1.5 text-xs font-medium text-amber-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-200 focus:outline focus:outline-2 focus:outline-teal-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200 focus:outline focus:outline-2 focus:outline-emerald-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
