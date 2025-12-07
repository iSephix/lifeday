# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## TimeseriesRef Type

`object` ([Details](lifeday-defs-timeseriesref.md))

# TimeseriesRef Properties

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                              | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/id")                           |
| [kind](#kind)                          | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-kind.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/kind")                       |
| [start](#start)                        | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/start")                     |
| [end](#end)                            | `string` | Required | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/end")                         |
| [url\_or\_blob\_ref](#url_or_blob_ref) | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-url_or_blob_ref.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/url_or_blob_ref") |
| [hash](#hash)                          | `string` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-hash.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/hash")                       |
| [resolution\_ms](#resolution_ms)       | `number` | Optional | cannot be null | [Lifeday v0.1](lifeday-defs-timeseriesref-properties-resolution_ms.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/resolution_ms")     |

## id

Local id for the referenced timeseries

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-id.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/id")

### id Type

`string`

## kind

Type of trace, e.g. 'cgm', 'ecg', 'ppg', 'gps', 'cgm:glucose'

`kind`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-kind.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/kind")

### kind Type

`string`

## start



`start`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-start.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/start")

### start Type

`string`

### start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## end



`end`

* is required

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-end.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/end")

### end Type

`string`

### end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## url\_or\_blob\_ref

Pointer to external storage (signed URL, blob ref, ipfs, etc.)

`url_or_blob_ref`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-url_or_blob_ref.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/url_or_blob_ref")

### url\_or\_blob\_ref Type

`string`

## hash

Optional integrity hash for the referenced blob

`hash`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-hash.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/hash")

### hash Type

`string`

## resolution\_ms

Sampling resolution in milliseconds if applicable

`resolution_ms`

* is optional

* Type: `number`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-defs-timeseriesref-properties-resolution_ms.md "https://scholich.ventures/schema/v0.1.json#/$defs/TimeseriesRef/properties/resolution_ms")

### resolution\_ms Type

`number`
