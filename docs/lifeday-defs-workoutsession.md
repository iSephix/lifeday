# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## WorkoutSession Type

`object` ([Details](lifeday-defs-workoutsession.md))

# WorkoutSession Properties

| Property                       | Type     | Required | Nullable       | Defined by                                                                                                                                                      |
| :----------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                      | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/id")                   |
| [external\_id](#external_id)   | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/external_id") |
| [dedupe\_key](#dedupe_key)     | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/dedupe_key")   |
| [start](#start)                | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/start")             |
| [end](#end)                    | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/end")                 |
| [label](#label)                | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-label.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/label")             |
| [type](#type)                  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-workoutsession-properties-type.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/type")               |
| [duration\_min](#duration_min) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/duration_min")                        |

## id

Local ID for this workout session

`id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/id")

### id Type

`string`

## external\_id

Stable ID from upstream system

`external_id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-external_id.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/external_id")

### external\_id Type

`string`

## dedupe\_key

Optional canonical dedupe key for workout sessions

`dedupe_key`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-dedupe_key.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/dedupe_key")

### dedupe\_key Type

`string`

## start



`start`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/start")

### start Type

`string`

### start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## end



`end`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/end")

### end Type

`string`

### end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## label

Free-form description, e.g. 'morning run'

`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-label.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/label")

### label Type

`string`

## type

Workout category, e.g. 'run', 'strength', 'cycling'

`type`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-workoutsession-properties-type.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/type")

### type Type

`string`

## duration\_min



`duration_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/WorkoutSession/properties/duration_min")

### duration\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))
