# hexToRGBA

将 16 进制颜色转换成 RGBA 颜色

## 引入方式

<!-- ### CJS

```javascript
const { hexToRGBA } = require("tool-assistant");
``` -->

### ESM

```javascript
import { hexToRGBA } from "tool-assistant;
```

## 示例

```javascript
import { hexToRGBA } from "tool-assistant";

const hexColor = "#ff8800";
const rgbaColor = hexToRGBA(hexColor, 0.5);
console.log(rgbaColor); // 输出：rgba(255, 136, 0, 0.5)
```
