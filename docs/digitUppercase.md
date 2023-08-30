# digitUppercase

用于将给定的数字转换为大写金额表示。

## 示例

```javascript
// 引入 digitUppercase 函数
import { digitUppercase } from "tool-assistant";

var amount = 1234.56;

var result = digitUppercase(amount);
console.log(result);
// 输出：壹仟贰佰叁拾肆元伍角陆分

var amount = -7890.12;

var result = digitUppercase(amount);
console.log(result);
// 输出：欠柒仟捌佰玖拾元壹角贰分

var amount = 0.99;

var result = digitUppercase(amount);
console.log(result);
// 输出：玖角玖分
```
