# sortByFields

按照给定集合进行组合排序,并且可以指定排序规则（升序或降序）

## 示例

```javascript
// 引入 sortByFields 函数
import { sortByFields } from 'tool-assistant'; 

// 组合排序示例使用
const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'Bob', age: 28 }
];

const fields = ['name', 'age']; // 按照 name 和 age 进行排序
const order = 'desc'; // 降序排序

const sortedData = sortByFields(data, fields, order);

console.log(sortedData);

```
