# formatNumber

格式化数字=> 10000 => 10,000
decimalPlaces：要保留的小数位数，默认为 2。
decimalSeparator：小数点分隔符，默认为 '.'。
thousandSeparator：千位分隔符，默认为 ','。

## 示例

```javascript
// 引入 formatNumber 函数
import { formatNumber } from "tool-assistant";

console.log(formatNumber(1234567.891)); // 输出：1,234,567.89
console.log(formatNumber(9876543.21, 0)); // 输出：9,876,543
console.log(formatNumber(1234.567, 2, ",", ".")); // 输出：1.234,57
```
