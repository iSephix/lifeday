export interface MeasuredValue {
  value: number | string | null;
  unit_code?: string; // UCUM recommended
  source?: string; // e.g. "Oura", "AppleHealth", "manual", "lab:Synlab"
  quality?: "measured" | "estimated" | "self_reported" | "missing" | "artifact";
  confidence?: number; // 0..1
  measurement_quality?: {
    accuracy?: number;
    accuracy_unit_code?: string;
    resolution?: number;
    range?: { min?: number; max?: number };
    vendor_grade?: string; // "consumer" | "research" | "clinical"
    firmware_version?: string;
    calibration_at?: string; // ISO date-time
  };
  granularity?: "day" | "session" | "event" | "epoch";
  captured_at?: string; // ISO 8601 date-time
  raw?: unknown;
}

export interface SleepBlock {
  id?: string;
  external_id?: string;
  dedupe_key?: string;
  start: string; // ISO 8601 date-time
  end: string;   // ISO 8601 date-time
  duration_min: MeasuredValue;
  efficiency?: MeasuredValue;
  latency_min?: MeasuredValue;
  rem_min?: MeasuredValue;
  deep_min?: MeasuredValue;
  light_min?: MeasuredValue;
  awakenings?: MeasuredValue;
}

export interface WorkoutSession {
  id?: string;
  external_id?: string;
  dedupe_key?: string;
  start: string;
  end: string;
  label?: string;
  type?: string;
  duration_min?: MeasuredValue;
}

export interface ActivitySummary {
  steps?: MeasuredValue;
  active_min?: MeasuredValue;
  vigorous_min?: MeasuredValue;
  workouts?: WorkoutSession[];
}

export interface BodySummary {
  weight_kg?: MeasuredValue;
  body_fat_pct?: MeasuredValue;
  resting_hr?: MeasuredValue;
  hrv_rmssd_ms?: MeasuredValue;
  spo2_pct?: MeasuredValue;
}

export interface MindSummary {
  mood_score?: MeasuredValue;
  stress_score?: MeasuredValue;
  focus_min?: MeasuredValue;
  deep_work_min?: MeasuredValue;
}

export interface SubstanceSummary {
  caffeine_mg?: MeasuredValue;
  alcohol_units?: MeasuredValue;
  nicotine_mg?: MeasuredValue;
}

export interface NutritionSummary {
  calories_kcal?: MeasuredValue;
  protein_g?: MeasuredValue;
  carbs_g?: MeasuredValue;
  fat_g?: MeasuredValue;
}

export interface Provenance {
  actor: string;
  role: string;
  imported_at?: string;
  description?: string;
}

export interface TimeseriesRef {
  id: string;
  kind: string;
  start: string;
  end: string;
  url_or_blob_ref?: string;
  hash?: string;
  resolution_ms?: number;
}

export interface LifedayMeta {
  schema_version: "0.1";
  person_id?: string;
  timezone?: string;
  validation_level?: "draft" | "basic" | "strict";
  consent?: {
    consented: boolean;
    version?: string;
    scope?: string;
    consented_at?: string;
  };
}

export interface Lifeday {
  id?: string;
  date: string; // "YYYY-MM-DD"
  created_at?: string;
  updated_at?: string;
  checksum?: string;
  dedupe_key?: string;
  provenance?: Provenance[];

  sleep?: SleepBlock[];
  activity?: ActivitySummary;
  activity_timeseries_refs?: TimeseriesRef[];
  body?: BodySummary;
  mind?: MindSummary;
  substances?: SubstanceSummary;
  nutrition?: NutritionSummary;
  notes?: string;

  meta?: LifedayMeta;
  extensions?: Record<string, unknown>;
  timeseries_refs?: TimeseriesRef[];
}
