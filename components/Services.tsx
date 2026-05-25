import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { serviceItems } from "@/data/skills";

export default function Services() {
  return (
    <section id="servicios" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Capacidades prácticas orientadas a resolver necesidades reales."
          description="Presento un enfoque honesto: soluciones claras, soporte técnico básico y proyectos digitales construidos con criterio y aprendizaje continuo."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
