# add/subtract/multiply/divide

数值计算（加、减、乘、除）,可指定保留几位小数。

## 引入方式

<!-- ### CJS

```javascript
const { divide, multiply, subtract, add } = require("tool-assistant");
``` -->

### ESM

```javascript
import { divide, multiply, subtract, add } from "tool-assistant;
```

## 示例

```javascript
// 引入 divide,multiply,subtract,add 函数
import { divide, multiply, subtract, add } from "tool-assistant";

console.log(add(0.1, 0.2, 1)); // 输出: 0.3
console.log(subtract(0.3, 0.1, 1)); // 输出: 0.2
console.log(multiply(0.1, 0.2, 2)); // 输出: 0.02
console.log(divide(0.3, 0.1, 1)); // 输出: 3

console.log(add(2, 0.1, 1)); // 输出: 2.1
console.log(subtract(5, 1, 1)); // 输出: 4
console.log(multiply(3, 0.2, 1)); // 输出: 0.6
console.log(divide(6, 2, 1)); // 输出: 3
```
