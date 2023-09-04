# isMap

提供一个方便的方式来判断一个值是否为 Map 类型

## 引入方式

<!-- ### CJS

```javascript
const { isMap } = require("tool-assistant");
``` -->

### ESM

```javascript
import { isMap } from "tool-assistant;
```

## 示例

```javascript
// 引入 isMap 函数
import { isMap } from "tool-assistant";

// 创建一个 Map 对象
const value = new Map();

// 使用 isMap 函数判断值是否为 Map 类型
const result = isMap(value);

// 打印结果
console.log(result); // 输出 true
```
