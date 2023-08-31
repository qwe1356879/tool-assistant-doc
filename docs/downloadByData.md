# downloadByData

这个函数的作用是通过二进制数据下载文件。

## 引入方式

### CJS

```javascript
const { downloadByData } = require("tool-assistant");
```

### ESM

```javascript
import { downloadByData } from "tool-assistant;
```

## 示例

```javascript
// 引入 downloadByData 函数
import { downloadByData } from "tool-assistant";

// 定义二进制数据
const binaryData = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]);

// 调用 downloadByData 函数进行下载
downloadByData(binaryData, "file.txt", "text/plain", "\uFEFF");
```
