# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## MindSummary Type

`object` ([Details](lifeday-defs-mindsummary.md))

## MindSummary Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

# MindSummary Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [mood\_score](#mood_score)        | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/mood_score")    |
| [stress\_score](#stress_score)    | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/stress_score")  |
| [focus\_min](#focus_min)          | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/focus_min")     |
| [deep\_work\_min](#deep_work_min) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/deep_work_min") |

## mood\_score

Recommended: -2..+2 or 1..10 scale; defined by client

`mood_score`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/mood_score")

### mood\_score Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## stress\_score



`stress_score`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/stress_score")

### stress\_score Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## focus\_min



`focus_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/focus_min")

### focus\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## deep\_work\_min



`deep_work_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/MindSummary/properties/deep_work_min")

### deep\_work\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))
