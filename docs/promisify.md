# promisify

将回调风格的异步方法转换为 Promise 链式调用：许多库和模块使用回调函数作为异步方法的方式。通过使用 promisify 方法，你可以将这些方法包装成返回 Promise 的形式，从而更方便地使用 Promise 的链式调用和处理异步操作的结果。

将回调风格的异步方法转换为 Promise 链式调用：许多库和模块使用回调函数作为异步方法的方式。通过使用 promisify 方法，你可以将这些方法包装成返回 Promise 的形式，从而更方便地使用 Promise 的链式调用和处理异步操作的结果。

## 引入方式

### CJS

```javascript
const { promisify } = require("tool-assistant");
```

### ESM

```javascript
import { promisify } from "tool-assistant;
```

## 示例

```javascript
// 引入 promisify 函数
import { promisify } from "tool-assistant";

function delay(ms, callback) {
  setTimeout(callback, ms);
}

const delayPromise = promisify(delay);

delayPromise(2000)
  .then(() => {
    console.log("延迟2秒后执行的操作");
  })
  .catch((error) => {
    console.error("延迟操作出错: ", error);
  });
```
