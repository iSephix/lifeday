# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/value
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## value Type

`object` ([Details](lifeday-defs-measuredvalue.md))

# value Properties

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

## value



`value`

* is required

* Type: any of the following: `number` or `string` ([Details](lifeday-defs-measuredvalue-properties-value.md))

* can be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-value.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/value")

### value Type

any of the following: `number` or `string` ([Details](lifeday-defs-measuredvalue-properties-value.md))

## unit\_code

Canonical unit code (recommended: UCUM). Use this to avoid free-text units.

`unit_code`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-unit_code.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/unit_code")

### unit\_code Type

`string`

## source

Device, app, or provider identifier (e.g. 'Oura', 'AppleHealth', 'manual', 'lab:Synlab')

`source`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-source.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/source")

### source Type

`string`

## quality



`quality`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-quality.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/quality")

### quality Type

`string`

### quality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"measured"`      |             |
| `"estimated"`     |             |
| `"self_reported"` |             |
| `"missing"`       |             |
| `"artifact"`      |             |

## confidence

Producer-estimated confidence in this value, range 0..1

`confidence`

* is optional

* Type: `number`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-confidence.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/confidence")

### confidence Type

`number`

### confidence Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

## measurement\_quality



`measurement_quality`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality")

### measurement\_quality Type

`object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality.md))

## granularity



`granularity`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-granularity.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/granularity")

### granularity Type

`string`

### granularity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"day"`     |             |
| `"session"` |             |
| `"event"`   |             |
| `"epoch"`   |             |

## captured\_at



`captured_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-captured_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/captured_at")

### captured\_at Type

`string`

### captured\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## raw

Optional raw payload from the source system

`raw`

* is optional

* Type: any of the following: `object` or `array` or `string` or `number` or `boolean` ([Details](lifeday-defs-measuredvalue-properties-raw.md))

* can be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-raw.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/raw")

### raw Type

any of the following: `object` or `array` or `string` or `number` or `boolean` ([Details](lifeday-defs-measuredvalue-properties-raw.md))
