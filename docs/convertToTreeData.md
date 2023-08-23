# convertToTreeData

将平级数据转换成树级数据

## 示例

```javascript
// 引入 convertToTreeData 函数
import {convertToTreeData} from 'tool-assistant'; 

// 定义示例数据
const data = [
  { id: 1, name: 'A', parentId: null },
  { id: 2, name: 'B', parentId: 1 },
  { id: 3, name: 'C', parentId: 1 },
  { id: 4, name: 'D', parentId: 2}
  ];

// 调用 convertToTreeData 函数
const treeData = convertToTreeData(data, 'id', 'parentId', 'children');

// 打印树形结构
console.log(treeData);



```
