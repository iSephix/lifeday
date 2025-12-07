# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/properties/meta
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## meta Type

`object` ([Details](lifeday-properties-meta.md))

# meta Properties

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [schema\_version](#schema_version)     | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-schema_version.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/schema_version")     |
| [person\_id](#person_id)               | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-person_id.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/person_id")               |
| [timezone](#timezone)                  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-timezone.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/timezone")                 |
| [validation\_level](#validation_level) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-validation_level.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/validation_level") |
| [consent](#consent)                    | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-consent.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent")                   |

## schema\_version



`schema_version`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-schema_version.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/schema_version")

### schema\_version Type

`string`

### schema\_version Constraints

**constant**: the value of this property must be equal to:

```json
"0.1"
```

## person\_id



`person_id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-person_id.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/person_id")

### person\_id Type

`string`

## timezone

IANA timezone name for interpreting 'date', e.g. 'Europe/Berlin'

`timezone`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-timezone.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/timezone")

### timezone Type

`string`

## validation\_level

Producer's validation/assertion level for this document

`validation_level`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-validation_level.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/validation_level")

### validation\_level Type

`string`

### validation\_level Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"draft"`  |             |
| `"basic"`  |             |
| `"strict"` |             |

## consent



`consent`

* is optional

* Type: `object` ([Details](lifeday-properties-meta-properties-consent.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-consent.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent")

### consent Type

`object` ([Details](lifeday-properties-meta-properties-consent.md))
