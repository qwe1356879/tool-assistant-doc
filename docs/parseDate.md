# parseDate

根据给定的格式解析日期字符串并返回对应的日期对象

## 引入方式

<!-- ### CJS

```javascript
const { parseDate } = require("tool-assistant");
``` -->

### ESM

```javascript
import { parseDate } from "tool-assistant;
```

## 示例

```javascript
// 引入 parseDate 函数
import { parseDate } from "tool-assistant";

// 要解析的日期字符串
const dateString = "2023-08-22";
// 日期字符串的格式
const format = "YYYY-MM-DD";

// 解析日期
const parsedDate = parseDate(dateString, format);

// 打印解析的日期
console.log(parsedDate);
```
