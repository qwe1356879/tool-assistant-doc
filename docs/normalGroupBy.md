# normalGroupBy

分组函数，将普通元素数组分组

## 示例

```javascript
// 引入 normalGroupBy 函数
import { normalGroupBy } from 'tool-assistant'; 

const numbers = [1, 2, 3, 1, 2, 3, 4, 5];
const groupedNumbers = normalGroupBy(numbers);
console.log(groupedNumbers);

// {
//   1: [1, 1],
//   2: [2, 2],
//   3: [3, 3],
//   4: [4],
//   5: [5]
// }
```
