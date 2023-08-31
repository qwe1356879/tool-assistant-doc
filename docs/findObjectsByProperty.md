# findObjectsByProperty

数组对象根据 Key 和 Value 查找指定元素，并返回元素集合和下标

## 引入方式

### CJS

```javascript
const { findObjectsByProperty } = require("tool-assistant");
```

### ESM

```javascript
import { findObjectsByProperty } from "tool-assistant;
```

## 示例

```javascript
// 引入 findObjectsByProperty 函数
import { findObjectsByProperty } from "tool-assistant";
const products = [
  {
    id: 1,
    name: "iPhone",
    details: {
      description: "A smartphone developed by Apple",
      price: 999,
      color: "Space Gray",
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    details: {
      description: "A smartphone developed by Samsung",
      price: 899,
      color: "Black",
    },
  },
  {
    id: 3,
    name: "iPhone",
    details: {
      description: "Another iPhone",
      price: 799,
      color: "Silver",
    },
  },
];

const matchingProducts = findObjectsByProperty(products, "name", "iPhone");
console.log(matchingProducts);
```
