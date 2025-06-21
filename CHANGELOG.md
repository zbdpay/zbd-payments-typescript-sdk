# Changelog

## 1.8.3 (2025-06-21)

Full Changelog: [v1.8.2...v1.8.3](https://github.com/zbdpay/zbd-payments-typescript-sdk/compare/v1.8.2...v1.8.3)

## 1.8.2 (2025-06-21)

Full Changelog: [v1.8.1...v1.8.2](https://github.com/zbdpay/zbd-payments-typescript-sdk/compare/v1.8.1...v1.8.2)

### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([6e76e41](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/6e76e41c37aef396575f77d3728e66e4ee9eac26))


### Chores

* fixes ([de1d7ce](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/de1d7ce48192cc32ba225ed26b90d4100c449d73))
* more fixes ([49966c3](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/49966c32639873d06fe64edebabbc4f367f74da9))

## 1.8.1 (2025-06-19)

Full Changelog: [v1.8.0...v1.8.1](https://github.com/zbdpay/zbd-payments-typescript-sdk/compare/v1.8.0...v1.8.1)

### Chores

* update SDK settings ([a71d016](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/a71d01613415a7f01ee565248307b836f32367e1))
* update SDK settings ([c245bc9](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/c245bc95ab85212ad0a7873a17fea80f867dfe3c))

## 1.8.0 (2025-06-19)

Full Changelog: [v1.7.0...v1.8.0](https://github.com/zbdpay/zbd-payments-typescript-sdk/compare/v1.7.0...v1.8.0)

### Features

* **api:** update via SDK Studio ([6345719](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/63457195789091f422179747c1aa9ba4577164fb))
* **client:** add support for endpoint-specific base URLs ([86b85bf](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/86b85bf880e0237002e55b9e0647c9baab74c31c))
* **mcp:** implement support for binary responses ([6b7e258](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/6b7e25809fd777bdbb6982755c5d04bb9936778e))
* **mcp:** include http information in tools ([1cddbac](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/1cddbacffcbf383af14157ce6a99d67a93b6a1d0))
* **mcp:** set X-Stainless-MCP header ([f5bb5f6](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/f5bb5f6cce3d27963841f67494489d62a26be448))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([fea7200](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/fea7200dc2f8e50b1e68e75474623b360d94232c))


### Bug Fixes

* **client:** always overwrite when merging headers ([012aa11](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/012aa114582ed20ffe43572f52e7f238e2d54757))
* compat with more runtimes ([f1653e5](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/f1653e5c8e21796415ade613c845581a7e570280))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([c98c7a8](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/c98c7a8c3720edd3e578218d8e35b45a76a2ff9c))
* **mcp:** fix cursor schema transformation issue with recursive references ([1279e21](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/1279e2116682e54655af9120ae359c41b9361e8e))
* **mcp:** include description in dynamic tool search ([73af395](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/73af395e67a0fcc9a2fd99f7b14cb5b9cd92acb5))
* publish script — handle NPM errors correctly ([447865a](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/447865a0ec42c763ac883a7233a7df610ed7d562))


### Chores

* adjust eslint.config.mjs ignore pattern ([1188bed](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/1188bedaed64835456668b1aed0461637c97f51e))
* avoid type error in certain environments ([edbca04](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/edbca04b641bd9b63590de9ce25de4de7876b430))
* **ci:** enable for pull requests ([a8235a6](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/a8235a618b6ee7f400afb669d67eae52cce8ecd8))
* **client:** refactor imports ([37ab831](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/37ab8314fa04121d73cf1dc7999a2a95aa81068f))
* **deps:** bump eslint-plugin-prettier ([7da8fec](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/7da8fececee68a45289cccb2e1319dd08c94fa4c))
* **docs:** grammar improvements ([b72d590](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/b72d59009644c6dbed5c64ec9790b0cb54a08c09))
* **docs:** use top-level-await in example snippets ([2ed931a](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/2ed931a3ecf14764c16d1c9f04a7e7e82f6f43c8))
* improve publish-npm script --latest tag logic ([1f05cfc](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/1f05cfc946dec153d657858a91490d068ab61a04))
* **internal:** add pure annotations, make base APIResource abstract ([1e17479](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/1e17479800be8344b214d8392c0111e5a918cb61))
* **internal:** codegen related update ([c038ae9](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/c038ae98ad74fefbc3804edc49d7933307410fff))
* **internal:** codegen related update ([1e1bd61](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/1e1bd614599ef6328a2aef3da4840f8f04c69505))
* **internal:** fix readablestream types in node 20 ([ece45da](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/ece45da16b77607de37a37147378971573638182))
* **internal:** update jest config ([62f8846](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/62f8846db8bd825d43fd056c9dc44561477ab7cb))
* **mcp:** provides high-level initMcpServer function and exports known clients ([834f40e](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/834f40e760ee1128435f43e3951722d6bf2f0a74))
* **mcp:** remove duplicate assignment ([52d68a8](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/52d68a84ae24a9657e2d35406587e7a849ca4c13))
* **package:** remove engines ([25b4721](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/25b47218f74ad5118c1b9e737bc9a982ed50e8e5))
* **readme:** update badges ([c5c7320](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/c5c73208e4a2899d9dbff4de792014a4673e3e62))
* **readme:** use better example snippet for undocumented params ([2cd75d6](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/2cd75d6516f83b94ae9bda001807a0abd8ef46d0))
* **tests:** use node 22 for CI tests ([6bd442e](https://github.com/zbdpay/zbd-payments-typescript-sdk/commit/6bd442eb1c936762d07e94b7d1c842a9f639e3e9))

## 1.7.0 (2025-05-10)

Full Changelog: [v1.6.2...v1.7.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.6.2...v1.7.0)

### Features

* **client:** add withOptions helper ([be1f083](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/be1f0832068ffc3f335cfb21f74f15f1fe61cc2b))
* more gracefully handle $refs and work around schema limitations ([7f413d3](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/7f413d39351ce57a8efce6047186b630f38db58c))


### Bug Fixes

* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([43242ee](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/43242ee48dddf0adadc7a394a54139bb8e4c9711))


### Chores

* **build:** automatically build subpackages if present ([1e83ca6](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/1e83ca6e20b22a5e13a68eab7e7e3fb1003c58be))
* **client:** drop support for EOL node versions ([fa0b428](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/fa0b4282b30b6712b0a1dc406e05722684615d8f))
* **internal:** codegen related update ([2c3d99c](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/2c3d99c91be4462c3bc9f8fa628fa6c0270bb12c))
* **internal:** refactor utils ([8af1519](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/8af15194a74a619e49500f7f4610bc2bffb52ab1))
* **internal:** share typescript helpers ([3663fdc](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/3663fdc3e0954c3dbeaff99ca0200340250d37c1))


### Documentation

* add examples to tsdocs ([7e3cc80](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/7e3cc8062e188f95fd5f1f1be48af6beccebf2f7))
* **readme:** fix typo ([5922003](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/5922003febed1cb0a579a44b4116c83459f989d2))

## 1.6.2 (2025-04-24)

Full Changelog: [v1.6.1...v1.6.2](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.6.1...v1.6.2)

### Chores

* **ci:** only use depot for staging repos ([64c02c0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/64c02c014a6872958cdfdb8ca7bbe8ed4024be21))
* cleanup readme ([2b9529f](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/2b9529f600d016b49d9b2f18ed1590da06dcc9f9))
* **internal:** codegen related update ([e1160fb](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/e1160fb44ae9dcc79c82eb9e978f4060fbcb36a7))

## 1.6.1 (2025-04-24)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.6.0...v1.6.1)

### Chores

* **ci:** add timeout thresholds for CI jobs ([c73272e](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/c73272e4630f5a2303d488b6fde1f81d4b6ed188))
* configure new SDK language ([0a094ce](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/0a094cec4e6f3c40dd400d2737a9d4bf9c839f6d))
* **perf:** faster base64 decoding ([1dfe2d3](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/1dfe2d36ad64dfd937a35382b07d9a8c0a330056))

## 1.6.0 (2025-04-18)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.5.0...v1.6.0)

### Features

* **api:** update via SDK Studio ([c1c2e9b](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/c1c2e9b490165f0c495954770af2bd999ea57f37))
* **api:** update via SDK Studio ([d480c7d](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/d480c7dc7fca0fe38d0f5556156af368d910598b))

## 1.5.0 (2025-04-18)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.4.0...v1.5.0)

### Features

* chore: updating README and security info ([3a33e6e](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/3a33e6e50656f322aea655071157986e86e8e8d4))

## 1.4.0 (2025-04-18)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.3.0...v1.4.0)

### Features

* **api:** update via SDK Studio ([26db782](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/26db7828fc4518a5e6da5b5e68c85fdfc2995fb0))

## 1.3.0 (2025-04-18)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.2.0...v1.3.0)

### Features

* **api:** update via SDK Studio ([751cd68](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/751cd68a9821697bfb2b00ae4b412071a837f58d))
* **api:** update via SDK Studio ([3cb1058](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/3cb1058eb6f772a1be8c849f8ec91912a662a014))

## 1.2.0 (2025-04-18)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.1.0...v1.2.0)

### Features

* **api:** update via SDK Studio ([22ca562](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/22ca56259223be2918cb8982b3579f41cb8c6620))

## 1.1.0 (2025-04-18)

Full Changelog: [v1.0.1...v1.1.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.0.1...v1.1.0)

### Features

* **api:** update via SDK Studio ([ea2e246](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/ea2e246a334ee341fa575ad123597c8100d3610f))

## 1.0.1 (2025-04-18)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v1.0.0...v1.0.1)

### Chores

* update SDK settings ([8c6556a](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/8c6556aec03314146a2a480926180cde67ba4d20))

## 1.0.0 (2025-04-18)

Full Changelog: [v0.0.1-alpha.0...v1.0.0](https://github.com/zebedeeio/zbd-payments-typescript-sdk/compare/v0.0.1-alpha.0...v1.0.0)

### Features

* **api:** update via SDK Studio ([16033b2](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/16033b296244d2c039fb9874de0e7febff5b137c))
* **api:** update via SDK Studio ([f33a696](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/f33a6969dbe7f8b244a0b70b62d00e471e3d6ebd))
* **api:** update via SDK Studio ([31fdb99](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/31fdb999bec5f7cefcbcf38c22eba2c34daf32de))
* **api:** update via SDK Studio ([cd54722](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/cd54722c8583522f8123a908863a6bdceb099388))


### Chores

* go live ([a205c50](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/a205c5099fb1cdb743ebe8c4cf63fc511dd65bba))
* go live ([bfc5b31](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/bfc5b318f1a7d913d9407fcf3b0d751d16dbc621))
* update SDK settings ([5a337c3](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/5a337c30b271dcfb31b03e3fabcc94ce7ac30630))
* update SDK settings ([26f758a](https://github.com/zebedeeio/zbd-payments-typescript-sdk/commit/26f758aba6e2d0b665853a88edd5e440f1c9f718))
