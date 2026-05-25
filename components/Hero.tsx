import { profile } from "@/data/profile";
import Icon from "@/components/Icon";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24"
    >
      <div className="relative">
        <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl" />
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          Técnico en sistemas en crecimiento
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-medium text-cyan-200 sm:text-2xl">
          {profile.headline}
        </p>
        {/* <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.intro}
        </p> */}

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline focus:outline-2 focus:outline-cyan-200"
          >
            Ver proyectos
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5 focus:outline focus:outline-2 focus:outline-cyan-200"
          >
            Contactarme
            <Icon name="mail" className="h-4 w-4" />
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5 focus:outline focus:outline-2 focus:outline-cyan-200"
          >
            Descargar CV
            <Icon name="download" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2">
            <Icon name="badgeCheck" className="h-4 w-4 text-cyan-200" />
            En formación como tecnólogo en sistemas
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="briefcase" className="h-4 w-4 text-cyan-200" />
            Disponible para prácticas laborales
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md">
        <div className="spotlight-card surface-card relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-black/30">
          <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-cyan-300/12 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-slate-950/70 p-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60" />
            <div className="relative flex aspect-[4/5] flex-col gap-5">
              <div className="flex items-center">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Foto personal
                </span>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Perfil profesional</p>
                <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                  <Image
                    src={profile.avatar}
                    alt={`Foto de ${profile.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 92vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-6 text-lg font-semibold text-white">{profile.name}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Técnico en sistemas en formación, con enfoque en desarrollo web, soporte TI y aprendizaje constante.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Enfoque</p>
              <p className="mt-3 text-sm font-semibold text-white">Web, soporte y mantenimiento</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Seguridad</p>
              <p className="mt-3 text-sm font-semibold text-white">Ciberseguridad básica y pentesting ético</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
