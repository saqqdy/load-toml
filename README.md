<div style="text-align: center;" align="center">

# load-toml

Read and parse a .toml file

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

## **For API documentation, see: [API Docs](./docs/modules.md)**

</div>

## Installing

```bash
# use pnpm
$ pnpm install load-toml

# use npm
$ npm install load-toml --save

# use yarn
$ yarn add load-toml
```

## Usage

1. use `load-toml` in async mode

```js
import { loadToml } from 'load-toml'

loadToml().then(path => {
  console.log('result is: ', path) // { "name": "saqqdy" }
})
```

2. use `load-toml` in sync mode

```js
import { loadTomlSync } from 'load-toml'

console.log('result is: ', loadTomlSync()) // { "name": "saqqdy" }
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/load-toml/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/load-toml.svg?style=flat-square
[npm-url]: https://npmjs.org/package/load-toml
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/load-toml/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/load-toml&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/load-toml.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/load-toml?branch=master
[download-image]: https://img.shields.io/npm/dm/load-toml.svg?style=flat-square
[download-url]: https://npmjs.org/package/load-toml
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_load-toml
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_load-toml
