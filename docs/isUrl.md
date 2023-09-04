# isArray

提供一个方便的方式来判断一个路径是否符合 URL 的格式要求。在开发中，我们常常需要对用户输入的路径进行验证，判断其是否为 URL 格式。使用 isUrl 函数，我们可以轻松地检查一个路径是否为 URL 格式，从而进行相应的处理和校验。

## 引入方式

<!-- ### CJS

```javascript
const { isUrl } = require("tool-assistant");
``` -->

### ESM

```javascript
import { isUrl } from "tool-assistant;
```

## 示例

```javascript
// 引入 isUrl 函数
import { isUrl } from "tool-assistant";

// 定义一个路径
const path = "https://www.example.com";

// 使用 isUrl 函数判断路径是否为URL格式
const result = isUrl(path);

// 打印结果
console.log(result); // 输出 true
```
