import { TimelineItemData } from "@/types/site";

export default function TimelineItem({
  period,
  title,
  organization,
  description,
  type,
  status,
}: TimelineItemData) {
  return (
    <article className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-300/30 md:grid-cols-[180px_1fr] md:p-6">
      <div>
        <p className="text-sm font-semibold text-cyan-200">{period}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {type}
          </span>
          {status ? (
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
              {status}
            </span>
          ) : null}
        </div>
      </div>

      <div className="relative border-l border-white/10 pl-5">
        <span
          aria-hidden="true"
          className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
        />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm font-medium text-slate-300">{organization}</p>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </article>
  );
}
