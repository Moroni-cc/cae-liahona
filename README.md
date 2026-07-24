# Documentación del Proyecto — CAE-LIAHONA

**Sitio web institucional para academia de asesoría educativa**
Autor: Moroni Capcha
Repositorio: [github.com/Moroni-cc/cae-liahona](https://github.com/Moroni-cc/cae-liahona)

---

## 1. Resumen del proyecto

CAE-LIAHONA es una academia de asesoría educativa enfocada en estudiantes de primaria y secundaria, que ofrece nivelación académica, técnicas de estudio, desarrollo psicoeducativo y orientación vocacional.

Este proyecto es el **sitio web institucional** de la academia: una landing page completa de varias secciones (inicio, sobre nosotros, servicios, blog) pensada para que familias interesadas conozcan los servicios, lean testimonios, resuelvan dudas frecuentes y contacten directamente a la academia por WhatsApp.

El sitio está construido como una **Single Page Application (SPA)** moderna, con una identidad visual propia (paleta de azules, tipografía elegante y una metáfora de "brújula / rumbo" que recorre todo el contenido, en referencia al nombre "Liahona").

---

## 2. Objetivo del proyecto

- Dar presencia digital profesional a la academia.
- Comunicar con claridad los 4 servicios principales que ofrece.
- Generar confianza mediante testimonios y una sección "Sobre nosotros".
- Convertir visitantes en clientes potenciales mediante un **botón de contacto directo por WhatsApp**, sin fricción de formularios tradicionales por correo.
- Servir como base de contenidos (blog) para posicionamiento y valor agregado a las familias.

---

## 3. Tecnologías utilizadas

| Tecnología                    | Uso en el proyecto                                              |
| ----------------------------- | --------------------------------------------------------------- |
| **React 19**                  | Librería principal para construir la interfaz por componentes   |
| **Vite**                      | Entorno de desarrollo y empaquetado (build ultrarrápido)        |
| **React Router (HashRouter)** | Navegación entre páginas sin recargar el sitio                  |
| **Tailwind CSS v4**           | Sistema de estilos utilitario, con tema de diseño personalizado |
| **oxlint**                    | Linter para mantener calidad y consistencia del código          |
| **pnpm**                      | Gestor de paquetes del proyecto                                 |
| **Git / GitHub**              | Control de versiones                                            |
| **Vercel**                    | Plataforma de despliegue (hosting)                              |

> **Nota para el cliente:** no se usa una base de datos ni backend propio. El contenido (servicios, preguntas frecuentes, artículos del blog) está definido directamente en el código, por lo que cualquier actualización de textos requiere una modificación y un nuevo despliegue del sitio.

---

## 4. Estructura del sitio (páginas)

El sitio cuenta con **5 secciones principales**, todas accesibles desde el menú de navegación:

### 🏠 Inicio (`/`)
- Sección de bienvenida (*hero*) con mensaje principal y llamados a la acción.
- Misión de la academia.
- Los "3 pilares" del servicio: nivelación, hábitos de estudio, y desarrollo integral.
- Bloques de beneficios alternados con imágenes.
- Testimonios de estudiantes y padres de familia.
- Llamado a la acción final.
- Formulario de suscripción al boletín informativo.

### 👥 Sobre nosotros (`/sobre-nosotros`)
- Historia e inspiración del nombre "Liahona".
- Presentación del equipo de asesores.
- Colegios/clientes con los que se ha trabajado.

### 🎓 Servicios (`/servicios`)
- Las 4 líneas de servicio de la academia, cada una con lista de características.
- Preguntas frecuentes desplegables (acordeón).
- **Formulario de contacto que redirige automáticamente a WhatsApp**, con el mensaje del interesado ya redactado y listo para enviar al número de la academia.

### 📰 Blog (`/blog`)
- Listado de artículos con fecha, autor y resumen.

### 📄 Entrada de blog (`/blog/:slug`)
- Vista de detalle de cada artículo individual.

---

## 5. Funcionalidades clave

### ✅ Contacto directo por WhatsApp
En lugar de un formulario de contacto tradicional (que requeriría un servidor de correo), el formulario de la página de Servicios construye automáticamente un mensaje con los datos ingresados por el usuario y lo envía a través de un enlace de WhatsApp (`wa.me`) al número de contacto de la academia. Esto simplifica la gestión de leads: cada consulta llega directo al WhatsApp de negocio de CAE-LIAHONA.

### ✅ Preguntas frecuentes interactivas
En la página de Servicios, las preguntas frecuentes se pueden expandir y contraer individualmente (formato acordeón), manteniendo la página ordenada y fácil de escanear visualmente.

### ✅ Menú de navegación responsivo
El menú se adapta automáticamente: en computadoras se muestra horizontal, y en celulares se convierte en un menú tipo "hamburguesa" desplegable.

### ✅ Suscripción a boletín
Sección de captura de correo electrónico en la página de inicio, con confirmación visual inmediata al suscribirse.

### ✅ Sistema de diseño propio
Toda la paleta de colores, tipografías y animaciones sutiles (como el ícono de brújula que "se asienta") están centralizadas en un solo archivo de configuración de estilos, lo que permite mantener consistencia visual en todo el sitio y facilita futuros cambios de marca.

---

## 6. Decisiones técnicas relevantes

Durante el desarrollo se tomaron decisiones importantes para garantizar que el sitio funcione correctamente una vez publicado en internet (no solo en el entorno de pruebas local):

- **Uso de `HashRouter` en lugar de `BrowserRouter`:** se cambió el sistema de rutas para evitar errores "404 - Página no encontrada" al recargar el sitio o compartir enlaces directos (por ejemplo, `/servicios`) una vez publicado en Vercel. Esta es una solución robusta y muy usada para sitios estáticos de una sola página.
- **Ajustes de configuración para Vercel:** se agregaron configuraciones adicionales para asegurar que el proceso de compilación (*build*) y publicación funcione sin errores en el servidor de hosting.
- **Componente `Button` inteligente:** un mismo componente de botón decide automáticamente si debe comportarse como un enlace interno (navegación dentro del sitio), un enlace externo (WhatsApp, correo, teléfono) o un botón de acción, evitando errores de navegación y duplicación de código.
- **Accesibilidad y rendimiento:** el sitio respeta la preferencia del sistema operativo "reducir movimiento" (para personas sensibles a animaciones) y usa imágenes livianas para una carga rápida.

---

## 7. Estructura de carpetas del proyecto

```
cae-liahona/
├── src/
│   ├── components/       → Piezas reutilizables de interfaz
│   │   ├── Navbar.jsx        (menú de navegación)
│   │   ├── Footer.jsx        (pie de página)
│   │   ├── Layout.jsx        (estructura general de cada página)
│   │   ├── Logo.jsx          (ícono de marca)
│   │   ├── Newsletter.jsx    (suscripción a boletín)
│   │   └── ui.jsx            (botones, tarjetas, encabezados, etc.)
│   │
│   ├── pages/            → Cada una de las páginas del sitio
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   └── BlogPost.jsx
│   │
│   ├── assets/            → Imágenes y logo
│   ├── index.css          → Colores, tipografías y estilos globales
│   ├── App.jsx             → Define las rutas del sitio
│   └── main.jsx            → Punto de entrada de la aplicación
│
├── public/                 → Archivos estáticos (favicon, íconos)
├── package.json             → Dependencias y comandos del proyecto
└── README.md
```

---

## 8. Cómo ejecutar el proyecto (guía técnica)

### Requisitos previos
- Node.js 18 o superior
- pnpm (`npm install -g pnpm` si no lo tienes instalado)

### Instalación de dependencias
```bash
pnpm install
```

### Modo desarrollo (para hacer cambios y probarlos en vivo)
```bash
pnpm run dev
```
Luego abrir el navegador en: `http://localhost:5173`

### Generar versión de producción
```bash
pnpm build
```

### Previsualizar la versión de producción
```bash
pnpm preview
```

---

## 9. Estado actual y despliegue

- El proyecto se encuentra alojado en GitHub y desplegado en **Vercel**.
- El historial de desarrollo incluye: creación de la estructura base, definición de paleta de colores, actualización de contenidos y enfoque hacia primaria y secundaria, integración del formulario de contacto con WhatsApp, y correcciones de enrutamiento para asegurar el correcto funcionamiento en producción.

---

## 10. Posibles mejoras a futuro

Estas son ideas que se le pueden proponer al cliente para una siguiente etapa del proyecto:

- **Panel de administración** para que el cliente pueda editar servicios, preguntas frecuentes y artículos del blog sin necesidad de tocar código.
- **Conexión real del boletín** a un servicio de envío de correos (por ejemplo, Mailchimp o similar), ya que actualmente la suscripción solo muestra un mensaje de confirmación visual.
- **Reemplazo de las fotos de testimonios** (actualmente son imágenes temporales de stock) por fotos reales de estudiantes, con su debido consentimiento.
- **Optimización para buscadores (SEO)** y metadatos para redes sociales.
- **Integración de Google Analytics** para medir visitas y conversiones desde el sitio.

---

*Documento generado como parte de la entrega final del proyecto CAE-LIAHONA.*