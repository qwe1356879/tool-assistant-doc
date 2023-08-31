# downloadByBase64

这个函数的作用是通过 Base64 编码下载文件

## 引入方式

### CJS

```javascript
const { downloadByBase64 } = require("tool-assistant");
```

### ESM

```javascript
import { downloadByBase64 } from "tool-assistant;
```

## 示例

```javascript
// 引入 downloadByBase64 函数
import { downloadByBase64 } from "tool-assistant";

// 定义 Base64 编码的数据
const base64Data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...";

// 调用 downloadByBase64 函数进行下载
downloadByBase64(base64Data, "image.png", "image/png", false);
```
