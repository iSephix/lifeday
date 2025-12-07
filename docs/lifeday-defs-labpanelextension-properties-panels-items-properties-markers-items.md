# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## items Type

`object` ([Details](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items.md))

# items Properties

| Property                             | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                      |
| :----------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [code](#code)                        | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-code.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/code")                       |
| [label](#label)                      | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-label.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/label")                     |
| [value](#value)                      | `object` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/value")                                                                                           |
| [reference\_range](#reference_range) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-reference_range.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/reference_range") |

## code

Recommended: LOINC code where applicable

`code`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-code.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/code")

### code Type

`string`

## label



`label`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-label.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/label")

### label Type

`string`

## value



`value`

* is required

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/value")

### value Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## reference\_range



`reference_range`

* is optional

* Type: `object` ([Details](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-reference_range.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-reference_range.md "https://scholich.ventures/schema/v0.1.json#/$defs/LabPanelExtension/properties/panels/items/properties/markers/items/properties/reference_range")

### reference\_range Type

`object` ([Details](lifeday-defs-labpanelextension-properties-panels-items-properties-markers-items-properties-reference_range.md))
