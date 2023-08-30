# isFunction

提供一个方便的方式来判断一个值是否为函数类型

## 示例

```javascript
// 引入 isFunction 函数
import { isFunction } from "tool-assistant";

// 定义一个函数
function myFunction() {
  console.log("Hello, world!");
}

// 使用 isFunction 函数判断值是否为函数类型
const result = isFunction(myFunction);

// 打印结果
console.log(result); // 输出 true
```
