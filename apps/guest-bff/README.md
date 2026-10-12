# Guest BFF

API gateway/BFF in front of the Hotel API for the guest site — enforces public-guest auth and
request shaping. See `.arc/decisions/ADR-0005-guest-bff.md`.

## Development

```bash
pnpm install
pnpm run start:dev
```

## Testing

```bash
pnpm run test       # unit tests (Jest)
pnpm run test:e2e   # e2e tests (Supertest)
```
