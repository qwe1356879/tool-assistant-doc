# removeFromArrayByKey

用于集合删除指定元素来完成批量删除操作

## 示例

```javascript
// 引入 removeFromArrayByKey 函数
import {removeFromArrayByKey} from 'tool-assistant'; 

const originalArray = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Amy' },
  { id: 3, name: 'Peter' },
  { id: 4, name: 'Lisa' }
];

const elementsToRemove = [2, 4];
const filteredArray = removeFromArrayByKey(originalArray, elementsToRemove, 'id');
console.log(filteredArray);


```
