"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    // Simulacion de envio: aqui luego puedes conectar un backend o servicio externo.
    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 700);
  }

  const visibleSocialLinks = profile.socialLinks.filter((link) => link.isVisible);

  return (
    <section id="contacto" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de proyectos, aprendizaje o colaboraciones."
            description="Si quieres conversar sobre una idea, una practica o una oportunidad, este es el mejor punto de entrada."
          />

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <p>
              Email:{" "}
              <a className="font-semibold text-teal-200 hover:text-teal-100" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              {visibleSocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-2 font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200 focus:outline focus:outline-2 focus:outline-emerald-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Nombre
              <input
                name="name"
                type="text"
                required
                className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-teal-300 focus:outline-none"
                placeholder="Tu nombre"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-teal-300 focus:outline-none"
                placeholder="tu@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Mensaje
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-teal-300 focus:outline-none"
                placeholder="Cuéntame en qué estás pensando"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-teal-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200 focus:outline focus:outline-2 focus:outline-teal-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" ? (
              <p className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
                Mensaje registrado. Gracias por escribir.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
