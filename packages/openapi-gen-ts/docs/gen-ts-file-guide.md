# 生成ts文件结构指引

genTsDir下生成的目录结构如下（文件都在schema-api文件夹下）：

```bash
.
├── schema-api // schema接口定义文件夹
     ├── interface-api.ts // 生成最终的http 接口api数据类型入出参定义
     ├── request.ts // requestFilePath没设置时，生成默认axios请求库文件
     ├── request-api.ts // 请求接口文件
     ├── schema.ts // ts类型文件生成json schema文件
     └── ts-schema.ts // openapi 生成ts类型文件
```