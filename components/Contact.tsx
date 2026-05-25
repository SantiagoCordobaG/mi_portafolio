"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
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

  return (
    <section id="contacto" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Contacto directo para prácticas, proyectos y oportunidades."
            description="Si quieres hablar sobre una vacante, una práctica o una solución digital, aquí tienes mis canales principales."
          />

          <div className="mt-8 grid gap-4">
            {profile.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="spotlight-card surface-card flex items-center gap-4 rounded-[1.5rem] border border-white/10 p-4 transition hover:border-cyan-300/30"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Correo</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{email}</span>
                </span>
              </a>
            ))}

            <div className="grid gap-3 sm:grid-cols-2">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight-card surface-card inline-flex items-center gap-3 rounded-[1.5rem] border border-white/10 px-4 py-4 font-semibold text-white transition hover:border-cyan-300/30 focus:outline focus:outline-2 focus:outline-cyan-200"
                >
                  <Icon name={link.icon} className="h-5 w-5 text-cyan-200" />
                  {link.label}
                </a>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-emerald-300/20 bg-emerald-300/10 p-5 text-sm leading-7 text-emerald-100">
              Actualmente busco prácticas laborales y oportunidades donde pueda seguir creciendo en sistemas, soporte TI o desarrollo web.
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="spotlight-card surface-card rounded-[2rem] border border-white/10 p-6 sm:p-7">
          <div className="grid gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Formulario</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Envíame un mensaje</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                El formulario queda listo para conectar un servicio real más adelante. Mientras tanto, también puedes escribirme por correo.
              </p>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Nombre
              <input
                name="name"
                type="text"
                required
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="Tu nombre"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="tu@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Mensaje
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="Cuéntame sobre la vacante, la práctica o el proyecto"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline focus:outline-2 focus:outline-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Icon name="mail" className="h-4 w-4" />
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" ? (
              <p className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
                Mensaje registrado. Gracias por escribir.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
