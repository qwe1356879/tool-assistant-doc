# is

该函数检查值是否为“Date”类型。

## 示例

```javascript
import { isDate } from 'tool-assistant';

const dateObj = new Date();
console.log(isDate(dateObj)); // 输出: true

const stringDate = '2023-08-22';
console.log(isDate(stringDate)); // 输出: false

const numberDate = 1679675200000; // 对应于 '2023-08-22' 的时间戳
console.log(isDate(numberDate)); // 输出: false

const invalidDate = new Date('2023-08-22T10:54:41.452Z');
console.log(isDate(invalidDate)); // 输出: true
```
