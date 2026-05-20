# Portafolio Personal - Santiago Cordoba Garces

Primera version funcional de un portafolio personal construido con Next.js, TypeScript, Tailwind CSS y ESLint. La idea es que sirva como sitio profesional inicial y tambien como material de estudio para reconstruirlo desde cero.

## Tecnologias

- Next.js con App Router
- TypeScript
- Tailwind CSS
- ESLint
- Componentes reutilizables
- Datos separados en archivos editables

## Como correr el proyecto

> En este entorno no estan instalados `node` ni `npm`. Primero instala Node.js en tu maquina y luego ejecuta estos comandos.

```bash
npm install
npm run dev
```

Abre el navegador en:

```bash
http://localhost:3000
```

Para validar una version de produccion:

```bash
npm run build
```

Para revisar reglas de ESLint:

```bash
npm run lint
```

## Organizacion del proyecto

```txt
app/
  layout.tsx       Metadata, idioma y estilos globales
  page.tsx         Composicion de todas las secciones
  globals.css      Tailwind, tema oscuro y estilos globales
components/
  Navbar.tsx       Navegacion sticky y menu mobile
  Hero.tsx         Presentacion principal
  About.tsx        Texto personal editable
  Skills.tsx       Habilidades por categoria
  Projects.tsx     Tarjetas de proyectos
  Experience.tsx   Timeline de formacion y practica
  Contact.tsx      Contacto y formulario simulado
  Footer.tsx       Pie de pagina con ano dinamico
data/
  profile.ts       Nombre, rol, email, GitHub y bio
  navigation.ts    Links internos del sitio
  projects.ts      Lista tipada de proyectos
  skills.ts        Lista tipada de habilidades
  experience.ts    Lista tipada de experiencia/formacion
```

## Que hace cada componente

- `Navbar.tsx`: muestra los enlaces principales y usa `useState` para abrir/cerrar el menu hamburguesa en mobile.
- `Hero.tsx`: presenta tu nombre, rol, frase corta, botones de accion e iniciales como avatar visual.
- `About.tsx`: muestra una bio en formato de dos columnas en desktop y una columna en mobile.
- `Skills.tsx`: lee `skillCategories` desde `data/skills.ts` y renderiza badges por categoria.
- `Projects.tsx`: lee `projects` desde `data/projects.ts` y crea tarjetas con tecnologias, GitHub y demo.
- `Experience.tsx`: lee `experienceItems` desde `data/experience.ts` y crea una timeline simple.
- `Contact.tsx`: muestra email, GitHub y un formulario que simula envio con TypeScript.
- `Footer.tsx`: muestra tu nombre, ano actual y links rapidos.
- `SectionHeading.tsx`: componente reutilizable para titulos de seccion.

## Como modificar los datos

Para cambiar tu informacion personal, edita:

```txt
data/profile.ts
```

Para cambiar proyectos, edita:

```txt
data/projects.ts
```

Cada proyecto sigue esta forma:

```ts
{
  title: "Nombre del proyecto",
  description: "Descripcion corta",
  technologies: ["Next.js", "TypeScript"],
  githubUrl: "https://github.com/usuario/repositorio",
  demoUrl: "https://demo.com"
}
```

Para cambiar habilidades:

```txt
data/skills.ts
```

Para cambiar experiencia, cursos o logros:

```txt
data/experience.ts
```

## Archivos que deberias estudiar primero

1. `app/page.tsx`: entiende como se unen todas las secciones.
2. `data/profile.ts`: cambia contenido sin tocar componentes.
3. `components/Hero.tsx`: aprende estructura basica de una seccion.
4. `components/Projects.tsx`: mira como se renderiza una lista con `.map()`.
5. `components/Contact.tsx`: estudia `useState`, `FormEvent` y la simulacion del envio.
6. `app/layout.tsx`: revisa metadata basica para SEO.
7. `app/globals.css`: observa Tailwind y estilos globales.

## Como reconstruirlo desde cero sin copiar

1. Crea una app nueva con Next.js, TypeScript, Tailwind y ESLint.
2. Limpia la pagina inicial y deja solo `layout.tsx`, `page.tsx` y `globals.css`.
3. Crea primero `data/profile.ts` con tu nombre, rol, email y links.
4. Construye `Navbar` y `Hero`; confirma que el sitio se ve bien en mobile.
5. Agrega `About` y `Skills` usando datos separados.
6. Crea `projects.ts` y renderiza tarjetas con `.map()`.
7. Crea `experience.ts` y renderiza una timeline simple.
8. Agrega `Contact` con formulario visual y estado de envio.
9. Revisa accesibilidad: labels, foco visible, contraste y navegacion con teclado.
10. Ejecuta `npm run lint` y `npm run build`.

## Notas de edicion

- Los enlaces de demo son placeholders internos. Cambialos cuando tengas demos reales publicadas.
- LinkedIn esta oculto en `data/profile.ts`; cuando tengas perfil, agrega el enlace y cambia `isVisible` a `true`.
- El formulario no envia correos reales. Solo simula el envio para practicar interaccion en React.
