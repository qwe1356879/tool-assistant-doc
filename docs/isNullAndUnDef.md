# isNullAndUnDef

提供一个方便的方式来判断一个值是否同时为 null 和 undefined

## 引入方式

<!-- ### CJS

```javascript
const { isNullAndUnDef } = require("tool-assistant");
``` -->

### ESM

```javascript
import { isNullAndUnDef } from "tool-assistant;
```

## 示例

```javascript
// 引入 isNullAndUnDef 函数
import { isNullAndUnDef } from "tool-assistant";

// 定义一个变量
const value = undefined;

// 使用 isNullAndUnDef 函数判断值是否同时为 null 和 undefined
const result = isNullAndUnDef(value);

// 打印结果
console.log(result); // 输出 true
```
