# getScrollTop

获取文档的垂直滚动位置

## 引入方式

<!-- ### CJS

```javascript
const { getScrollTop } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getScrollTop } from "tool-assistant;
```

## 示例

```javascript
// 引入 getScrollTop 函数
import { getScrollTop } from "tool-assistant";

// 示例 1：获取文档的垂直滚动位置
const scrollTop = getScrollTop();
console.log("Scroll Top:", scrollTop);
// 输出示例：Scroll Top: 150

// 示例 2：监听页面滚动事件并获取滚动位置
document.addEventListener("scroll", function () {
  const scrollTop = getScrollTop();
  console.log("Scroll Top:", scrollTop);
});

// 示例 3：将页面滚动到指定位置
function scrollToPosition(position) {
  document.documentElement.scrollTop = position;
  document.body.scrollTop = position;
}

// 将页面滚动到顶部
scrollToPosition(0);

// 将页面滚动到元素的位置
const element = document.getElementById("my-element");
const elementPosition = offset(element); // 使用之前提到的 offset 方法获取元素位置
scrollToPosition(elementPosition.top);
```
