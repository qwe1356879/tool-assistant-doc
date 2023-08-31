# randomHexColor

生成随机 16 进制颜色

## 引入方式

### CJS

```javascript
const { randomHexColor } = require("tool-assistant");
```

### ESM

```javascript
import { randomHexColor } from "tool-assistant;
```

## 示例

```javascript
import { randomHexColor } from "tool-assistant";

// 示例 1：生成随机颜色
const color = randomHexColor();
console.log(color);
// 输出示例：#3a5c8e

// 示例 2：生成一组随机颜色
const colorArray = [];
for (let i = 0; i < 5; i++) {
  const color = randomHexColor();
  colorArray.push(color);
}
console.log(colorArray);
// 输出示例：["#1253e7", "#b09a3d", "#763fe9", "#b71133", "#217d25"]

// 示例 3：将随机颜色应用于元素背景颜色
const element = document.querySelector(".my-element");
element.style.backgroundColor = randomHexColor();
```
