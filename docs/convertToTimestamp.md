# convertToTimestamp

作用是将给定的日期字符串转换为指定格式的时间戳。

## 引入方式

### CJS

```javascript
const { convertToTimestamp } = require("tool-assistant");
```

### ESM

```javascript
import { convertToTimestamp } from "tool-assistant;
```

## 示例

```javascript
// 引入 convertToTimestamp 函数
import { convertToTimestamp } from "tool-assistant";

// 要转换为时间戳的日期字符串
const dateString = "2023-08-22 10:30:00";
// 日期字符串的格式
const format = "YYYY-MM-DD HH:mm:ss";

// 转换为时间戳
const timestamp = convertToTimestamp(dateString, format);

// 打印时间戳
console.log(timestamp);
```
