# findNode

树级数据根据指定字段查询节点

## 引入方式

<!-- ### CJS

```javascript
const { findNode } = require("tool-assistant");
``` -->

### ESM

```javascript
import { findNode } from "tool-assistant;
```

## 示例

```javascript
// 引入 findNode 函数
import { findNode } from "tool-assistant";

// 定义示例树形结构数据
const treeData = [
  {
    id: 1,
    name: "A",
    children: [
      {
        id: 2,
        label: "B",
        children: [
          {
            id: 4,
            label: "D",
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: "C",
        children: [],
      },
    ],
  },
];

// 查找 label 为 'D' 的节点
const targetNode = findNode(treeData, "label", "D", "children");

// 打印匹配的节点
console.log(targetNode);
```
