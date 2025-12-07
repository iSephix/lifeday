# Lifeday v0.3.0

Minimal, opinionated, extensible daily data format for health, performance, and longevity tracking.

## Quickstart

### Using the NPM package

1.  Install the package:
    ```bash
    npm install lifeday
    ```
2.  Import the schema in your code:
    ```javascript
    import schema from 'lifeday';

    // Use the schema with a validator like AJV
    ```

### From source

1.  Clone repo.
2.  `npm install`
3.  `npm run validate -- examples/example-lifeday.json`

## Documentation

The Lifeday schema is documented in the [`docs`](./docs) folder. The documentation is automatically generated from the schema file.

## Structure

-   `src/lifeday.v0.3.0.schema.json` — canonical JSON Schema (draft 2020-12).
-   `src/index.ts` — main package entry point.
-   `src/validate.ts` — small validation CLI using AJV.
-   `examples/` — example Lifeday documents.

## Conventions (short)

-   `date` is a local civil day in `meta.timezone`.
-   `unit_code` uses UCUM (recommended).
-   Producers SHOULD include `id`, `created_at`, and `provenance` when available.
-   Large traces live externally and are referenced via `timeseries_refs`.

## Versioning & governance

-   `meta.schema_version` is the canonical schema string.
-   See `CONTRIBUTING.md` for how to propose changes.

## License

MIT — see `LICENSE`.
