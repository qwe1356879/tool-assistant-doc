# exportFile

通用导出文件方法

## 引入方式

### CJS

```javascript
const { exportFile } = require("tool-assistant");
```

### ESM

```javascript
import { exportFile } from "tool-assistant;
```

## 示例

```javascript
// 引入 exportFile 函数
import { exportFile } from "tool-assistant";
// 示例使用
const exportData = "This is the content of the file.";
const exportFileName = "example.txt";
const exportFileType = "text/plain";

exportFile(exportData, exportFileName, exportFileType);
```
