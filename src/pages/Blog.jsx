import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Newsletter } from "../components/Newsletter";
import { Eyebrow, SectionHeading } from "../components/ui";

export const posts = [
  {
    slug: "como-elegir-carrera-sin-presion",
    title: "Cómo elegir una carrera sin dejarte llevar por la presión familiar",
    excerpt: "Tres preguntas que todo estudiante debería responder antes de escoger carrera, y por qué la opinión ajena debería llegar al final del proceso, no al principio.",
    date: "3 de julio de 2026",
    author: "Andrés Paredes",
  },
  {
    slug: "planificar-el-ultimo-ano-de-secundaria",
    title: "Guía para planificar tu último año de secundaria",
    excerpt: "Un cronograma trimestral realista para llegar a los exámenes de admisión sin perder el resto de tu último año escolar.",
    date: "22 de junio de 2026",
    author: "Sofía Chávez",
  },
  {
    slug: "senales-de-que-necesitas-un-cambio-de-carrera",
    title: "5 señales de que quizás necesitas replantear tu carrera",
    excerpt: "No toda duda a mitad de carrera significa un error. Aprende a distinguir el cansancio pasajero de una señal real de desalineación vocacional.",
    date: "10 de junio de 2026",
    author: "Lucía Vargas",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-midnight">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Eyebrow bearing="Bitácora">Blog CAE-LIAHONA</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-medium text-parchment sm:text-5xl">
            Notas de ruta para estudiantes y familias
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Consejos prácticos, recursos y novedades sobre orientación vocacional y admisión
            universitaria, escritos por nuestro propio equipo de asesores.
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-parchment-line bg-white/70 p-6 transition-colors hover:border-brass"
              >
                <div className="flex aspect-video items-center justify-center rounded-xl bg-parchment-dim">
                  <Logo className="h-12 w-12 text-brass/40" />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-wide text-brass-dark">{post.date}</p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink group-hover:text-brass-dark">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-brass-dark">Leer entrada →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
