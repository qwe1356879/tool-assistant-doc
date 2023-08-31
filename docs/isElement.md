# isElement

提供一个方便的方式来判断一个值是否为 DOM 元素

## 引入方式

### CJS

```javascript
const { isElement } = require("tool-assistant");
```

### ESM

```javascript
import { isElement } from "tool-assistant;
```

## 示例

```javascript
// 引入 isElement 函数
import { isElement } from "tool-assistant";

// 获取一个 DOM 元素
const element = document.getElementById("my-element");

// 使用 isElement 函数判断值是否为 DOM 元素
const result = isElement(element);

// 打印结果
console.log(result); // 输出 true
```
