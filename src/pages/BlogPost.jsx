import { Link, useParams } from "react-router-dom";
import { CompassMark } from "../components/Compass";
import { posts } from "./Blog";
import { Button, Eyebrow, Stars } from "../components/ui";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug) ?? posts[0];

  return (
    <>
      <section className="bg-midnight">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Eyebrow bearing="Bitácora">Entrada de blog</Eyebrow>
          <h1 className="mt-6 font-display text-3xl font-medium leading-tight text-parchment sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-mist">
            {post.author} · {post.date}
          </p>
        </div>
      </section>

      <div className="mx-auto -mt-10 max-w-4xl px-6">
        <div className="flex aspect-[16/7] items-center justify-center rounded-2xl border border-parchment-line bg-parchment-dim">
          <CompassMark className="h-20 w-20 text-brass/40" />
        </div>
      </div>

      <article className="bg-parchment">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <p className="text-lg leading-relaxed text-slate">{post.excerpt}</p>
          <p className="mt-6 leading-relaxed text-slate">
            En CAE-LIAHONA vemos este dilema constantemente: familias con buenas intenciones que,
            sin darse cuenta, terminan decidiendo por el estudiante. La clave está en separar dos
            preguntas distintas — “¿qué carrera tiene más salida laboral?” y “¿qué carrera puedo
            sostener durante cinco años sin perder la motivación?” — y trabajarlas por separado,
            con datos y con introspección real.
          </p>
          <blockquote className="my-8 border-l-2 border-brass pl-6 font-display text-xl italic text-ink">
            Una decisión vocacional tomada por descarte rara vez sostiene el esfuerzo de una
            carrera completa.
          </blockquote>
          <p className="leading-relaxed text-slate">
            Por eso el primer paso de nuestro proceso de orientación vocacional no es un test, es
            una conversación. El test ordena información; la conversación revela lo que el
            estudiante todavía no se atreve a decir en voz alta.
          </p>
        </div>
      </article>

      <section className="bg-parchment-dim">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brass-dark">
            Lo que dicen nuestros lectores
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-parchment-line bg-white/70 p-6">
              <Stars />
              <p className="mt-3 text-sm text-slate">
                “Este artículo describe exactamente lo que viví con mi hija. Nos ayudó a bajar la
                presión en casa.”
              </p>
            </div>
            <div className="rounded-2xl border border-parchment-line bg-white/70 p-6">
              <Stars count={4} />
              <p className="mt-3 text-sm text-slate">
                “Ojalá lo hubiera leído antes de postular. Igual me sirvió para acompañar a mi
                hermano menor.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-medium text-parchment sm:text-3xl">
            ¿Quieres una guía a tu propia medida?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/servicios">Agenda una consulta</Button>
            <Button href="/blog" variant="ghost">
              Volver al blog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
