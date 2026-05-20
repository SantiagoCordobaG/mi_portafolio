import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Sobre mi"
          title="Tecnologia, aprendizaje y proyectos con proposito."
          description="Estoy construyendo un perfil tecnico con bases firmes, practica constante y curiosidad por entender como funcionan las cosas."
        />

        <div className="space-y-5 text-base leading-8 text-slate-300">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {["Claridad", "Practica", "Seguridad"].map((value) => (
              <div key={value} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
