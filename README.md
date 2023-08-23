<div align="center">
<h1>Tool-Assistant</h1>
</div>

## 介绍

`Tool-Assistant` 是一个函数工具库， 用来帮你处理各种开发中遇到的问题，现在已经给出包括 `Color`，`Data`，`Date`，`File`，`JSON`，`Log`，`Type`，`UUID`等类型问题的工具函数.

## 函数分类

- **Color**：`isHexColor`，`rgbToHex`，`hexToRGB`
- **Data**: `convertToTreeData`，`convertToFlatData`，`findNode`，`findDifferentElements`，`findCommonElements`，`findDifferentObjectsProperty`，`findCommonObjectsProperty`，`removeDuplicatesFromObjectsArray`，`removeDuplicates`
- **Date**: `formatToDateTime`，`formatToDate`，`convertToTimestamp`，`parseDate`，`parseCustomFormat`
- **File**: `dataURLtoBlob`，`urlToBase64`
- **JSON**: `待补充`
- **Log**: `warn`，`error`
- **Type**: `is`，`isDef`，`isUnDef`，`isObject`，`isEmpty`，`isDate`，`isNull`，`isNullAndUnDef`，`isNullOrUnDef`，`isNumber`，`isPromise`，`isString`，`isFunction`，`isBoolean`，`isRegExp`，`isArray`，`isMap`，`isWindow`，`isElement`
- **UUID**: `buildShortUUID`，`buildSomeUUID`，`buildUUID`

<!-- ## 帮助文档

[Document](https://doc.vvbin.cn/) -->
## 安装

```bash
npm i tool-assistant
```

## 使用方法

```javascript
import {isHexColor} from "tool-assistant"
```

## License

[MIT © ToolAssistant-2023](./LICENSE)
