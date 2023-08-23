# parseCustomFormat

根据给定的自定义日期格式解析日期字符串并返回对应的日期对象

## 示例

```javascript
// 引入 parseCustomFormat 函数
import { parseCustomFormat } from 'tool-assistant'; 

// 要解析的日期字符串
const dateString = '2023-08-22 10:30:00';
// 日期字符串的格式
const format = 'YYYY-MM-DD HH:mm:ss';

// 解析日期并返回日期对象
const parsedDate = parseCustomFormat(dateString, format);

// 打印解析后的日期对象
console.log(parsedDate);


```
