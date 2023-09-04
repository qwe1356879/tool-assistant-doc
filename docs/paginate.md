# paginate

前端分页函数,请确保 array 是一个数组，pageSize 和 pageNumber 都是有效的数字值.

## 引入方式

<!-- ### CJS

```javascript
const { paginate } = require("tool-assistant");
``` -->

### ESM

```javascript
import { paginate } from "tool-assistant;
```

## 示例

```javascript
// 引入 paginate 函数
import { paginate } from "tool-assistant";

// 示例 1：分页字符串数组
const data1 = ["a", "b", "c", "d", "e", "f", "g"];

const pageSize1 = 3;
const pageNumber1 = 2;

const result1 = paginate(data1, pageSize1, pageNumber1);
console.log(result1);

// 示例 2：分页对象数组
const data2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
  { id: 5, name: "Mike" },
  { id: 6, name: "Kate" },
];

const pageSize2 = 2;
const pageNumber2 = 3;

const result2 = paginate(data2, pageSize2, pageNumber2);
console.log(result2);

// 示例 3：分页整数数组
const data3 = Array.from({ length: 20 }, (_, index) => index + 1);

const pageSize3 = 5;
const pageNumber3 = 4;

const result3 = paginate(data3, pageSize3, pageNumber3);
console.log(result3);
```
