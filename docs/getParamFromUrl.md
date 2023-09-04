# getParamFromUrl

从 HTTP URL 中截取指定参数的方法

## 引入方式

<!-- ### CJS

```javascript
const { getParamFromUrl } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getParamFromUrl } from "tool-assistant;
```

## 示例

```javascript
import { getParamFromUrl } from "tool-assistant";

const url1 = new URL(
  "http://example.com?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
);
const url2 = new URL("http://example.com?jwt=abcdefg");
const url3 = new URL("http://example.com?q=hello");

console.log(getParamFromUrl(url1, "token")); // 输出: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
console.log(getParamFromUrl(url2, "jwt")); // 输出: abcdefg
console.log(getParamFromUrl(url3, "token")); // 输出: null
```
