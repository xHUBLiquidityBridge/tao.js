# Tao.js SDK monorepo

[![Build Status][build]][build-url]
[![Coverage Status][cover]][cover-url]

Uses [Lerna](https://github.com/lerna/lerna). Automatically lints and prettifies
code on commit.

## Documentation

Please view `README.md` for each individual package (e.g. [packages/tao](https://github.com/makerdao/tao.js/blob/dev/packages/tao/README.md)) and/or [docs.makerdao.com](https://docs.makerdao.com/dai.js).

## Getting started

```
yarn
curl https://dapp.tools/install | sh // Installs dapptools
yarn lerna bootstrap // Installs dependencies & links all local dependencies together
yarn build // builds each plugin for local use
```

### Running the testchain

```
yarn testchain
yarn test:logs // get testchain logs
```

### Running tests

```
yarn test
yarn test:integration
yarn test:build
```

Run `yarn coverage` to generate a test coverage report.

### Creating a UMD build

See [packages/tao/README.md](https://github.com/makerdao/tao.js/blob/dev/packages/tao/README.md#commands) for instructions.

[build]: https://circleci.com/gh/xHUBLiquidityBridge/tao.js
[build-url]: https://circleci.com/gh/xHUBLiquidityBridge/tao.js
[cover]: https://codecov.io/gh/xHUBLiquidityBridge/tao.js/branch/dev/graph/badge.svg
[cover-url]: https://codecov.io/gh/xHUBLiquidityBridge/tao.js
