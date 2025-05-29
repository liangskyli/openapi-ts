# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.1](https://github.com/liangskyli/openapi-ts/compare/v4.0.0...v4.0.1) (2025-05-29)


### Bug Fixes

* upgrade dependencies,and lock openapi-typescript@7.7.3 ([8079008](https://github.com/liangskyli/openapi-ts/commit/80790085d88cfe50396516024af867a294c65c4a))



## [4.0.0](https://github.com/liangskyli/openapi-ts/compare/v3.0.0...v4.0.0) (2025-03-09)


### ⚠ BREAKING CHANGES

* axios from dependencies to optional peerDependencies

### Features

* axios from dependencies to optional peerDependencies ([dc59e9b](https://github.com/liangskyli/openapi-ts/commit/dc59e9b9e808a3c5ea8a020959d952d121cdb82a))



## [3.0.0](https://github.com/liangskyli/openapi-ts/compare/v3.0.0-beta.0...v3.0.0) (2024-09-17)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [3.0.0-beta.0](https://github.com/liangskyli/openapi-ts/compare/v2.1.0-beta.0...v3.0.0-beta.0) (2024-08-31)


### ⚠ BREAKING CHANGES

* drop swagger2 and openapiPath file path
* drop node < 18, support node>=18

### Features

* openapiPath support JSON / YAML format ([2dcc0bc](https://github.com/liangskyli/openapi-ts/commit/2dcc0bcce3cd5e7964d698ac997678ed69cd5d3f))


### Miscellaneous Chores

* upgrade dependencies and node to v18 ([651f2c1](https://github.com/liangskyli/openapi-ts/commit/651f2c1b635a3d7197a2fb3249e766c60b223c3a))



## [2.1.0-beta.0](https://github.com/liangskyli/openapi-ts/compare/v2.0.2...v2.1.0-beta.0) (2024-08-03)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [2.0.2](https://github.com/liangskyli/openapi-ts/compare/v2.0.1...v2.0.2) (2024-06-26)


### Bug Fixes

* request-api config param add default value ([7cb6641](https://github.com/liangskyli/openapi-ts/commit/7cb66412cb72bb0e188a033e16cd52e202548fe2))



## [2.0.1](https://github.com/liangskyli/openapi-ts/compare/v2.0.0...v2.0.1) (2024-03-24)


### Features

* change IAPIRequest method type replace | to & ([955612e](https://github.com/liangskyli/openapi-ts/commit/955612e412619630314df6e0af7f084e27f4871b))



## [2.0.0](https://github.com/liangskyli/openapi-ts/compare/v2.0.0-beta.1...v2.0.0) (2024-02-26)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [2.0.0-beta.1](https://github.com/liangskyli/openapi-ts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-12-16)


### ⚠ BREAKING CHANGES

* generator file structure change in interface-api.ts and request-api.ts

### Features

* generator file structure modify to url => method, export methodList,IOpenapiMethod ([2ec3691](https://github.com/liangskyli/openapi-ts/commit/2ec36911c7df418d23d8aba3b49b50d88f5a0368))



## [2.0.0-beta.0](https://github.com/liangskyli/openapi-ts/compare/v1.3.0...v2.0.0-beta.0) (2023-12-15)


### ⚠ BREAKING CHANGES

* generator file structure change in interface-api.ts and request-api.ts

### Features

* add "type": "module" as default,for support esm ([1a5cea5](https://github.com/liangskyli/openapi-ts/commit/1a5cea52794cc2b4e886c92fa14235b28db6a8fa))
* support same url generator multiple method type and request ([bf8ca64](https://github.com/liangskyli/openapi-ts/commit/bf8ca647677ca80f7c46cea094af32cd408d862b))



## [1.3.0](https://github.com/liangskyli/openapi-ts/compare/v1.2.2...v1.3.0) (2023-12-03)


### Features

* add defineConfig config support ts type ([35903ac](https://github.com/liangskyli/openapi-ts/commit/35903accb24fb8e3f74c3caacfceb37806f8f4ee))



## [1.2.2](https://github.com/liangskyli/openapi-ts/compare/v1.2.1...v1.2.2) (2023-10-14)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [1.2.1](https://github.com/liangskyli/openapi-ts/compare/v1.2.0...v1.2.1) (2023-08-12)


### Bug Fixes

* update openapi-typescript@6.4.0 for support CJS bundle, and use medium version ([959ec0e](https://github.com/liangskyli/openapi-ts/commit/959ec0ef8140fa8003e0f7b4474c0d1f0ff1b9af))



## [1.2.0](https://github.com/liangskyli/openapi-ts/compare/v1.2.0-beta.0...v1.2.0) (2023-07-15)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [1.2.0-beta.0](https://github.com/liangskyli/openapi-ts/compare/v1.1.0...v1.2.0-beta.0) (2023-07-15)


### ⚠ BREAKING CHANGES

* @liangskyli/utils:prettierData from sync to async

### Miscellaneous Chores

* upgrade dependencies ([acafb07](https://github.com/liangskyli/openapi-ts/commit/acafb074fd973dfba45d65bf2034d949c2eeca7c))



## [1.1.0](https://github.com/liangskyli/openapi-ts/compare/v1.0.1...v1.1.0) (2023-05-28)


### Features

* openapiPath support OpenAPI3 ([03cc04d](https://github.com/liangskyli/openapi-ts/commit/03cc04d8d20f88475c2bbc9e2e4b574b0d7a92f6))
* support router path params generator and request-api add path params ([331ba0f](https://github.com/liangskyli/openapi-ts/commit/331ba0fd59b5472bec6650a667ae25705f584e21))
* support swagger2 to openapi for generator ts ([2ce8bae](https://github.com/liangskyli/openapi-ts/commit/2ce8bae03ce85d3f9dc67b3ee1d92c031e0562c3))
* upgrade openapi-typescript to fix js-yaml $refs generate ts bug and add unit test ([22b9f82](https://github.com/liangskyli/openapi-ts/commit/22b9f82abb077a8295f031eb906f055564610a02))



## [1.0.1](https://github.com/liangskyli/openapi-ts/compare/v1.0.0...v1.0.1) (2023-05-11)


### Bug Fixes

* generate request-api.ts type ([88ad12f](https://github.com/liangskyli/openapi-ts/commit/88ad12f3d2f1e5beb743a54b8f57b61e965eedf6))
* generate type use Record<any, any> ([4456a0a](https://github.com/liangskyli/openapi-ts/commit/4456a0a49e952c841cdc0a35b4167fe55d62ae07))



## [1.0.0](https://github.com/liangskyli/openapi-ts/compare/v1.0.0-beta.2...v1.0.0) (2023-05-07)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [1.0.0-beta.2](https://github.com/liangskyli/openapi-ts/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2023-05-02)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [1.0.0-beta.1](https://github.com/liangskyli/openapi-ts/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2023-05-01)


### ⚠ BREAKING CHANGES

* prettierData from async to sync

### Bug Fixes

* genTsData return data ([ae2e4fe](https://github.com/liangskyli/openapi-ts/commit/ae2e4fed0c395be37d40a329bc67a89658bdb7ec))


### Miscellaneous Chores

* upgrade @liangskyli/utils ([28e6105](https://github.com/liangskyli/openapi-ts/commit/28e61057f57b9a86866b684a0e526dd36e92df1f))



## [1.0.0-beta.0](https://github.com/liangskyli/openapi-ts/compare/v0.7.0...v1.0.0-beta.0) (2023-04-26)


### ⚠ BREAKING CHANGES

* requestFilePath and requestParamsType configuration change to requestFile

### Features

* openapiPath support remote URL ([5c3660c](https://github.com/liangskyli/openapi-ts/commit/5c3660cf3c3f6f387e46bf0b0d5b925afbe605fa))
* requestBody not required support generate interface-api not required body ([c1aac22](https://github.com/liangskyli/openapi-ts/commit/c1aac229177d6d67fb8ab0112b6b2d5540a7f74c))
* requestFilePath and requestParamsType configuration change to requestFile ([8b4ee7f](https://github.com/liangskyli/openapi-ts/commit/8b4ee7f85509025c1452ea3280ddac363ee10bd0))
* support openapi-typescript options config ([3bc7eaf](https://github.com/liangskyli/openapi-ts/commit/3bc7eafb50f7463ce2e402163f5f2a2141ae2a68))
* support typescript-json-schema options config ([54b83c6](https://github.com/liangskyli/openapi-ts/commit/54b83c62b4ddbf9250853f1fee1a61dd988d5810))
* tuple type support generator ([72671a6](https://github.com/liangskyli/openapi-ts/commit/72671a6892b68dc8c1c56897166b43e999403492))
* type {} use Record<string, never> replace ([ba819fd](https://github.com/liangskyli/openapi-ts/commit/ba819fdb6863bb85d9fadfd501b4f4defc863818))
* upgrade openapi-typescript and remove temporary code ([18eee85](https://github.com/liangskyli/openapi-ts/commit/18eee859e89af1b7504b0f70409b08590cb8e66c))
* upgrade openapi-typescript and remove temporary code ([c66e75c](https://github.com/liangskyli/openapi-ts/commit/c66e75c41dbb057639505610f031e75fe99f47cd))
* use default config file request.config.ts and support array configuration ([5abcacd](https://github.com/liangskyli/openapi-ts/commit/5abcacd73a752958bbeb2500dcb2cd305b3776ec))
* use responseCode 200 > default order, and get first content response mediaType ([beea347](https://github.com/liangskyli/openapi-ts/commit/beea3472868eb7552ca6963178efc12e655d87dc))


### Bug Fixes

* bin file bug ([23beaaa](https://github.com/liangskyli/openapi-ts/commit/23beaaa0fa138dcafb4d7636de5a6d6441698da2))
* openapiMethod type ([e604be0](https://github.com/liangskyli/openapi-ts/commit/e604be082290a29c87fb846229237673aaba88ef))
* when requestParamsType not set,code generator possible occurrence SyntaxError ([2b37321](https://github.com/liangskyli/openapi-ts/commit/2b37321789baacf8cbcb699fe634e62c33a13d67))



## [0.7.0](https://github.com/liangskyli/openapi-ts/compare/v0.6.0...v0.7.0) (2023-04-09)


### Features

* openapi tip info change and remove eslint-disable ([a7fb039](https://github.com/liangskyli/openapi-ts/commit/a7fb0392936d731942faed79256fec1f11e948e3))
* support all body media type content ([7ee5e25](https://github.com/liangskyli/openapi-ts/commit/7ee5e256a7913b923cad5d68fbb3acdfc6b548fe))
* support all openapi method, media type,and first body or responses 200 content ([099fdb4](https://github.com/liangskyli/openapi-ts/commit/099fdb4720c10509d01ee0ce7a62f15f53925514))
* ts type IGenTsDataOpts use Partial ([407414c](https://github.com/liangskyli/openapi-ts/commit/407414c227f488098ee196784eedb7baca4f5c19))



## [0.6.0](https://github.com/liangskyli/openapi-ts/compare/v0.5.0...v0.6.0) (2023-01-10)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [0.5.0](https://github.com/liangskyli/openapi-ts/compare/v0.4.0...v0.5.0) (2022-08-10)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [0.4.0](https://github.com/liangskyli/openapi-ts/compare/v0.3.0...v0.4.0) (2022-07-10)


### Features

* request file generate support parame type,and post method for fix query data ([4282057](https://github.com/liangskyli/openapi-ts/commit/42820577a72a915c49ea79d7ae3f6e2af858b5b2))



## [0.3.0](https://github.com/liangskyli/openapi-ts/compare/v0.2.2...v0.3.0) (2022-07-02)


### Features

* body and response support text/plain generate ([bd6f63c](https://github.com/liangskyli/openapi-ts/commit/bd6f63c79974a701dd38b6f469bb4b91af5a942c))
* ts-schema.ts add commentHeader ([e922741](https://github.com/liangskyli/openapi-ts/commit/e9227416cf89a00ea1777bded362bfe1b514c26a))


### Bug Fixes

* openapi-typescript to @liangskyli/openapi-typescript, for openapi file schemas key double bug ([7f5a9af](https://github.com/liangskyli/openapi-ts/commit/7f5a9af756f64a762c42407f733df7445d83716a))



## [0.2.2](https://github.com/liangskyli/openapi-ts/compare/v0.2.1...v0.2.2) (2022-06-02)


### Features

* generateSchema ignoreErrors ([3b17c36](https://github.com/liangskyli/openapi-ts/commit/3b17c364955529c7e10e730b7c1842119654653b))


### Bug Fixes

* add tslib dependencies for ts-node ([f008a07](https://github.com/liangskyli/openapi-ts/commit/f008a07f9f61f8e1ab34861307b233b9a5862e58))



### [0.2.1](https://github.com/liangskyli/openapi-ts/compare/v0.2.0...v0.2.1) (2022-05-28)


### Features

* optimization code ([d122a52](https://github.com/liangskyli/openapi-ts/commit/d122a52db8b8cf59e906418698687aed158abd35))



## [0.2.0](https://github.com/liangskyli/openapi-ts/compare/v0.2.0-beta.3...v0.2.0) (2022-05-15)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [0.2.0-beta.3](https://github.com/liangskyli/openapi-ts/compare/v0.2.0-beta.2...v0.2.0-beta.3) (2022-05-14)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## [0.2.0-beta.2](https://github.com/liangskyli/openapi-ts/compare/v0.2.0-beta.1...v0.2.0-beta.2) (2022-05-14)


### Bug Fixes

* paths path use ts-schema ([ebaad72](https://github.com/liangskyli/openapi-ts/commit/ebaad72346bc7d868b62c067af473860326bd5d5))



## [0.2.0-beta.1](https://github.com/liangskyli/openapi-ts/compare/v0.2.0-beta.0...v0.2.0-beta.1) (2022-05-13)


### Features

* genTsData return schemaDefinition to schemaDefinition and genTsAbsolutePath ([4653d1b](https://github.com/liangskyli/openapi-ts/commit/4653d1be187ccf8aaa31d9612057e5bcd83d488d))



## [0.2.0-beta.0](https://github.com/liangskyli/openapi-ts/compare/v0.1.0...v0.2.0-beta.0) (2022-05-13)

**Note:** Version bump only for package @liangskyli/openapi-gen-ts





## 0.1.0 (2022-05-12)


### Features

* openapi to typescript gen split from @liangskyli/http-mock-gen ([a45ca43](https://github.com/liangskyli/openapi-ts/commit/a45ca435bc5cba2d221d41577857fd1fe2ec4195))
