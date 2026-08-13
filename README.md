# Gabriel Bergamini — Portfolio

Personal portfolio site, built with Angular 21 (standalone components, signals) and Tailwind CSS v4. No login, no backend integration yet — that's planned for a later iteration once companion APIs exist.

## Getting started

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Scripts

- `npm start` — dev server (`ng serve`)
- `npm run build` — production build (`ng build`)
- `npm run watch` — dev build in watch mode
- `npm test` — unit tests (`ng test`, powered by Vitest)
- `npm run storybook` — component explorer at http://localhost:6006
- `npm run build-storybook` — static Storybook build
- `npm run lint` — ESLint (`@angular-eslint`)
- `npm run format` / `npm run format:check` — Prettier

## Structure

- `src/app/core/services` — theme, i18n (EN/PT) and active-hash services, all signal-based.
- `src/app/layouts` — route shells (currently just `main-layout`, which renders the header).
- `src/app/features/<feature>/pages` — routed pages (`home`, `resume`).
- `src/app/shared/{molecules,organisms}` — reusable design-system components (atomic design), each with a co-located `.spec.ts` and, where relevant, a `.stories.ts`.
- `src/environments` — `environment.ts`/`environment.prod.ts` are git-ignored (copy `environment.example.ts` locally before building) to avoid leaking API URLs added later.

Path imports use the `@/*` alias (`@/app/...`), mapped to `./src/*` in `tsconfig.json`.
