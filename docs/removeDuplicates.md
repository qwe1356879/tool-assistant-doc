# removeDuplicates

将多个数组合并为一个数组，并移除重复的元素，返回一个只包含唯一元素的数组。

## 引入方式

<!-- ### CJS

```javascript
const { removeDuplicates } = require("tool-assistant");
``` -->

### ESM

```javascript
import { removeDuplicates } from "tool-assistant;
```

## 示例

```javascript
// 引入 removeDuplicates 函数
import { removeDuplicates } from "tool-assistant";

// 定义示例数组
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4, 5];

// 移除重复元素
const uniqueArray = removeDuplicates(array1, array2, array3);

// 打印唯一数组
console.log(uniqueArray);
```
