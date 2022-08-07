# openapi to typescript 代码生成工具

<p>
  <a href="https://github.com/liangskyli/openapi-ts/releases">
    <img alt="preview badge" src="https://img.shields.io/github/v/release/liangskyli/openapi-ts">
  </a>
  <a href="https://www.npmjs.com/package/@liangskyli/openapi-gen-ts">
   <img alt="preview badge" src="https://img.shields.io/npm/v/@liangskyli/openapi-gen-ts?label=%40liangskyli%2Fopenapi-gen-ts">
  </a>
</p>

> 通过openapi提供ts类型和接口请求代码自动生成，避免重复性工作，提高开发效率。

- 基于openapi v3 生成 ts数据类型和请求库接口代码。
- ts接口类型文件生成
- 通用请求库接口调用文件生成

## 安装:
```bash
yarn add @liangskyli/openapi-gen-ts --dev
```

# 生成方式:
## 1、CLI 命令方式（推荐）

```bash
yarn openapi-gen-ts -c ./config.cli.ts
```

- 注意：如果项目里tsconfig.json，module不是CommonJS，则要求配置ts-node节点

```json
{
  "ts-node": {
    "compilerOptions": {
      "allowJs": false,
      "module": "CommonJS"
    }
  }
}
```

### 命令参数

| 参数               | 说明                   | 默认值 |
|------------------|----------------------|-----|
| -c, --configFile | ts数据生成配置文件 `配置参数见下面` |     |

### 命令参数 configFile ts数据生成配置文件参数属性
| 属性                | 说明                                                                                                                                                      | 默认值       |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| openapiPath       | openapi v3 YAML or JSON 格式的文件路径,需要自己根据业务逻辑生成                                                                                                            |           |
| genTsDir          | 生成ts文件夹所在目录                                                                                                                                             | `./`      |
| prettierOptions   | 生成文件格式化，默认取项目配置，该配置优先级更高，会合并覆盖项目prettier配置文件，如项目有prettier配置文件，这里无需配置，详情配置见 [prettier文档](https://github.com/prettier/prettier/blob/main/docs/options.md) |           |
| requestFilePath   | ajax请求库路径，默认使用axios,文件默认导出函数，使用详见下面说明  `string`                                                                                                         | undefined |
| requestParamsType | ajax请求库文件里导出的请求库方法入参类型定义名称（非默认导出），使用详见下面说明  `string`                                                                                                    | undefined |
| requestQueryOmit  | ajax请求库里对公共get参数做了传入处理时，请求接口忽略get参数ts类型声明 `string[]`                                                                                                    | undefined |
| requestBodyOmit   | ajax请求库里对公共post参数做了传入处理时，请求接口忽略post参数ts类型声明 `string[]`                                                                                                  | undefined |

- requestFilePath 说明
  - 不设置，默认使用axios,可以自己封装后引入路径使用。
  - ajax请求库路径不做处理，按生成的文件的相对路径或使用绝对路径。
  - 路径下的文件要求默认导出方法,为IAPIRequest类型。
    ```ts
    type IAPIRequest = (param: {
      url?: string;
      method?: 'get' | 'GET' | 'post' | 'POST';
      params?: any;
      data?: any;
      [k: string]: any;
    }) => Promise<any>;
    ```
  - 自定义ajax接口例子：
    ```ts
    import axios from 'axios';
    import type { IAPIRequest } from '@liangskyli/openapi-gen-ts';
    
    const request: IAPIRequest = (config) => {
      // 这里可以封装公共逻辑
      return axios(config).then((res) => res.data);
    };
    
    export default request;
    // 请求库方法入参类型定义名称（非默认导出）,requestParamsType设置导出名
    export { AxiosRequestConfig };
    ```
  - 生成的schema-api/request-api.ts文件,可直接用于项目请求接口，无需手动编写代码。

- configFile ts数据生成配置文件示例
```ts
import type { IGenTsDataOpts } from '@liangskyli/openapi-gen-ts';

const config: IGenTsDataOpts = {
  genTsDir: './',
  openapiPath: './openapi/openapiv3-example.json',
};
export default config;
```

- openapi v3 YAML or JSON 格式的文件[示例](packages/openapi-gen-ts/docs/openapiv3-example.json)，[openapi](https://www.openapis.org/) 需要自己根据业务逻辑生成。
- openapi v3 method 只支持 get post接口，只生成application/json,text/plain响应数据
- 生成ts文件结构指引 [文档](packages/openapi-gen-ts/docs/gen-ts-file-guide.md)
- 接口API使用指引 [文档](packages/openapi-gen-ts/docs/request-api-guide.md)

## 2、方法调用方式

### genTsData函数参数
- 和命令参数configFile属性一致，见上面说明（命令参数 configFile ts数据生成配置文件参数属性）。
- 使用例子
```ts
import genTsData from '@liangskyli/openapi-gen-ts';
genTsData({
  genTsDir: './',
  openapiPath: './openapi/openapiv3-example.json',
}).then();
```
