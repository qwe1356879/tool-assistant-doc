# rgbaToHex

将 RGBA 颜色转换成 16 进制颜色

## 引入方式

<!-- ### CJS

```javascript
const { rgbaToHex } = require("tool-assistant");
``` -->

### ESM

```javascript
import { rgbaToHex } from "tool-assistant;
```

## 示例

```javascript
import { rgbaToHex } from "tool-assistant";

const rgbaColor = "rgba(255, 136, 0, 0.5)";
const hexColor = rgbaToHex(255, 136, 0, 0.5);
console.log(hexColor); // 输出：#ff88007f
```
