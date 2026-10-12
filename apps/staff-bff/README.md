# Staff BFF

API gateway/BFF in front of the Hotel API for the staff admin app — enforces
internal staff auth and request shaping. See `.arc/decisions/ADR-0006-staff-bff.md`.

## Development

```bash
pnpm install
pnpm run start:dev
```

## Build

```bash
pnpm run build
```

## Tests

```bash
pnpm run test       # unit tests (Jest)
pnpm run test:e2e   # e2e tests (Supertest)
```
