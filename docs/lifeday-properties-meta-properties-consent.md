# Untitled object in Lifeday v0.1 Schema

```txt
https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [lifeday.v0.1.schema.json\*](../out/lifeday.v0.1.schema.json "open original schema") |

## consent Type

`object` ([Details](lifeday-properties-meta-properties-consent.md))

# consent Properties

| Property                       | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :----------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [consented](#consented)        | `boolean` | Required | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-consented.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/consented")       |
| [version](#version)            | `string`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-version.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/version")           |
| [scope](#scope)                | `string`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-scope.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/scope")               |
| [consented\_at](#consented_at) | `string`  | Optional | cannot be null | [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-consented_at.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/consented_at") |

## consented



`consented`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-consented.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/consented")

### consented Type

`boolean`

## version



`version`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-version.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/version")

### version Type

`string`

## scope

Comma-separated or space-separated scopes, e.g. 'labs wearables'

`scope`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-scope.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/scope")

### scope Type

`string`

## consented\_at



`consented_at`

* is optional

* Type: `string`

* cannot be null

* defined in: [Lifeday v0.1](lifeday-properties-meta-properties-consent-properties-consented_at.md "https://scholich.ventures/schema/v0.1.json#/properties/meta/properties/consent/properties/consented_at")

### consented\_at Type

`string`

### consented\_at Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
