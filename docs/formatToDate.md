# formatToDate

将给定的日期格式化为指定格式的日期字符串。你可以根据需要传入不同的日期和格式参数，以获得你所期望的日期表示形式。

## 引入方式

<!-- ### CJS

```javascript
const { formatToDate } = require("tool-assistant");
``` -->

### ESM

```javascript
import { formatToDate } from "tool-assistant;
```

## 示例

```javascript
// 引入 formatToDate 函数
import { formatToDate } from "tool-assistant";

// 要格式化的日期
const date = new Date();

// 格式化为日期字符串
const formattedDate = formatToDate(date);

// 打印格式化的日期
console.log(formattedDate);

// 2023-08-22
```
