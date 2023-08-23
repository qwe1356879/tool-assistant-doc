# findObjectsByProperty

数组对象根据Key和Value查找指定元素，并返回元素集合和下标

## 示例

```javascript
// 引入 formatToDate 函数
import { findObjectsByProperty } from 'tool-assistant'; 
const products = [
  {
    id: 1,
    name: 'iPhone',
    details: {
      description: 'A smartphone developed by Apple',
      price: 999,
      color: 'Space Gray',
    }
  },
  {
    id: 2,
    name: 'Samsung Galaxy',
    details: {
      description: 'A smartphone developed by Samsung',
      price: 899,
      color: 'Black',
    }
  },
  {
    id: 3,
    name: 'iPhone',
    details: {
      description: 'Another iPhone',
      price: 799,
      color: 'Silver',
    }
  },
];

const matchingProducts = findObjectsByProperty(products, 'name', 'iPhone');
console.log(matchingProducts);
```