# Lifeday v0.1

Minimal, opinionated, extensible daily data format for health, performance, and longevity tracking.

## Quickstart

1. Clone repo.
2. `npm install`
3. `npm run validate -- examples/example-lifeday.json`

## Structure

- `lifeday.v0.1.json` — canonical JSON Schema (draft 2020-12).
- `src/types.ts` — TypeScript interfaces.
- `examples/` — example Lifeday documents.
- `validate.ts` — small validation CLI using AJV.

## Conventions (short)
- `date` is a local civil day in `meta.timezone`.
- `unit_code` uses UCUM (recommended).
- Producers SHOULD include `id`, `created_at`, and `provenance` when available.
- Large traces live externally and are referenced via `timeseries_refs`.

## Versioning & governance
- `meta.schema_version` is the canonical schema string.
- See `CONTRIBUTING.md` for how to propose changes.

## License
MIT — see `LICENSE`.
