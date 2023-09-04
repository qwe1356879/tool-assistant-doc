# findDifferentElements

函数用于查找多个数组中只出现一次的元素。

## 引入方式

<!-- ### CJS

```javascript
const { findDifferentElements } = require("tool-assistant");
``` -->

### ESM

```javascript
import { findDifferentElements } from "tool-assistant;
```

## 示例

```javascript
// 引入 findDifferentElements 函数
import { findDifferentElements } from "tool-assistant";

// 定义示例数组
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 4, 5, 6];
const array3 = [3, 4, 5, 6, 7];

// 查找不同元素
const differentElements = findDifferentElements(array1, array2, array3);

// 打印不同元素
console.log(differentElements);
```
