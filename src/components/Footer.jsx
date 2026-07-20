export function Footer() {
  return (
    <footer className="bg-midnight text-mist">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-parchment">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-brass-light">
                <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" fill="currentColor" />
              </svg>
              CAE-LIAHONA
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Acompañamos a cada estudiante a encontrar su propio rumbo académico, con orientación
              vocacional y planificación pensada para llegar a la universidad correcta.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brass-light">Navegación</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li><a href="/" className="hover:text-parchment">Inicio</a></li>
              <li><a href="/sobre-nosotros" className="hover:text-parchment">Sobre nosotros</a></li>
              <li><a href="/servicios" className="hover:text-parchment">Servicios</a></li>
              <li><a href="/blog" className="hover:text-parchment">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brass-light">Contacto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>hola@cae-liahona.edu</li>
              <li>+51 938 221 801</li>
              <li>Lun–Vie, 9:00–19:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} CAE-LIAHONA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-parchment">Política de privacidad</a>
            <a href="#" className="hover:text-parchment">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
