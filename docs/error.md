# error

用于输出错误信息

## 引入方式

<!-- ### CJS

```javascript
const { error } = require("tool-assistant");
``` -->

### ESM

```javascript
import { error } from "tool-assistant;
```

## 示例

```javascript
// 引入 error 函数
import { error } from "tool-assistant";

// 要输出错误的项目名称
const projectName = "MyProject";

// 错误消息
const message = "Something went wrong!";

// 输出错误
error(projectName, message);
```
