# addClass

函数用于向元素的类名中添加指定的类名。

## 引入方式

### CJS

```javascript
const { addClass } = require("tool-assistant");
```

### ESM

```javascript
import { addClass } from "tool-assistant;
```

## 示例

```html
<div id="myElement">Hello, World!</div>
```

```css
.myClass {
  color: blue;
  font-size: 20px;
}
```

```javascript
import { addClass } from "tool-assistant";

var element = document.getElementById("myElement");
var className = "myClass";

addClass(element, className);
```
