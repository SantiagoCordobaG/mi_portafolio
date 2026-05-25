"use client";

import { useState } from "react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import Icon from "@/components/Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a10]/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <a href="#inicio" className="flex items-center gap-3 focus:outline focus:outline-2 focus:outline-cyan-300">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-200">
            {profile.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-white">{profile.name}</span>
            <span className="block text-xs text-slate-400">Técnico en sistemas</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline focus:outline-2 focus:outline-cyan-300 md:hidden"
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:outline-cyan-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#practicas"
            className="ml-2 inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15 focus:outline focus:outline-2 focus:outline-cyan-300"
          >
            Prácticas
            <Icon name="briefcase" className="h-4 w-4" />
          </a>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:outline-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#practicas"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15 focus:outline focus:outline-2 focus:outline-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              Prácticas laborales
              <Icon name="briefcase" className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
