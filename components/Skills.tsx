import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import SkillCard from "@/components/SkillCard";
import { capabilityAreas, practicalExperience } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Habilidades"
          title="Áreas de enfoque y habilidades prácticas."
          description="Estas áreas representan mejor mi perfil actual: desarrollo, soporte, herramientas y aprendizaje ético en seguridad."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {capabilityAreas.map((area) => (
            <SkillCard key={area.title} {...area} />
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Experiencia práctica</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Tareas y herramientas con las que ya he trabajado</h3>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Icon name="terminal" className="h-4 w-4 text-cyan-200" />
              Aprendizaje aplicado en proyectos, práctica académica y trabajo básico con clientes
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {practicalExperience.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-slate-950/65"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
