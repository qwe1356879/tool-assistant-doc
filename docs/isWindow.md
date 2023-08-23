# isWindow

提供一个方便的方式来判断一个值是否为 Window 对象

## 示例

```javascript
// 引入 isWindow 函数
import { isWindow } from './your-path-to-file';

// 在浏览器环境下，window 对象存在
const value = window;

// 使用 isWindow 函数判断值是否为 Window 对象
const result = isWindow(value);

// 打印结果
console.log(result); // 输出 true
```
