# isEmail

检查给定字符串是否是有效的电子邮件地址。

## 引入方式

<!-- ### CJS

```javascript
const { isEmail } = require("tool-assistant");
``` -->

### ESM

```javascript
import { isEmail } from "tool-assistant;
```

## 示例

```javascript
import { isEmail } from "tool-assistant";

var idCardNumber = "xxxxx";
var isValid = isEmail(idCardNumber);

console.log(isValid); // 输出 false
```
