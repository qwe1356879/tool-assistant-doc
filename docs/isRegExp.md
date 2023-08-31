# isRegExp

提供一个方便的方式来判断一个值是否为正则表达式类型

## 引入方式

### CJS

```javascript
const { isRegExp } = require("tool-assistant");
```

### ESM

```javascript
import { isRegExp } from "tool-assistant;
```

## 示例

```javascript
// 引入 isRegExp 函数
import { isRegExp } from "tool-assistant";

// 定义一个正则表达式
const value = /hello/i;

// 使用 isRegExp 函数判断值是否为正则表达式类型
const result = isRegExp(value);

// 打印结果
console.log(result); // 输出 true
```
