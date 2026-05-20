# Guía para modificar y mejorar mi portafolio

Esta guía es una referencia personal para aprender a modificar, mejorar y reconstruir mi portafolio web hecho con **Next.js**, **TypeScript** y **Tailwind CSS**.

La idea no es memorizar todo de una vez. La idea es aprender modificando partes pequeñas, probando cada cambio y entendiendo por qué funciona.

---

## 1. Objetivo de la guía

El objetivo de esta guía es ayudarme a:

- Modificar mi portafolio paso a paso.
- Entender para qué sirve cada archivo importante.
- Cambiar textos, proyectos, habilidades, experiencia y enlaces sin romper la aplicación.
- Mejorar la interfaz visual con Tailwind CSS.
- Aprender a usar componentes reutilizables.
- Preparar el proyecto para desplegarlo en Vercel.
- Depender cada vez menos de IA porque entiendo mejor mi propio código.

Mi meta no debe ser copiar código sin entenderlo. Mi meta debe ser mirar un componente, reconocer su estructura y poder decir: "sé dónde cambiar esto".

---

## 2. Estructura del proyecto

Mi proyecto está dividido en carpetas para separar responsabilidades. Esta separación hace que el código sea más fácil de leer, mantener y mejorar.

| Ruta | Para qué sirve |
| --- | --- |
| `app/page.tsx` | Es la página principal. Aquí se ordenan las secciones del sitio: Navbar, Hero, About, Skills, Projects, Experience, Contact y Footer. |
| `app/layout.tsx` | Define la estructura global del sitio. Normalmente contiene metadata, idioma, fuente global y el `body` principal. |
| `app/globals.css` | Contiene estilos globales. Aquí se importan las bases de Tailwind y se definen estilos que aplican a toda la página. |
| `components/` | Carpeta donde viven los componentes visuales reutilizables, como `Hero.tsx`, `Navbar.tsx`, `Projects.tsx` y `Contact.tsx`. |
| `data/profile.ts` | Archivo de datos personales: nombre, rol, email, GitHub, LinkedIn, descripción, foto y textos de "Sobre mí". |
| `data/projects.ts` | Archivo donde se guardan los proyectos. Cada proyecto tiene título, descripción, tecnologías, GitHub y demo. |
| `data/skills.ts` | Archivo donde se organizan mis habilidades por categorías. |
| `data/experience.ts` | Archivo para estudios, prácticas, proyectos, logros o experiencia. |
| `public/` | Carpeta para archivos estáticos como imágenes, `robots.txt`, iconos o recursos que se sirven directamente desde la web. |

Ejemplo mental:

```txt
app/page.tsx decide qué se muestra.
components/ define cómo se ve.
data/ define qué información se muestra.
public/ guarda imágenes y archivos estáticos.
```

Esta estructura es buena porque me permite cambiar contenido sin tocar demasiado la UI.

---

## 3. Cómo modificar textos personales

La mayoría de mis textos personales están en `data/profile.ts`.

Ejemplo actual adaptado:

```ts
export const profile = {
  name: "Santiago Cordoba Garces",
  role: "Desarrollador y apasionado por pentesting",
  initials: "SCG",
  avatar: "/avatar.webp",
  email: "cordobagarcessantiago@gmail.com",
  githubUsername: "SantiagoCordobaG",
  githubUrl: "https://github.com/SantiagoCordobaG",
  intro:
    "Construyo interfaces web limpias mientras fortalezco mis bases en ciberseguridad, redes y pensamiento tecnico.",
  about: [
    "Soy Santiago, un desarrollador en formacion con interes fuerte por el frontend moderno y el pentesting.",
    "Este portafolio es mi primera version funcional para mostrar habilidades, proyectos y avances.",
  ],
};
```

Qué cambia cada propiedad:

| Propiedad | Qué controla |
| --- | --- |
| `name` | Mi nombre principal en el Hero. |
| `role` | Mi rol o frase profesional debajo del nombre. |
| `initials` | Las iniciales que usa la navbar como marca pequeña. |
| `avatar` | Ruta de mi foto de perfil. |
| `email` | Correo usado en la sección de contacto. |
| `githubUsername` | Usuario de GitHub para mostrarlo como texto si lo necesito. |
| `githubUrl` | Link real a mi perfil de GitHub. |
| `intro` | Descripción corta del Hero. |
| `about` | Textos largos de la sección "Sobre mí". |

### Cambiar mi nombre

```ts
name: "Santiago Cordoba Garces",
```

Si quiero usar tildes:

```ts
name: "Santiago Córdoba Garcés",
```

Qué hace: cambia el título principal que aparece en el Hero.

### Cambiar mi rol

```ts
role: "Frontend Developer en formación y aprendiz de ciberseguridad",
```

Qué hace: comunica mejor mi perfil profesional. Debe ser corto, claro y fácil de entender.

### Cambiar la descripción corta

```ts
intro:
  "Creo interfaces web limpias con React y Next.js mientras aprendo fundamentos de seguridad ofensiva en laboratorios controlados.",
```

Qué hace: mejora el texto principal del Hero y explica mi combinación de frontend + ciberseguridad.

### Cambiar email, GitHub y LinkedIn

En `data/profile.ts`, los enlaces sociales están en `socialLinks`:

```ts
socialLinks: [
  {
    label: "GitHub",
    href: "https://github.com/SantiagoCordobaG",
    isVisible: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mi-usuario",
    isVisible: true,
  },
],
```

Qué hace:

- `href` define a dónde lleva el link.
- `isVisible: true` hace que el enlace se muestre.
- `isVisible: false` lo oculta sin borrarlo.

### Cambiar los textos de "Sobre mí"

```ts
about: [
  "Soy Santiago, un desarrollador en formación con interés por el frontend moderno y la ciberseguridad.",
  "Estoy construyendo proyectos reales para practicar React, Next.js, Tailwind CSS, Git, Linux y fundamentos de pentesting.",
],
```

Consejo: cada texto debe explicar algo distinto. Uno puede hablar de quién soy y otro de hacia dónde voy.

---

## 4. Cómo modificar la foto de perfil

Mi foto está guardada en:

```txt
public/avatar.webp
```

En Next.js, todo lo que está dentro de `public/` se puede usar desde la raíz del sitio.

Eso significa:

```txt
public/avatar.webp
```

se referencia así:

```ts
avatar: "/avatar.webp",
```

### Mostrar la imagen con `next/image`

En `components/Hero.tsx` puedo usar:

```tsx
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg border border-teal-300/30 bg-white/5">
      <Image
        src={profile.avatar}
        alt={`Foto de ${profile.name}`}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
```

Qué hace:

- `src={profile.avatar}` usa la ruta definida en `data/profile.ts`.
- `alt` mejora accesibilidad y SEO.
- `fill` hace que la imagen llene el contenedor.
- `object-cover` recorta la imagen para cubrir todo el cuadro.
- `priority` le dice a Next que cargue esta imagen rápido porque está arriba en la página.

### Si la imagen se recorta mucho

Usa `object-contain` en vez de `object-cover`:

```tsx
className="object-contain"
```

Qué hace: muestra la imagen completa, aunque puede dejar espacios vacíos.

### Error con `next/image` y `output: "export"`

Si el proyecto tiene esto en `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
};
```

puede aparecer un error parecido a:

```txt
Image Optimization using the default loader is not compatible with output: export
```

La solución es desactivar la optimización dinámica de imágenes:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Qué hace: permite usar `next/image` en un sitio exportado como estático.

---

## 5. Mejoras visuales recomendadas

Estas ideas pueden hacer que el portafolio se vea más profesional y actual.

| Mejora | Por qué ayuda |
| --- | --- |
| Tarjetas con hover | Hacen que proyectos y habilidades se sientan interactivos. |
| Botones con hover | Mejoran la sensación de respuesta. |
| Imagen de perfil con hover | Da vida al Hero sin exagerar. |
| Gradientes sutiles | Ayudan a que el fondo oscuro no se vea plano. |
| Bordes con transparencia | Dan una estética moderna y ligera. |
| Sombras suaves | Separan elementos sin crear ruido visual. |
| Fondos con blur | Funcionan bien para tarjetas tipo glassmorphism. |
| Secciones con buena separación | Hacen que la página respire y sea más fácil de leer. |
| Animaciones suaves | Mejoran la experiencia si no se abusa de ellas. |
| Microinteracciones | Pequeños cambios al hover, focus o click hacen que la UI se sienta cuidada. |
| Iconos para redes sociales | Ayudan a reconocer GitHub, LinkedIn y email más rápido. |
| Carrusel o slider de proyectos | Puede destacar proyectos importantes. |
| Badges de tecnologías | Hacen más escaneable cada proyecto. |
| Botones que aparecen al hover | Útiles para mostrar "GitHub" y "Demo" sin saturar la tarjeta. |
| Animaciones al hacer scroll | Dan una entrada más elegante a las secciones. |
| Sección de proyectos más visual | Puede incluir imágenes, capturas o mockups. |
| Testimonios opcionales | Útiles si en el futuro tengo clientes, equipo o colaboraciones. |
| Herramientas favoritas opcional | Buena sección para mostrar stack y gustos técnicos. |

Regla importante: una mejora visual debe hacer la página más clara, no solo más llamativa.

---

## 6. Ejemplos prácticos con Tailwind CSS

### A. Hacer que una tarjeta crezca al pasar el cursor

```tsx
<article className="rounded-lg border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-[1.02] hover:border-teal-300/40 hover:bg-white/10">
  <h3 className="text-lg font-bold text-white">Portafolio personal</h3>
  <p className="mt-3 text-sm leading-6 text-slate-300">
    Proyecto construido con Next.js, TypeScript y Tailwind CSS.
  </p>
</article>
```

Qué hace:

- `transition` activa la animación.
- `duration-300` define una duración suave.
- `hover:scale-[1.02]` hace que la tarjeta crezca un poco.
- `hover:border-teal-300/40` mejora el borde al pasar el cursor.

Consejo: no uses escalas muy grandes. `1.02` o `1.03` suele verse profesional.

### B. Hacer que un botón tenga movimiento

```tsx
<a
  href="#proyectos"
  className="inline-flex rounded-lg bg-teal-300 px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-300/20 active:scale-95"
>
  Ver proyectos
</a>
```

Qué hace:

- `hover:-translate-y-0.5` sube el botón un poco.
- `hover:shadow-lg` agrega profundidad.
- `active:scale-95` da feedback al hacer click.

Este tipo de botón se siente más vivo sin ser exagerado.

### C. Hacer que la imagen de perfil tenga hover

```tsx
<div className="relative aspect-square overflow-hidden rounded-lg border border-teal-300/30 bg-white/5">
  <Image
    src={profile.avatar}
    alt={`Foto de ${profile.name}`}
    fill
    className="object-cover transition-transform duration-300 hover:scale-105"
    priority
  />
</div>
```

Qué hace:

- `transition-transform` anima solo transformaciones.
- `duration-300` hace que el movimiento sea suave.
- `hover:scale-105` acerca la imagen ligeramente.

Consejo: como el contenedor tiene `overflow-hidden`, la imagen crece sin salirse del marco.

### D. Hacer que una tarjeta revele botones al pasar el cursor

```tsx
<article className="group rounded-lg border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-teal-300/40">
  <h3 className="text-lg font-bold text-white">Gestor de tareas seguro</h3>
  <p className="mt-3 text-sm leading-6 text-slate-300">
    Aplicación para practicar interfaces limpias y buenas prácticas frontend.
  </p>

  <div className="mt-5 flex gap-3 opacity-0 translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    <a href="#" className="rounded-lg bg-teal-300 px-4 py-2 text-sm font-bold text-slate-950">
      Demo
    </a>
    <a href="#" className="rounded-lg border border-white/10 px-4 py-2 text-sm font-bold text-white">
      GitHub
    </a>
  </div>
</article>
```

Qué hace:

- `group` permite que elementos hijos reaccionen al hover del padre.
- `opacity-0` oculta los botones.
- `group-hover:opacity-100` los muestra.
- `translate-y-2` empieza los botones un poco abajo.
- `group-hover:translate-y-0` los lleva a su posición natural.

Esto sirve muy bien para tarjetas de proyectos.

### E. Crear un fondo con gradiente moderno

```tsx
<main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
  {/* Secciones del portafolio */}
</main>
```

Qué hace:

- `bg-gradient-to-br` crea un gradiente hacia abajo y a la derecha.
- `from-slate-950` empieza oscuro.
- `via-slate-900` mantiene un tono intermedio.
- `to-black` termina en negro.

Este fondo encaja bien con un portafolio técnico y profesional.

### F. Crear una tarjeta estilo glassmorphism

```tsx
<div className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
  <h3 className="text-lg font-bold text-white">Frontend</h3>
  <p className="mt-2 text-sm text-slate-300">
    React, Next.js, TypeScript y Tailwind CSS.
  </p>
</div>
```

Qué hace:

- `bg-white/5` crea un fondo blanco muy transparente.
- `border-white/10` agrega un borde sutil.
- `backdrop-blur` aplica desenfoque al fondo detrás de la tarjeta.
- `shadow-2xl shadow-black/30` agrega profundidad.

Consejo: glassmorphism funciona mejor en fondos oscuros con gradientes sutiles.

---

## 7. Iconos de redes sociales

Para iconos en un portafolio, recomiendo empezar con **lucide-react**.

Razones:

- Es simple.
- Tiene estilo consistente.
- Funciona muy bien con Tailwind.
- Es ideal para iconos de interfaz como mail, links, flechas, menú, GitHub y LinkedIn.

Instalación:

```bash
npm install lucide-react
```

Ejemplo para GitHub, LinkedIn y Mail:

```tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/SantiagoCordobaG"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-teal-300/40 hover:text-teal-200"
      >
        <Github className="h-5 w-5" />
      </a>

      <a
        href="https://www.linkedin.com/in/mi-usuario"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-teal-300/40 hover:text-teal-200"
      >
        <Linkedin className="h-5 w-5" />
      </a>

      <a
        href="mailto:cordobagarcessantiago@gmail.com"
        aria-label="Enviar email"
        className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-teal-300/40 hover:text-teal-200"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}
```

Qué hace:

- Importa iconos desde `lucide-react`.
- Usa `aria-label` para accesibilidad.
- Usa `target="_blank"` y `rel="noreferrer"` para enlaces externos.
- Aplica hover con Tailwind.

### ¿Lucide React o React Icons?

| Librería | Cuándo usarla |
| --- | --- |
| `lucide-react` | Mejor opción inicial para un portafolio limpio, moderno y consistente. |
| `react-icons` | Útil si necesito logos de marcas muy específicos o más variedad visual. |

Recomendación: empezar con `lucide-react`. Usar `react-icons` solo si falta un logo necesario.

---

## 8. Carrusel o movimiento en proyectos

Hay varias formas de hacer movimiento en la sección de proyectos.

### Opción simple: scroll horizontal con Tailwind

Esta es la mejor opción para empezar porque no necesita librerías.

```tsx
<section className="overflow-hidden">
  <div className="flex gap-5 overflow-x-auto scroll-smooth pb-4">
    {projects.map((project) => (
      <article
        key={project.title}
        className="min-w-[280px] rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-teal-300/40 sm:min-w-[360px]"
      >
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.description}
        </p>
      </article>
    ))}
  </div>
</section>
```

Qué hace:

- `flex` coloca las tarjetas en una fila.
- `overflow-x-auto` permite scroll horizontal.
- `min-w-[280px]` evita que las tarjetas se aplasten.
- `scroll-smooth` suaviza el movimiento.

### Opción intermedia: carrusel manual con botones

Aquí se agregan botones para mover el scroll a izquierda y derecha usando React y `useRef`.

Idea general:

```tsx
"use client";

import { useRef } from "react";

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollProjects(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  }

  return (
    <section>
      <div className="mb-4 flex gap-3">
        <button onClick={() => scrollProjects("left")}>Anterior</button>
        <button onClick={() => scrollProjects("right")}>Siguiente</button>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto scroll-smooth">
        {/* tarjetas */}
      </div>
    </section>
  );
}
```

Qué hace:

- `useRef` apunta al contenedor con scroll.
- `scrollBy` mueve el carrusel.
- `behavior: "smooth"` anima el desplazamiento.

### Opción más profesional: Framer Motion o librería ligera

Cuando ya controle Tailwind y React, puedo usar:

- `framer-motion` para animaciones elegantes.
- Una librería ligera de carrusel si necesito paginación, drag o autoplay.

Recomendación profesional: primero hacer scroll horizontal simple. Luego agregar botones. Después evaluar animaciones.

---

## 9. Animaciones al hacer scroll

Las animaciones al hacer scroll deben agregarse de forma progresiva.

### Nivel 1: CSS y Tailwind

Puedo empezar con transiciones simples:

```tsx
<section className="translate-y-0 opacity-100 transition duration-500">
  <h2 className="text-3xl font-bold text-white">Proyectos</h2>
</section>
```

Qué hace: prepara una sección para animaciones suaves, aunque todavía no detecta scroll.

### Nivel 2: Intersection Observer

Intersection Observer permite detectar cuándo una sección entra en pantalla.

Idea base:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
```

Qué hace:

- Detecta si el elemento aparece en pantalla.
- Cambia de oculto a visible.
- Usa Tailwind para animar opacidad y posición.

### Nivel 3: Framer Motion

Framer Motion es más profesional, pero conviene usarlo después.

Instalación:

```bash
npm install framer-motion
```

Recomendación: no abusar de animaciones. Muchas animaciones pueden dañar rendimiento, accesibilidad y concentración.

---

## 10. Inspiración del estilo open.cruip.com

Referencia: <https://open.cruip.com/>

La idea es analizar el estilo, no copiarlo exactamente.

Elementos que se pueden aprender de ese estilo:

- Diseño oscuro con contraste fuerte.
- Hero grande y claro.
- Gradientes sutiles para dar profundidad.
- Tarjetas modernas con bordes suaves.
- Secciones tipo landing page.
- Botones visibles y fáciles de encontrar.
- Mucho espacio visual entre bloques.
- Componentes repetibles.
- Estructura profesional con jerarquía clara.

Cómo adaptar ese estilo a mi portafolio:

- Mantener un fondo oscuro, pero usar acentos propios como teal y emerald.
- Hacer que el Hero explique rápido quién soy, qué hago y qué busco.
- Usar tarjetas limpias para proyectos, habilidades y experiencia.
- Evitar saturar la página con demasiados efectos.
- Usar una o dos llamadas a la acción: "Ver proyectos" y "Contactarme".
- Crear secciones con títulos claros y textos cortos.
- Usar badges de tecnologías en los proyectos.
- Mantener consistencia en bordes, radios, sombras y espaciado.

Mi objetivo no es que parezca una plantilla. Mi objetivo es que se vea profesional y personal.

---

## 11. Recomendaciones profesionales actuales

Para un portafolio moderno, debo cuidar tanto el diseño como la calidad técnica.

### Buenas prácticas

- Mantenerlo rápido.
- Tener buen SEO básico.
- Revisar que funcione bien en celular.
- Separar datos en archivos `data/`.
- Crear componentes reutilizables.
- Cuidar accesibilidad.
- Mantener buen contraste.
- No saturar con animaciones.
- Mostrar proyectos reales.
- Agregar links a GitHub y demos.
- Mantener un `README.md` claro.
- Tener `sitemap.xml` y `robots.txt`.
- Probar con `npm run build` antes de subir a Vercel.
- Usar commits claros en Git.

### Qué usar según mi nivel actual

| Herramienta | Recomendación |
| --- | --- |
| Solo Tailwind CSS | Sí. Es lo mejor al inicio para aprender diseño, responsive y estados hover. |
| `lucide-react` | Sí, después de tener la estructura estable. Ideal para iconos limpios. |
| Framer Motion | Más adelante. Útil cuando ya entienda bien componentes y estados. |
| `react-icons` | Opcional. Usarlo si necesito logos de marca que no estén en Lucide. |
| Librería de carrusel | Mejor evitarla al inicio. Primero scroll horizontal simple. |

Recomendación final de stack:

```txt
Etapa actual: Next.js + TypeScript + Tailwind CSS
Siguiente mejora segura: lucide-react
Más adelante: Framer Motion
Solo si hace falta: react-icons o una librería de carrusel
```

---

## 12. Checklist de mejoras

Puedo usar esta lista para avanzar sin perderme.

- [ ] Agregar foto de perfil.
- [ ] Revisar que `public/avatar.webp` cargue correctamente.
- [ ] Mejorar hover de tarjetas.
- [ ] Mejorar botones principales.
- [ ] Agregar iconos sociales.
- [ ] Agregar badges de tecnologías en proyectos.
- [ ] Agregar carrusel o scroll horizontal de proyectos.
- [ ] Mejorar sección Hero.
- [ ] Agregar animaciones suaves.
- [ ] Revisar responsive en celular.
- [ ] Revisar SEO básico en `app/layout.tsx`.
- [ ] Confirmar `sitemap.xml`.
- [ ] Confirmar `robots.txt`.
- [ ] Correr `npm run build`.
- [ ] Subir cambios con commits claros.
- [ ] Desplegar en Vercel.

---

## 13. Plan de aprendizaje por etapas

### Etapa 1: entender la estructura

Objetivo: saber qué archivo controla cada parte.

Tareas:

- Leer `app/page.tsx`.
- Identificar cada componente.
- Abrir `data/profile.ts`, `data/projects.ts`, `data/skills.ts` y `data/experience.ts`.
- Cambiar un texto pequeño y ver el resultado.

### Etapa 2: modificar contenido

Objetivo: personalizar el portafolio sin tocar lógica compleja.

Tareas:

- Cambiar nombre, rol e intro.
- Mejorar textos de "Sobre mí".
- Actualizar GitHub y LinkedIn.
- Agregar proyectos reales.
- Revisar habilidades.

### Etapa 3: mejorar estilos con Tailwind

Objetivo: aprender a diseñar usando clases.

Tareas:

- Mejorar tarjetas.
- Ajustar espacios.
- Cambiar colores.
- Agregar hover.
- Revisar responsive.

### Etapa 4: agregar interacciones

Objetivo: hacer que la UI se sienta más viva.

Tareas:

- Agregar hover en botones.
- Agregar hover en imagen.
- Revelar botones en tarjetas.
- Agregar iconos sociales.

### Etapa 5: agregar animaciones

Objetivo: mejorar la experiencia sin exagerar.

Tareas:

- Empezar con transiciones de Tailwind.
- Probar `group-hover`.
- Probar Intersection Observer.
- Evaluar Framer Motion.

### Etapa 6: optimizar y desplegar

Objetivo: dejar el proyecto listo para producción.

Tareas:

- Revisar metadata.
- Confirmar `sitemap.xml`.
- Confirmar `robots.txt`.
- Ejecutar `npm run build`.
- Corregir errores.
- Hacer commit y push.
- Desplegar en Vercel.

### Etapa 7: reconstruir desde cero

Objetivo: demostrar que entiendo el proyecto.

Tareas:

- Crear un proyecto nuevo.
- Rehacer la estructura `app/`, `components/`, `data/` y `public/`.
- Reconstruir el Hero sin copiar.
- Reconstruir proyectos, habilidades y contacto.
- Comparar con la versión anterior.

---

## 14. Errores comunes y soluciones

| Error | Causa probable | Solución |
| --- | --- | --- |
| La imagen no aparece | La ruta está mal escrita. | Confirmar que exista `public/avatar.webp` y usar `"/avatar.webp"`. |
| El nombre del archivo no coincide | El archivo se llama distinto, por ejemplo `Avatar.webp` o `avatar.png`. | Usar exactamente el mismo nombre en `profile.avatar`. |
| Error con `next/image` y `output: "export"` | Next intenta optimizar imágenes dinámicamente. | Agregar `images: { unoptimized: true }` en `next.config.ts`. |
| Hover no funciona | Falta una clase `hover:` o el elemento no tiene transición. | Agregar `transition duration-300 hover:...`. |
| El diseño se rompe en mobile | Faltan clases responsive. | Usar `sm:`, `md:`, `lg:` y probar en pantallas pequeñas. |
| El deploy falla en Vercel | Error de build, sitemap, rutas o config. | Ejecutar `npm run build` localmente antes de hacer push. |
| TypeScript marca error por tipos | Falta una propiedad o cambió una interfaz. | Revisar interfaces en archivos `data/` y que todos los objetos cumplan la forma esperada. |
| Links externos no abren correctamente | Falta `https://` o el link está vacío. | Usar URLs completas y revisar `target="_blank"` con `rel="noreferrer"`. |

### Comando clave antes de desplegar

```bash
npm run build
```

Qué hace: prueba si Next puede compilar el sitio para producción. Si falla aquí, probablemente también fallará en Vercel.

---

## 15. Reglas personales para mejorar mi portafolio

Estas reglas me ayudan a mejorar sin perder claridad.

- No copiar código sin entenderlo.
- Hacer cambios pequeños.
- Probar cada cambio.
- Leer el error antes de pedir ayuda.
- Escribir commits claros.
- Documentar lo que aprendo.
- Priorizar claridad antes que complejidad.
- Mantener el diseño profesional.
- No agregar librerías si puedo resolverlo bien con Tailwind.
- Revisar mobile antes de dar algo por terminado.
- Cuidar contraste y accesibilidad.
- Mantener mis proyectos actualizados.
- Borrar o mejorar lo que ya no representa mi nivel.

Ejemplo de commits claros:

```bash
git add .
git commit -m "Add profile avatar"
git commit -m "Improve project card hover styles"
git commit -m "Add social media icons"
```

---

## Próximos cambios recomendados para mi portafolio

Este sería un orden práctico para seguir mejorando.

1. Revisar la foto de perfil
   - Confirmar que se vea bien en desktop y mobile.
   - Probar `object-cover` y `object-contain`.
   - Agregar `hover:scale-105` si se ve natural.

2. Mejorar el Hero
   - Hacer el texto más directo.
   - Mantener solo dos botones importantes.
   - Dar más presencia a la foto.
   - Agregar un fondo sutil con gradiente.

3. Mejorar tarjetas de proyectos
   - Agregar hover.
   - Agregar badges de tecnologías.
   - Agregar botones de GitHub y demo.
   - Considerar scroll horizontal si hay muchos proyectos.

4. Agregar iconos sociales
   - Instalar `lucide-react`.
   - Usar iconos para GitHub, LinkedIn y Mail.
   - Mantener buen `aria-label`.

5. Revisar responsive
   - Probar ancho móvil.
   - Revisar que textos no se corten.
   - Revisar que botones no queden apretados.

6. Mejorar SEO básico
   - Revisar `app/layout.tsx`.
   - Confirmar título y descripción.
   - Mantener `sitemap.xml` y `robots.txt`.

7. Preparar despliegue
   - Ejecutar:

```bash
npm run build
```

   - Si pasa, hacer commit.
   - Subir a GitHub.
   - Desplegar en Vercel.

La clave es avanzar por partes. Un portafolio profesional no se construye en un solo cambio, se mejora con iteraciones pequeñas y bien pensadas.
