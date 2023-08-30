# formatMoney

用于将给定的数字转换为大写金额表示,amount为金额数量,第二个参数为国家货币代号。

## 示例

```javascript
// 引入 formatMoney 函数
import { formatMoney } from 'tool-assistant'; 

var amount = 1234567.89;
var result = formatMoney(amount,'CNY');
console.log(result);
// 输出：￥1,234,568

var amount = 1234567.89;
var result = formatMoney(amount,'EUR');
console.log(result);
// 输出：€1,234,568

var amount = 1234567.89;
var result = formatMoney(amount,'USD');
console.log(result);
// 输出：$1,234,568
```
