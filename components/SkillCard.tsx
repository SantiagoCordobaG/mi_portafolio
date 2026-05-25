import Icon from "@/components/Icon";
import { CapabilityArea } from "@/types/site";

export default function SkillCard({ title, description, items, icon }: CapabilityArea) {
  return (
    <article className="spotlight-card surface-card group rounded-[1.75rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition duration-300 group-hover:scale-105 group-hover:border-cyan-200/40 group-hover:bg-cyan-300/15">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
          Enfoque
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

      <ul className="mt-6 grid gap-3 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
