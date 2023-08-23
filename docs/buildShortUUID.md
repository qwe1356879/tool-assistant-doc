# buildShortUUID

通过组合前缀、随机数、唯一计数器和当前时间戳来生成唯一的短 UUID

## 示例

```javascript
// 引入 buildShortUUID 函数
import { buildShortUUID } from 'tool-assistant'; 

// 生成唯一的短 UUID
const shortUUID = buildShortUUID('PREFIX');

// 打印生成的短 UUID
console.log(shortUUID);

```
