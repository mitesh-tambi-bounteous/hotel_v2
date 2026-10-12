# Staff Admin Web App

Internal web app for hotel staff to manage rooms, bookings, and rates (`comp_staff_admin_web_app`).
See `.arc/decisions/ADR-0002-staff-admin-web-app.md`.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Vitest + Testing Library for unit tests
- Playwright for e2e tests
- pnpm

## Commands

Run from this directory (`apps/staff-admin-web/`):

```sh
pnpm install
pnpm dev          # local dev server
pnpm build        # production build
pnpm test         # unit tests (vitest)
pnpm test:e2e     # e2e tests (playwright)
pnpm lint
pnpm typecheck
```
