# isArray

提供一个方便的方式来判断一个值是否为数组类型

## 引入方式

### CJS

```javascript
const { isArray } = require("tool-assistant");
```

### ESM

```javascript
import { isArray } from "tool-assistant;
```

## 示例

```javascript
// 引入 isArray 函数
import { isArray } from "tool-assistant";

// 定义一个数组
const value = [1, 2, 3, 4, 5];

// 使用 isArray 函数判断值是否为数组类型
const result = isArray(value);

// 打印结果
console.log(result); // 输出 true
```
