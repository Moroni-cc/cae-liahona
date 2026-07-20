# CAE-LIAHONA — Sitio web

Proyecto construido con **Vite + React + Tailwind CSS v4 + React Router**.

## Requisitos
- Node.js 18+
- pnpm (`npm install -g pnpm` si no lo tienes)

## Instalación
```bash
pnpm install
```

## Desarrollo
```bash
pnpm dev
```
Abre http://localhost:5173

## Producción
```bash
pnpm build
pnpm preview
```

## Estructura
```
src/
  components/   → Navbar, Footer, Layout, Newsletter, ui.jsx (botones, tarjetas...), Logo.jsx (ícono de marca)
  pages/        → Home, About, Services, Blog, BlogPost
  index.css     → tokens de diseño (colores, fuentes) vía @theme de Tailwind v4
  App.jsx       → rutas (react-router-dom)
```
