# isIdCard

函数 isIdCard 检查给定的字符串是否是有效的中国身份证号码。

## 示例

```javascript
import { isIdCard } from "tool-assistant";

var idCardNumber = 'ID Card';
var isValid = isIdCard(idCardNumber);

console.log(isValid); // 输出 false

```