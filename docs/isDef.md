# isDef

该函数检查值是否已定义。

## 引入方式

<!-- ### CJS

```javascript
const { isDef } = require("tool-assistant");
``` -->

### ESM

```javascript
import { isDef } from "tool-assistant;
```

## 示例

```javascript
// 引入 isDef 函数
import { isDef } from "tool-assistant";

// 定义一个变量
let name;

// 检查变量是否已定义
const isNameDefined = isDef(name);
console.log(isNameDefined); // false

// 给变量赋值
name = "John";

// 再次检查变量是否已定义
const isNameDefinedNow = isDef(name);
console.log(isNameDefinedNow); // true
```
