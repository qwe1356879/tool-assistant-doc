# buildSomeShortUUID

通过组合前缀、随机数、唯一计数器和当前时间戳来生成的短 UUID 集合

## 引入方式

<!-- ### CJS

```javascript
const { buildSomeShortUUID } = require("tool-assistant");
``` -->

### ESM

```javascript
import { buildSomeShortUUID } from "tool-assistant;
```

## 示例

```javascript
// 引入 buildSomeShortUUID 函数
import { buildSomeShortUUID } from "tool-assistant";

// 生成唯一的短 UUID
const shortUUIDs = buildSomeShortUUID("PREFIX");

// 打印生成的短 UUID
console.log(shortUUIDs);
```
