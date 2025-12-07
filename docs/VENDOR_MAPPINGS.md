# Vendor mapping examples (normative examples to speed adoption)

- Oura:
  - sleep -> map to `sleep[]` with `external_id` = `oura:<id>`
  - rmssd -> map to `body.hrv_rmssd_ms` with `unit_code` = "ms"

- Apple Health:
  - steps -> `activity.steps` with `unit_code` = "{count}"
  - workouts -> `activity.workouts[]` with `external_id` from workout UUID

- Garmin:
  - vo2max -> extension `body.vo2max_ml_kg_min` under `extensions.garmin` for v0.1

(Will include concrete transform snippets in future.)
