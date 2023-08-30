# isRGBColor

这个方法只是简单地判断字符串是否符合 RGB 颜色的格式，不能验证颜色值的有效性

## 示例

```javascript
// 引入 isRGBColor 函数
import { isRGBColor } from "tool-assistant";

// 示例使用
console.log(isRGBColor("rgb(255, 0, 0)")); // true
console.log(isRGBColor("rgb(0, 128, 255)")); // true
console.log(isRGBColor("rgba(255, 0, 0, 0.5)")); // false
console.log(isRGBColor("#ff0000")); // false
console.log(isRGBColor("invalid")); // false
```
