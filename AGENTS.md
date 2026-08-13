# This is an Angular + Tailwind CSS project

This repo is a personal portfolio, migrated from Next.js/React to Angular 21 (standalone components, signals, the new `@angular/build` esbuild/Vite pipeline) with Tailwind CSS v4. There is no login/auth and no backend API integration yet — both are planned for later, so don't add speculative guards, interceptors, or API services ahead of that need.

Conventions to follow (mirrored from the sibling repo `freight-tracker-dashboard`, adapted for Tailwind instead of Bootstrap):

- Standalone components only, no `NgModule`s. New template control flow (`@if`/`@for`), not `*ngIf`/`*ngFor`.
- One folder per component under `src/app/shared/{molecules,organisms}` (atomic design) or `src/app/features/<feature>/pages/<page>`, each with `<name>.ts` / `.html` / `.scss` / `.spec.ts`, and `.stories.ts` for design-system pieces.
- Styling is Tailwind utility classes in templates; component `.scss` files stay `.scss` (matching the sibling repo), except `src/styles.css`, which must stay plain CSS because Tailwind v4's `@import "tailwindcss"` cannot be resolved by a Sass compiler.
- Internal imports use the `@/*` path alias (`@/app/...`), mapped to `./src/*` in `tsconfig.json`.
- Icons: `@lucide/angular` (import the specific `Lucide<Name>` class into a component's `imports` array, use as an SVG attribute selector: `<svg lucideMenu [size]="20"></svg>`).
- i18n and theme are plain signal-based services under `src/app/core/services` (no NgRx, no `@angular/localize`) — see `TranslationService` and `ThemeService`.
- `src/environments/environment.ts` and `environment.prod.ts` are git-ignored; only `environment.example.ts` is tracked. Copy it locally before running `ng build`/`ng serve` if those files don't exist yet.
