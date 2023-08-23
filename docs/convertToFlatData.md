# convertToFlatData

将树级数据转换成平级数据

## 示例

```javascript
// 引入 convertToFlatData 函数
import {convertToFlatData} from 'tool-assistant'; 

// 定义示例树形结构数据
const treeData = [
  {
    id: 1,
    name: 'A',
    parentId: null,
    children: [
      {
        id: 2,
        name: 'B',
        parentId: 1,
        children: [
          {
            id: 4,
            name: 'D',
            parentId: 2,
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: 'C',
        parentId: 1,
        children: [],
      },
    ],
  },
];

// 调用 convertToFlatData 函数
const flatData = convertToFlatData(treeData, 'children', 'parentId');

// 打印平铺结构数据
console.log(flatData);

```
