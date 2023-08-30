# debounce

防抖函数（Debounce）：防抖函数会等待一定的时间间隔，如果在这个时间间隔内继续触发事件，那么定时器就会被重置。只有在最后一个事件触发后的等待时间过去后，才会执行一次处理函数。

## 示例

```javascript
// 引入 debounce 函数
import { debounce } from "tool-assistant";

// 示例使用
function handleInput() {
  console.log("input change");
}

const debouncedHandleInput = debounce(handleInput, 300);

// 模拟连续触发输入事件
debouncedHandleInput(); // 不会立即执行
debouncedHandleInput(); // 会重新计时延迟
debouncedHandleInput(); // 会重新计时延迟

// 过了300毫秒后，只触发一次处理函数
```
