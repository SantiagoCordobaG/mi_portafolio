import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import Icon from "@/components/Icon";

export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Una ruta técnica construida con curiosidad, práctica y mejora constante."
          // description="Quiero que este portafolio muestre mi perfil de forma honesta: aprendizaje real, práctica constante y ganas de aportar desde sistemas."
        />

        <div className="space-y-6 text-base leading-8 text-slate-300">
          {/* {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))} */}

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label} className="spotlight-card surface-card rounded-[1.5rem] border border-white/10 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon name="badgeCheck" className="h-4 w-4" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{fact.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Diferencial personal</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Mi mayor diferencial es la motivación por aprender y mejorar constantemente. Esa mentalidad es la que quiero llevar a prácticas, proyectos y oportunidades de trabajo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
