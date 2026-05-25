import Icon from "@/components/Icon";
import { ServiceItem } from "@/types/site";

export default function ServiceCard({ title, description, icon }: ServiceItem) {
  return (
    <article className="spotlight-card surface-card group rounded-[1.5rem] border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
