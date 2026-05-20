import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} © {year}
        </p>
        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white focus:outline focus:outline-2 focus:outline-teal-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
