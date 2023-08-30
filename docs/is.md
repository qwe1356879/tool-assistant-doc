# is

函数“is”检查一个值是否属于 JavaScript 中的特定类型

## 示例

```javascript
// 引入 is 函数
import { is } from "tool-assistant";

// 检查值是否为字符串类型
const isString = is("Hello", "String");
console.log(isString); // true

// 检查值是否为数组类型
const isArray = is([1, 2, 3], "Array");
console.log(isArray); // true

// 检查值是否为对象类型
const isObject = is({ name: "John", age: 30 }, "Object");
console.log(isObject); // true

// 检查值是否为数字类型
const isNumber = is(42, "Number");
console.log(isNumber); // true
```
