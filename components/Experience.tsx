import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { experienceItems } from "@/data/experience";

export default function Experience() {
  return (
    <section id="formacion" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Formación y logros"
          title="Una línea de tiempo honesta sobre mi proceso técnico."
          description="Incluye estudios, cursos terminados y mi situación actual como tecnólogo en sistemas. La estructura queda lista para agregar certificados después."
        />

        <div className="mt-12 space-y-5">
          {experienceItems.map((item) => (
            <TimelineItem key={`${item.period}-${item.title}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
