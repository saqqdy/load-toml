[index.md - v1.0.0](README.md) / Exports

# index.md - v1.0.0

## Table of contents

### Variables

- [default](modules.md#default)

### Functions

- [loadToml](modules.md#loadtoml)
- [loadTomlSync](modules.md#loadtomlsync)
- [parseToml](modules.md#parsetoml)
- [stringifyToml](modules.md#stringifytoml)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name            | Type                                                                       |
| :-------------- | :------------------------------------------------------------------------- |
| `loadToml`      | (`path`: `string` \| `URL` \| `Buffer`) => `Promise`<`unknown` \| `null`\> |
| `loadTomlSync`  | (`path`: `string` \| `URL` \| `Buffer`) => `unknown` \| `null`             |
| `parseToml`     | (`data`: `string`) => `JsonMap` \| `null`                                  |
| `stringifyToml` | (`data`: `JsonMap`) => `string` \| `null`                                  |

#### Defined in

[index.ts:88](https://github.com/saqqdy/load-toml/blob/7055254/src/index.ts#L88)

## Functions

### loadToml

▸ **loadToml**(`path`): `Promise`<`unknown` \| `null`\>

load .toml

**`Example`**

```ts
import { loadToml } from 'load-toml'
const data = await loadToml('/path/of/toml') // \{ "name": "saqqdy" \}
```

#### Parameters

| Name   | Type                          | Description |
| :----- | :---------------------------- | :---------- |
| `path` | `string` \| `URL` \| `Buffer` | file path   |

#### Returns

`Promise`<`unknown` \| `null`\>

- result

#### Defined in

[index.ts:61](https://github.com/saqqdy/load-toml/blob/7055254/src/index.ts#L61)

---

### loadTomlSync

▸ **loadTomlSync**(`path`): `unknown` \| `null`

load .toml sync

**`Example`**

```ts
import { loadTomlSync } from 'load-toml'
const data = loadTomlSync('/path/of/toml') // \{ "name": "saqqdy" \}
```

#### Parameters

| Name   | Type                          | Description |
| :----- | :---------------------------- | :---------- |
| `path` | `string` \| `URL` \| `Buffer` | file path   |

#### Returns

`unknown` \| `null`

- result

#### Defined in

[index.ts:80](https://github.com/saqqdy/load-toml/blob/7055254/src/index.ts#L80)

---

### parseToml

▸ **parseToml**(`data`): `JsonMap` \| `null`

parse toml data

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `data` | `string` | file path   |

#### Returns

`JsonMap` \| `null`

- result

#### Defined in

[index.ts:26](https://github.com/saqqdy/load-toml/blob/7055254/src/index.ts#L26)

---

### stringifyToml

▸ **stringifyToml**(`data`): `string` \| `null`

stringify toml data

#### Parameters

| Name   | Type      | Description |
| :----- | :-------- | :---------- |
| `data` | `JsonMap` | file path   |

#### Returns

`string` \| `null`

- result

#### Defined in

[index.ts:41](https://github.com/saqqdy/load-toml/blob/7055254/src/index.ts#L41)
