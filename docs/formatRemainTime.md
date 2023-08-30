# formatRemainTime

计算当前日期与给定结束时间之间的时间差，并以“d天 h 小时 m 分钟 s 秒”的格式返回。

## 示例

```javascript
// 引入 formatRemainTime 函数
import { formatRemainTime } from 'tool-assistant'; 

// 示例 1：计算目标日期距离当前时间还有多长时间
const endTime = '2023-09-01T12:00:00';
const remainTime = formatRemainTime(endTime);
console.log(remainTime);
// 输出：2天 2小时 55分钟 52秒


```
