# hasClass

判断一个元素是否有Class

## 引入方式

<!-- ### CJS

```javascript
const { hasClass } = require("tool-assistant");
``` -->

### ESM

```javascript
import { hasClass } from "tool-assistant;
```

## 示例

```javascript
import { hasClass } from "tool-assistant";

var element = document.getElementById("myElement");
var hasClass = hasClass(element, "myClass");

console.log(hasClass); // 输出 true 或 false
```
