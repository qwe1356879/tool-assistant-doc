# isUnDef

检查一个值是否是对象类型

## 示例

```javascript
// 引入 isObject 函数
import { isObject } from 'tool-assistant'; 

// 定义一个对象
const person = {
  name: 'John',
  age: 30
};

// 检查值是否为对象类型
const isPersonObject = isObject(person);
console.log(isPersonObject); // true

// 定义一个数组
const numbers = [1, 2, 3];

// 再次检查值是否为对象类型
const isNumbersObject = isObject(numbers);
console.log(isNumbersObject); // false

// 定义一个 null 值
const nullValue = null;

// 再次检查值是否为对象类型
const isNullObject = isObject(nullValue);
console.log(isNullObject); // false
```
