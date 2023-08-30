# findDifferentObjectsProperty

用于查找多个数组中在指定属性上具有唯一值的对象。

## 示例

```javascript
// 引入 findDifferentObjectsProperty 函数
import { findDifferentObjectsProperty } from "tool-assistant";

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

// 查找不同元素
const differentElements = findDifferentObjectsProperty(
  key,
  array1,
  array2,
  array3
);

// 打印不同元素
console.log(differentElements);
```
