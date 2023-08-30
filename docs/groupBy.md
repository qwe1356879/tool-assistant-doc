# groupBy

分组函数，根据Key值将对象数组进行分组。

## 示例

```javascript
// 引入 groupBy 函数
import { groupBy } from 'tool-assistant'; 

const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 20 },
  { name: 'Dave', age: 22 }
];

const groupedStudents = groupBy(students, 'age');
console.log(groupedStudents);

// {
//   20: [
//     { name: 'Alice', age: 20 },
//     { name: 'Charlie', age: 20 }
//   ],
//   22: [
//     { name: 'Bob', age: 22 },
//     { name: 'Dave', age: 22 }
//   ]
// }
```