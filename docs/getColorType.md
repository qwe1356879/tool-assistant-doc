# getColorType

根据不同的颜色格式，getColorType 方法会返回相应的颜色类型。请注意，这个方法仅对颜色的类型进行简单判断，不能验证颜色值的有效性。如果需要更为严格的验证，可以在各个类型的判断中进一步检查颜色值的取值范围和格式。

## 示例

```javascript
// 引入 getColorType 函数
import { getColorType } from "tool-assistant";

// 示例使用
console.log(getColorType("#ffffff")); // 十六进制颜色
console.log(getColorType("rgb(255, 0, 0)")); // RGB 颜色
console.log(getColorType("rgba(0, 128, 255, 0.5)")); // RGBA 颜色
console.log(getColorType("hsl(120, 50%, 50%)")); // HSL 颜色
console.log(getColorType("hsla(240, 100%, 50%, 0.8)")); // HSLA 颜色
console.log(getColorType("red")); // 颜色名称
console.log(getColorType("invalid")); // 未知类型颜色
console.log(getColorType(42)); // 不是有效的颜色
```
