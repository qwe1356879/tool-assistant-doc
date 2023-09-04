# isUnDef

检查一个值是否未定义

## 引入方式

<!-- ### CJS

```javascript
const { isUnDef } = require("tool-assistant");
``` -->

### ESM

```javascript
import { isUnDef } from "tool-assistant;
```

## 示例

```javascript
// 引入 isUnDef 函数
import { isUnDef } from "tool-assistant";

// 定义一个变量
let name;

// 检查变量是否未定义
const isNameUndefined = isUnDef(name);
console.log(isNameUndefined); // true

// 给变量赋值
name = "John";

// 再次检查变量是否未定义
const isNameUndefinedNow = isUnDef(name);
console.log(isNameUndefinedNow); // false
```
