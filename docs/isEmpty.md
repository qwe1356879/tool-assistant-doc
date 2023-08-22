# isEmpty

判断一个值是否为空

## 示例

```javascript
// 引入 isEmpty 函数和依赖的辅助函数
import { isEmpty } from './your-module'; // 替换为待测试函数所在的模块路径

// 定义一个空数组
const emptyArray = [];

// 检查数组是否为空
const isArrayEmpty = isEmpty(emptyArray);
console.log(isArrayEmpty); // true

// 定义一个非空数组
const nonEmptyArray = [1, 2, 3];

// 再次检查数组是否为空
const isNonEmptyArrayEmpty = isEmpty(nonEmptyArray);
console.log(isNonEmptyArrayEmpty); // false

// 定义一个空字符串
const emptyString = '';

// 检查字符串是否为空
const isStringEmpty = isEmpty(emptyString);
console.log(isStringEmpty); // true

// 定义一个非空字符串
const nonEmptyString = 'Hello, world!';

// 再次检查字符串是否为空
const isNonEmptyStringEmpty = isEmpty(nonEmptyString);
console.log(isNonEmptyStringEmpty); // false

// 定义一个空对象
const emptyObject = {};

// 检查对象是否为空
const isObjectEmpty = isEmpty(emptyObject);
console.log(isObjectEmpty); // true

// 定义一个非空对象
const nonEmptyObject = { name: 'John', age: 30 };

// 再次检查对象是否为空
const isNonEmptyObjectEmpty = isEmpty(nonEmptyObject);
console.log(isNonEmptyObjectEmpty); // false
```
