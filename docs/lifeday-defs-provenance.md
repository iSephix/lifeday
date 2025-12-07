# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/Provenance
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## Provenance Type

`object` ([Details](lifeday-defs-provenance.md))

# Provenance Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :--------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [actor](#actor)              | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-actor.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/actor")             |
| [role](#role)                | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-role.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/role")               |
| [imported\_at](#imported_at) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-imported_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/imported_at") |
| [description](#description)  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-provenance-properties-description.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/description") |

## actor

Human-readable actor name or system id, e.g. 'Oura', 'ImportScript\_v1'

`actor`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-actor.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/actor")

### actor Type

`string`

## role

Role of the actor, e.g. 'device', 'app', 'importer', 'lab'

`role`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-role.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/role")

### role Type

`string`

## imported\_at



`imported_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-imported_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/imported_at")

### imported\_at Type

`string`

### imported\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## description



`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-provenance-properties-description.md "https://scholich.ventures/schema/v0.1.json#/$defs/Provenance/properties/description")

### description Type

`string`
