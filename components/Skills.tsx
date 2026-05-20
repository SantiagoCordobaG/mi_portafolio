import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Habilidades"
          title="Stack y herramientas que estoy fortaleciendo."
          description="Organizo mis habilidades por areas para mostrar una ruta clara entre desarrollo web, herramientas y seguridad."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillCategories.map((group) => (
            <article
              key={group.category}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-teal-300/50 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-bold text-white">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
