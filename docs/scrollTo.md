# scrollTo

函数在指定的持续时间内将页面平滑地滚动到指定的位置。

## 示例

```javascript
// 引入 scrollTo 函数
import { setScrollTop, getScrollTop, offset, scrollTo } from "tool-assistant";

// 示例 1：将页面平滑地滚动到指定位置
scrollTo(500, 1000); // 将页面滚动到位置 500，动画时间为 1000 毫秒

// 示例 2：点击按钮平滑地滚动到元素位置
const scrollToElementButton = document.getElementById(
  "scroll-to-element-button"
);
scrollToElementButton.addEventListener("click", function () {
  const element = document.getElementById("my-element");
  const elementPosition = offset(element); // 使用之前提到的 offset 方法获取元素位置
  scrollTo(elementPosition.top, 800); // 平滑滚动到元素位置，动画时间为 800 毫秒
});

// 示例 3：滚动到顶部
scrollTo(0, 500); // 平滑地滚动到顶部，动画时间为 500 毫秒

// 示例 4：滚动到底部
const scrollToBottomButton = document.getElementById("scroll-to-bottom-button");
scrollToBottomButton.addEventListener("click", function () {
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
  scrollTo(documentHeight, 1000); // 平滑地滚动到底部，动画时间为 1000 毫秒
});
```
