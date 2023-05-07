# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
