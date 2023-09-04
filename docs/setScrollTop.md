# setScrollTop

将窗口的滚动位置设置为指定值并返回该值。

## 引入方式

<!-- ### CJS

```javascript
const { setScrollTop, getScrollTop, offset } = require("tool-assistant");
``` -->

### ESM

```javascript
import { setScrollTop, getScrollTop, offset } from "tool-assistant;
```

## 示例

```javascript
// 引入 setScrollTop, getScrollTop, offset 函数
import { setScrollTop, getScrollTop, offset } from "tool-assistant";

// 示例 1：将页面滚动到特定的垂直位置
setScrollTop(500);

// 示例 2：监听页面滚动事件并打印滚动位置
document.addEventListener("scroll", function () {
  const scrollTop = getScrollTop();
  console.log("Scroll Top:", scrollTop);
});

// 示例 3：点击按钮将页面滚动到底部
const scrollToBottomButton = document.getElementById("scroll-to-bottom-button");
scrollToBottomButton.addEventListener("click", function () {
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
  setScrollTop(documentHeight);
});

// 示例 4：将页面滚动到指定元素的位置
const element = document.getElementById("my-element");
const elementPosition = offset(element); // 使用之前提到的 offset 方法获取元素位置
setScrollTop(elementPosition.top);
```
