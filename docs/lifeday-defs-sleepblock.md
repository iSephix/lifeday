# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## SleepBlock Type

`object` ([Details](lifeday-defs-sleepblock.md))

# SleepBlock Properties

| Property                       | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :----------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                      | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/id")                   |
| [external\_id](#external_id)   | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/external_id") |
| [dedupe\_key](#dedupe_key)     | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/dedupe_key")   |
| [start](#start)                | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/start")             |
| [end](#end)                    | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-sleepblock-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/end")                 |
| [duration\_min](#duration_min) | `object` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/duration_min")                    |
| [efficiency](#efficiency)      | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/efficiency")                      |
| [latency\_min](#latency_min)   | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/latency_min")                     |
| [rem\_min](#rem_min)           | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/rem_min")                         |
| [deep\_min](#deep_min)         | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/deep_min")                        |
| [light\_min](#light_min)       | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/light_min")                       |
| [awakenings](#awakenings)      | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/awakenings")                      |

## id

Local ID for this sleep block

`id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/id")

### id Type

`string`

## external\_id

Stable ID from upstream system (e.g., Oura sleep ID)

`external_id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/external_id")

### external\_id Type

`string`

## dedupe\_key

Optional canonical dedupe key for sleep blocks

`dedupe_key`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/dedupe_key")

### dedupe\_key Type

`string`

## start



`start`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/start")

### start Type

`string`

### start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## end



`end`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-sleepblock-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/end")

### end Type

`string`

### end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## duration\_min



`duration_min`

* is required

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/duration_min")

### duration\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## efficiency



`efficiency`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/efficiency")

### efficiency Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## latency\_min



`latency_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/latency_min")

### latency\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## rem\_min



`rem_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/rem_min")

### rem\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## deep\_min



`deep_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/deep_min")

### deep\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## light\_min



`light_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/light_min")

### light\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## awakenings



`awakenings`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/SleepBlock/properties/awakenings")

### awakenings Type

`object` ([Details](lifeday-defs-measuredvalue.md))
