# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## measurement\_quality Type

`object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality.md))

# measurement\_quality Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                |
| :------------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [accuracy](#accuracy)                       | `number` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-accuracy.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/accuracy")                     |
| [accuracy\_unit\_code](#accuracy_unit_code) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-accuracy_unit_code.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/accuracy_unit_code") |
| [resolution](#resolution)                   | `number` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-resolution.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/resolution")                 |
| [range](#range)                             | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-range.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/range")                           |
| [vendor\_grade](#vendor_grade)              | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-vendor_grade.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/vendor_grade")             |
| [firmware\_version](#firmware_version)      | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-firmware_version.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/firmware_version")     |
| [calibration\_at](#calibration_at)          | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-calibration_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/calibration_at")         |

## accuracy

Absolute accuracy (e.g. ± value). Interpretation depends on accuracy\_unit\_code.

`accuracy`

* is optional

* Type: `number`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-accuracy.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/accuracy")

### accuracy Type

`number`

## accuracy\_unit\_code

Unit code (recommended UCUM) for the accuracy value if different from unit\_code

`accuracy_unit_code`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-accuracy_unit_code.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/accuracy_unit_code")

### accuracy\_unit\_code Type

`string`

## resolution

Smallest discernible step for the sensor (numeric)

`resolution`

* is optional

* Type: `number`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-resolution.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/resolution")

### resolution Type

`number`

## range



`range`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality-properties-range.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-range.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/range")

### range Type

`object` ([Details](lifeday-defs-measuredvalue-properties-measurement_quality-properties-range.md))

## vendor\_grade

Rough class of device, e.g. 'consumer', 'research', 'clinical'

`vendor_grade`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-vendor_grade.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/vendor_grade")

### vendor\_grade Type

`string`

## firmware\_version

Optional firmware/software version of the measuring device

`firmware_version`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-firmware_version.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/firmware_version")

### firmware\_version Type

`string`

## calibration\_at

Timestamp of last calibration if known

`calibration_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue-properties-measurement_quality-properties-calibration_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/MeasuredValue/properties/measurement_quality/properties/calibration_at")

### calibration\_at Type

`string`

### calibration\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
