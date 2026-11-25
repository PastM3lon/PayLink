## Run with Docker

Prerequisite: Docker with Docker Compose.

```bash
docker compose up --build
```

Check it works:

```bash
curl http://localhost:3000/health
# {"status":"ok"}
```

Stop: `docker compose down` (add `-v` to also delete the database volume).

No `.env` file is needed. To change the defaults, copy `.env.example` to `.env`.

## Run checks locally

Prerequisite: Node.js 24.

```bash
npm ci
npm run lint
npm run build
npm test
```

## Layout

- `src/` application code (NestJS modules)
- `prisma/` Prisma schema and `migrations/` (tables are added in Phase 2)
- `docs/` requirements, design, prompt log
- `.github/workflows/ci.yml` pipeline: install, lint, build, test on every push
