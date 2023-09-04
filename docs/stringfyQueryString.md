# stringfyQueryString

对象序列化

## 引入方式

<!-- ### CJS

```javascript
const { stringfyQueryString } = require("tool-assistant");
``` -->

### ESM

```javascript
import { stringfyQueryString } from "tool-assistant;
```

## 示例

```javascript
// 引入 stringfyQueryString 函数
import { stringfyQueryString } from "tool-assistant";

const obj = { name: "John", age: 25 };
const queryString = stringfyQueryString(obj);
console.log(queryString);
// 输出：name=John&age=25

const obj = { fruits: ["apple", "banana", "orange"] };
const queryString = stringfyQueryString(obj);
console.log(queryString);
// 输出：fruits[0]=apple&fruits[1]=banana&fruits[2]=orange

const obj = { name: "John Doe", location: "New York" };
const queryString = stringfyQueryString(obj);
console.log(queryString);
// 输出：name=John%20Doe&location=New%20York
```
