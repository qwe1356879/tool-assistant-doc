# isRGBAColor

这只是一个简单的判断，仅用于确定字符串是否符合 RGBA 颜色的格式，不能验证颜色值的有效性。

## 示例

```javascript
// 引入 isRGBAColor 函数
import { isRGBAColor } from "tool-assistant";

// 示例使用
console.log(isRGBAColor("rgba(255, 0, 0, 0.5)")); // true
console.log(isRGBAColor("rgba(0, 128, 255, 1)")); // true
console.log(isRGBAColor("rgb(255, 0, 0)")); // false
console.log(isRGBAColor("#ff0000")); // false
console.log(isRGBAColor("invalid")); // false
```
