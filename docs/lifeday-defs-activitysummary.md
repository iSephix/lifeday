# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## ActivitySummary Type

`object` ([Details](lifeday-defs-activitysummary.md))

## ActivitySummary Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

# ActivitySummary Properties

| Property                       | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :----------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [steps](#steps)                | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/steps")                          |
| [active\_min](#active_min)     | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/active_min")                     |
| [vigorous\_min](#vigorous_min) | `object` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/vigorous_min")                   |
| [workouts](#workouts)          | `array`  | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-activitysummary-properties-workouts.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/workouts") |

## steps



`steps`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/steps")

### steps Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## active\_min



`active_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/active_min")

### active\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## vigorous\_min



`vigorous_min`

* is optional

* Type: `object` ([Details](lifeday-defs-measuredvalue.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-measuredvalue.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/vigorous_min")

### vigorous\_min Type

`object` ([Details](lifeday-defs-measuredvalue.md))

## workouts



`workouts`

* is optional

* Type: `object[]` ([Details](lifeday-defs-workoutsession.md))

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-activitysummary-properties-workouts.md "https://scholich.ventures/schema/v0.1.json#/$defs/ActivitySummary/properties/workouts")

### workouts Type

`object[]` ([Details](lifeday-defs-workoutsession.md))
