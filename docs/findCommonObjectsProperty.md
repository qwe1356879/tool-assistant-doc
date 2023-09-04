# findCommonObjectsProperty

在多个数组中根据指定的属性名找到共同拥有的对象。

## 引入方式

<!-- ### CJS

```javascript
const { findCommonObjectsProperty } = require("tool-assistant");
``` -->

### ESM

```javascript
import { findCommonObjectsProperty } from "tool-assistant;
```

## 示例

```javascript
// 引入 findCommonObjectsProperty 函数
import { findCommonObjectsProperty } from "tool-assistant";

// 定义示例数组
const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mary" },
];
const array2 = [
  { id: 2, name: "Jane" },
  { id: 3, name: "Mary" },
  { id: 4, name: "David" },
];
const array3 = [
  { id: 3, name: "Mary" },
  { id: 4, name: "David" },
  { id: 5, name: "Sarah" },
];

// 指定对象的属性名
const key = "id";

// 查找共同对象
const commonObjects = findCommonObjectsProperty(key, array1, array2, array3);

// 打印共同对象
console.log(commonObjects);
```
