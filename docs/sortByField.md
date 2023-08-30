# sortByField

按照给定集合根据字段进行单一排序,并且可以指定排序规则（升序或降序）

## 示例

```javascript
// 引入 sortByField 函数
import { sortByField } from "tool-assistant";

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 28 },
];

const sortedData = sortByField(data, "age", "asc");

console.log(sortedData);

// 示例使用
const data = [10, 5, 8, 3, 2, 1];

const sortedData = sortByField(data, "desc");

console.log(sortedData);
```
