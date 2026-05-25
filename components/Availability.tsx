import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Availability() {
  return (
    <section id="practicas" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Prácticas laborales"
          title={profile.practiceStatus.title}
          description={profile.practiceStatus.description}
        />

        <div className="spotlight-card surface-card rounded-[2rem] border border-cyan-300/15 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.practiceStatus.points.map((point) => (
              <div key={point.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon name={point.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline focus:outline-2 focus:outline-cyan-200"
            >
              Contactarme
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5 focus:outline focus:outline-2 focus:outline-cyan-200"
            >
              Descargar CV
              <Icon name="download" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
