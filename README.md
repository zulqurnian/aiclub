# PWCOM AI CLUB

Landing page for the PWCOM AI Club — a focused AI lab environment built on the
"Lumina Noir" design system (see [`design_docs/DESIGN.md`](./design_docs/DESIGN.md)).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (with the Lumina Noir tokens in `src/index.css`)
- **pnpm** for package management

## Getting started

```bash
pnpm install
pnpm dev          # http://127.0.0.1:5173
```

Other scripts:

```bash
pnpm build        # type-check + production build to dist/
pnpm preview      # serve the production build
pnpm lint         # eslint
```

## Project structure

```
src/
├── App.tsx                # state wiring: drawer, pinned sessions, submit handler
├── main.tsx               # React root
├── index.css              # Tailwind v4 import + Lumina Noir @theme tokens
└── components/
    ├── Sidebar.tsx        # left rail + sliding Pinned Sessions drawer
    ├── TopBar.tsx         # hamburger, parent company link, 3-dot menu
    ├── CommandBar.tsx     # typewriter placeholder + bound input + submit
    └── CenterCanvas.tsx   # brain + headline + CTA + CommandBar
design_docs/               # design system spec + original HTML template
public/                    # static assets
```

## Design system

Colors, typography, spacing, and elevation all live as CSS custom properties
inside the `@theme` block in `src/index.css`. The full spec — including
hex values, type scales, and shape language — is in
[`design_docs/DESIGN.md`](./design_docs/DESIGN.md).

To tweak the look, edit the tokens there. Do not hardcode colors in
components.
