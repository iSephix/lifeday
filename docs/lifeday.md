# Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json](../out/lifeday.v0.1.schema.json "open original schema") |

## Lifeday v0.1 Type

`object` ([Lifeday v0.1](lifeday.md))

# Lifeday v0.1 Properties

| Property                                                | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :------------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                               | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-id.md "https://scholich.ventures/schema/v0.1.json#/properties/id")                                             |
| [date](#date)                                           | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-properties-date.md "https://scholich.ventures/schema/v0.1.json#/properties/date")                                         |
| [created\_at](#created_at)                              | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-created_at.md "https://scholich.ventures/schema/v0.1.json#/properties/created_at")                             |
| [updated\_at](#updated_at)                              | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-updated_at.md "https://scholich.ventures/schema/v0.1.json#/properties/updated_at")                             |
| [checksum](#checksum)                                   | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-checksum.md "https://scholich.ventures/schema/v0.1.json#/properties/checksum")                                 |
| [dedupe\_key](#dedupe_key)                              | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/properties/dedupe_key")                             |
| [provenance](#provenance)                               | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-provenance.md "https://scholich.ventures/schema/v0.1.json#/properties/provenance")                             |
| [sleep](#sleep)                                         | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-sleep.md "https://scholich.ventures/schema/v0.1.json#/properties/sleep")                                       |
| [activity](#activity)                                   | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-activitysummary.md "https://scholich.ventures/schema/v0.1.json#/properties/activity")                                |
| [activity\_timeseries\_refs](#activity_timeseries_refs) | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-activity_timeseries_refs.md "https://scholich.ventures/schema/v0.1.json#/properties/activity_timeseries_refs") |
| [body](#body)                                           | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-bodysummary.md "https://scholich.ventures/schema/v0.1.json#/properties/body")                                        |
| [mind](#mind)                                           | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-mindsummary.md "https://scholich.ventures/schema/v0.1.json#/properties/mind")                                        |
| [substances](#substances)                               | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-substancesummary.md "https://scholich.ventures/schema/v0.1.json#/properties/substances")                             |
| [nutrition](#nutrition)                                 | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-nutritionsummary.md "https://scholich.ventures/schema/v0.1.json#/properties/nutrition")                              |
| [notes](#notes)                                         | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-notes.md "https://scholich.ventures/schema/v0.1.json#/properties/notes")                                       |
| [meta](#meta)                                           | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta.md "https://scholich.ventures/schema/v0.1.json#/properties/meta")                                         |
| [extensions](#extensions)                               | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-extensions.md "https://scholich.ventures/schema/v0.1.json#/properties/extensions")                             |
| [timeseries\_refs](#timeseries_refs)                    | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-timeseries_refs.md "https://scholich.ventures/schema/v0.1.json#/properties/timeseries_refs")                   |

## id

Stable UUID for this Lifeday document (producer-generated if available)

`id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-id.md "https://scholich.ventures/schema/v0.1.json#/properties/id")

### id Type

`string`

## date

Calendar date in ISO 8601 format YYYY-MM-DD, interpreted in meta.timezone

`date`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-date.md "https://scholich.ventures/schema/v0.1.json#/properties/date")

### date Type

`string`

### date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## created\_at

Document creation timestamp (producer time)

`created_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-created_at.md "https://scholich.ventures/schema/v0.1.json#/properties/created_at")

### created\_at Type

`string`

### created\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updated\_at

Document last-updated timestamp (producer time)

`updated_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-updated_at.md "https://scholich.ventures/schema/v0.1.json#/properties/updated_at")

### updated\_at Type

`string`

### updated\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## checksum

Optional integrity hash of the Lifeday document (e.g. sha256 hex)

`checksum`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-checksum.md "https://scholich.ventures/schema/v0.1.json#/properties/checksum")

### checksum Type

`string`

## dedupe\_key

Optional producer-supplied key to help dedupe documents across syncs

`dedupe_key`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/properties/dedupe_key")

### dedupe\_key Type

`string`

## provenance

Ordered list of producers/actors that contributed to this Lifeday

`provenance`

* is optional

* Type: `object[]` ([Details](lifeday-defs-provenance.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-provenance.md "https://scholich.ventures/schema/v0.1.json#/properties/provenance")

### provenance Type

`object[]` ([Details](lifeday-defs-provenance.md))

## sleep



`sleep`

* is optional

* Type: `object[]` ([Details](lifeday-defs-sleepblock.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-sleep.md "https://scholich.ventures/schema/v0.1.json#/properties/sleep")

### sleep Type

`object[]` ([Details](lifeday-defs-sleepblock.md))

## activity



`activity`

* is optional

* Type: `object` ([Details](lifeday-defs-activitysummary.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-activitysummary.md "https://scholich.ventures/schema/v0.1.json#/properties/activity")

### activity Type

`object` ([Details](lifeday-defs-activitysummary.md))

### activity Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

## activity\_timeseries\_refs

Optional references to high-resolution activity traces (CGM/ECG/PPG/GPS, etc.)

`activity_timeseries_refs`

* is optional

* Type: `object[]` ([Details](lifeday-defs-timeseriesref.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-activity_timeseries_refs.md "https://scholich.ventures/schema/v0.1.json#/properties/activity_timeseries_refs")

### activity\_timeseries\_refs Type

`object[]` ([Details](lifeday-defs-timeseriesref.md))

## body



`body`

* is optional

* Type: `object` ([Details](lifeday-defs-bodysummary.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-bodysummary.md "https://scholich.ventures/schema/v0.1.json#/properties/body")

### body Type

`object` ([Details](lifeday-defs-bodysummary.md))

### body Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

## mind



`mind`

* is optional

* Type: `object` ([Details](lifeday-defs-mindsummary.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-mindsummary.md "https://scholich.ventures/schema/v0.1.json#/properties/mind")

### mind Type

`object` ([Details](lifeday-defs-mindsummary.md))

### mind Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

## substances



`substances`

* is optional

* Type: `object` ([Details](lifeday-defs-substancesummary.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-substancesummary.md "https://scholich.ventures/schema/v0.1.json#/properties/substances")

### substances Type

`object` ([Details](lifeday-defs-substancesummary.md))

### substances Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

## nutrition



`nutrition`

* is optional

* Type: `object` ([Details](lifeday-defs-nutritionsummary.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-nutritionsummary.md "https://scholich.ventures/schema/v0.1.json#/properties/nutrition")

### nutrition Type

`object` ([Details](lifeday-defs-nutritionsummary.md))

### nutrition Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

## notes



`notes`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-notes.md "https://scholich.ventures/schema/v0.1.json#/properties/notes")

### notes Type

`string`

## meta



`meta`

* is optional

* Type: `object` ([Details](lifeday-properties-meta.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta.md "https://scholich.ventures/schema/v0.1.json#/properties/meta")

### meta Type

`object` ([Details](lifeday-properties-meta.md))

## extensions

Optional extension-specific payloads keyed by extension name

`extensions`

* is optional

* Type: `object` ([Details](lifeday-properties-extensions.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-extensions.md "https://scholich.ventures/schema/v0.1.json#/properties/extensions")

### extensions Type

`object` ([Details](lifeday-properties-extensions.md))

## timeseries\_refs

Optional standardized pointers to large/high-resolution traces stored externally

`timeseries_refs`

* is optional

* Type: `object[]` ([Details](lifeday-defs-timeseriesref.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-timeseries_refs.md "https://scholich.ventures/schema/v0.1.json#/properties/timeseries_refs")

### timeseries\_refs Type

`object[]` ([Details](lifeday-defs-timeseriesref.md))

# Lifeday v0.1 Definitions

## Definitions group MeasuredValue

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue"}
```

| Property                                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                    |
| :------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value)                              | Multiple | Required | can be null    | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-value.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/value")                             |
| [unit\_code](#unit_code)                     | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-unit_code.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/unit_code")                     |
| [source](#source)                            | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-source.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/source")                           |
| [quality](#quality)                          | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-quality.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/quality")                         |
| [confidence](#confidence)                    | `number` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-confidence.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/confidence")                   |
| [measurement\_quality](#measurement_quality) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality") |
| [granularity](#granularity)                  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-granularity.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/granularity")                 |
| [captured\_at](#captured_at)                 | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-captured_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/captured_at")                 |
| [raw](#raw)                                  | Multiple | Optional | can be null    | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-raw.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/raw")                                 |

### value



`value`

* is required

* Type: any of the following: `number` or `string` ([Details](lifeday-defs-measuredvalue-properties-value.md))

* can be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-value.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/value")

#### value Type

any of the following: `number` or `string` ([Details](lifeday-defs-measuredvalue-properties-value.md))

### unit\_code

Canonical unit code (recommended: UCUM). Use this to avoid free-text units.

`unit_code`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-unit_code.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/unit_code")

#### unit\_code Type

`string`

### source

Device, app, or provider identifier (e.g. 'Oura', 'AppleHealth', 'manual', 'lab:Synlab')

`source`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-source.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/source")

#### source Type

`string`

### quality



`quality`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-quality.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/quality")

#### quality Type

`string`

#### quality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"measured"`      |             |
| `"estimated"`     |             |
| `"self_reported"` |             |
| `"missing"`       |             |
| `"artifact"`      |             |

### confidence

Producer-estimated confidence in this value, range 0..1

`confidence`

* is optional

* Type: `number`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-confidence.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/confidence")

#### confidence Type

`number`

#### confidence Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### measurement\_quality



`measurement_quality`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality")

#### measurement\_quality Type

`object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality.md))

### granularity



`granularity`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-granularity.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/granularity")

#### granularity Type

`string`

#### granularity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"day"`     |             |
| `"session"` |             |
| `"event"`   |             |
| `"epoch"`   |             |

### captured\_at



`captured_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-captured_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/captured_at")

#### captured\_at Type

`string`

#### captured\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### raw

Optional raw payload from the source system

`raw`

* is optional

* Type: any of the following: `object` or `array` or `string` or `number` or `boolean` ([Details](lifeday-defs-measuredvalue-properties-raw.md))

* can be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-raw.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/raw")

#### raw Type

any of the following: `object` or `array` or `string` or `number` or `boolean` ([Details](lifeday-defs-measuredvalue-properties-raw.md))

## Definitions group Provenance

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/Provenance"}
```

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :--------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [actor](#actor)              | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-actor.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/actor")             |
| [role](#role)                | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-role.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/role")               |
| [imported\_at](#imported_at) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-imported_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/imported_at") |
| [description](#description)  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-description.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/description") |

### actor

Human-readable actor name or system id, e.g. 'Oura', 'ImportScript\_v1'

`actor`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-actor.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/actor")

#### actor Type

`string`

### role

Role of the actor, e.g. 'device', 'app', 'importer', 'lab'

`role`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-role.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/role")

#### role Type

`string`

### imported\_at



`imported_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-imported_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/imported_at")

#### imported\_at Type

`string`

#### imported\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### description



`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-description.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/description")

#### description Type

`string`

## Definitions group SleepBlock

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock"}
```

| Property                       | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :----------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id-1)                    | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/id")                   |
| [external\_id](#external_id)   | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/external_id") |
| [dedupe\_key](#dedupe_key-1)   | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/dedupe_key")   |
| [start](#start)                | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/start")             |
| [end](#end)                    | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/end")                 |
| [duration\_min](#duration_min) | `object` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/duration_min")                    |
| [efficiency](#efficiency)      | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/efficiency")                      |
| [latency\_min](#latency_min)   | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/latency_min")                     |
| [rem\_min](#rem_min)           | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/rem_min")                         |
| [deep\_min](#deep_min)         | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/deep_min")                        |
| [light\_min](#light_min)       | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/light_min")                       |
| [awakenings](#awakenings)      | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/awakenings")                      |

### id

Local ID for this sleep block

`id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/id")

#### id Type

`string`

### external\_id

Stable ID from upstream system (e.g., Oura sleep ID)

`external_id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/external_id")

#### external\_id Type

`string`

### dedupe\_key

Optional canonical dedupe key for sleep blocks

`dedupe_key`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/dedupe_key")

#### dedupe\_key Type

`string`

### start



`start`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/start")

#### start Type

`string`

#### start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### end



`end`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/end")

#### end Type

`string`

#### end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### duration\_min



`duration_min`

* is required

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/duration_min")

#### duration\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### efficiency



`efficiency`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/efficiency")

#### efficiency Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### latency\_min



`latency_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/latency_min")

#### latency\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### rem\_min



`rem_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/rem_min")

#### rem\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### deep\_min



`deep_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/deep_min")

#### deep\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### light\_min



`light_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/light_min")

#### light\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### awakenings



`awakenings`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/awakenings")

#### awakenings Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## Definitions group ActivitySummary

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary"}
```

| Property                       | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :----------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [steps](#steps)                | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/steps")                          |
| [active\_min](#active_min)     | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/active_min")                     |
| [vigorous\_min](#vigorous_min) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/vigorous_min")                   |
| [workouts](#workouts)          | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-activitysummary-properties-workouts.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/workouts") |

### steps



`steps`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/steps")

#### steps Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### active\_min



`active_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/active_min")

#### active\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### vigorous\_min



`vigorous_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/vigorous_min")

#### vigorous\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### workouts



`workouts`

* is optional

* Type: `object[]` ([Details](lifeday-defs-workoutsession.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-activitysummary-properties-workouts.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/workouts")

#### workouts Type

`object[]` ([Details](lifeday-defs-workoutsession.md))

## Definitions group WorkoutSession

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession"}
```

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                                                                      |
| :------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-2)                      | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/id")                   |
| [external\_id](#external_id-1)   | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/external_id") |
| [dedupe\_key](#dedupe_key-2)     | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/dedupe_key")   |
| [start](#start-1)                | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/start")             |
| [end](#end-1)                    | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/end")                 |
| [label](#label)                  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-label.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/label")             |
| [type](#type)                    | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-type.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/type")               |
| [duration\_min](#duration_min-1) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/duration_min")                        |

### id

Local ID for this workout session

`id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/id")

#### id Type

`string`

### external\_id

Stable ID from upstream system

`external_id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/external_id")

#### external\_id Type

`string`

### dedupe\_key

Optional canonical dedupe key for workout sessions

`dedupe_key`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/dedupe_key")

#### dedupe\_key Type

`string`

### start



`start`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/start")

#### start Type

`string`

#### start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### end



`end`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/end")

#### end Type

`string`

#### end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### label

Free-form description, e.g. 'morning run'

`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-label.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/label")

#### label Type

`string`

### type

Workout category, e.g. 'run', 'strength', 'cycling'

`type`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-type.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/type")

#### type Type

`string`

### duration\_min



`duration_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/duration_min")

#### duration\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## Definitions group BodySummary

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                            |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| [weight\_kg](#weight_kg)        | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/weight_kg")    |
| [body\_fat\_pct](#body_fat_pct) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/body_fat_pct") |
| [resting\_hr](#resting_hr)      | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/resting_hr")   |
| [hrv\_rmssd\_ms](#hrv_rmssd_ms) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/hrv_rmssd_ms") |
| [spo2\_pct](#spo2_pct)          | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/spo2_pct")     |

### weight\_kg



`weight_kg`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/weight_kg")

#### weight\_kg Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### body\_fat\_pct



`body_fat_pct`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/body_fat_pct")

#### body\_fat\_pct Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### resting\_hr



`resting_hr`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/resting_hr")

#### resting\_hr Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### hrv\_rmssd\_ms



`hrv_rmssd_ms`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/hrv_rmssd_ms")

#### hrv\_rmssd\_ms Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### spo2\_pct



`spo2_pct`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/BodySummary/properties/spo2_pct")

#### spo2\_pct Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## Definitions group MindSummary

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary"}
```

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [mood\_score](#mood_score)        | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/mood_score")    |
| [stress\_score](#stress_score)    | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/stress_score")  |
| [focus\_min](#focus_min)          | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/focus_min")     |
| [deep\_work\_min](#deep_work_min) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/deep_work_min") |

### mood\_score

Recommended: -2..+2 or 1..10 scale; defined by client

`mood_score`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/mood_score")

#### mood\_score Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### stress\_score



`stress_score`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/stress_score")

#### stress\_score Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### focus\_min



`focus_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/focus_min")

#### focus\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### deep\_work\_min



`deep_work_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/deep_work_min")

#### deep\_work\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## Definitions group SubstanceSummary

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary"}
```

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [caffeine\_mg](#caffeine_mg)     | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary/properties/caffeine_mg")   |
| [alcohol\_units](#alcohol_units) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary/properties/alcohol_units") |
| [nicotine\_mg](#nicotine_mg)     | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary/properties/nicotine_mg")   |

### caffeine\_mg



`caffeine_mg`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary/properties/caffeine_mg")

#### caffeine\_mg Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### alcohol\_units



`alcohol_units`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary/properties/alcohol_units")

#### alcohol\_units Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### nicotine\_mg



`nicotine_mg`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SubstanceSummary/properties/nicotine_mg")

#### nicotine\_mg Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## Definitions group NutritionSummary

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary"}
```

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [calories\_kcal](#calories_kcal) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/calories_kcal") |
| [protein\_g](#protein_g)         | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/protein_g")     |
| [carbs\_g](#carbs_g)             | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/carbs_g")       |
| [fat\_g](#fat_g)                 | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/fat_g")         |

### calories\_kcal



`calories_kcal`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/calories_kcal")

#### calories\_kcal Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### protein\_g



`protein_g`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/protein_g")

#### protein\_g Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### carbs\_g



`carbs_g`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/carbs_g")

#### carbs\_g Type

`object` ([Details](lifeday-defs-measuredvalue.md))

### fat\_g



`fat_g`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/NutritionSummary/properties/fat_g")

#### fat\_g Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## Definitions group TimeseriesRef

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef"}
```

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-3)                            | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/id")                           |
| [kind](#kind)                          | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-kind.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/kind")                       |
| [start](#start-2)                      | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/start")                     |
| [end](#end-2)                          | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/end")                         |
| [url\_or\_blob\_ref](#url_or_blob_ref) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-url_or_blob_ref.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/url_or_blob_ref") |
| [hash](#hash)                          | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-hash.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/hash")                       |
| [resolution\_ms](#resolution_ms)       | `number` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-resolution_ms.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/resolution_ms")     |

### id

Local id for the referenced timeseries

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/id")

#### id Type

`string`

### kind

Type of trace, e.g. 'cgm', 'ecg', 'ppg', 'gps', 'cgm:glucose'

`kind`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-kind.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/kind")

#### kind Type

`string`

### start



`start`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/start")

#### start Type

`string`

#### start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### end



`end`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/end")

#### end Type

`string`

#### end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### url\_or\_blob\_ref

Pointer to external storage (signed URL, blob ref, ipfs, etc.)

`url_or_blob_ref`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-url_or_blob_ref.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/url_or_blob_ref")

#### url\_or\_blob\_ref Type

`string`

### hash

Optional integrity hash for the referenced blob

`hash`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-hash.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/hash")

#### hash Type

`string`

### resolution\_ms

Sampling resolution in milliseconds if applicable

`resolution_ms`

* is optional

* Type: `number`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-resolution_ms.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/resolution_ms")

#### resolution\_ms Type

`number`

## Definitions group LabPanelExtension

Reference this group by using

```json
{"$ref":"https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension"}
```

| Property          | Type    | Required | Nullable       | Defined by                                                                                                                                                  |
| :---------------- | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [panels](#panels) | `array` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels") |

### panels



`panels`

* is optional

* Type: `object[]` ([Details](lifeday-defs-labpanelextension-properties-panels-items.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels")

#### panels Type

`object[]` ([Details](lifeday-defs-labpanelextension-properties-panels-items.md))
