# isPromise

提供一个方便的方式来判断一个值是否为 Promise 对象

## 引入方式

### CJS

```javascript
const { isPromise } = require("tool-assistant");
```

### ESM

```javascript
import { isPromise } from "tool-assistant;
```

## 示例

```javascript
// 引入 isPromise 函数
import { isPromise } from "tool-assistant";

// 定义一个变量
const value = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

// 使用 isPromise 函数判断值是否为 Promise 对象
const result = isPromise(value);

// 打印结果
console.log(result); // 输出 true
```
