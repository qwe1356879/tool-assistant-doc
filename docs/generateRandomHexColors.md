# generateRandomColors

根据指定的数字生成随机的十六进制颜色代码数组

## 引入方式

<!-- ### CJS

```javascript
const { generateRandomColors } = require("tool-assistant");
``` -->

### ESM

```javascript
import { generateRandomColors } from "tool-assistant;
```

## 示例

```javascript
// 引入 generateRandomColors 函数
import { generateRandomColors } from "tool-assistant";

// 示例使用
const numColorsToGenerate = 5;
const randomColors = generateRandomColors(numColorsToGenerate);
console.log(randomColors);
// 输出示例：["#18e9a1", "#b27312", "#3c09d1", "#a50a63", "#763291"]
```
