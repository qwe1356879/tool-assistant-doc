# findCommonElements

用于查找多个数组中的共同元素。

## 引入方式

### CJS

```javascript
const { findCommonElements } = require("tool-assistant");
```

### ESM

```javascript
import { findCommonElements } from "tool-assistant;
```

## 示例

```javascript
// 引入 findCommonElements 函数
import { findCommonElements } from "tool-assistant";

// 定义示例数组
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 4, 5, 6];
const array3 = [3, 4, 5, 6, 7];

// 查找共同元素
const commonElements = findCommonElements(array1, array2, array3);

// 打印共同元素
console.log(commonElements);
```
