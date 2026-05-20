import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <p className="mb-4 inline-flex rounded-lg border border-teal-300/30 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-200">
          Disponible para aprender, crear y colaborar
        </p>
        <h1 className="max-w-4xl text-4xl font-bold text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-xl font-semibold text-emerald-300 sm:text-2xl">
          {profile.role}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="rounded-lg bg-teal-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-teal-200 focus:outline focus:outline-2 focus:outline-teal-200"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-emerald-300 hover:bg-white/5 focus:outline focus:outline-2 focus:outline-emerald-300"
          >
            Contactarme
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30">
          <div className="flex aspect-square items-center justify-center rounded-lg border border-teal-300/30 bg-gradient-to-br from-teal-300 via-emerald-300 to-amber-200 text-6xl font-black text-slate-950">
            {profile.initials}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 border-t border-white/10 pt-5 text-sm">
            <div>
              <p className="font-semibold text-white">Frontend</p>
              <p className="mt-1 text-slate-400">Next.js + Tailwind</p>
            </div>
            <div>
              <p className="font-semibold text-white">Seguridad</p>
              <p className="mt-1 text-slate-400">Pentesting basico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
