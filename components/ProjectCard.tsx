import Icon from "@/components/Icon";
import { Project } from "@/types/site";
import Image from "next/image";

const themeStyles: Record<Project["theme"], string> = {
  cyan: "from-cyan-300/18 via-cyan-400/8 to-slate-950",
  emerald: "from-emerald-300/18 via-emerald-400/8 to-slate-950",
  amber: "from-amber-300/18 via-orange-400/8 to-slate-950",
  sky: "from-sky-300/18 via-sky-400/8 to-slate-950",
};

export default function ProjectCard({
  title,
  description,
  problem,
  technologies,
  demoUrl,
  githubUrl,
  imageUrl,
  imageAlt,
  labels,
  features,
  note,
  preview,
  icon,
  theme,
}: Project) {
  return (
    <article className="spotlight-card surface-card group rounded-[2rem] border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 sm:p-6">
      <div className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${themeStyles[theme]}`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:26px_26px] opacity-60" />
        <div className="relative flex aspect-[16/10] flex-col gap-4 p-5">
          <div className={`flex items-start gap-3 ${icon ? "justify-between" : "justify-start"}`}>
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
              Proyecto desplegado
            </span>
            {icon ? (
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white shadow-[0_0_20px_rgba(34,211,238,0.16)]">
                <Icon name={icon} className="h-5 w-5" />
              </span>
            ) : null}
          </div>

          <div>
            {imageUrl ? (
              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/60">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={imageUrl}
                    alt={imageAlt ?? `Captura de ${title}`}
                    fill
                    sizes="(min-width: 1280px) 520px, (min-width: 768px) 44vw, 92vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Espacio para captura</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">{preview}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
          >
            {label}
          </span>
        ))}
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Problema que resuelve</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{problem}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Funciones clave</p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-300">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {note ? (
        <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
          {note}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline focus:outline-2 focus:outline-cyan-200"
        >
          Ver demo
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </a>

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5 focus:outline focus:outline-2 focus:outline-cyan-200"
          >
            GitHub
            <Icon name="github" className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
