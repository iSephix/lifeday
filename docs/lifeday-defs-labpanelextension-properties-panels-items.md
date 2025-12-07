# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## items Type

`object` ([Details](lifeday-defs-labpanelextension-properties-panels-items.md))

# items Properties

| Property               | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                      |
| :--------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)          | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-name.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/name")         |
| [provider](#provider)  | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-provider.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/provider") |
| [taken\_at](#taken_at) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-taken_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/taken_at") |
| [markers](#markers)    | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers")   |

## name



`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-name.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/name")

### name Type

`string`

## provider



`provider`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-provider.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/provider")

### provider Type

`string`

## taken\_at



`taken_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-taken_at.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/taken_at")

### taken\_at Type

`string`

### taken\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## markers



`markers`

* is optional

* Type: `object[]` ([Details](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers")

### markers Type

`object[]` ([Details](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items.md))
