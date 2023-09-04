# removeClass

函数用于从元素的类名中移除指定的类名

## 引入方式

<!-- ### CJS

```javascript
const { removeClass } = require("tool-assistant");
``` -->

### ESM

```javascript
import { removeClass } from "tool-assistant;
```

## 示例

```javascript
import { removeClass } from "tool-assistant";

var element = document.getElementById("myElement");
var className = "myClass";

removeClass(element, className);
```
