# Hotel API (`comp_hotel_api`)

Single backend API serving both the guest site and staff admin app for a single hotel property.
See `.arc/decisions/ADR-0003-hotel-api.md` for the architecture decision record.

## Stack

- TypeScript + NestJS
- PostgreSQL (via TypeORM)
- pnpm

## Commands

```bash
pnpm install
pnpm run start:dev   # run locally with watch mode
pnpm run build       # compile to dist/
pnpm run test        # unit tests (Jest)
pnpm run test:e2e    # e2e tests (Supertest)
```
