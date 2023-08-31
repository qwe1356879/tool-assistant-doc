# timeLeft

这个函数用于计算两个时间之间的时间差，返回以天、小时、分钟和秒为单位的时间差值。

## 引入方式

### CJS

```javascript
const { timeLeft } = require("tool-assistant");
```

### ESM

```javascript
import { timeLeft } from "tool-assistant;
```

## 示例

```javascript
// 引入 timeLeft 函数
import { timeLeft } from "tool-assistant";

var now = new Date(); // 当前时间
var targetDate = new Date("2023-12-31 23:59:59"); // 结束时间

var timeDiff = timeLeft(now, targetDate);

console.log(timeDiff); // 输出剩余的天数、小时、分钟和秒数
```
