import SectionHeading from "@/components/SectionHeading";
import { experienceItems } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experiencia"
          title="Formacion, practica y logros en progreso."
          description="Una timeline simple para mostrar tu ruta actual sin complicar la estructura."
        />

        <div className="mt-10 space-y-5">
          {experienceItems.map((item) => (
            <article key={`${item.period}-${item.title}`} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-rose-300/50 md:grid-cols-[180px_1fr]">
              <div>
                <p className="text-sm font-semibold text-rose-200">{item.period}</p>
                <span className="mt-3 inline-flex rounded-lg border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {item.type}
                </span>
              </div>
              <div className="relative border-l border-white/10 pl-5">
                <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-teal-300" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-200">{item.organization}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
