# offset

获取一个元素的距离文档(document)的位置，类似 jQ 中的 offset()

## 引入方式

<!-- ### CJS

```javascript
const { offset } = require("tool-assistant");
``` -->

### ESM

```javascript
import { offset } from "tool-assistant;
```

## 示例

```javascript
// 引入 offset 函数
import { offset } from "tool-assistant";

// 示例 1：获取元素相对于文档的偏移位置
const element = document.getElementById("my-element");
const position = offset(element);
console.log("Left:", position.left, "Top:", position.top);
// 输出示例：Left: 100 Top: 200

// 示例 2：获取相对于特定父元素的偏移位置
const parentElement = document.getElementById("parent-element");
const childElement = document.getElementById("child-element");
const parentPosition = offset(parentElement);
const childPosition = offset(childElement);
const relativePosition = {
  left: childPosition.left - parentPosition.left,
  top: childPosition.top - parentPosition.top,
};
console.log("Relative Position:", relativePosition);
// 输出示例：Relative Position: {left: 50, top: 70}

// 示例 3：计算鼠标点击位置相对于元素的偏移位置
document.addEventListener("click", function (event) {
  const element = document.getElementById("my-element");
  const elementPosition = offset(element);
  const clickPosition = {
    left: event.pageX - elementPosition.left,
    top: event.pageY - elementPosition.top,
  };
  console.log("Click Position:", clickPosition);
});
```
