# uppercaseToDigit

大写金额转换为数字

## 示例

```javascript
// 引入 uppercaseToDigit 函数
import { uppercaseToDigit } from "tool-assistant";

var uppercase = "壹仟贰佰叁拾肆元伍角陆分";

var result = uppercaseToDigit(uppercase);
console.log(result);
// 输出：1234.56

var uppercase = "欠柒仟捌佰玖拾元壹角贰分";

var result = uppercaseToDigit(uppercase);
console.log(result);
// 输出：-7890.12

var uppercase = "玖角玖分";

var result = uppercaseToDigit(uppercase);
console.log(result);
// 输出：0.99
```
