# throttle

节流函数（Throttle）：节流函数会限制执行处理函数的频率，在指定的时间间隔内，无论触发多少次事件，都只会执行一次处理函数。

## 引入方式

<!-- ### CJS

```javascript
const { throttle } = require("tool-assistant");
``` -->

### ESM

```javascript
import { throttle } from "tool-assistant;
```

## 示例

```javascript
// 引入 throttle 函数
import { throttle } from "tool-assistant";

// 示例使用
function handleScroll() {
  console.log("Scroll event triggered!");
}

const throttledHandleScroll = throttle(handleScroll, 500);

// 模拟连续触发滚动事件
throttledHandleScroll(); // 第一次触发，立即执行
throttledHandleScroll(); // 在500ms内触发，不会执行
throttledHandleScroll(); // 在500ms内触发，不会执行

// 过了500毫秒后，触发一次处理函数
```

## 防抖函数跟节流函数区别

防抖函数和节流函数都是在处理频繁触发的事件时使用的函数优化技巧，它们的区别在于执行处理函数的时机。

防抖函数（Debounce）：防抖函数会等待一定的时间间隔，如果在这个时间间隔内继续触发事件，那么定时器就会被重置。只有在最后一个事件触发后的等待时间过去后，才会执行一次处理函数。

节流函数（Throttle）：节流函数会限制执行处理函数的频率，在指定的时间间隔内，无论触发多少次事件，都只会执行一次处理函数。

简而言之，防抖函数通过等待最后一次触发事件后的一段时间再执行处理函数，从而确保只有间隔时间内没有新的触发才会执行一次。而节流函数则是在固定的时间间隔内执行一次处理函数，不管触发了多少次事件。

适用场景：

防抖函数适用于在连续触发的事件中，只需对最后一次事件做出反应的场景。例如输入框的输入验证或搜索联想功能。
节流函数适用于在频繁触发的事件中，需要在固定时间间隔内做出反应的场景。例如滚动事件或窗口调整事件。
选择使用哪种函数取决于你对事件的响应需求。如果需要立即反馈，但避免过多的处理函数调用，可以选择防抖函数。如果需求是在一段时间内均匀地分发处理函数，可以选择节流函数。
