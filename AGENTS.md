# AGENTS

## Projeto

- **Nome:** NlwIA
- **Stack:** Next.js (App Router) + React + Tailwind CSS (via Tailwind v4 + `tailwind-variants`)
- **Ponto de entrada:** `src/app/page.tsx`

## Padrões globais

- **Layout global:** `src/app/layout.tsx` contém `<Header />`, `<main />` e `<Footer />`.
- **Componentes reutilizáveis:** `src/components/ui/*` exportados em `src/components/ui/index.ts`.
- **Estilo:** Tailwind utilitário + `globals.css` para variáveis (inclui fonte JetBrains Mono para monospaced).

## Convenções rápidas

- **Navegação:** Use `next/link` para rotas internas.
- **Componentes:** coloque componentes atômicos em `src/components/` e expanda em `ui/` quando for coleção de componentes.
- **CSS:** Prefira classes Tailwind; use `globals.css` apenas para variáveis e resets.

## Como rodar

- `npm install`
- `npm run dev`

---

_(Este arquivo foi criado para fornecer um resumo rápido do projeto e dos padrões principais.)_
